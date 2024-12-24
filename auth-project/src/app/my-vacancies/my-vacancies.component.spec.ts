import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVacanciesComponent } from './my-vacancies.component';

describe('MyVacanciesComponent', () => {
  let component: MyVacanciesComponent;
  let fixture: ComponentFixture<MyVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVacanciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
