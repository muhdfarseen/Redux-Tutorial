import { expect, test, describe, it } from 'vitest'
import { sum, sub } from './demo'

// test('Caluculating sum', ()=>{
//     expect(sum(1,2)).toBe(3)
//     expect(sum(1,3)).toBe(4)
//     expect(sum(1,4)).toBe(5)
//     expect(sum(1,5)).toBe(6)
// })


describe('Arithmetic operation Functions', ()=>{
    it('sum',()=>{
        expect(sum(1,2)).toBe(3)
        expect(sum(1,3)).toBe(4)
        expect(sum(1,4)).toBe(5)
    })

    it('sub',()=>{
        expect(sub(1,2)).toBe(-1)
        expect(sub(1,3)).toBe(-2)
        expect(sub(1,4)).toBe(-3)
    })
})
