import { EnFamilyNameData } from './FamilyName'
import { GetFromRandomArray, NameUpperCase } from '../NameMain/utils'
import { EnGivenNameFemale } from './GivenNameFemale'
import { EnGivenNameMale } from './GivenNameMale'
import type { NameProps, NameType } from "../NameMain/name";
import { NameReturnType } from '../NameMain/name'
import { Name } from "../NameMain";

const generate_EN_random_name = (config: NameProps): NameReturnType => {
  let FamilyName: string[] = []
  let GivenName: string[] = []
  FamilyName = GetFromRandomArray(EnFamilyNameData)
  if (config.Gender === 'Female') {
    GivenName = GetFromRandomArray(EnGivenNameFemale)
  }
  if (config.Gender === 'Male') {
    GivenName = GetFromRandomArray(EnGivenNameMale)
  }

  // 生成姓氏

  const Chinese: NameType = {
    GivenName: NameUpperCase(GivenName[1]),
    MiddleName: undefined,
    FamilyName: NameUpperCase(FamilyName[1]),
    NameOrderSplit: '·',
    NameOrder: 'FMG',
  }
  const English: NameType = {
    GivenName: NameUpperCase(GivenName[0]),
    MiddleName: undefined,
    FamilyName: NameUpperCase(FamilyName[0]),
    NameOrderSplit: ' ',
    NameOrder: 'FMG',
  }
  return {
    Chinese: Chinese,
    English: English,
  }
}

export { generate_EN_random_name }
