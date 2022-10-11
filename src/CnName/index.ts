import { CnFamilyNameData } from './FamilyName'
import { CnGivenNameFemale, CnSingleGivenNameFemale } from './GivenNameFemale'
import { CnGivenNameMale, CnSingleGivenNameMale } from './GivenNameMale'
import { GetFromNormalArray, GetFromRandomArray, NameUpperCase } from "../NameMain/utils";
import type { NameProps, NameReturnType } from '../NameMain/name'

const generate_CN_random_name = (config: NameProps): NameReturnType => {
  let FamilyName: string[] = []
  const MiddleName = undefined
  let GivenName: string[] = []
  // 生成姓氏
  FamilyName = GetFromRandomArray(CnFamilyNameData)
  if (config.Gender === 'Female') {
    // 决定单字名或双字名 单字名约占 10%
    if (Math.random() >= 0.9) {
      GivenName = GetFromNormalArray(CnSingleGivenNameFemale)
    } else {
      GivenName = GetFromNormalArray(CnGivenNameFemale)
    }
  }
  if (config.Gender === 'Male') {
    if (Math.random() >= 0.9) {
      GivenName = GetFromNormalArray(CnSingleGivenNameMale)
    } else {
      GivenName = GetFromNormalArray(CnGivenNameMale)
    }
  }
  return {
    Chinese: {
      FamilyName: NameUpperCase(FamilyName[0]),
      MiddleName,
      GivenName: NameUpperCase(GivenName[0]),
      NameOrder: 'FMG',
    },
    English: {
      FamilyName: NameUpperCase(FamilyName[1]),
      MiddleName,
      GivenName: NameUpperCase(GivenName[1]),
      NameOrder: 'GMF',
      NameOrderSplit: ' ',
    },
  }
}

export { generate_CN_random_name }
