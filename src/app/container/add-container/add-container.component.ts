import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-container',
  templateUrl: './add-container.component.html',
  styleUrls: ['./add-container.component.css']
})
export class AddContainerComponent implements OnInit {

  constructor(private router: Router) { }
  listOfSelectedFiles: any[] = [];
  ngOnInit() {
  }

  file(event){
  this.listOfSelectedFiles.push(event.srcElement.files[0]); 
  }
  remove(file, index){
   this.listOfSelectedFiles.splice(index, 1); 
  }
  cancel(){
    this.router.navigate(['home']); 
  }
}
