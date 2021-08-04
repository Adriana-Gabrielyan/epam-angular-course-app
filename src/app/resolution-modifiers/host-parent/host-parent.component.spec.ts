import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostParentComponent } from './host-parent.component';

describe('HostParentComponent', () => {
  let component: HostParentComponent;
  let fixture: ComponentFixture<HostParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
