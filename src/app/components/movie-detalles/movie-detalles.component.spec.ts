import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetallesComponent } from './movie-detalles.component';

describe('MovieDetallesComponent', () => {
  let component: MovieDetallesComponent;
  let fixture: ComponentFixture<MovieDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
