import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { RouterModule } from '@angular/router';
import { NoteStatisticsComponent } from './note-statistics/note-statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteCreateComponent,
    NoteEditComponent,
    NoteStatisticsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'notes', component: NoteListComponent },
      { path: 'create', component: NoteCreateComponent },
      { path: 'stats', component: NoteStatisticsComponent },
      { path: 'edit/:id', component: NoteEditComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
