import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggedinUser } from './../../../models/logginUser';
import { AuthService } from './../../../providers/auth-token/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  isSubmitted = false;
  error: string;

  constructor(private frmBuilder: FormBuilder, private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.frmLogin = this.frmBuilder.group({
      userName: ['', Validators.required ],
      password: ['', Validators.required ]
    })
  }

//when product finish

get frm() { return this.frmLogin.controls; }

// async login() {
//   this.isSubmitted = true;
//   this.error = null;
//   if (!this.frmLogin.valid) return;

//   await this.authService.setToken(this.frmLogin.value)    
//     .subscribe((data: LoggedinUser) => {
//         this.authService.manageSession(data);
//         this.authService.loginStatus.emit(true);
//         if (this.authService.redirectUrl) {
//           this.router.navigate([this.authService.redirectUrl]);
//         } else {
//           this.router.navigate(['/']);
//         }        
//       },   (error: AppResponse) => {
//            if(error.status === 400)
//                  this.error = "Either user name or password is incorrect!";
//             else
//                  this.error = error.message;
//      });
// }

// focused() { this.error = ''; }
 }

