import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirebaseFirestorePage } from './firebase-firestore.page';

describe('FirebaseFirestorePage', () => {
  let component: FirebaseFirestorePage;
  let fixture: ComponentFixture<FirebaseFirestorePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseFirestorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirebaseFirestorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
