import axios from 'axios';

const endpoint = "http://localhost:3000/comments/"

describe('get comment by ID', () => {
    beforeAll(() =>{

    })
    it('should return comment by ID', async () =>{
        const response = await axios.get(
            endpoint + '/68e22066-fa4a-4681-bc55-386c1dc746a5')
            const data = response.data
            expect(response.data).toHaveProperty('id');
            expect(data.id).toEqual('68e22066-fa4a-4681-bc55-386c1dc746a5')
            return
    })
    afterAll(() =>{
        //after test package
    })
})