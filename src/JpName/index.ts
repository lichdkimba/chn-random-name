import { JpFamilyNameData } from './FamilyName'
import { GetFromNormalArray, GetFromRandomArray } from "../NameMain/utils";
import { JpGivenNameFemale } from './GivenNameFemale'
import { JpGivenNameMale } from './GivenNameMale'

const generate_JP_random_name = (config: NameProps): NameType => {
  let FamilyName = ''
  const MiddleName = ''
  let GivenName = ''
  // 生成姓氏
  FamilyName = GetFromRandomArray(JpFamilyNameData)
  if (config.Gender === 'Female') {
    GivenName = GetFromNormalArray(JpGivenNameFemale)
  }
  if (config.Gender === 'Male') {
    GivenName = GetFromNormalArray(JpGivenNameMale)
  }

  return {
    FamilyName,
    MiddleName,
    GivenName,
  }
}

export { generate_JP_random_name }
