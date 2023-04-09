import React, { useState } from 'react'
import UsersTable from './components/UsersTable/Table/UsersTable'
import { Grid } from '@mui/material'
import UserModal from './components/UserModal/UserModal'
import { UserModel } from './data/models/UserModel'
import { useAuthorization } from './hooks/useAuthorization'
import styles from './components/UsersTable/Table/UsersTable.scss'

const App = (): React.ReactElement => {
  const [users, setUsers] = useState<UserModel[]>([])

  useAuthorization()

  return (
    <Grid container spacing={2}>
      <Grid item md={12} sm={12} sx={{ mb: 5, textAlign: 'center' }}>
        <UserModal addUser={(data) => setUsers((prev) => [...prev, data])} />
      </Grid>

      <Grid item md={12} sm={12} className={styles.usersTableBox}>
        <UsersTable users={users} />
      </Grid>
    </Grid>
  )
}

export default App
