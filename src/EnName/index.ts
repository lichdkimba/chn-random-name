import { EnFamilyNameData } from './FamilyName'
import { GetFromRandomArray } from '../NameMain/utils'
import { EnGivenNameFemale } from './GivenNameFemale'
import { EnGivenNameMale } from './GivenNameMale'

const generate_EN_random_name = (config: NameProps): NameType => {
  let FamilyName = ''
  const MiddleName = ''
  let GivenName = ''
  // 生成姓氏
  FamilyName = GetFromRandomArray(EnFamilyNameData)
  if (config.Gender === 'Female') {
    GivenName = GetFromRandomArray(EnGivenNameFemale)
  }
  if (config.Gender === 'Male') {
    GivenName = GetFromRandomArray(EnGivenNameMale)
  }

  return {
    FamilyName,
    MiddleName,
    GivenName,
  }
}

export { generate_EN_random_name }
