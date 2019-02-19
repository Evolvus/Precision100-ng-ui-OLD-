import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-add-pipeline',
  templateUrl: './add-pipeline.component.html',
  styleUrls: ['./add-pipeline.component.css']
})
export class AddPipelineComponent implements OnInit {

  availableContainers: Section[] = [
    {
      name: 'Container 1',
      updated: new Date('1/1/16'),
      files: ["dropOne.sql", "dropTwo.sql"],
      showSubSet: false
    },
    {
      name: 'Container 2',
      updated: new Date('1/17/16'),
      files: ["createOne.sql", "createTwo.sql"],
      showSubSet: false
    },
    {
      name: 'Container 3',
      updated: new Date('1/28/16'),
      files: ["selectOne.sql", "selectOne.sql"],
      showSubSet: false
    },
    {
      name: 'Container 1',
      updated: new Date('1/1/16'),
      files: ["dropOne.sql", "dropTwo.sql"],
      showSubSet: false
    },
    {
      name: 'Container 2',
      updated: new Date('1/17/16'),
      files: ["createOne.sql", "createTwo.sql"],
      showSubSet: false
    },
    {
      name: 'Container 3',
      updated: new Date('1/28/16'),
      files: ["selectOne.sql", "selectOne.sql"],
      showSubSet: false
    },
    {
      name: 'Container 1',
      updated: new Date('1/1/16'),
      files: ["dropOne.sql", "dropTwo.sql"],
      showSubSet: false
    },
    {
      name: 'Container 2',
      updated: new Date('1/17/16'),
      files: ["createOne.sql", "createTwo.sql"],
      showSubSet: false
    },
    {
      name: 'Container 3',
      updated: new Date('1/28/16'),
      files: ["selectOne.sql", "selectOne.sql"],
      showSubSet: false
    },

  ];
  selectedContainers: Section[] = [

  ];


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.availableContainers, event.previousIndex, event.currentIndex);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showSubSet(folder){
    alert('I am called');
folder.showSubSet = !folder.showSubSet;
  }

  addContainer(container, index){
this.selectedContainers.push(container); 
this.availableContainers.splice(index,1);
  } 
  removeContainer(container, index){
    this.availableContainers.push(container); 
    this.selectedContainers.splice(index,1);
      }
      cancel(){
        this.router.navigate(['home']); 
      }

}
export interface Section {
  name: string;
  updated: Date;
  files: any[];
  showSubSet: boolean;
}