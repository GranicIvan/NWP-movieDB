import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSearchComponent } from './single-search.component';

describe('SingleSearchComponent', () => {
  let component: SingleSearchComponent;
  let fixture: ComponentFixture<SingleSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
