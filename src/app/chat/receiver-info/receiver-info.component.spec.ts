import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverInfoComponent } from './receiver-info.component';

describe('ReceiverInfoComponent', () => {
  let component: ReceiverInfoComponent;
  let fixture: ComponentFixture<ReceiverInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
