import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteStatisticsComponent } from './note-statistics.component';

describe('NoteStatisticsComponent', () => {
  let component: NoteStatisticsComponent;
  let fixture: ComponentFixture<NoteStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
