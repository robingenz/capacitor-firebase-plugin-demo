import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedTestingModule } from '@tests/modules';
import { FirebaseStoragePage } from './firebase-storage.page';

describe('FirebaseStoragePage', () => {
  let component: FirebaseStoragePage;
  let fixture: ComponentFixture<FirebaseStoragePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseStoragePage],
      imports: [SharedTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FirebaseStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
