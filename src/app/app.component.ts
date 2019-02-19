import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'precision100';
  isAuthenticated: boolean = false;
  isSideBarOpened: boolean = false;
  routerOutlet = "withoutSideBar col-md-12";
  constructor(private loginService: LoginService, private router: Router){

  }
  ngOnInit(){
    this.loginService.isAuthenticated.subscribe((response: boolean)=>{
      this.isAuthenticated = response;
      this.router.navigate(['home']); 
    })
  }  

  toggleNav(){
    this.isSideBarOpened = !this.isSideBarOpened;
    if(this.isSideBarOpened){
      document.getElementById('sideNav').style.display = "block"; 
      this.routerOutlet = "withSideBar col-md-10";

    }else{

      document.getElementById('sideNav').style.display = "none"; 
      this.routerOutlet = "withoutSideBar col-md-12";
    }
  }

}
  