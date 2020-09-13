import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteCardPage } from './note-card.page';

const routes: Routes = [
  {
    path: '',
    component: NoteCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteCardPageRoutingModule {}
