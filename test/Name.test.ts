import {Name} from "../src";

test('generate Female 100', () => {
  let names = []
  for (let i = 0; i < 100; i++) {
    let name = new Name({
      Gender: 'Female'
    })
    names.push(name.Name)
    name.Target = 'ENG'
    names.push(name.Name)
    expect(typeof name.Name).toBe('string')
  }
  console.log('generate Female 100',names)
})

test('generate Male 100', () => {
  let names = []
  for (let i = 0; i < 100; i++) {
    let name = new Name({
      Gender: 'Male'
    }).Name
    names.push(name)
    expect(typeof name).toBe('string')
  }
  console.log('generate Male 100',names)
})

test('generate EN Female 100', () => {
  let names = []
  for (let i = 0; i < 100; i++) {
    let name = new Name({
      Gender: 'Female',
      Type: 'ENG'
    })
    names.push(name.Name)
    name.Target = 'ENG'
    names.push(name.Name)
    expect(typeof name.Name).toBe('string')
  }
  console.log('generate EN Female 100',names)
})

test('generate EN Male 100', () => {
  let names = []
  for (let i = 0; i < 100; i++) {
    let name = new Name({
      Gender: 'Male',
      Type: 'ENG'
    }).Name
    names.push(name)
    expect(typeof name).toBe('string')
  }
  console.log('generate EN Male 100', names)
})

test('generate JP Female 100', () => {
  let names = []
  for (let i = 0; i < 100; i++) {
    let name = new Name({
      Gender: 'Female',
      Type: 'JPN'
    })
    names.push(name.Name)
    expect(typeof name.Name).toBe('string')
  }
  console.log('generate JP Female 100',names)
})

test('generate JP Male 100', () => {
  let names = []
  for (let i = 0; i < 100; i++) {
    let name = new Name({
      Gender: 'Male',
      Type: 'JPN'
    })
    names.push(name.Name)
    name.Target = 'ENG'
    names.push(name.Name)
    expect(typeof name.Name).toBe('string')
  }
  console.log('generate JP Male 100', names)
})

test('other constructor', () => {
  let names = []
  for (let i = 0; i < 10; i++) {
    let name = new Name({
      Gender: 'Male',
      Type: 'CHN',
      English: {
        NameOrderSplit: '-',
        Normalize: true,
        NameOrder: 'FMG',
        FamilyName: 'Zhang'
      },
      Chinese: {
        FamilyName: '张',
      }
    })
    names.push(name.Name)
    name.Target = 'ENG'
    names.push(name.Name)
    expect(typeof name.Name).toBe('string')
  }
  console.log('generate JP Male 100', names)
})
