import React from 'react'
import { useUsersTableColumns } from './hooks/useUsersTableColumns'
import CustomTable from '../CustomTable/CustomTable'
import { UserModel } from '@/data/models/UserModel'

type Props = {
  users: UserModel[]
}

const UsersTable = ({ users }: Props): React.ReactElement => {
  const columns = useUsersTableColumns()

  return <CustomTable rowKey={'id'} rows={users} columns={columns} />
}

export default React.memo(UsersTable)
