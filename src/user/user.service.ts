import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  private users = [];

  public create(user) {
    this.users.push(user);
    return user;
  }
}