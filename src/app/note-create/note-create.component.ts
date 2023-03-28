import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Note } from '../models/notes';
import { NoteService } from '../note.service';

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

  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.noteService.addNote(this.note);
    this.router.navigateByUrl('/notes');
  }

  validatePriority(event: any) {
    const keyCode = event.keyCode;
    const keyValue = event.key;

    if (event.target.value.length > 0 && (keyValue < '1' || keyValue > '5')) {
      event.preventDefault();
    }

    if (
      keyCode !== 8 &&
      (keyCode < 49 || keyCode > 53) &&
      (keyCode < 97 || keyCode > 101)
    ) {
      event.preventDefault();
    }
  }
  
}
