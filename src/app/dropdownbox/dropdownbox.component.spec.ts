import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownboxComponent } from './dropdownbox.component';

describe('DropdownboxComponent', () => {
  let component: DropdownboxComponent;
  let fixture: ComponentFixture<DropdownboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
