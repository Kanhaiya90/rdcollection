import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  clientData:any;
  amount=0;
  totalClient=0;
  damt=0;
  totalDueAmount=0;

  constructor(private client:ClientService) { }

  ngOnInit(): void {
    
    this.getDailyCollection();
    this.getTotalClinet();
    this.getTotalDueAmt();
  }

  getDailyCollection(){
    this.client.getDailyCollection().subscribe(
      (data:any)=>{
       // this.dailyAmount=data;
        var i=0;
        for (let i = 0; i < data.length; i++) {
          
          this.damt+=data[i].depositamt;
          

        }        
      },
      (error)=>{
        Swal.fire("Error","error in getting daily collection data","error");
      }
    );
  }

  getTotalClinet(){
    this.client.getAllClients().subscribe(
      (data:any)=>{
        this.totalClient=data.length;
      },
      (error)=>{

      }
    );
  }

  getTotalDueAmt(){
    this.client.getDueAmtList().subscribe(
      (data:any)=>{
        for(var i=0;i<data.length;i++){
          this.totalDueAmount+=data[i].dueamt;   
        }         
        console.log(this.totalDueAmount); 
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
