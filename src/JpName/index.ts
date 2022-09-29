import { JpFamilyNameData } from './FamilyName'
import { GetFromNormalArray, GetFromRandomArray } from '../NameMain/utils'
import { JpGivenNameFemale } from './GivenNameFemale'
import { JpGivenNameMale } from './GivenNameMale'
import type { NameProps, NameReturnType } from '../NameMain/name'

const generate_JP_random_name = (config: NameProps): NameReturnType => {
  let FamilyName = ''
  const MiddleName = ''
  let GivenName = ''
  let EnFamilyName = ''
  const EnMiddleName = ''
  let EnGivenName = ''
  // 生成姓氏
  const tempFamilyName = GetFromRandomArray(JpFamilyNameData)
  FamilyName = tempFamilyName[0]
  EnFamilyName = tempFamilyName[1]
  let tempGivenName: string[] = ['', '']
  if (config.Gender === 'Female') {
    tempGivenName = GetFromNormalArray(JpGivenNameFemale)
  }
  if (config.Gender === 'Male') {
    tempGivenName = GetFromNormalArray(JpGivenNameMale)
  }
  GivenName = tempGivenName[0]
  EnGivenName = tempGivenName[1]
  return {
    Chinese: {
      FamilyName,
      MiddleName,
      GivenName,
    },
    English: {
      FamilyName: EnFamilyName,
      MiddleName: EnMiddleName,
      GivenName: EnGivenName,
    },
  }
}

export { generate_JP_random_name }
