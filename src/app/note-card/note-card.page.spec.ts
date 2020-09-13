import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoteCardPage } from './note-card.page';

describe('NoteCardPage', () => {
  let component: NoteCardPage;
  let fixture: ComponentFixture<NoteCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
