import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThematicComponent } from './new-thematic.component';

describe('NewThematicComponent', () => {
  let component: NewThematicComponent;
  let fixture: ComponentFixture<NewThematicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewThematicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewThematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
