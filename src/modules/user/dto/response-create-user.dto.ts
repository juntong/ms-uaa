import { Expose } from 'class-transformer';

export class ResponseCreateUserDto {
  @Expose()
  name: string;

  @Expose()
  username: string;
}
