import { expect, test, describe, it } from 'vitest'
import { BASEURL } from  './constants'

describe('variable right or wrong',()=>{
    it('Base Url',()=>{
        expect(BASEURL).toBe("https://fakestoreapi.com")
    })
})