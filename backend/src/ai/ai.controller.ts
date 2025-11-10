import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';
import { AISummaryDto } from '../types/note.interface';

@Controller('ai-summary')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post()
  generateSummary(@Body() aiSummaryDto: AISummaryDto) {
    return this.aiService.generateSummary(aiSummaryDto);
  }
}
