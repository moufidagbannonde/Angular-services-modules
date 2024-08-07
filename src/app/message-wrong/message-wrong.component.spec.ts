import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageWrongComponent } from './message-wrong.component';

describe('MessageWrongComponent', () => {
  let component: MessageWrongComponent;
  let fixture: ComponentFixture<MessageWrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageWrongComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageWrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
