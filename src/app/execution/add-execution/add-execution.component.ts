import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-execution',
  templateUrl: './add-execution.component.html',
  styleUrls: ['./add-execution.component.css']
})
export class AddExecutionComponent implements OnInit {

  selectedPipeline: any = {};
  listOfPipelines: any []= [{
    name: "Primary Pipeline",
    listOfContainers: [
      {
        name: "P1276Y Container",
        order: 10
      },
      {
        name: "Z32YQE Container",
        order: 20
      },
      {
        name: "T9534H Container",
        order: 30
      },
      {
        name: "H9226I Container",
        order: 40
      }

    ]
  },
  {
    name: "Secondary Pipeline",
    listOfContainers: [
      {
        name: "S782YQ Container",
        order: 10
      },
      {
        name: "OP8YNJ Container",
        order: 20
      },
      {
        name: "LYHLL7 Container",
        order: 30
      },
      {
        name: "6HBHAF Container",
        order: 40
      }

    ]
  },
  {
    name: "Ternary Pipeline",
    listOfContainers: [
      {
        name: "P1276Y Container",
        order: 10
      },
      {
        name: "Z32YQE Container",
        order: 20
      },
      {
        name: "UHA56H Container",
        order: 30
      },
      {
        name: "MKKH78 Container",
        order: 40
      }

    ]
  }];
  isValidPipelineSelected: Boolean = false;
  isExecutionByPipeline: boolean = true;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  selectPipeline(event){
    this.isValidPipelineSelected= true;
    this.selectedPipeline = event.value;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listOfPipelines, event.previousIndex, event.currentIndex);
  }
  tabChanged(){
    this.isExecutionByPipeline = !this.isExecutionByPipeline;
  }
  cancel(){
    this.router.navigate(['home']); 
  }
}
