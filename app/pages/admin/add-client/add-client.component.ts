import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {


  clientData={
    clientname:"",
    mobileno:"",
    address:"",
    accnumber:"",
    installmentamt:""
  };
 

  constructor(private client:ClientService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.client.addClient(this.clientData).subscribe(
      (data)=>{
        Swal.fire("Success","Client Added Successfully","success");
        this.clientData.accnumber="";
        this.clientData.mobileno="";
        this.clientData.address="";
        this.clientData.clientname="";
        this.clientData.installmentamt="";
        window.location.href="/admin/client-list/";
      },
      (error)=>{
        Swal.fire("Error","error in adding clinet","error");
      }
    );
  }
  
}
