import { NoteCardPage } from './../note-card/note-card.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteHomePageRoutingModule } from './note-home-routing.module';

import { NoteHomePage } from './note-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteHomePageRoutingModule
  ],
  declarations: [NoteHomePage, NoteCardPage]
})
export class NoteHomePageModule {}
