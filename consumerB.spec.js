import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import fetchItems from './consumerB.js';



const provider = new PactV3({
  consumer: 'consumer B',
  provider: 'provider A',
  port:"8003",
  dir: './pactsB'
});

const EXPECTED_BODY = [
  {
    "id": 1,
    "title": "Create a project",
    "order": 1,
    "completed": true
  },
  {
    "id": 2,
    "title": "Take a cofféé",
    "order": 2,
    "completed": true
  }]

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
        path: '/items',
       
      })
      .willRespondWith({
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: EXPECTED_BODY,
      });

    return provider.executeTest(async (mockserver) => {
      const response = await fetchItems(mockserver.url);
        console.log("response:",response)
    });
  });
});




















