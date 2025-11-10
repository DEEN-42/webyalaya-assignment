import { Injectable } from '@nestjs/common';
import { Note, CreateNoteDto } from '../types/note.interface';

@Injectable()
export class NotesService {
  private notes: Note[] = [];
  private idCounter = 1;

  create(createNoteDto: CreateNoteDto): Note {
    const note: Note = {
      id: this.idCounter.toString(),
      title: createNoteDto.title,
      content: createNoteDto.content,
      createdAt: new Date(),
    };
    this.notes.push(note);
    this.idCounter++;
    return note;
  }

  findAll(): Note[] {
    return this.notes;
  }
}
