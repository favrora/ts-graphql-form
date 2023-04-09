import { UserEntity } from '@/data/enums/UserEntity'
import { useMemo } from 'react'

export const useUserEntityOptions = (): UserEntity[] => {
  return useMemo(() => {
    return [UserEntity.Company, UserEntity.Individual]
  }, [])
}
