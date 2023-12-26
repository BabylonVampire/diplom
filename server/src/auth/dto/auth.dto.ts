import { IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsNotEmpty({ message: 'Не должно быть пустым' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(1, 50)
  readonly first_name: string;

  @IsNotEmpty({ message: 'Не должно быть пустым' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(1, 50)
  readonly last_name: string;

  @IsNotEmpty({ message: 'Не должно быть пустым' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(6, 50)
  readonly email: string;

  @IsNotEmpty({ message: 'Не должно быть пустым' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(6, 50)
  readonly password: string;
}
