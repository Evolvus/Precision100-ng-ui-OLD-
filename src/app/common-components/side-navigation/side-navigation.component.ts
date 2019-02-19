import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {
  isAuthenticated: boolean = false;
  
  isSideNavBarOpened: boolean = false;
  
  listOfSideMenus: any[]=[
    {
      name: "Container",
      actionButtonsVisible: false,
      actionButtonsAvailable: true,
      addURL: 'addContainer',
      listViewURL: 'listContainer'

    },  
    {
      name: "Pipeline",
      actionButtonsVisible: false,
      actionButtonsAvailable: true,
      addURL: 'addPipeline',
      listViewURL: 'listPipelines'
 
    },
    {
      name: "Execution",  
      actionButtonsVisible: false,
      actionButtonsAvailable: true,
      addURL: 'addExecution',
      listViewURL: 'listExecutions'
    },
    {
      name: "Mapping Maintenance",
      actionButtonsVisible: false,
      actionButtonsAvailable: false

    },
    {  
      name: "Manage Executions",
      actionButtonsVisible: false,
      actionButtonsAvailable: false
    }];
    

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }
  toggleNav() {  
    this.isSideNavBarOpened = !this.isSideNavBarOpened;
    if(this.isSideNavBarOpened){
     document.getElementById("mySidenav").style.width = "200px";
     document.getElementById("mySidenav").style.transition="5s";
    }else{
     document.getElementById("mySidenav").style.width = "0px";
     document.getElementById("mySidenav").style.transition="5s";
    }
 }
 showActionButtons(sideMenu){
   sideMenu.actionButtonsVisible = !sideMenu.actionButtonsVisible;
 }
 navToAdd(sideMenu){ 
   this.router.navigate([sideMenu.addURL]);
 } 
 navToListView(sideMenu){
  this.router.navigate([sideMenu.listViewURL]);
} 

}
