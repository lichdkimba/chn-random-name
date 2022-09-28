# Install
```bash
npm install chn-random-name
```

# Basic Usage
```javascript
import { Name } from 'chn-random-name'
let name = new Name().Name
console.log(name)
```

# Advanced Usage
```javascript
import { Name } from 'chn-random-name'
let name = new Name({
  Gender: 'Female', // target gender of random name
  Type: 'ENG' // target name source
}).Name
console.log(name)
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
