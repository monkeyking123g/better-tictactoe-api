import { UpdateInfoRequest  as UpdateInfoRequestInterface } from '../interfaces';
import { UpdateUserRequest as UpdateUserRequestInterface } from '../interfaces/user'; 
import { CustomDateBirthday, CustomMarried } from '../CustomValidator';

import { IsNotEmpty, IsString, MinLength, MaxLength, IsInt, Min, Max, IsDateString, Validate,ValidateIf} from 'class-validator';

export class UpdateInfoRequest implements UpdateInfoRequestInterface {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
}
export class UpdateUserRequest implements UpdateUserRequestInterface {
  
   @IsNotEmpty()
   @IsString()
   @MinLength(5, {
    message: 'Name is too short',
  })
  @MaxLength(50, {
    message: 'Name is too long',
  })
   name: string;

   @IsNotEmpty()
   @IsInt()
   @Min(1, {message : "Age is too short"})
   @Max(150, {message : "Age is too long"})
   age: number;
   
   @Validate(CustomDateBirthday)
   @IsNotEmpty()
   @IsDateString()
   birthday : Date;

  @Validate(CustomMarried)
   married : any;
}
