import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})
export class HistoryDetailComponent implements OnInit {

  page = 0;
  size = 10;
  filterTerm:any;
  depositHistoryData1:any;
  depositHistoryData=[{
    "clientname":"Nandkishor",
    "depositamt":1000,
    "depositdate":"2021-12-22T05:09:22.000Z",
    "client_id":15,
    "address":"Neemuch"
  }];

  constructor(private client:ClientService) { }

  ngOnInit(): void {
    this.client.dataForHistory().subscribe(
      (data:any)=>{
        console.log(data);
        this.depositHistoryData=data;
        this.getData({pageIndex: this.page, pageSize: this.size});
      },
      (error)=>{

      }
    );
    
  }

  getData(obj:any) {
    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;
        console.log("this.clientData "+this.depositHistoryData);
        this.depositHistoryData1 = this.depositHistoryData.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
    console.log("this.clientData1 "+this.depositHistoryData1);
  }

}
