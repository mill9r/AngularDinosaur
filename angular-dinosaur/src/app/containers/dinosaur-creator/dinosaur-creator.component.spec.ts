import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaurCreatorComponent } from './dinosaur-creator.component';

describe('DinosaurCreatorComponent', () => {
  let component: DinosaurCreatorComponent;
  let fixture: ComponentFixture<DinosaurCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaurCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaurCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
