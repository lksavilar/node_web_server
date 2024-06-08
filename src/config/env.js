// forma, cuando no usa "type": "module" en package.json
// require('dotenv').config()    
import env from 'dotenv';

// const { get } = require('env-var');
import pkg from 'env-var';
const { get } = pkg;

env.config();

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

