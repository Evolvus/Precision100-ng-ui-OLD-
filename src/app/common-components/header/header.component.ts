import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentDate = new Date(); 
  isSideNavBarOpened: boolean = false;
  @Output() sideBarOpened: EventEmitter<Boolean> = new EventEmitter();
  constructor(private router: Router) { }
 
  ngOnInit() {
  } 


  navigate(destination){
    this.router.navigate([destination]);
  }
  openSideNavigationBar(){
    this.isSideNavBarOpened = !this.isSideNavBarOpened;
    this.sideBarOpened.emit(this.isSideNavBarOpened);
  }

}  
 