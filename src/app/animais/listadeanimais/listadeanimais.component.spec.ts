import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeanimaisComponent } from './listadeanimais.component';

describe('ListadeanimaisComponent', () => {
  let component: ListadeanimaisComponent;
  let fixture: ComponentFixture<ListadeanimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadeanimaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadeanimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
