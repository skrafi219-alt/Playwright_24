import {defineConfig} from '@playwright/test';

export default defineConfig({

  testDir:'./tests',
  timeout:30*1000,
  reporter:'html',
  fullyParallel:true,

  use :{
     browserName:'chromium',
     headless:false,
     baseURL:"https://rahulshettyacademy.com/",
  }
  
});