type NameConfig = {
}

type NameProps = {
  GivenName?: string,
  FamilyName?: string,
  MiddleName?: string,
  Gender?: 'Male' | 'Female',
  Type?: 'CHN',
  NameOrder?: 'FMG' | 'GMF',
  NameOrderSplit?: ''
}

type NameType = {
  GivenName: string,
  FamilyName: string,
  MiddleName: string,
}
