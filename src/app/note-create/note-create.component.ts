import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Note } from '../models/notes';
import { NoteService } from '../note.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css'],
})
export class NoteCreateComponent implements OnInit {
  note: Note = {
    id: 0,
    title: '',
    content: '',
    priority: 1,
    reminder: new Date(),
    createdAt: new Date(),
  };

  constructor(private noteService: NoteService, private router: Router, private appService: AppService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.noteService.getNotes()
    .subscribe((notes) => {
      this.note.id = notes.length + 1
    })
    this.noteService.addNote(this.note);
    this.router.navigateByUrl('/notes');
  }
  
}
