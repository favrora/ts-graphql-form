import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { useUserEntityOptions } from '@/hooks/options/useUserEntityOptions'
import { UserEntity } from '@/data/enums/UserEntity'
import CustomTextField from '../CustomTextField/CustomTextField'
import CustomSelect from '../CustomSelect/CustomSelect'
import { UserModel } from '@/data/models/UserModel'
import CustomAutocomplete from '../CustomAutocomplete/CustomAutocomplete'
import { FormData, useUserForm } from './hooks/useUserForm'
import { useUserIdOptions } from '@/hooks/options/useUserIdOptions'
import { useCompanyRelationAction } from '@/api/Actions/useCompanyRelationAction'
import { useCompanyPositionAction } from '@/api/Actions/useCompanyPositionAction'
import styles from './UserForm.scss'

type Props = {
  handleSubmit: (data: UserModel) => void
  onClose: () => void
}

export const UserForm = ({ handleSubmit, onClose }: Props): React.ReactElement => {
  const { formData, formErrors, onChange, onSubmit } = useUserForm(handleSubmit)

  const userIds = useUserIdOptions()
  const userEntities = useUserEntityOptions()

  const companyRelationAction = useCompanyRelationAction()
  const companyPositionAction = useCompanyPositionAction()

  return (
    <Grid container component={'form'} autoComplete={'off'} width={600} gap={2} onSubmit={onSubmit}>
      <Grid container item md={12} gap={1} direction={'column'} className={styles.userFormFieldsWrapper}>
        <Typography variant="h6">Details</Typography>

        <CustomSelect<FormData>
          id={'entity'}
          label={'Entity'}
          options={userEntities}
          value={formData.entity}
          onChange={onChange}
          errors={formErrors}
        />

        <CustomAutocomplete<FormData>
          id={'userId'}
          label={'user ID'}
          value={formData.userId}
          onChange={onChange}
          options={userIds}
          errors={formErrors}
        />

        {
          {
            [UserEntity.Individual]: (
              <>
                <CustomTextField<FormData>
                  id={'firstName'}
                  label={'First Name'}
                  value={formData.firstName ?? ''}
                  onChange={onChange}
                  errors={formErrors}
                />

                <CustomTextField<FormData>
                  id={'lastName'}
                  label={'Last Name'}
                  value={formData.lastName ?? ''}
                  onChange={onChange}
                  errors={formErrors}
                />
              </>
            ),
            [UserEntity.Company]: (
              <>
                <CustomTextField<FormData>
                  id={'companyName'}
                  label={'Company Name'}
                  value={formData.companyName ?? ''}
                  onChange={onChange}
                  errors={formErrors}
                />
              </>
            ),
          }[formData.entity]
        }
      </Grid>

      <Grid item container md={12} gap={1} direction={'column'} className={styles.userFormFieldsWrapper}>
        <CustomAutocomplete<FormData>
          id={'relationToTheCompany'}
          label={'Relation to the Company'}
          options={[]}
          value={formData.relationToTheCompany}
          onChange={onChange}
          errors={formErrors}
          lazyLoadData={companyRelationAction}
          needAddItem
        />

        <CustomAutocomplete<FormData>
          id={'positionInTheCompany'}
          label={'Position in the Company'}
          options={[]}
          value={formData.positionInTheCompany}
          onChange={onChange}
          errors={formErrors}
          lazyLoadData={companyPositionAction}
          needAddItem
        />
      </Grid>

      <Grid item container md={12} gap={1} direction={'row'} justifyContent={'flex-end'}>
        <Button variant={'contained'} color={'inherit'} onClick={onClose}>
          Cancel
        </Button>

        <Button variant={'contained'} color={'primary'} type={'submit'}>
          Add
        </Button>
      </Grid>
    </Grid>
  )
}
