export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

export interface CreateNoteDto {
  title: string;
  content: string;
}

export interface AISummaryDto {
  text: string;
}

export interface AISummaryResponse {
  summary: string;
  originalLength: number;
  summaryLength: number;
}
