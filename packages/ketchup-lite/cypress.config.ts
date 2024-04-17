import { defineConfig } from 'cypress';

require('dotenv').config();

export default defineConfig({
    env: {
        ...process.env,
    },
    e2e: {},
    defaultCommandTimeout: 5000,
    includeShadowDom: true,
});
