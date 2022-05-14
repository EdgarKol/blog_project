import axios from 'axios';

const endpoint = "http://localhost:3000/comments/"

describe('get comment by ID', () => {
    beforeAll(() =>{

    })
    it('should return comment by ID', async () =>{
        const response = await axios.get(
            endpoint + '/a3322a29-dc6b-4e0f-8705-33cadfa02778')
            const data = response.data
            expect(response.data).toHaveProperty('id');
            expect(data.id).toEqual('a3322a29-dc6b-4e0f-8705-33cadfa02778')
            return
    })
    afterAll(() =>{
        //after test package
    })
})