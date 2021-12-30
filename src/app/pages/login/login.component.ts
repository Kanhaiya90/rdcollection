import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData={
    username : '',
    password : ''
  };

  constructor(private _snack:MatSnackBar,private _login:LoginService) { }  

  ngOnInit(): void {
  
  }

   onSubmit() {
    console.log("On submit Work");
    if(this.loginData.username.trim() =='' || this.loginData.username==null){
      this._snack.open('Username is required','',{
        duration : 3000
      });
      return;
    } 

    if(this.loginData.password.trim() =='' || this.loginData.password==null){
      this._snack.open('Password is required','',{
        duration : 3000
      });
      return;
    }

    this._login.userLogin(this.loginData).subscribe(
      (data:any)=>{
        //Swal.fire("Success","Login Successfully","success");
        console.log(data);
       
        if(data.success){
          localStorage.setItem('token',data.token);
        window.location.href="/admin";
        
        this._snack.open('Login Success','',{
          duration : 3000
        });
       
        }else{
          Swal.fire("Error","Please Enter valid Username Or Password","error");

        }
      },
      (error)=>{
        Swal.fire("Error","Please Enter valid Username Or Password","error");
        
      }
    );

    

  }

}
