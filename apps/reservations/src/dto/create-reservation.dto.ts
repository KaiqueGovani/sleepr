import { CreateChargeDto } from '@app/common';
import { IsDate, IsDefined, IsNotEmpty, ValidateNested } from 'class-validator';

export class CreateReservationDto {
  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  charge: CreateChargeDto;
}
