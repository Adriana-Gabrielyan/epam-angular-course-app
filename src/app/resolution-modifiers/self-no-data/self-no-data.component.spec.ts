import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfNoDataComponent } from './self-no-data.component';

describe('SelfNoDataComponent', () => {
  let component: SelfNoDataComponent;
  let fixture: ComponentFixture<SelfNoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfNoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfNoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
