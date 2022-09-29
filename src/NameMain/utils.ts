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
export { GetFromNormalArray, GetFromRandomArray }
