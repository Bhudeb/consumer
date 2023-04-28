import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import fetchItem from './consumerA.js';



const provider = new PactV3({
  consumer: 'consumer A',
  provider: 'provider A',
  port:"8002",
  dir: './pactsA'
});

const EXPECTED_BODY = {
    "id":1,
    "title":"Create a project",
    "order":1,
    "completed":true
    }

describe('GET /items/1', () => {
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
      const response = await fetchItem(mockserver.url);
        console.log("response:",response)
    });
  });
});




















