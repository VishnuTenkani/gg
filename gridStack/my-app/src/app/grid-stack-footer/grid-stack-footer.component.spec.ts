import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStackFooterComponent } from './grid-stack-footer.component';

describe('GridStackFooterComponent', () => {
  let component: GridStackFooterComponent;
  let fixture: ComponentFixture<GridStackFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridStackFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridStackFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
