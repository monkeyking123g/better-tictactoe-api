import { Controller, Post, Body } from '@nestjs/common';
import { InfoService, UserService } from './info.service';
import { UpdateInfoRequest } from './interfaces';
import { UpdateUserRequest } from './interfaces/user';
import { BaseResponse } from '../interfaces';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Post('/validate')
  getConfig(@Body() bodyRequest: UpdateInfoRequest): Promise<BaseResponse> {
    return this.infoService.validateInfo(bodyRequest);
  }
}

@Controller('user')
export class UserController {
  constructor(private readonly userServices: UserService) {}

  @Post('/validate')
  getConfig(@Body() bodyRequest: UpdateUserRequest): Promise<BaseResponse> {
    return this.userServices.validateInfo(bodyRequest);
  }
}
