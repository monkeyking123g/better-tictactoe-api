import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import * as dayjs from 'dayjs'
import "dayjs/locale/it";

@ValidatorConstraint({ name: 'customText', async: false })
export class CustomMarried implements ValidatorConstraintInterface {
  validate(married : any, args: ValidationArguments) {
    const age =  args.object["age"]
    if (married == undefined) {
        if (age < 18) {
            return true
        } else {
            return false
        }
    } else {return true}
  }

  defaultMessage(args: ValidationArguments) {
    
    return 'All Persons old the Age of 18 Years obligatory !';
  }
}

@ValidatorConstraint({ name: 'customText', async: false })
export class CustomDateBirthday implements ValidatorConstraintInterface {
  validate(birthday : Date, args: ValidationArguments) {
     const dateNow =  dayjs(new Date()).locale("it").year()
     const dateBirthday = dayjs(birthday).locale("it").year()
     const age =  args.object["age"]
     const validate = dateNow - age 
     if (dateBirthday !== validate) { 
     return false;
     } else {
      return true;
     }
  }

  defaultMessage(args: ValidationArguments) {
    return 'Age do not match birthday !';
  }
}