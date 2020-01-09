import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { LOGOUT } from '../actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username;
  @select() authentication;
  constructor(private ngRedux: NgRedux<IAppState>, private router:Router) { }

  ngOnInit() {
    this.authentication.subscribe(data => {
      console.log(data)
      this.username = data.username; 
    });
  }

  logout(){
    this.ngRedux.dispatch({ type: LOGOUT});
    this.router.navigateByUrl('login');
  }

}