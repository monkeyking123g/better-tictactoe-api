import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

import { UpdateUserRequest as UpdateUserRequestInterface } from './interfaces';
import { BaseResponse } from '../interfaces';
import { UpdateUserRequest } from './models';


@Injectable()
export class UserService {
  async validateUser(
    rawData: UpdateUserRequestInterface,
  ): Promise<BaseResponse> {
    const data = plainToClass(UpdateUserRequest, rawData);
    const validationErrors = await validate(data);
    if (validationErrors.length > 0) {
      return {
        success: false,
        errors: validationErrors,
      };
    }
    return {
      success: true,
      data,
    };
  }
}

