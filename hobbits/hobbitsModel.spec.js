const request = require('supertest');

const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
    describe('insert()', () => {
        afterEach(async () => {
            await db('hobbits').truncate()
        })
        it('should insert the provided hobbit into the db', async () => {
            const hobbit = await Hobbits.insert({name: 'sam'})
            expect(hobbit.name).toBe('sam')
        })
        it('should insert the provided hobbit into the db', async () => {
            await Hobbits.insert({name: 'test1'})
            await Hobbits.insert({name: 'test2'})
            
            const hobbits = await db('hobbits')
            expect(hobbits).toHaveLength(2) 
        })  
          
    })
    describe('remove()', () => {
        afterEach(async () => {
          await db('hobbits').truncate();
        });
        it('should fail to remove if there is nothing to remove', async () => {
          await Hobbits.insert({ name: 'test2'});
          const result = await Hibbits.remove(2);
          expect(result).toBe(0);
        })
        it('should return id if successfully removed', async () => {
          await Hobbits.insert({ name: 'test2' });
          const result = await Hobbits.remove(2);
          expect(result).toBe(2);
        })
      })  
})  