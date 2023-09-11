import { FieldValidation } from '../protocols'
import { RequiredFieldError } from '../errors'
interface InputType {
  [key: string]: any;
}
export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (input: InputType): Error | null {
    return input[this.field] ? null : new RequiredFieldError()
  }
}
