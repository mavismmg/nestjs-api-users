import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  private users: Array<User> = [{
    id: 1,
    userName: 'mavismmg',
    email: 'mateus@test.com',
    password: '123',
    fullName: 'Mateus Jorge',
    registerDate: new Date()
  }];

  public create(user: User): User {
    this.users.push(user);
    return user;
  }

  public searchUserByName(userName: string): User {
    return this.users.find(user => user.userName == userName);
  }
}