import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUserNameUnique } from "./is-username-unique.validator";

export class User {
  id: number;

  // userName decorators
  @Expose({
    name: 'username'
  })
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
  @Expose({
    name: 'email'
  })
  @IsEmail({}, {
    message: 'email should be a valid email.'
  })
  email: string;
  // end

  // password decorators
  @Expose({
    name: 'password'
  })
  @IsNotEmpty({
    message: 'password is required.'
  })
  @Exclude({
    toPlainOnly: true
  })
  password: string;
  // end

  // fullName decorators
  @Expose({
    name: 'fullName'
  })
  @IsNotEmpty({
    message: 'fullName is required.'
  })
  @IsString({
    message: 'fullName should be in a string format.'
  })
  fullName: string;
  // end

  // registerDate decorators
  @Expose({
    name: 'joinDate'
  })
  registerDate: Date;
  // end
}