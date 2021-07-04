import { IsEmail, IsString, Length, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @MaxLength(50)
  email: string;

  @IsString()
  @Length(5, 50)
  name: string;

  @IsString()
  @Length(10, 255)
  password: string;
}
