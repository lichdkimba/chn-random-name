// 人名类
import { generate_CN_random_name } from '../CnName'
import { generate_EN_random_name } from '../EnName'
import { generate_JP_random_name } from '../JpName'
import type { NameProps, NameType } from './name'
import { NormalizeEnglish } from "./utils";

class Name {
  public Type: 'CHN' | 'ENG' | 'JPN'
  public Target: 'CHN' | 'ENG'
  public Gender: 'Male' | 'Female'
  public Chinese: NameType | undefined
  public English: NameType | undefined
  private readonly ForceNormalize: boolean | undefined
  private readonly ForceNameOrder: 'FMG' | 'GMF' | undefined
  private readonly ForceNameOrderSplit: string | undefined
  constructor(name: NameProps) {
    this.Target = 'CHN'
    if (name.Target) {
      this.Target = name.Target
    }
    // 默认参数
    this.ForceNameOrderSplit = undefined
    this.ForceNameOrder = undefined
    this.ForceNormalize = undefined
    this.Type = 'CHN'
    this.Gender = Math.random() >= 0.5 ? 'Female' : 'Male'
    if (name.Gender) {
      this.Gender = name.Gender
    }
    if (name.Type) {
      this.Type = name.Type
    }
    if (name.NameOrder) {
      this.ForceNameOrder = name.NameOrder
    }
    if (name.Normalize) {
      this.ForceNormalize = name.Normalize
    }
    if (this.Type === 'CHN') {
      const temp_name = generate_CN_random_name({
        Gender: this.Gender,
      })
      this.Chinese = temp_name.Chinese
      this.English = temp_name.English
    }
    if (this.Type === 'ENG') {
      const temp_name = generate_EN_random_name({
        Gender: this.Gender,
      })
      this.Chinese = temp_name.Chinese
      this.English = temp_name.English
    }
    if (this.Type === 'JPN') {
      const temp_name = generate_JP_random_name({
        Gender: this.Gender,
      })
      this.Chinese = temp_name.Chinese
      this.English = temp_name.English
    }

    this.Chinese = {
      ...(this.Chinese as NameType),
      ...(name.Chinese as NameType),
    }
    this.English = {
      ...(this.English as NameType),
      ...(name.English as NameType),
    }
  }

  public get Normalize(): boolean | undefined {
    if (typeof this.ForceNormalize !== 'undefined') {
      return this.ForceNormalize
    }
    let returnValue: boolean | undefined = false
    if (this.Target === 'CHN') {
      returnValue = this.Chinese?.Normalize
    }
    if (this.Target === 'ENG') {
      returnValue = this.English?.Normalize
    }
    return returnValue ? returnValue : false
  }

  public get NameOrder(): string {
    if (typeof this.ForceNameOrder !== 'undefined') {
      return this.ForceNameOrder
    }
    let returnValue: string | undefined = 'FMG'
    if (this.Target === 'CHN') {
      returnValue = this.Chinese?.NameOrder
    }
    if (this.Target === 'ENG') {
      returnValue = this.English?.NameOrder
    }
    if (returnValue) {
      return returnValue
    }
    return 'FMG'
  }

  public get FamilyName(): string {
    let returnValue: string | undefined = ''
    if (this.Target === 'CHN') {
      returnValue = this.Chinese?.FamilyName
    }
    if (this.Target === 'ENG') {
      returnValue = this.English?.FamilyName
    }
    if (returnValue) {
      return returnValue
    }
    return ''
  }
  public get MiddleName(): string | undefined {
    let returnValue: string | undefined = ''
    if (this.Target === 'CHN') {
      returnValue = this.Chinese?.MiddleName
    }
    if (this.Target === 'ENG') {
      returnValue = this.English?.MiddleName
    }
    return returnValue
  }
  public get GivenName(): string {
    let returnValue: string | undefined = ''
    if (this.Target === 'CHN') {
      returnValue = this.Chinese?.GivenName
    }
    if (this.Target === 'ENG') {
      returnValue = this.English?.GivenName
    }
    if (returnValue) {
      return returnValue
    }
    return ''
  }

  public get NameOrderSplit(): string {
    if (typeof this.ForceNameOrderSplit !== 'undefined') {
      return this.ForceNameOrderSplit
    }
    let returnValue: string | undefined = ''
    if (this.Target === 'CHN') {
      returnValue = this.Chinese?.NameOrderSplit
    }
    if (this.Target === 'ENG') {
      returnValue = this.English?.NameOrderSplit
    }
    return returnValue ? returnValue : ''
  }
  public get Name(): string {
    let returnName = ''
    if (this.NameOrder === 'FMG') {
      if (this.MiddleName) {
        returnName = `${this.FamilyName}${this.NameOrderSplit}${this.MiddleName}${this.NameOrderSplit}${this.GivenName}`
      } else {
        returnName = `${this.FamilyName}${this.NameOrderSplit}${this.GivenName}`
      }
    }
    if (this.NameOrder === 'GMF') {
      if (this.MiddleName) {
        returnName = `${this.GivenName}${this.NameOrderSplit}${this.MiddleName}${this.NameOrderSplit}${this.FamilyName}`
      } else {
        returnName = `${this.GivenName}${this.NameOrderSplit}${this.FamilyName}`
      }
    }

    if (this.Normalize) {
      returnName = NormalizeEnglish(returnName)
    }
    return returnName
  }

  public get Names(): { Chinese: string, English: string } {
    const tempTarget = this.Target
    this.Target = 'CHN'
    const returnValue = {
      Chinese: '',
      English: ''
    }
    returnValue.Chinese = this.Name
    this.Target = 'ENG'
    returnValue.English = this.Name
    this.Target = tempTarget
    return returnValue
  }
}

export { Name }
