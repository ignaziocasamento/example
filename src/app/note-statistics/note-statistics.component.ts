import { Component, OnInit } from '@angular/core';
import { Note } from '../models/notes';
import { NoteService } from '../note.service';
import { AppService } from '../app.service';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-note-statistics',
  templateUrl: './note-statistics.component.html',
  styleUrls: ['./note-statistics.component.css'],
})
export class NoteStatisticsComponent implements OnInit {
  notes: Note[] = [];
  numNotes = 0;
  priorityAvg = 0;
  datasets!: ChartData <'bar', {key: string, value: number} []>;
  constructor(private noteService: NoteService, private appService: AppService) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes) => {
      this.notes = notes;
      this.numNotes = this.notes.length;
      let count = 0;
      notes.forEach((note) => {
        count += +note.priority;
      })
      this.priorityAvg = count / this.numNotes;
      this.datasets = {
        datasets: [{
          data: [{key: 'Numero totale delle note', value: this.numNotes}, {key: 'Priorità media', value: this.priorityAvg}],
          parsing: {
            xAxisKey: 'key',
            yAxisKey: 'value'
          },
          label: 'Tutte le note',
          backgroundColor: '#454545'
        }],
      };
      
    });
  }
}
