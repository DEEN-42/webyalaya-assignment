import { Injectable } from '@nestjs/common';
import { AISummaryDto, AISummaryResponse } from '../types/note.interface';

@Injectable()
export class AiService {
  generateSummary(aiSummaryDto: AISummaryDto): AISummaryResponse {
    const text = aiSummaryDto.text.trim();
    const originalLength = text.length;

    // Simple rule-based summarization
    const summary = this.extractSummary(text);

    return {
      summary,
      originalLength,
      summaryLength: summary.length,
    };
  }

  private extractSummary(text: string): string {
    if (text.length === 0) {
      return 'Empty text provided.';
    }

    if (text.length < 100) {
      return text;
    }

    // Split into sentences
    const sentences = text
      .split(/[.!?]+/)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    if (sentences.length === 0) {
      return text.substring(0, 100) + '...';
    }

    if (sentences.length === 1) {
      return sentences[0] + '.';
    }
    
    const firstSentence = sentences[0];
    const lastSentence = sentences[sentences.length - 1];

    // Find sentences with key indicator words
    const keyWords = ['important', 'key', 'main', 'significant', 'crucial', 'essential', 'note', 'remember'];
    const keySentences = sentences.filter(s => 
      keyWords.some(word => s.toLowerCase().includes(word))
    );

    let summary = firstSentence + '.';
    
    if (keySentences.length > 0 && keySentences[0] !== firstSentence) {
      summary += ' ' + keySentences[0] + '.';
    } else if (sentences.length > 2 && lastSentence !== firstSentence) {
      summary += ' ' + lastSentence + '.';
    }

    return summary;
  }
}
