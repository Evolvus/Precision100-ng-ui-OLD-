import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  availableContainers: any[] = [
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
}
