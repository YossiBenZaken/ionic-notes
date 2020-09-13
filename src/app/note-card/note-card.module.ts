import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteCardPageRoutingModule } from './note-card-routing.module';

import { NoteCardPage } from './note-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteCardPageRoutingModule
  ],
  declarations: [NoteCardPage]
})
export class NoteCardPageModule {}
