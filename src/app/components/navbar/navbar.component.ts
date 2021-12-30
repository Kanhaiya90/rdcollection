import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'rd-collection';
  loginTrue:any;

  constructor(private login:LoginService) { }

  ngOnInit(): void {    
    this.isLogin();
  }

  logoutApp(){
    console.log("Insside Logoout")
    if(this.login.logout()){
      window.location.href="/";
    }
  }
  
  isLogin(){
    console.log("Insside isLogin")
    if(this.login.isLoggedIn()){
      this.loginTrue=true;
    }
  }
}
