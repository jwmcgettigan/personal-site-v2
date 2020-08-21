// Imports
const dotenv = require('dotenv');

// Load .env
dotenv.config({ path: '.env.local' })

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Port
export const PORT = process.env.PORT

// Database
export const MONGO_URL = process.env.MONGO_URL

// URL
export const LANDING_URL = process.env.LANDING_URL
export const API_URL = process.env.API_URL