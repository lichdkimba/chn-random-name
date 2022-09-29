type NameProps = {
  GivenName?: string
  FamilyName?: string
  MiddleName?: string
  Gender?: 'Male' | 'Female'
  Type?: 'CHN' | 'ENG' | 'JPN'
  NameOrder?: 'FMG' | 'GMF'
  NameOrderSplit?: ''
  English?: NameType
  Chinese?: NameType
}

type NameType = {
  GivenName: string
  FamilyName: string
  MiddleName: string
}

type NameReturnType = {
  Chinese?: NameType
  English?: NameType
}

export { NameType, NameProps, NameReturnType }
