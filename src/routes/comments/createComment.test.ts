import axios from 'axios';

const endpoint = 'http://localhost:3000/comments/';

describe('create a comment', () =>{
    //let newId:string;
    it('it should create a comment', async () =>{
        const testData = {
            postId: "17fb967d-87f4-440d-a9ec-0cc078ce0fa5",
            title: "my test comment",
            content: "running comment test"
        }
        const response = await axios.post(endpoint, testData, {
            headers: { 'Content-Type': 'application/json'}
        })
        const responseData = response.data
       // newId = responseData.id

        expect(responseData.postId).toEqual(testData.postId)
        expect(responseData.title).toEqual(testData.title)
        expect(responseData.content).toEqual(testData.content)
        return
    });
    afterAll(async () => {
         //clean up test category
      // const response = await axios.delete(endpoint + newId );
      
    });
})