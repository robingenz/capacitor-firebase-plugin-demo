import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirebaseRemoteConfigPage } from './firebase-remote-config.page';

describe('FirebaseRemoteConfigPage', () => {
  let component: FirebaseRemoteConfigPage;
  let fixture: ComponentFixture<FirebaseRemoteConfigPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseRemoteConfigPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FirebaseRemoteConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
