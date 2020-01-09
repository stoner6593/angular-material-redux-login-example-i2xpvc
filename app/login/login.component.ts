import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { LOGIN } from '../actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  @select() authentication;
  constructor(private fb:FormBuilder, private ngRedux: NgRedux<IAppState>, private router:Router) { 
    
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }

login(){
  this.ngRedux.dispatch({type: LOGIN, data: this.loginForm.value});
  this.router.navigateByUrl('');
}
  

}