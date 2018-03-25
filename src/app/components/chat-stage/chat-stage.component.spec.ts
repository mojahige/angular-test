import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatStageComponent } from './chat-stage.component';

describe('ChatStageComponent', () => {
  let component: ChatStageComponent;
  let fixture: ComponentFixture<ChatStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
