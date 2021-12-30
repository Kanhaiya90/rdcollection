import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-duelist',
  templateUrl: './duelist.component.html',
  styleUrls: ['./duelist.component.css']
})
export class DuelistComponent implements OnInit {

  filterTerm:any;

  dueAmtClientData=[{
    "clientname":"Nandkishor",
    "depositamt":1000,
    "depositdate":"2021-12-22T05:09:22.000Z",
    "client_id":15,
    "address":"Neemuch"
  }];

  constructor(private client:ClientService,private router:Router) { }

  ngOnInit(): void {
    
    this.client.getDueAmtList().subscribe(
      (data:any)=>{
        this.dueAmtClientData=data;
        console.log(this.dueAmtClientData);
      },
      (error)=>{

      }
    );

  }
  
  openUserDetail(cid:any){
    console.log("user detail click" + cid)
    this.router.navigate(['admin/user-details/'+cid]);
  }

}
