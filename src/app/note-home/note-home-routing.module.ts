import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteHomePage } from './note-home.page';

const routes: Routes = [
  {
    path: '',
    component: NoteHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteHomePageRoutingModule {}
