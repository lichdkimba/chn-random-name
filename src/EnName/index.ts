import { EnFamilyNameData } from './FamilyName'

const generate_EN_random_name = (config: NameProps): NameType => {
  let FamilyName = ''
  const MiddleName = ''
  let GivenName = ''
  // 生成姓氏
  let temp_max: number = EnFamilyNameData[EnFamilyNameData.length - 1][1]
  temp_max = Math.random() * temp_max
  EnFamilyNameData.some((item) => {
    if (temp_max >= item[1]) {
      return false
    }
    FamilyName = item[0]
    return true
  })
  return {
    FamilyName,
    MiddleName,
    GivenName,
  }
}

export { generate_EN_random_name }
