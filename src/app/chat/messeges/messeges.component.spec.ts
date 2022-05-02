import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessegesComponent } from './messeges.component';

describe('MessegesComponent', () => {
  let component: MessegesComponent;
  let fixture: ComponentFixture<MessegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessegesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
