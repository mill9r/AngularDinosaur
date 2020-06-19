import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaurFormComponent } from './dinosaur-form.component';

describe('DinosaurFormComponent', () => {
  let component: DinosaurFormComponent;
  let fixture: ComponentFixture<DinosaurFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaurFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
