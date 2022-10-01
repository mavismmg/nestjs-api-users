import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  public create(@Body() user: User): NestResponse {
    const createdUser = this.userService.create(user);
    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeaders({
        'Location': `/users/${createdUser.userName}`
      })
      .withBody(createdUser)
      .build();
  }

  @Get(':userName')
  public searchUserByName(@Param('userName') userName: string): User {
    const userFound = this.userService.searchUserByName(userName);
    if (!userFound) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found'
      });
    }
    return userFound;
  }
}