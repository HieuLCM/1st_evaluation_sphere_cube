import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportFileComponent } from './export-file.component';

describe('ExportComponent', () => {
  let component: ExportFileComponent;
  let fixture: ComponentFixture<ExportFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
