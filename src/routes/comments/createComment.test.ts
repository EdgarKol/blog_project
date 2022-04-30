import axios from 'axios';

const endpoint = 'http://localhost:3000/comments/';

describe('create a comment', () =>{
    it('it should create a comment', async () =>{
        const testData = {
            postId: "089ddda5-f4c8-4bca-974a-e69d616e504a",
            title: "my test comment",
            content: "running comment test"
        }
        const response = await axios.post(endpoint, testData, {
            headers: { 'Content-Type': 'application/json'}
        })
        const responseData = response.data

        expect(responseData.postId).toEqual(testData.postId)
        expect(responseData.title).toEqual(testData.title)
        expect(responseData.content).toEqual(testData.content)
        return
    })
    afterAll(async () => {
        // clean up thest category
       //const response = await axios.delete(endpoint + postId);
      });
})