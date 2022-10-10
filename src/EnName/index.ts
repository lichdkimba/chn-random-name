import { EnFamilyNameData } from './FamilyName'
import { GetFromRandomArray } from '../NameMain/utils'
import { EnGivenNameFemale } from './GivenNameFemale'
import { EnGivenNameMale } from './GivenNameMale'
import type { NameProps } from '../NameMain/name'
import { NameReturnType } from '../NameMain/name'

const generate_EN_random_name = (config: NameProps): NameReturnType => {
  let FamilyName: string[] = []
  const MiddleName = undefined
  let GivenName: string[] = []
  FamilyName = GetFromRandomArray(EnFamilyNameData)
  if (config.Gender === 'Female') {
    GivenName = GetFromRandomArray(EnGivenNameFemale)
  }
  if (config.Gender === 'Male') {
    GivenName = GetFromRandomArray(EnGivenNameMale)
  }

  // 生成姓氏

  const Chinese = {
    GivenName: GivenName[1],
    MiddleName: undefined,
    FamilyName: FamilyName[1],
    NameOrderSplit: '·',
  }
  const English = {
    GivenName: GivenName[0],
    MiddleName: undefined,
    FamilyName: FamilyName[0],
    NameOrderSplit: ' ',
  }
  return {
    Chinese: Chinese,
    English: English,
  }
}

export { generate_EN_random_name }
