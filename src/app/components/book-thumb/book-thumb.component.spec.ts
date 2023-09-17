import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookThumbComponent } from './book-thumb.component';

describe('BookThumbComponent', () => {
  let component: BookThumbComponent;
  let fixture: ComponentFixture<BookThumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookThumbComponent]
    });
    fixture = TestBed.createComponent(BookThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
