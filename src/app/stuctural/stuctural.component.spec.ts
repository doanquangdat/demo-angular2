import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StucturalComponent } from './stuctural.component';

describe('StucturalComponent', () => {
  let component: StucturalComponent;
  let fixture: ComponentFixture<StucturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StucturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StucturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
