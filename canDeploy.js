import pact from '@pact-foundation/pact-node';

var opts = {
	pacticipants: [{'name':"consumer B", "latest":true,'version':'1.0.1'},{'name':"provider B", "latest":true,'version':'1.0.0'}],
  pactBroker: 'http://115.160.223.122:9292/'
};

pact.canDeploy(opts)
	.then(function (result) {
    console.log(result)
    // console.log(result.matrix[0].consumer)
    // console.log('--------------------------------------------------------')
    // console.log(result.matrix[0].provider)
    // console.log('--------------------------------------------------------')
    // console.log(result.matrix[0].pact)
    console.log('--------------------------------------------------------')
    // console.log(result.matrix[0].verificationResult)
    
		// You can deploy this
    // If output is not specified or is json, result describes the result of the check.
    // If outout is 'table', it is the human readable string returned by the check
	})
	.catch(function(error) {
    console.log('----',error)
    
		// You can't deploy this
    // if output is not specified, or is json, error will be an object describing
    // the result of the check (if the check failed),
    // if output is 'table', then the error will be a string describing the output from the binary,

    // In both cases, `error` will be an Error object if something went wrong during the check.
	});