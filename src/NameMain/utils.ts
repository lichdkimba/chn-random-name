function GetFromRandomArray(array: [string[], number][]): string[]
function GetFromRandomArray(array: [string, number][]): string
function GetFromRandomArray(
  array: [string[] | string, number][]
): string | string[] {
  let temp_max: number = array[array.length - 1][1]
  temp_max = Math.random() * temp_max
  let result: string | string[] = ''
  array.some((item) => {
    if (temp_max >= item[1]) {
      return false
    }
    result = item[0]
    return true
  })
  return result
}
function GetFromNormalArray(array: string[]): string
function GetFromNormalArray(array: string[][]): string[]
function GetFromNormalArray(array: string[] | string[][]): string | string[] {
  let temp_max: number = array.length - 1
  temp_max = Math.floor(Math.random() * temp_max)
  return array[temp_max]
}

// 首字母大写
const NameUpperCase = (string: string): string => {
  if (string.length >= 2) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
  }
  return string
}

export { GetFromNormalArray, GetFromRandomArray, NameUpperCase }
