import { Component, OnInit } from '@angular/core';
import { Note } from '../models/notes';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-statistics',
  templateUrl: './note-statistics.component.html',
  styleUrls: ['./note-statistics.component.css'],
})
export class NoteStatisticsComponent implements OnInit {
  notes: Note[] = [];
  numNotes = 0;
  prioritySum = 0;
  priorityAvg = 0;
  notesByMonth: { month: string; numNotes: number }[] = [{
    month: '',
    numNotes: 0,
  }];
  thisYear = new Date().getFullYear();

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes) => {
      this.notes = notes;
      this.numNotes = this.notes.length;
      this.prioritySum = this.notes.reduce(
        (sum, note) => sum + note.priority,
        0
      );
      this.priorityAvg = this.prioritySum / this.numNotes;
      const notesByMonthMap = new Map();
      this.notes.forEach((note) => {
        const month = note.createdAt.getMonth();
        const numNotes = notesByMonthMap.get(month) || 0;
        notesByMonthMap.set(month, numNotes + 1);
      });
      this.notesByMonth = Array.from(notesByMonthMap.entries()).map(
        ([month, numNotes]) => ({ month, numNotes })
      );
    });
  }
}
