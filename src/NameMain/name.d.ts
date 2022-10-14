type NameProps = {
  GivenName?: string
  FamilyName?: string
  MiddleName?: string
  Gender?: 'Male' | 'Female'
  Distribution?: 'Normal' | 'Random'
  Target?: 'CHN' | 'ENG'
  Type?: 'CHN' | 'ENG' | 'JPN'
  NameOrder?: 'FMG' | 'GMF'
  NameOrderSplit?: string
  Normalize?: boolean
  English?: NameTypeConstructor
  Chinese?: NameTypeConstructor
}

type NameType = {
  GivenName: string
  FamilyName: string
  MiddleName: string | undefined
  NameOrderSplit?: string
  NameOrder?: 'FMG' | 'GMF'
  Normalize?: boolean
}

type NameTypeConstructor = {
  GivenName?: string
  FamilyName?: string
  MiddleName?: string | undefined
  NameOrderSplit?: string
  NameOrder?: 'FMG' | 'GMF'
  Normalize?: boolean
}

type NameReturnType = {
  Chinese?: NameType
  English?: NameType
}

export { NameType, NameProps, NameReturnType }
