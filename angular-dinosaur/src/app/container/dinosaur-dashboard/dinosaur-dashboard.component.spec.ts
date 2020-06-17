import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaurDashboardComponent } from './dinosaur-dashboard.component';

describe('DinosaurDashboardComponent', () => {
  let component: DinosaurDashboardComponent;
  let fixture: ComponentFixture<DinosaurDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaurDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaurDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
