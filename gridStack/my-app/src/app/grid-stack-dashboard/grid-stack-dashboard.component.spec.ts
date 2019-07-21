import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStackDashboardComponent } from './grid-stack-dashboard.component';

describe('GridStackDashboardComponent', () => {
  let component: GridStackDashboardComponent;
  let fixture: ComponentFixture<GridStackDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridStackDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridStackDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
