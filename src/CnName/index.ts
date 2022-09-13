import { CnFamilyNameData } from './FamilyName'
import { CnGivenNameFemale, CnSingleGivenNameFemale } from './GivenNameFemale'
import { CnGivenNameMale, CnSingleGivenNameMale } from './GivenNameMale'

const generate_CN_random_name = (config: NameProps): NameType => {
  let FamilyName = ''
  let MiddleName = ''
  let GivenName = ''
  // 生成姓氏
  let temp_max: number = CnFamilyNameData[CnFamilyNameData.length - 1][1]
  temp_max = Math.random() * temp_max
  CnFamilyNameData.some((item) => {
    if (temp_max >= item[1]) {
      return false
    }
    FamilyName = item[0]
    return true
  })
  if (config.Gender === 'Female') {
    // 决定单字名或双字名
    if (Math.random() >= 0.1) {
      const temp_random = Math.floor(Math.random() * CnSingleGivenNameFemale.length)
      GivenName = CnSingleGivenNameFemale[temp_random]
    } else {
      const temp_random = Math.floor(Math.random() * CnGivenNameFemale.length)
      GivenName = CnGivenNameFemale[temp_random]
    }
  }
  if (config.Gender === 'Male') {
    if (Math.random() >= 0.5) {
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
