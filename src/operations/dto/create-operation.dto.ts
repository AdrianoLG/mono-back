export class CreateOperationDto {
  type: string
  description: string
  estimated: number
  real: number
  regularExpense: number
  created_date: Date
  last_modified_date: string
}
