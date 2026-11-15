// @ts-check
import { defineConfig } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  retries : 0,
  workers : 4,
  fullyParallel : true,
  timeout : 90 * 1000,
  expect : {timeout : 5000,},
  //reporter: 'html',
  reporter: [['list'], ['html']],
  
  use: {
    browserName : 'chromium',
    headless : true,
    //navigationTimeout: 60000,
    screenshot : 'on',
    // trace : 'on',
    trace : 'retain-on-failure',
    // video : 'retain-on-failure'
  },

});

