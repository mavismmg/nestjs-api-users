import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUserNameUnique } from "./is-username-unique.validator";

export class User {
  id: number;

  // userName decorators
  @IsUserNameUnique({
    message: 'userName should be unique.'
  })
  @IsNotEmpty({
    message: 'userName is required.'
  })
  @IsString({
    message: 'userName should be in a string format.'
  })
  userName: string;
  // end

  // email decorators
  @IsEmail({}, {
    message: 'email should be a valid email.'
  })
  email: string;
  // end

  // password decorators
  @IsNotEmpty({
    message: 'password is required.'
  })
  password: string;
  // end

  // fullName decorators
  @IsNotEmpty({
    message: 'fullName is required.'
  })
  @IsString({
    message: 'fullName should be in a string format.'
  })
  fullName: string;
  // end

  registerDate: Date;
}