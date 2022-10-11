import {Name} from "../src";

test('readMe', () => {
  let name = new Name({}).Name
  console.log(name)
  let nameList: any[] = Array(10).fill('').map(item => {
    return new Name({
    Gender: 'Female', // target gender of random name
    Type: 'ENG' // target name source
  }).Name
  })
  console.log(nameList)

  nameList = Array(10).fill('').map(item => {
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
    if (tempName.English) {
      tempName.English.Normalize = true
    }
    returnValue.push(tempName.Name)

    tempName.Target = 'CHN'
    returnValue.push(tempName.Name)
    return returnValue
  })
  console.log(nameList)

})
