import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

@Component({
  selector: 'app-deposite-dialog',
  templateUrl: './deposite-dialog.component.html',
  styleUrls: ['./deposite-dialog.component.css']
})
export class DepositeDialogComponent implements OnInit {

  installmentamt:any;
  tempEMIamt:any
  tempInstallmentamt:any;
  clientId:any;
  dueAmount:any;
  advAmount:any;
  accountDetailData={
    "depositamt":0,
    "advamt":0,
    "client_id":0,
    "dueamt":0,
    "tempTotalamt":0    

  }

  clientData={
    "clientId":0,
    "installmentamt":0,
    "dueamt":0,
    "advamt":0   
  }

  constructor(private router:Router,private client:ClientService,
    public dialogRef: MatDialogRef<UserdetailsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.clientId = data.cid;
   }

   

  ngOnInit(): void {
    console.log(" this.clientId :"+this.clientId);  
    this.getTotalTempAmtByid(this.clientId);  
  }

  updateAmount(){
    this.accountDetailData.client_id=this.clientId;
    console.log("update amount work"+this.accountDetailData.client_id);
    
    this.client.getAllClientById(this.clientId).subscribe(
      (data:any)=>{
        console.log("Data :" +data);
        this.installmentamt=data[0].installmentamt;
        this.dueAmount=data[0].dueamt;
        this.advAmount=data[0].advamt;
        //this.clientData.tempTotalamt=data[0].tempTotalamt;

        const d = new Date();
        const date=d.getDate()
        console.log("Date : "+date);

        if(date==1){
          this.accountDetailData.tempTotalamt=0;
        }

        
        
        if(this.dueAmount==0 && this.advAmount==0 && this.accountDetailData.tempTotalamt <this.installmentamt){
        if(this.installmentamt>this.accountDetailData.depositamt){
        this.accountDetailData.dueamt=this.installmentamt-this.accountDetailData.depositamt;
        this.accountDetailData.advamt=0;
        }else{
          this.accountDetailData.advamt=this.accountDetailData.depositamt-this.installmentamt;
          this.accountDetailData.dueamt=0;
        }
      }else{

        if(this.dueAmount >= this.accountDetailData.depositamt && this.accountDetailData.advamt==0){
          this.accountDetailData.dueamt=this.dueAmount-this.accountDetailData.depositamt;
          this.accountDetailData.advamt=0;
        }else if(this.dueAmount<this.installmentamt && this.advAmount==0){         
          this.tempInstallmentamt= this.installmentamt + this.dueAmount;
          this.dueAmount=this.tempInstallmentamt-this.accountDetailData.depositamt;
          if(this.dueAmount<0){
            this.accountDetailData.advamt= -(this.dueAmount);
            this.accountDetailData.dueamt=0;
          }
        }else if(this.advAmount > 0 && this.dueAmount==0){
          this.accountDetailData.advamt= (this.advAmount+this.accountDetailData.depositamt)-this.installmentamt;
          this.accountDetailData.dueamt=0;         
        } else{
          this.accountDetailData.depositamt +=this.advAmount;
          this.accountDetailData.advamt=this.accountDetailData.depositamt-this.installmentamt;
          this.accountDetailData.dueamt=0;
        }
      }

      if(this.accountDetailData.tempTotalamt>=this.installmentamt){
        this.accountDetailData.advamt=this.advAmount+this.accountDetailData.depositamt;
      }
      this.accountDetailData.tempTotalamt=this.accountDetailData.depositamt;

        this.clientData.advamt=this.accountDetailData.advamt;
        this.clientData.dueamt=this.accountDetailData.dueamt;
        this.clientData.clientId=this.clientId
        this.clientData.installmentamt=this.installmentamt;

        

        
        this.updateClientDataById(this.clientData);

        console.log("this.accountDetailData.totalAmt :" +this.accountDetailData.advamt);

        this.client.addAccountDetail(this.accountDetailData).subscribe(
          (data:any)=>{
           // Swal.fire("Success","Amount deposite success",'success')  
           window.location.href="/admin/user-details/"+this.clientId;
          },
          (error)=>{
            Swal.fire("error","Error in getting clients data",'error')
          }
        );

      },
      (error)=>{
        Swal.fire("error","Error in getting total amount",'error')
      }
    );
    
   
  }

  updateClientDataById(clientData:any){
     console.log("Inside updateClientDataById "+clientData);
      this.client.updateClient(clientData).subscribe();
  }

  getTotalTempAmtByid(cid:any){
    this.client.getTotalTempAmtByid(cid).subscribe(
      (data:any)=>{
        var totalAmt=0;
        for(var i=0;i<data.length;i++){
          totalAmt+=data[i].tempTotalamt;   
        }         
        console.log("TemptotalAmt :"+totalAmt); 
        this.accountDetailData.tempTotalamt=totalAmt;
      },
      (error)=>{
        Swal.fire("Error","error in getting totala amt data","error");
      }
    );
   }

}
