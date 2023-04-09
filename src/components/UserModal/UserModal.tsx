import React from 'react'
import { Button } from '@mui/material'
import { UserForm } from '../UserForm/Form/UserForm'
import { useModal } from '@/hooks/useModal'
import { UserModel } from '@/data/models/UserModel'
import CustomModal from '../CustomModal/CustomModal'

type Props = {
  addUser: (data: UserModel) => void
}

const UserModal = ({ addUser }: Props): React.ReactElement => {
  const { isOpen, open, close } = useModal()

  return (
    <>
      <Button onClick={open} variant={'contained'} color={'primary'} size={'large'}>
        Add
      </Button>

      <CustomModal isOpen={isOpen} title={'Add'} close={close}>
        <UserForm
          handleSubmit={(data) => {
            addUser(data)
            close()
          }}
          onClose={close}
        />
      </CustomModal>
    </>
  )
}

export default React.memo(UserModal)
