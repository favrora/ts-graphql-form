import React, { useState } from 'react'
import ClientsTable from './components/ClientsTable/Table/ClientsTable'
import { Grid } from '@mui/material'
import ClientModal from './components/ClientModal/ClientModal'
import { ClientModel } from './data/models/ClientModel'
import { useAuthorization } from './hooks/useAuthorization'
import styles from './components/ClientsTable/Table/ClientsTable.scss'

const App = (): React.ReactElement => {
  const [clients, setClients] = useState<ClientModel[]>([])

  useAuthorization()

  return (
    <Grid container spacing={2}>
      <Grid item md={12} sm={12} sx={{ mb: 5, textAlign: 'center' }}>
        <ClientModal addClient={(data) => setClients((prev) => [...prev, data])} />
      </Grid>

      <Grid item md={12} sm={12} className={styles.clientsTableBox}>
        <ClientsTable clients={clients} />
      </Grid>
    </Grid>
  )
}

export default App
