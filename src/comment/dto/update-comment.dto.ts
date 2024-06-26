import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateCommentDTO {
  @IsString()
  @IsOptional()
  content?: string;

  @IsNumber()
  @IsOptional()
  userId?: number;

  @IsNumber()
  @IsOptional()
  assessmentId?: number;
}
