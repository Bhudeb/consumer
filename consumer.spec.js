import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import fetchItems from './consumer.js';



const provider = new PactV3({
  consumer: 'consumer',
  provider: 'provider',
  port:"8002",
  dir: './pacts'
});

const EXPECTED_BODY = {
    "id":1,"title":"Create a project",
    "order":1,
    "completed":true,
    "createdOn":"2023-03-28T11:57:26.220Z"
    }

describe('GET /items', () => {
  it('returns an HTTP 200 and a list of items', () => {
    // Arrange: Setup our expected interactions
    //
    // We use Pact to mock out the backend API
    provider
      .given('I have a list of items')
      .uponReceiving('a request for all items with the builder pattern')
      .withRequest({
        method: 'GET',
        path: '/items/1',
       
      })
      .willRespondWith({
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: EXPECTED_BODY,
      });

    return provider.executeTest(async (mockserver) => {
      // Act: test our API client behaves correctly
      //
      // Note we configure the DogService API client dynamically to 
      // point to the mock service Pact created for us, instead of 
      // the real one
      //fetchItems = new DogService(mockserver.url);
      const response = await fetchItems(mockserver.url);
        console.log("response:",response)
    });
  });
});




















