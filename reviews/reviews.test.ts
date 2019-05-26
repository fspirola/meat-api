import 'jest'
import * as request from 'supertest'
import {enviroment} from '../common/enviroment'

let address: string = (<any>global).address

test('get /reviewa', ()=>{
    return request(address)
        .get('/reviews')
        .then(response=>{
            expect(response.status).toBe(200)
            expect(response.body.items).toBeInstanceOf(Array)
        }).catch(fail)
})

test('post /reviews', ()=>{
    return request(address)
        .post('/reviews')
        .send({
            "date": "2019-05-20T21:32:10",
	        "rating": 5,
	        "comments": "The Best!",
	        "user": "5cd897a4734d8559b4d9955d",
	        "restaurant": "5cce089ac88be852800c0749"
        })
        .then(response=>{
            expect(response.status).toBe(200)
            expect(response.body._id).toBeDefined()
            expect(response.body.comments).toBe('The Best!')
        }).catch(fail)
})

test('get /reviews/aaaaa - not found', ()=>{
    return request(address)
       .get('/reviews/aaaaa')
       .then(response=>{
        expect(response.status).toBe(404)
       }).catch(fail)
  })