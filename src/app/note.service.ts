import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Note } from './models/notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [];

  addNote(note: Note): void {
    this.notes.push({...note}); // crea una nuova istanza di note e la aggiunge all'array di note
    localStorage.setItem('notes', JSON.stringify(this.notes)); // salva il nuovo array di note nel localStorage
    this.notesSubject.next(this.notes); // emette il nuovo array di note
  }
  

  getNotes(): Observable<Note[]> {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    this.notes = notes;
    return of(notes);
  }
  

  getNoteById(id: number): Observable<Note | undefined> {
    const note = this.notes.find(n => n.id === id);
    return of(note);
  }

  updateNoteById(id: number, updatedNote: Note): void {
    const noteIndex = this.notes.findIndex(n => n.id === id);
    if (noteIndex !== -1) {
      this.notes[noteIndex] = updatedNote;
      this.notesSubject.next(this.notes);
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }
  }

  deleteNoteById(id: number): void {
    const noteIndex = this.notes.findIndex(n => n.id === id);
    if (noteIndex !== -1) {
      this.notes.splice(noteIndex, 1);
      this.notesSubject.next(this.notes);
    }
  }

  private notesSubject: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);

  public notes$: Observable<Note[]> = this.notesSubject.asObservable();
}
