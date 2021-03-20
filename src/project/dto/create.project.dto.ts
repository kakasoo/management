import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatedProjectDto {
  @IsString()
  readonly TITLE: string;

  @IsNumber()
  readonly WRITER: number;

  @IsNumber()
  readonly TRACK_ID: number;

  @IsOptional()
  @IsNumber()
  readonly ORDER?: number;
}
