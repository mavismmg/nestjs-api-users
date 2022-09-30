import { Body, Controller, Post } from "@nestjs/common";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  public create(@Body() user: User) {
    const createdUser = this.userService.create(user);
    return createdUser;
  }
}