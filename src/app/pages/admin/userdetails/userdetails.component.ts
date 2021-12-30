import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';
import { DepositeDialogComponent } from '../deposite-dialog/deposite-dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})


export class UserdetailsComponent implements OnInit {

  cid:any;
  totalAmount=0;

  clientData={
    "id": "61bed1a4d76ce0dd5aebb29a",
    "clientname": "kk suthar",
    "mobileno": 8314324563,
    "address": "neemuch",
    "accnumber": "SBI767868768"  ,
    "installmentamt":0,
    "dueamt": 0,
    "advamt":0 
  };

  constructor(private _route:ActivatedRoute,private client:ClientService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.cid=this._route.snapshot.params.cid;
    this.client.getAllClientById(this.cid).subscribe(
      (data:any)=>{
        console.log(data[0]);
        this.clientData=data[0];
      },
      (error)=>{
        Swal.fire("error","Error in getting clients data",'error')
      }
    );

    this.getTotalAmtByid(this.cid);
  }

  openDialog(clientId:any): void {
    const dialogRef = this.dialog.open(DepositeDialogComponent,{
      width: '640px',disableClose: true ,
      data: { cid: clientId}
    });
  }

 getTotalAmtByid(cid:any){
  this.client.getTotalAmtById(cid).subscribe(
    (data:any)=>{
      for(var i=0;i<data.length;i++){
        this.totalAmount+=data[i].depositamt;   
      }
       
      console.log(this.totalAmount); 
    },
    (error)=>{
      Swal.fire("Error","error in getting totala amt data","error");
    }
  );
 }
 printPage(){
  window.print();
}



}
