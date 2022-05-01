import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { FirebaseAnalyticsPage } from './firebase-analytics.page';

describe('FirebaseAnalyticsPage', () => {
  let component: FirebaseAnalyticsPage;
  let fixture: ComponentFixture<FirebaseAnalyticsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseAnalyticsPage],
      imports: [SharedTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FirebaseAnalyticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
