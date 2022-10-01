import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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

  @Get(':userName')
  public searchUserByName(@Param('userName') userName: string) {
    const userFound = this.userService.searchUserByName(userName);
    return userFound;
  }
}