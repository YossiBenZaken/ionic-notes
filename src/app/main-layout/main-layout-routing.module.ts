import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutPage } from './main-layout.page';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../note-home/note-home.module').then(
            (m) => m.NoteHomePageModule
          ),
      },
      {
        path: 'new',
        loadChildren: () =>
          import('../note-details/note-details.module').then(
            (m) => m.NoteDetailsPageModule
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('../note-details/note-details.module').then(
            (m) => m.NoteDetailsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutPageRoutingModule {}
