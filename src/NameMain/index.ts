// 人名类
import { generate_CN_random_name } from '../CnName'
import { generate_EN_random_name } from "../EnName";

class Name {
  public GivenName: string
  public FamilyName: string
  public MiddleName: string | undefined
  public Type: 'CHN' | 'ENG'
  public Gender: 'Male' | 'Female'
  public Name: string
  private readonly NameOrder: 'FMG' | 'GMF'
  private readonly NameOrderSplit: string
  constructor(name: NameProps & NameConfig) {
    // 默认参数
    this.GivenName = ''
    this.FamilyName = ''
    this.Name = 'test'
    this.NameOrderSplit = ''
    this.NameOrder = 'FMG'
    this.Type = 'CHN'
    this.Gender = Math.random() >= 0.5 ? 'Female' : 'Male'
    if (name.Gender) {
      this.Gender = name.Gender
    }
    if (name.Type) {
      this.Type = name.Type
    }
    if (name.NameOrder) {
      this.NameOrder = name.NameOrder
    }
    if (this.Type === 'CHN') {
      const temp_name = generate_CN_random_name({
        Gender: this.Gender,
      })
      this.GivenName = temp_name.GivenName
      this.FamilyName = temp_name.FamilyName
      this.MiddleName = temp_name.MiddleName
    }
    if (this.Type === 'ENG') {
      if (typeof name.NameOrderSplit === 'undefined') {
        this.NameOrderSplit = '·'
      }
      if (typeof name.NameOrder === 'undefined') {
        this.NameOrder = 'GMF'
      }
      const temp_name = generate_EN_random_name({
        Gender: this.Gender,
      })
      this.GivenName = temp_name.GivenName
      this.FamilyName = temp_name.FamilyName
      this.MiddleName = temp_name.MiddleName
    }
    if (name.GivenName) {
      this.GivenName = name.GivenName
    }
    if (name.FamilyName) {
      this.FamilyName = name.FamilyName
    }
    if (name.MiddleName) {
      this.MiddleName = name.MiddleName
    }

    if (this.NameOrder === 'FMG') {
      if (this.MiddleName) {
        this.Name = `${this.FamilyName}${this.NameOrderSplit}${this.MiddleName}${this.NameOrderSplit}${this.GivenName}`
      } else {
        this.Name = `${this.FamilyName}${this.NameOrderSplit}${this.GivenName}`
      }
    }
    if (this.NameOrder === 'GMF') {
      if (this.MiddleName) {
        this.Name = `${this.GivenName}${this.NameOrderSplit}${this.MiddleName}${this.NameOrderSplit}${this.FamilyName}`
      } else {
        this.Name = `${this.GivenName}${this.NameOrderSplit}${this.FamilyName}`
      }
    }
  }
}

export { Name }
