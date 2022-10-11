# Install
```bash
npm install chn-random-name
```

# Basic Usage
```javascript
import { Name } from 'chn-random-name'
let name = new Name().Name
console.log(name) // 张家都
```

# Advanced Usage
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

## All Name Configs
```typescript
type NameProps = {
  Gender?: 'Male' | 'Female' // assign gender of target name; default: random
  Target?: 'CHN' | 'ENG' // target language of .Name attribute; default: CHN
  Type?: 'CHN' | 'ENG' | 'JPN' // assign type of name; default: CHN
  NameOrder?: 'FMG' | 'GMF' // overwrite name order; Family Name in front or Given Name in fron
  NameOrderSplit?: string // Spliter between Family Name and GivenName
  Normalize?: boolean // if keep variant of English Character
  // below support FamilyName,GivenName,MiddleName,NameOrder & NameOrderSplit
  English?: NameTypeConstructor // overWrite Name setting of target ENG return
  Chinese?: NameTypeConstructor // overWrite Name setting of target CHN return
}

```

## Example
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
  // Can overWrite some attribute of language
  if (tempName.English) {
    tempName.English.Normalize = true
  }
  returnValue.push(tempName.Name)
  // Can change target language after spawn
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

# Credit (Data Sources)
## Chinese Names
https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%A7%93%E6%B0%8F%E6%8E%92%E5%90%8D
https://github.com/wainshine/Chinese-Names-Corpus

## English Names
https://web.archive.org/web/20081209221654if_/http://www.census.gov:80/genealogy/www/Top1000.xls
https://www.ssa.gov/cgi-bin/popularnames.cgi

## Japanese Names
https://myoji-yurai.net/prefectureRanking.htm?prefecture=%E5%85%A8%E5%9B%BD&page=0
https://github.com/willnet/gimei
