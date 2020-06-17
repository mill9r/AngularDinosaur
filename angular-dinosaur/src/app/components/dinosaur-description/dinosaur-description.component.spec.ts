import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaurDescriptionComponent } from './dinosaur-description.component';

describe('DinosaurDescriptionComponent', () => {
  let component: DinosaurDescriptionComponent;
  let fixture: ComponentFixture<DinosaurDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaurDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaurDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
