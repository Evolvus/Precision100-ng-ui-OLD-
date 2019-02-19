import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pipeline',
  templateUrl: './list-pipeline.component.html',
  styleUrls: ['./list-pipeline.component.css']
})
export class ListPipelineComponent implements OnInit {

  listOfPipelines: any []= [{
    name: "Primary Pipeline",
    lastUpdatedDate: new Date(),
    listOfContainers: [
      {
        name: "P1276Y Container",
        lastUpdatedDate: new Date(),
        order: 10
      },
      {
        name: "Z32YQE Container",
        lastUpdatedDate: new Date(),
        order: 20
      },
      {
        name: "T9534H Container",
        lastUpdatedDate: new Date(),
        order: 30
      },
      {
        name: "H9226I Container",
        lastUpdatedDate: new Date(),
        order: 40
      }

    ]
  },
  {
    name: "Secondary Pipeline",
    lastUpdatedDate: new Date(),
    listOfContainers: [
      {
        name: "S782YQ Container",
        lastUpdatedDate: new Date(),
        order: 10
      },
      {
        name: "OP8YNJ Container",
        lastUpdatedDate: new Date(),
        order: 20
      },
      {
        name: "LYHLL7 Container",
        lastUpdatedDate: new Date(),
        order: 30
      },
      {
        name: "6HBHAF Container",
        lastUpdatedDate: new Date(),
        order: 40
      }

    ]
  },
  {
    name: "Ternary Pipeline",
    lastUpdatedDate: new Date(),
    listOfContainers: [
      {
        name: "P1276Y Container",
        lastUpdatedDate: new Date(),
        order: 10
      },
      {
        name: "Z32YQE Container",
        lastUpdatedDate: new Date(),
        order: 20
      },
      {
        name: "UHA56H Container",
        lastUpdatedDate: new Date(),
        order: 30
      },
      {
        name: "MKKH78 Container",
        lastUpdatedDate: new Date(),
        order: 40
      }

    ]
  }];
  constructor() { }

  ngOnInit() {
  }

}
