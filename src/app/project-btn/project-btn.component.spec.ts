import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBtnComponent } from './project-btn.component';

describe('ProjectBtnComponent', () => {
  let component: ProjectBtnComponent;
  let fixture: ComponentFixture<ProjectBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
