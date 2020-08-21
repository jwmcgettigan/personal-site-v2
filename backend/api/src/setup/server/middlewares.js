// Imports
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const { NODE_ENV, LANDING_URL } = require('../config/env');

// Setup middlewares
export default (server) => {
  console.info('SETUP - Middlewares..');

  // Enable CORS
  server.use(cors({
    origin: LANDING_URL
  }));

  // Request body parser
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
}

