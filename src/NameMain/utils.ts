export const GetFromRandomArray = (array: [string, number][]): string => {
  let temp_max: number = array[array.length - 1][1]
  temp_max = Math.random() * temp_max
  let result = ''
  array.some((item) => {
    if (temp_max >= item[1]) {
      return false
    }
    result = item[0]
    return true
  })
  return result
}

export const GetFromNormalArray = (array: string[]): string => {
  let temp_max: number = array.length - 1
  temp_max = Math.floor(Math.random() * temp_max)
  return array[temp_max]
}
