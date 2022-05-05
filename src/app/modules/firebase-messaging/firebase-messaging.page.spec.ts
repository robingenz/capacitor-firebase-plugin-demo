import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { FirebaseMessagingPage } from './firebase-messaging.page';

describe('FirebaseMessagingPage', () => {
  let component: FirebaseMessagingPage;
  let fixture: ComponentFixture<FirebaseMessagingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseMessagingPage],
      imports: [SharedTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FirebaseMessagingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
