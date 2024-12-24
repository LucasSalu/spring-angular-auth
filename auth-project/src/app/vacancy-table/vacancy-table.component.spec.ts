import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyTableComponent } from './vacancy-table.component';

describe('VacancyTableComponent', () => {
  let component: VacancyTableComponent;
  let fixture: ComponentFixture<VacancyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
