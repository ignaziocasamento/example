import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../models/notes';
import { NoteService } from '../note.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  note: Note = {
    id: 0,
    title: '',
    content: '',
    priority: 1,
    reminder: new Date(),
    createdAt: new Date()
  };

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.noteService.getNoteById(id).subscribe(note => {
      if (note) {
        this.note = note;
      }
    });
  }

  onSubmit(): void {
    this.noteService.updateNoteById(this.note.id, this.note);
    this.router.navigateByUrl('/notes');
  }
}
