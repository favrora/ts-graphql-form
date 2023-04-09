import { UserEntity } from '@/data/enums/UserEntity'
import { UserModel } from '@/data/models/UserModel'
import { useForm } from '@/hooks/useForm'
import { useId } from 'react'
import * as yup from 'yup'

export type FormData = UserModel

export const useUserForm = (handleSubmit: (data: FormData) => void) => {
  const id = useId()

  const { formData, formErrors, onChange, onSubmit } = useForm<FormData>(
    {
      id: id,
      userId: '',
      entity: UserEntity.Individual,
      relationToTheCompany: '',
      positionInTheCompany: '',
    },
    handleSubmit,
    {
      userId: yup.number().required(),
      entity: yup.string().required(),
      firstName: yup.string().when('entity', {
        is: UserEntity.Individual,
        then: yup.string().required(),
      }),
      lastName: yup.string().when('entity', {
        is: UserEntity.Individual,
        then: yup.string().required(),
      }),
      companyName: yup.string().when('entity', {
        is: UserEntity.Company,
        then: yup.string().required(),
      }),
      relationToTheCompany: yup.string().required(),
      positionInTheCompany: yup.string().required(),
    }
  )

  return {
    formData,
    formErrors,
    onChange,
    onSubmit,
  }
}
