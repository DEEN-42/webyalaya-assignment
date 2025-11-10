import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from '../types/note.interface';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }
}
