import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private http:HttpClient) { }

  public userLogin(loginData:any){
     return this.http.post(`${baseUrl}/api/clients/login`,loginData);
  }

  public isLoggedIn(){
    let tokenStr=localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr ==null)
    {
      return false;
    }else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem('token');    
    return true; 
  }

}
