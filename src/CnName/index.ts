import { CnFamilyNameData } from './FamilyName'
import { CnGivenNameFemale, CnSingleGivenNameFemale } from './GivenNameFemale'
import { CnGivenNameMale, CnSingleGivenNameMale } from './GivenNameMale'
import { GetFromRandomArray } from '../NameMain/utils'
import type { NameProps, NameType } from '../NameMain/name'

const generate_CN_random_name = (config: NameProps): NameType => {
  let FamilyName = ''
  const MiddleName = ''
  let GivenName = ''
  // 生成姓氏
  FamilyName = GetFromRandomArray(CnFamilyNameData)
  if (config.Gender === 'Female') {
    // 决定单字名或双字名 单字名约占 10%
    if (Math.random() >= 0.9) {
      const temp_random = Math.floor(
        Math.random() * CnSingleGivenNameFemale.length
      )
      GivenName = CnSingleGivenNameFemale[temp_random]
    } else {
      const temp_random = Math.floor(Math.random() * CnGivenNameFemale.length)
      GivenName = CnGivenNameFemale[temp_random]
    }
  }
  if (config.Gender === 'Male') {
    if (Math.random() >= 0.9) {
      const temp_random = Math.floor(
        Math.random() * CnSingleGivenNameMale.length
      )
      GivenName = CnSingleGivenNameMale[temp_random]
    } else {
      const temp_random = Math.floor(Math.random() * CnGivenNameMale.length)
      GivenName = CnGivenNameMale[temp_random]
    }
  }
  return {
    FamilyName,
    MiddleName,
    GivenName,
  }
}

export { generate_CN_random_name }
