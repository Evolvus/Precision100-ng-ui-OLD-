import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPipelineComponent } from './list-pipeline.component';

describe('ListPipelineComponent', () => {
  let component: ListPipelineComponent;
  let fixture: ComponentFixture<ListPipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
