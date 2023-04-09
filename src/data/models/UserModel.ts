import { UserEntity } from '../enums/UserEntity'

export type UserModel = {
  id: string
  className?: string
  userId: number | string
  entity: UserEntity
  firstName?: string
  lastName?: string
  companyName?: string
  relationToTheCompany: string
  positionInTheCompany: string
}
