import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  private users = [];

  public create(user: User): User {
    this.users.push(user);
    return user;
  }
}