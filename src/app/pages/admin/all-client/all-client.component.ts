import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-client',
  templateUrl: './all-client.component.html',
  styleUrls: ['./all-client.component.css']
})
export class AllClientComponent implements OnInit {

  clientData1:any;
  page = 0;
  size = 10;

  clientData=[{
    "id": "0",
    "clientname": "kk suthar",
    "mobileno": 8314324563,
    "address": "neemuch",
    "accnumber": "SBI767868768"    
  }];
  search:any;
  filterTerm:any;

  constructor(private client:ClientService,private router:Router) { }

  ngOnInit(): void {
    
    this.client.getAllClients().subscribe(
      (data:any)=>{
        console.log(data);
        this.clientData=data;
        this.getData({pageIndex: this.page, pageSize: this.size});
      },
      (error)=>{
        Swal.fire("error","Error in getting clients list",'error');
      }
    );

    

  }

deleteClient(clientId:any){

  Swal.fire({
    icon:'warning',
    title:'Are you sure ?',
    confirmButtonText:'Delete',
    showCancelButton:true,
  }).then((result)=>{
    if(result.isConfirmed){
    this.client.deleteClient(clientId).subscribe(
    (data)=>{
      Swal.fire("Success","Question delete successfully","success");
      this.ngOnInit();
    },
    (error)=>{
      Swal.fire("Error","Error in delete","error");

    }
  );
}
});
}

openUserDetail(cid:any){
  console.log("user detail click" + cid)
  this.router.navigate(['admin/user-details/'+cid]);
}



getData(obj:any) {
  let index=0,
      startingIndex=obj.pageIndex * obj.pageSize,
      endingIndex=startingIndex + obj.pageSize;
      console.log("this.clientData "+this.clientData);
      this.clientData1 = this.clientData.filter(() => {
    index++;
    return (index > startingIndex && index <= endingIndex) ? true : false;
  });
  console.log("this.clientData1 "+this.clientData1);
}

}
