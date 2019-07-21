import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStackHeaderComponent } from './grid-stack-header.component';

describe('GridStackHeaderComponent', () => {
  let component: GridStackHeaderComponent;
  let fixture: ComponentFixture<GridStackHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridStackHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridStackHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
