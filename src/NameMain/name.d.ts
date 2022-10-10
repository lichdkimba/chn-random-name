type NameProps = {
  GivenName?: string
  FamilyName?: string
  MiddleName?: string
  Gender?: 'Male' | 'Female'
  Target?: 'CHN' | 'ENG'
  Type?: 'CHN' | 'ENG' | 'JPN'
  NameOrder?: 'FMG' | 'GMF'
  NameOrderSplit?: string
  English?: NameType
  Chinese?: NameType
}

type NameType = {
  GivenName: string
  FamilyName: string
  MiddleName: string | undefined
  NameOrderSplit?: string
  NameOrder?: 'FMG' | 'GMF'
}

type NameReturnType = {
  Chinese?: NameType
  English?: NameType
}

export { NameType, NameProps, NameReturnType }
