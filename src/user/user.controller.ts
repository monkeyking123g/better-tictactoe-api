import { Controller, Post, Body } from '@nestjs/common';
import {  UserService } from './user.service';
import { UpdateUserRequest } from './interfaces';
import { BaseResponse } from '../interfaces';



@Controller('user')
export class UserController {
  constructor(private readonly userServices: UserService) {}

  @Post('/validate')
  getConfig(@Body() bodyRequest: UpdateUserRequest): Promise<BaseResponse> {
    return this.userServices.validateUser(bodyRequest);
  }
}
