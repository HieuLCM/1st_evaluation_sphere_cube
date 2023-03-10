import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadComponent } from './load.component';

describe('LoaderComponent', () => {
  let component: LoadComponent;
  let fixture: ComponentFixture<LoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});