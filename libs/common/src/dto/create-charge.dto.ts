import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { CardDto } from './card.dto';

export class CreateChargeDto {
  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  card: CardDto;

  @IsNumber()
  amount: number;
}
