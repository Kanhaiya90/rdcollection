import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  
  //get client

  public getAllClients(){
    return this.http.get(`${baseUrl}/api/clients/`);
 }

  //get client by Id

  public getAllClientById(clientId:any){
    return this.http.get(`${baseUrl}/api/clients/`+clientId);
 }

 //add client

 public addClient(clientData:any){
  return this.http.post(`${baseUrl}/api/clients/`,clientData);
}

//update Client

public updateClientDataById(clientData:any){
  return this.http.post(`${baseUrl}/api/clients/`,clientData);
}

//Delete Client 

public deleteClient(clientId:any){
  console.log("at service "+clientId);
  return this.http.delete(`${baseUrl}/api/clients/`+clientId);
}

//add account detail

public addAccountDetail(accountData:any){
  return this.http.post(`${baseUrl}/api/clients/account_details/`,accountData);
}

//get total amt

public getTotalAmtById(clientId:any){
  return this.http.get(`${baseUrl}/api/clients/getTotalAmtById/`+clientId);
}

//get amt history

public dataForHistory(){
  return this.http.get(`${baseUrl}/api/clients/dataForHistory`);
}

//getDailyCollection

public getDailyCollection(){
  return this.http.get(`${baseUrl}/api/clients/getDailyCollection`);
}

//getAccountDetailsByClientID

public updateClient(clientData:any){
  return this.http.post(`${baseUrl}/api/clients/updateClient`,clientData);
}

//getAccountDetailsByClientID

public getDueAmtList(){
  return this.http.get(`${baseUrl}/api/clients/dueAmountList`);
}


//get total amt

public getTotalTempAmtByid(clientId:any){
  return this.http.get(`${baseUrl}/api/clients/getTotalTempAmtByid/`+clientId);
}



}
