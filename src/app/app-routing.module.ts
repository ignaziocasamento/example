import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'create', component: NoteCreateComponent },
  { path: 'edit/:id', component: NoteEditComponent }, // Aggiungiamo la rotta per note-edit
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
