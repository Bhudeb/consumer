import pact from '@pact-foundation/pact-node';
import * as path from 'path';

const opts = {
    pactFilesOrDirs: [path.resolve(process.cwd(), 'pactsA')],
    pactBroker: 'http://localhost:9292',
    consumerVersion: '1.0.1'
};

new pact.Publisher(opts).publish();