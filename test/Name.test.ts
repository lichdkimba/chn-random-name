import {Name} from "../src";

test('generate Female 100', () => {
  let names = []
  for (let i = 0; i < 100; i++) {
    let name = new Name({
      Gender: 'Female'
    }).Name
    names.push(name)
    expect(typeof name).toBe('string')
  }
  console.log(names)
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
  console.log(names)
})

test('generate EN Female 100', () => {
  let names = []
  for (let i = 0; i < 100; i++) {
    let name = new Name({
      Gender: 'Female',
      Type: 'ENG'
    }).Name
    names.push(name)
    expect(typeof name).toBe('string')
  }
  console.log(names)
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
  console.log(names)
})

//
// test('toString', () => {
//   expect(new Num(5).toString()).toBe('5')
// })
//
// test('addAll', () => {
//   expect(Num.addAll([new Num(5), new Num(2), new Num(13)]).val()).toBe(20)
// })
