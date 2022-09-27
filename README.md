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
