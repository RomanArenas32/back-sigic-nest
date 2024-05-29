import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginUser {
  @IsString()
  @IsNotEmpty()
  usuario!: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(5)
  password: string;
}
