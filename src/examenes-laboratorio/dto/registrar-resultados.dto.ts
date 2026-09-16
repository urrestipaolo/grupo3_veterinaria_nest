import { IsString, Matches, MaxLength } from 'class-validator';

export class RegistrarResultadosDto {
  @IsString()
  @Matches(/\S/, { message: 'resultados no puede estar vacío' })
  @MaxLength(20000)
  resultados: string;
}
