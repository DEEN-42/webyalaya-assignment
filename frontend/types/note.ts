export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface CreateNoteDto {
  title: string;
  content: string;
}

export interface AISummaryResponse {
  summary: string;
  originalLength: number;
  summaryLength: number;
}
