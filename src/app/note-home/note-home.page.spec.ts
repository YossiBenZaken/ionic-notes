import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoteHomePage } from './note-home.page';

describe('NoteHomePage', () => {
  let component: NoteHomePage;
  let fixture: ComponentFixture<NoteHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
