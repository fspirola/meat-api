import 'jest'
import * as request from 'supertest'
import {enviroment} from '../common/enviroment'

let address: string = (<any>global).address

test('get /restaurants', ()=>{
    return request(address)
        .get('/restaurants')
        .then(response=>{
            expect(response.status).toBe(200)
            expect(response.body.items).toBeInstanceOf(Array)
        }).catch(fail)
})

test('post /restaurants', ()=>{
    return request(address)
        .post('/users')
        .send({
            name: 'Fries Tomatoes'
        })
        .then(response=>{
            expect(response.status).toBe(200)
            expect(response.body._id).toBeDefined()
            expect(response.body.name).toBe('Fries Tomatoes')
        }).catch(fail)
})

test('get /restaurants/aaaaa - not found', ()=>{
    return request(address)
       .get('/restaurants/aaaaa')
       .then(response=>{
        expect(response.status).toBe(404)
       }).catch(fail)
  })