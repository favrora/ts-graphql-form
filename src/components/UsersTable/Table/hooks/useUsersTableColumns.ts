import { UserModel } from '@/data/models/UserModel'
import { ColumnType } from '@/data/types/ColumnType'
import { useMemo } from 'react'

export const useUsersTableColumns = () => {
  return useMemo((): ColumnType<UserModel>[] => {
    return [
      {
        key: 'userId',
        name: 'User ID',
      },
      {
        key: 'entity',
        name: 'Entity',
      },
      {
        key: 'companyName',
        name: 'Company Name',
      },
      {
        key: 'firstName',
        name: 'First Name',
      },
      {
        key: 'lastName',
        name: 'Last Name',
      },
      {
        key: 'relationToTheCompany',
        name: 'Relation to the Company',
      },
      {
        key: 'positionInTheCompany',
        name: 'Position in the Company',
      },
    ]
  }, [])
}
