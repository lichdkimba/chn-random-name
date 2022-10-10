import { JpFamilyNameData } from './FamilyName'
import { GetFromNormalArray, GetFromRandomArray } from '../NameMain/utils'
import { JpGivenNameFemale } from './GivenNameFemale'
import { JpGivenNameMale } from './GivenNameMale'
import type { NameProps, NameReturnType } from '../NameMain/name'

const generate_JP_random_name = (config: NameProps): NameReturnType => {
  let FamilyName = ''
  const MiddleName = undefined
  let GivenName = ''
  let EnFamilyName = ''
  const EnMiddleName = undefined
  let EnGivenName = ''
  // 首字母大写
  const titleCase = (string: string) => {
    if (string.length >= 2) {
      return string[0].toUpperCase() + string.slice(1).toLowerCase()
    }
    return string
  }
  // 生成姓氏
  const tempFamilyName = GetFromRandomArray(JpFamilyNameData)
  FamilyName = tempFamilyName[0]
  EnFamilyName = titleCase(tempFamilyName[1])
  let tempGivenName: string[] = ['', '']
  if (config.Gender === 'Female') {
    tempGivenName = GetFromNormalArray(JpGivenNameFemale)
  }
  if (config.Gender === 'Male') {
    tempGivenName = GetFromNormalArray(JpGivenNameMale)
  }
  GivenName = tempGivenName[0]
  EnGivenName = titleCase(tempGivenName[1])
  return {
    Chinese: {
      FamilyName,
      MiddleName,
      GivenName,
      NameOrderSplit: '',
    },
    English: {
      FamilyName: EnFamilyName,
      MiddleName: EnMiddleName,
      GivenName: EnGivenName,
      NameOrderSplit: ' ',
    },
  }
}

export { generate_JP_random_name }
