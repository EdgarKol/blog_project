import axios from 'axios';

const endpoint = 'http://localhost:3000/users/';

describe('get post by ID', () => {
beforeAll(() => {
// käivitatakse enne testi paki
})

    it('should return post by ID', async () => {
        const response = await axios.get(
            endpoint + '/60ea743e-4ca8-4edc-ba57-16e29d633c69'
        )
        const data = response.data
        expect(response.data).toHaveProperty('id');
        expect(data.id).toEqual('089ddda5-f4c8-4bca-974a-e69d616e504a')
    return
    })

    afterAll(() =>{
        // käivitatakse peale testi paki
    })
})