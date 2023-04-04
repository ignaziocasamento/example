import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../models/notes';
import { NoteService } from '../note.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  filteredNotes: Note[] = [];
  searchTerm: string = '';
  sortOrder: 'title' | 'createdAt' | 'priority' = 'createdAt';

  constructor(private noteService: NoteService, private router: Router, private appService: AppService) {
    // this.noteService.notes$.subscribe(notes => this.notes = notes);
  }

  ngOnInit() {
    this.noteService.notes$.subscribe((notes) => {
      this.notes = notes;
      this.filteredNotes = notes;
    });
  }

  editNote(id: number) {
    this.router.navigateByUrl(`/edit/${id}`); // Naviga verso note-edit passando l'ID della nota
  }

  deleteNote(id: number) {
    if (confirm('Are you sure you want to delete this note?')) {
      this.noteService.deleteNoteById(Number(id));
    }
  }

  search() {
    this.filteredNotes = this.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  sortNotes() {
    switch (this.sortOrder) {
      case 'title':
        this.filteredNotes.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'createdAt':
        this.filteredNotes.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        break;
      case 'priority':
        this.filteredNotes.sort((a, b) => b.priority - a.priority);
        break;
      default:
        break;
    }
  }

  sortByTitle() {
    this.sortOrder = 'title';
    this.sortNotes();
  }
  
  sortByCreatedAt() {
    this.sortOrder = 'createdAt';
    this.sortNotes();
  }  

  sortByDefault() {
    this.sortOrder = 'createdAt';
    this.sortNotes();
  }
  
  sortByPriority() {
    this.sortOrder = 'priority';
    this.sortNotes();
  }

  shareNote(note: Note) {
    const text = `Titolo: ${note.title}\nContenuto: ${note.content}\nPriorità: ${note.priority}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url);
  }

  getColor(priority: any): string {
    let string = '';
    switch (priority) {
      case '1':
      case 1:
        string = 'lightblue';
        break
      case '2':
        string = 'green'
        break;
      case '3':
        string = 'yellow'
        break
      case '4':
        string = 'orange'
        break
      case '5':
        string = 'red'
        break
    }
    return string;
  }

}