function GetFromRandomArray(array: [string[], number][], type? : 'Normal' | 'Random'): string[]
function GetFromRandomArray(array: [string, number][], type? : 'Normal' | 'Random'): string
function GetFromRandomArray(
  array: [string[] | string, number][],
  type : 'Normal' | 'Random' = 'Normal'
): string | string[] {
    if (type === 'Random') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return GetFromNormalArray(array.map(item => item[0]))
    }
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

// 转为普通英文字母
const NormalizeEnglish = (string: string): string => {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export {
  GetFromNormalArray,
  GetFromRandomArray,
  NameUpperCase,
  NormalizeEnglish,
}
