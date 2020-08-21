// Imports
import mongoose from 'mongoose';
import moment from 'moment';

import { MONGO_URL, NODE_ENV } from '../config/env';

export default async () => {
  console.info('SETUP - Connecting database..');

  await connectWithRetry();
  console.info(`INFO - Database connected on`);
  console.info(`  Local   ${ MONGO_URL } [${ NODE_ENV }]`);
  console.info(`  Datetime ${ moment().format('YYYY-MM-DD hh:mm:ss a') }\n`);
};

// Handle connection error
mongoose.connection.on('error', error => {
  console.log(`ERROR - Connection failed: ${ error.message }`);

  setTimeout(async () => {
    console.log('SETUP - Connecting database.. retrying..');

    await connectWithRetry();
  }, 5000);
});

// Retry connection
const connectWithRetry = async () => {
  return await mongoose.connect(
    MONGO_URL,
    { useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
  ).catch(e => {
      console.error('Connection error', e.message);
  });
};