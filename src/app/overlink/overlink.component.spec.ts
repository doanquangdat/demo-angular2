import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlinkComponent } from './overlink.component';

describe('OverlinkComponent', () => {
  let component: OverlinkComponent;
  let fixture: ComponentFixture<OverlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
