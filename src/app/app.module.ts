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
import { ActivityComponent } from './activity/activity.component';
import { BreakComponent } from './break/break.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteCreateComponent,
    NoteEditComponent,
    NoteStatisticsComponent,
    DashboardComponent,
    ActivityComponent,
    BreakComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgChartsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'notes', component: NoteListComponent },
      { path: 'create', component: NoteCreateComponent },
      { path: 'stats', component: NoteStatisticsComponent },
      { path: 'edit/:id', component: NoteEditComponent },
      { path: 'activity', component: ActivityComponent },
      { path: 'break', component: BreakComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
