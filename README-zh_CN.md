English | [简体中文](./README-zh_CN.md)

随机生成英文，中文或日文人名。

# 安装
```bash
npm install chn-random-name
```

# 基本使用
```javascript
import { Name } from 'chn-random-name'
let name = new Name().Name
console.log(name) // 张家都
```

# 进阶使用
```javascript
import { Name } from 'chn-random-name'
let nameList = Array(10).fill('').map(item => {new Name({
  Gender: 'Female', // target gender of random name
  Type: 'ENG' // target name source
}).Name})
console.log(name)
/**
 * [
 '安娜·杰克逊',
 '贝利·戈麦斯',
 '玛格丽特·马丁内斯',
 '海莉·汤普森',
 '赖莉·威尔逊',
 '玛丽亚·希门尼斯',
 '阿什莉·克拉克',
 '凯莉·贝尔',
 '索菲亚·森',
 '佐伊·森'
 ]
 * **/
```

## 所有生成设置
```typescript
type NameProps = {
  Gender?: 'Male' | 'Female' // 指定性别；不同性别的生成结果有明显不同
  Target?: 'CHN' | 'ENG' // 目标结果，支持生成结果因为英文字母或汉字
  Type?: 'CHN' | 'ENG' | 'JPN' // 生成中文、英文或日文名
  NameOrder?: 'FMG' | 'GMF' // 强制更改名字的顺序，GiveName在前或在后
  NameOrderSplit?: string // 强制更改姓氏和名字间的间隔
  Normalize?: boolean // 生成的英文字母结果中，是否带有发音符号
  // 下面的支持强制更改FamilyName,GivenName,MiddleName,NameOrder或NameOrderSplit
  English?: NameTypeConstructor // 强制更改英文字母输出结果
  Chinese?: NameTypeConstructor // 强制更改汉字输出结果
}

```

## 例子
```typescript
let nameList = Array(10).fill('').map(item => {
  const tempName = new Name({
    Gender: 'Male',
    Type: 'CHN',
    Target: 'ENG',
    Chinese: {
      FamilyName: '张'
    },
    English: {
      NameOrderSplit: '-',
      FamilyName: 'Zhang',
    }
  })
  let returnValue = [tempName.Name]
  // 可以强制更改部分参数
  if (tempName.English) {
    tempName.English.Normalize = true
  }
  returnValue.push(tempName.Name)
  // 可以强制更改输出结果
  tempName.Target = 'CHN'
  returnValue.push(tempName.Name)
  return returnValue
})
console.log(nameList)
/*
*   [
      [ 'Jūnbó-Zhang', 'Junbo-Zhang', '张钧博' ],
      [ 'Hé-Zhang', 'He-Zhang', '张和' ],
      [ 'Hǎiwàng-Zhang', 'Haiwang-Zhang', '张海旺' ],
      [ 'Qìngjìng-Zhang', 'Qingjing-Zhang', '张庆靖' ],
      [ 'Guāntíng-Zhang', 'Guanting-Zhang', '张冠廷' ],
      [ 'Shàoxiáng-Zhang', 'Shaoxiang-Zhang', '张绍祥' ],
      [ 'Yǒngxiū-Zhang', 'Yongxiu-Zhang', '张永修' ],
      [ 'Qīngbō-Zhang', 'Qingbo-Zhang', '张清波' ],
      [ 'Pénghuī-Zhang', 'Penghui-Zhang', '张鹏晖' ],
      [ 'Shūhuái-Zhang', 'Shuhuai-Zhang', '张书怀' ]
    ]
*  */
```

# 数据源
## Chinese Names
https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%A7%93%E6%B0%8F%E6%8E%92%E5%90%8D
https://github.com/wainshine/Chinese-Names-Corpus

## English Names
https://web.archive.org/web/20081209221654if_/http://www.census.gov:80/genealogy/www/Top1000.xls
https://www.ssa.gov/cgi-bin/popularnames.cgi

## Japanese Names
https://myoji-yurai.net/prefectureRanking.htm?prefecture=%E5%85%A8%E5%9B%BD&page=0
https://github.com/willnet/gimei
