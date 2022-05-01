import axios from 'axios';

const endpoint = 'http://localhost:3000/posts/';

describe('create a post', () => {
    let newId: string;
    it('it should successfully create a post',async () => {
const testData = {
    
        authorId: "089ddda5-f4c8-4bca-974a-e69d616e504a",
        title: "my new post",
        content: "Vivamus sed laoreet nisi. Morbi eu venenatis eros.",
        summary: "small summary for nonsense post"
    
}
const response = await axios.post(endpoint, testData,{
    headers: { 'Content-Type': 'application/json'}
})
const responseData = response.data

newId = responseData.id;

expect(responseData.authorId).toEqual(testData.authorId)
expect(responseData.title).toEqual(testData.title)
//expect(responseData.content).toEqual(testData.content)
expect(responseData.summary).toEqual(testData.summary)
return 

    });
    afterAll(async () => {
        // clean up thest category
        const response = await axios.delete(endpoint + newId);
      });
})