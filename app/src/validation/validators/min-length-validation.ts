import { FieldValidation } from '../protocols'
import { InvalidFieldError } from '../errors'
interface InputType {
  [key: string]: any;
}
export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (input: InputType): Error | null {
    return input[this.field]?.length < this.minLength ? new InvalidFieldError() : null
  }
}
