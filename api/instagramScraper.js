// // 15 sec print scrapper time
// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// const port = 5000;

// const INSTAGRAM_USERNAME = 'arunsharma7866@outlook.com';
// const INSTAGRAM_PASSWORD = 'Wmtesting@123';

// // Load delay dynamically
// async function loadDelay() {
//   return (await import('delay')).default;
// }

// // Minimize human delay for better performance
// async function humanDelay(min = 5, max = 20) {
//   const delay = await loadDelay();
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay);
// }

// async function scrapeInstagramData(username) {
//   try {
//     // Start timer for total scrape time
//     console.time('Total Scraper Time');

//     const browser = await puppeteer.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const page = await browser.newPage();

//     await page.setRequestInterception(true);
//     page.on('request', (req) => {
//       const resourceType = req.resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         req.abort();
//       } else {
//         req.continue();
//       }
//     });

//     await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,
//     });

//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//     ]);

//     console.log('Logged into Instagram...');

//     // Start timer for time after login
//     console.time('Scrape Time After Login');

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });

//     await page.waitForSelector('header section ul li span', { timeout: 5000 });

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');
//       const posts = stats[0]?.querySelector('span')?.innerText || null;
//       const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector('span')?.innerText || null;
//       const extractedUsername = document.querySelector('header h2')?.innerText || null;
//       return { extractedUsername, posts, followers, following };
//     });

//     await browser.close();

//     // End timer for scraping time after login
//     console.timeEnd('Scrape Time After Login');

//     // End timer for total scrape time
//     console.timeEnd('Total Scraper Time');

//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     console.timeEnd('Scrape Time After Login');  // Ensure timer ends even on error
//     console.timeEnd('Total Scraper Time');
//     return null;
//   }
// }

// app.get('/profile/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: data.extractedUsername || username,
//       posts: data.posts,
//       followers: data.followers,
//       following: data.following
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });


// require('dotenv').config();
// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// // Use the port from the environment variable, or default to 8080
// const port = process.env.PORT || 8080;

// // const INSTAGRAM_USERNAME = 'arunsharma7866@outlook.com';
// // const INSTAGRAM_PASSWORD = 'Wmtesting@123';

// const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME;
// const INSTAGRAM_PASSWORD = process.env.INSTAGRAM_PASSWORD;

// // console.log('Environment Variables:', process.env); // Log all env variables
// console.log('Username:', INSTAGRAM_USERNAME);
// console.log('Password:', INSTAGRAM_PASSWORD);


// // Load delay dynamically
// async function loadDelay() {
//   return (await import('delay')).default;
// }

// // Minimize human delay for better performance
// async function humanDelay(min = 5, max = 20) {
//   const delay = await loadDelay();
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay);
// }

// async function scrapeInstagramData(username) {
//   try {
//     // Start timer for total scrape time
//     console.time('Total Scraper Time');

//     const browser = await puppeteer.launch({
//       headless: true,
//       args: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-dev-shm-usage',
//         '--disable-gpu'], 
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const page = await browser.newPage();

//     await page.setRequestInterception(true);
//     page.on('request', (req) => {
//       const resourceType = req.resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         req.abort();
//       } else {
//         req.continue();
//       }
//     });

//     await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,
//     });

//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//     ]);

//     console.log('Logged into Instagram...');

//     // Start timer for time after login
//     console.time('Scrape Time After Login');

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });

//     await page.waitForSelector('header section ul li span', { timeout: 5000 });

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');
//       const posts = stats[0]?.querySelector('span')?.innerText || null;
//       const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector('span')?.innerText || null;
//       const extractedUsername = document.querySelector('header h2')?.innerText || null;
//       return { extractedUsername, posts, followers, following };
//     });

//     await browser.close();

//     // End timer for scraping time after login
//     console.timeEnd('Scrape Time After Login');

//     // End timer for total scrape time
//     console.timeEnd('Total Scraper Time');

//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     console.timeEnd('Scrape Time After Login');  // Ensure timer ends even on error
//     console.timeEnd('Total Scraper Time');
//     return null;
//   }
// }

// app.get('/profile/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: data.extractedUsername || username,
//       posts: data.posts,
//       followers: data.followers,
//       following: data.following
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });




// require('dotenv').config();
// const express = require('express');
// const { chromium } = require('playwright');

// const app = express();
// const port = process.env.PORT || 8080;

// const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME;
// const INSTAGRAM_PASSWORD = process.env.INSTAGRAM_PASSWORD;

// console.log('Username:', INSTAGRAM_USERNAME);
// console.log('Password:', INSTAGRAM_PASSWORD);

// async function loadDelay() {
//   return (await import('delay')).default;
// }

// async function humanDelay(min = 5, max = 20) {
//   const delay = await loadDelay();
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay);
// }

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     const browser = await chromium.launch({
//       headless: true,
//       args: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-dev-shm-usage',
//         '--disable-gpu'
//       ],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const context = await browser.newContext({
//       userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     });

//     const page = await context.newPage();

//     // Set up request interception here, on the page level
//     await page.route('**/*', (route) => {
//       const resourceType = route.request().resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         route.abort(); // Abort requests for specified resource types
//       } else {
//         route.continue(); // Continue with other resource types
//       }
//     });

//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,
//     });

//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//     ]);

//     console.log('Logged into Instagram...');

//     console.time('Scrape Time After Login');

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });

//     await page.waitForSelector('header section ul li span', { timeout: 5000 });

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');
//       const posts = stats[0]?.querySelector('span')?.innerText || null;
//       const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector('span')?.innerText || null;
//       const extractedUsername = document.querySelector('header h2')?.innerText || null;
//       return { extractedUsername, posts, followers, following };
//     });

//     await browser.close();

//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');

//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');
//     return null;
//   }
// }

// app.get('/profile/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: data.extractedUsername || username,
//       posts: data.posts,
//       followers: data.followers,
//       following: data.following
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });


// require('dotenv').config();
// const express = require('express');
// const { chromium } = require('playwright');

// const app = express();
// const port = process.env.PORT || 8080;

// const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME;
// const INSTAGRAM_PASSWORD = process.env.INSTAGRAM_PASSWORD;

// console.log('Username:', INSTAGRAM_USERNAME);
// console.log('Password:', INSTAGRAM_PASSWORD);

// async function ensureChromiumInstalled() {
//   try {
//     // Ensure Chromium is launched, 
//     //Playwright will automatically handle installation
//     await chromium.launch();
//   } catch (error) {
//     console.log("Error launching Chromium:", error);
//   }
// }

// async function loadDelay() {
//   return (await import('delay')).default;
// }

// async function humanDelay(min = 5, max = 20) {
//   const delay = await loadDelay();
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay);
// }

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     // Ensure Chromium is installed and launched
//     await ensureChromiumInstalled();

//     const browser = await chromium.launch({
//       headless: true,
//       args: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-dev-shm-usage',
//         '--disable-gpu'
//       ],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const context = await browser.newContext({
//       userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     });

//     const page = await context.newPage();

//     // Set up request interception here, on the page level
//     await page.route('**/*', (route) => {
//       const resourceType = route.request().resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         route.abort(); // Abort requests for specified resource types
//       } else {
//         route.continue(); // Continue with other resource types
//       }
//     });

//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,
//     });

//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//     ]);

//     console.log('Logged into Instagram...');

//     console.time('Scrape Time After Login');

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });

//     await page.waitForSelector('header section ul li span', { timeout: 5000 });

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');
//       const posts = stats[0]?.querySelector('span')?.innerText || null;
//       const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector('span')?.innerText || null;
//       const extractedUsername = document.querySelector('header h2')?.innerText || null;
//       return { extractedUsername, posts, followers, following };
//     });

//     await browser.close();

//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');

//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');
//     return null;
//   }
// }

// app.get('/profile/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: data.extractedUsername || username,
//       posts: data.posts,
//       followers: data.followers,
//       following: data.following
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });



// working code of posts count with latest selector update
// require('dotenv').config();
// const express = require('express');
// const { chromium } = require('playwright');

// const app = express();
// const port = process.env.PORT || 8080;

// const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME;
// const INSTAGRAM_PASSWORD = process.env.INSTAGRAM_PASSWORD;

// console.log('Username:', INSTAGRAM_USERNAME);
// console.log('Password:', INSTAGRAM_PASSWORD);

// async function ensureChromiumInstalled() {
//   try {
//     // Ensure Chromium is launched, 
//     //Playwright will automatically handle installation
//     await chromium.launch();
//   } catch (error) {
//     console.log("Error launching Chromium:", error);
//   }
// }

// async function loadDelay() {
//   return (await import('delay')).default;
// }

// async function humanDelay(min = 5, max = 20) {
//   const delay = await loadDelay();
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay);
// }

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     // Ensure Chromium is installed and launched
//     await ensureChromiumInstalled();

//     const browser = await chromium.launch({
//       headless: true,
//       args: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-dev-shm-usage',
//         '--disable-gpu'
//       ],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const context = await browser.newContext({
//       userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     });

//     const page = await context.newPage();

//     // Set up request interception here, on the page level
//     await page.route('**/*', (route) => {
//       const resourceType = route.request().resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         route.abort(); // Abort requests for specified resource types
//       } else {
//         route.continue(); // Continue with other resource types
//       }
//     });

//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,
//     });

//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//     ]);

//     console.log('Logged into Instagram...');

//     console.time('Scrape Time After Login');

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });

//     // Wait for the specific span element that contains the posts count
//     await page.waitForSelector('span.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1hl2dhg.x16tdsg8.x1vvkbs', { timeout: 20000 });

//     // Extract posts count using the provided class structure
//     const postsCount = await page.evaluate(() => {
//       const postCountElement = document.querySelector('span.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1hl2dhg.x16tdsg8.x1vvkbs');
//       return postCountElement ? postCountElement.innerText : null;
//     });

//     console.log(`Posts Count: ${postsCount}`);
//     await browser.close();

//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');

//     return { postsCount };
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');
//     return null;
//   }
// }



// app.get('/profile/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: data.extractedUsername || username,
//       posts: data.posts,
//       followers: data.followers,
//       following: data.following
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });

//test cide perfect for UI

// require('dotenv').config();
// const express = require('express');
// const { chromium } = require('playwright');
// const delay = require('delay');  // Delay for human-like interaction

// const app = express();
// const port = process.env.PORT || 8080;

// const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME;
// const INSTAGRAM_PASSWORD = process.env.INSTAGRAM_PASSWORD;

// console.log('Username:', INSTAGRAM_USERNAME);
// console.log('Password:', INSTAGRAM_PASSWORD);


// // Function to ensure Chromium is installed
// async function ensureChromiumInstalled() {
//   try {
//     await chromium.launch();
//   } catch (error) {
//     console.log("Error launching Chromium:", error);
//   }
// }

// // Human-like delay for simulating real user interaction
// async function humanDelay(min = 5, max = 20) {
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay * 1000); // delay in milliseconds
// }

// // Retry mechanism for navigating to the page
// async function gotoWithRetry(page, url, retries = 3) {
//   for (let i = 0; i < retries; i++) {
//     try {
//       await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
//       return; // If successful, exit
//     } catch (error) {
//       console.error(`Attempt ${i + 1} failed: ${error.message}`);
//       if (i === retries - 1) throw error; // Throw error after last retry
//       await page.reload(); // Reload and try again
//     }
//   }
// }

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     // Ensure Chromium is installed
//     await ensureChromiumInstalled();

//     // Launch the browser
//     const browser = await chromium.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const context = await browser.newContext({
//       userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     });

//     const page = await context.newPage();

//     // Block unnecessary resources like images, styles, fonts to speed up the process
//     await page.route('**/*', (route) => {
//       const resourceType = route.request().resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         route.abort();
//       } else {
//         route.continue();
//       }
//     });

//     // Go to Instagram login page
//     await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 10000 });

//     // Wait for login form to load and input credentials
//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();  // Assuming humanDelay is a function that adds some delay
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//     // Submit login form
//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//     ]);

//     console.log('Logged into Instagram...');

//     console.time('Scrape Time After Login');

//     // Navigate to the user's Instagram profile with retry mechanism
//     await gotoWithRetry(page, `https://www.instagram.com/${username}/`);

//     // Scraping followers count using the provided HTML structure
//     const followersCount = await page.evaluate(() => {
//       const followersElement = document.querySelector('#mount_0_0_UX > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div:nth-child(2) > div > div.x1gryazu.xh8yej3.x10o80wk.x14k21rp.x17snn68.x6osk4m.x1porb0y.x8vgawa > section > main > div > header > section.xc3tme8.x18wylqe.x1xdureb.xvxrpd7.x13vxnyz > ul > li:nth-child(2) > div > button > span > span > span');
//       if (followersElement) {
//         return followersElement.innerText.trim();  // Get the followers count text
//       }
//       return null;
//     });
    
//     console.log('Followers count:', followersCount);
    


//     if (followersCount) {
//       console.log(`Followers Count: ${followersCount}`);
//     } else {
//       console.log('Followers count not found.');
//     }

//     await browser.close();

//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');

//     return { followersCount };
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');
//     return null;
//   }
// }


// app.get('/profile/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: username,
//       posts: data.postsCount
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });


// this code perfect tested on live server normal username come only
// this code is live on live server & tested with dermacure url

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');  // Import cors package
// const { chromium } = require('playwright');
// const delay = require('delay');  // Delay for human-like interaction

// const app = express();
// const port = process.env.PORT || 8080;

// const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME;
// const INSTAGRAM_PASSWORD = process.env.INSTAGRAM_PASSWORD;

// console.log('Username:', INSTAGRAM_USERNAME);
// console.log('Password:', INSTAGRAM_PASSWORD);

// // Enable CORS for all routes
// app.use(cors());

// async function ensureChromiumInstalled() {
//   try {
//     await chromium.launch();
//   } catch (error) {
//     console.log("Error launching Chromium:", error);
//   }
// }

// // Human-like delay for simulating real user interaction
// async function humanDelay(min = 5, max = 20) {
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay * 1000); // delay in milliseconds
// }

// // Retry mechanism for navigating to the page
// async function gotoWithRetry(page, url, retries = 3) {
//   for (let i = 0; i < retries; i++) {
//     try {
//       await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
//       return; // If successful, exit
//     } catch (error) {
//       console.error(`Attempt ${i + 1} failed: ${error.message}`);
//       if (i === retries - 1) throw error; // Throw error after last retry
//       await page.reload(); // Reload and try again
//     }
//   }
// }

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     await ensureChromiumInstalled();

//     const browser = await chromium.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const context = await browser.newContext({
//       userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     });

//     const page = await context.newPage();

//     await page.route('**/*', (route) => {
//       const resourceType = route.request().resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         route.abort();
//       } else {
//         route.continue();
//       }
//     });

//     await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 10000 });

//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//     ]);

//     console.log('Logged into Instagram...');

//     console.time('Scrape Time After Login');

//     await gotoWithRetry(page, `https://www.instagram.com/${username}/`);

//     const followersCount = await page.evaluate(() => {
//       const followersElement = document.querySelector('#mount_0_0_UX > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div:nth-child(2) > div > div.x1gryazu.xh8yej3.x10o80wk.x14k21rp.x17snn68.x6osk4m.x1porb0y.x8vgawa > section > main > div > header > section.xc3tme8.x18wylqe.x1xdureb.xvxrpd7.x13vxnyz > ul > li:nth-child(2) > div > button > span > span > span');
//       if (followersElement) {
//         return followersElement.innerText.trim();
//       }
//       return null;
//     });
    
//     console.log('Followers count:', followersCount);
    
//     if (followersCount) {
//       console.log(`Followers Count: ${followersCount}`);
//     } else {
//       console.log('Followers count not found.');
//     }

//     await browser.close();

//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');

//     return { followersCount };
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');
//     return null;
//   }
// }

// app.get('/profile/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: username,
//       posts: data.postsCount
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });




// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { chromium } = require('playwright');
// const delay = require('delay');  // Delay for human-like interaction

// const app = express();
// const port = process.env.PORT || 8080;

// const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME;
// const INSTAGRAM_PASSWORD = process.env.INSTAGRAM_PASSWORD;

// console.log('Username:', INSTAGRAM_USERNAME);
// console.log('Password:', INSTAGRAM_PASSWORD);

// // Enable CORS for all routes
// app.use(cors());

// async function ensureChromiumInstalled() {
//   try {
//     await chromium.launch();
//   } catch (error) {
//     console.log("Error launching Chromium:", error);
//   }
// }

// // Human-like delay for simulating real user interaction
// async function humanDelay(min = 5, max = 20) {
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay * 1000); // delay in milliseconds
// }

// // Retry mechanism for navigating to the page
// async function gotoWithRetry(page, url, retries = 3) {
//   for (let i = 0; i < retries; i++) {
//     try {
//       await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
//       return; // If successful, exit
//     } catch (error) {
//       console.error(`Attempt ${i + 1} failed: ${error.message}`);
//       if (i === retries - 1) throw error; // Throw error after last retry
//       await page.reload(); // Reload and try again
//     }
//   }
// }

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     await ensureChromiumInstalled();

//     const browser = await chromium.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const context = await browser.newContext({
//       userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     });

//     const page = await context.newPage();

//     await page.route('**/*', (route) => {
//       const resourceType = route.request().resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         route.abort();
//       } else {
//         route.continue();
//       }
//     });

//     await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 10000 });

//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//     ]);

//     console.log('Logged into Instagram...');

//     console.time('Scrape Time After Login');

//     await gotoWithRetry(page, `https://www.instagram.com/${username}/`);

//     // Try to extract followers count dynamically based on the profile page layout
//     const followersCount = await page.evaluate(() => {
//       const followerElement = Array.from(document.querySelectorAll('ul li a'))
//         .find(link => link.textContent.includes('followers'));

//       if (followerElement) {
//         // Extract the number from the text content
//         const countText = followerElement.textContent.trim();
//         const followersMatch = countText.match(/(\d+([,\.]\d{1,3})*)/); // match numbers with commas or periods
//         return followersMatch ? followersMatch[0] : null;
//       }

//       return null;
//     });

//     console.log('Followers count:', followersCount);

//     if (followersCount) {
//       console.log(`Followers Count: ${followersCount}`);
//     } else {
//       console.log('Followers count not found.');
//     }

//     await browser.close();

//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');

//     return { followersCount };
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');
//     return null;
//   }
// }


// app.get('/profile/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: username,
//       followers: data.followersCount
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });



//---------------------------------------------------------------------
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { chromium } = require('playwright');
// const fs = require('fs');
// const delay = require('delay');  // Delay for human-like interaction

// const app = express();
// const port = process.env.PORT || 8080;

// const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME;
// const INSTAGRAM_PASSWORD = process.env.INSTAGRAM_PASSWORD;

// const COOKIE_FILE_PATH = './cookies.json';  // Path to store cookies

// console.log('Username:', INSTAGRAM_USERNAME);
// console.log('Password:', INSTAGRAM_PASSWORD);

// // Enable CORS for all routes
// app.use(cors());

// // Human-like delay for simulating real user interaction
// async function humanDelay(min = 5, max = 20) {
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay * 1000); // delay in milliseconds
// }

// // Retry mechanism for navigating to the page
// async function gotoWithRetry(page, url, retries = 3) {
//   for (let i = 0; i < retries; i++) {
//     try {
//       await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
//       return; // If successful, exit
//     } catch (error) {
//       console.error(`Attempt ${i + 1} failed: ${error.message}`);
//       if (i === retries - 1) throw error; // Throw error after last retry
//       await page.reload(); // Reload and try again
//     }
//   }
// }

// // Function to load cookies from the JSON file
// async function loadCookies(page) {
//   if (fs.existsSync(COOKIE_FILE_PATH)) {
//     const cookies = JSON.parse(fs.readFileSync(COOKIE_FILE_PATH));
//     await page.context().addCookies(cookies);
//     console.log('Cookies loaded from file');
//   }
// }

// // Function to save cookies to the JSON file
// async function saveCookies(page) {
//   const cookies = await page.context().cookies();
//   fs.writeFileSync(COOKIE_FILE_PATH, JSON.stringify(cookies, null, 2));
//   console.log('Cookies saved to file');
// }

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     const browser = await chromium.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const context = await browser.newContext({
//       userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     });

//     const page = await context.newPage();

//     await page.route('**/*', (route) => {
//       const resourceType = route.request().resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         route.abort();
//       } else {
//         route.continue();
//       }
//     });

//     await loadCookies(page);  // Load cookies if they exist

//     // If there are no cookies, login to Instagram and save cookies
//     if (!(await page.context().cookies()).length) {
//       await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 10000 });

//       await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//       await humanDelay();
//       await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//       await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//       await Promise.all([ 
//         page.click('button[type="submit"]'),
//         page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//       ]);

//       console.log('Logged into Instagram...');
//       await saveCookies(page);  // Save cookies after login
//     }

//     console.time('Scrape Time After Login');

//     await gotoWithRetry(page, `https://www.instagram.com/${username}/`);

//     // Try to extract followers count dynamically based on the profile page layout
//     const followersCount = await page.evaluate(() => {
//       const followerElement = Array.from(document.querySelectorAll('ul li a'))
//         .find(link => link.textContent.includes('followers'));

//       if (followerElement) {
//         const countText = followerElement.textContent.trim();
//         const followersMatch = countText.match(/(\d+([,\.]\d{1,3})*)/); // match numbers with commas or periods
//         return followersMatch ? followersMatch[0] : null;
//       }

//       return null;
//     });

//     console.log('Followers count:', followersCount);

//     if (followersCount) {
//       console.log(`Followers Count: ${followersCount}`);
//     } else {
//       console.log('Followers count not found.');
//     }

//     await browser.close();

//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');

//     return { followersCount };
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');
//     return null;
//   }
// }

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     const browser = await chromium.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const context = await browser.newContext({
//       userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     });

//     const page = await context.newPage();

//     await page.route('**/*', (route) => {
//       const resourceType = route.request().resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         route.abort();
//       } else {
//         route.continue();
//       }
//     });

//     await loadCookies(page);  // Load cookies if they exist

//     // If there are no cookies, login to Instagram and save cookies
//     if (!(await page.context().cookies()).length) {
//       await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 10000 });

//       await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//       await humanDelay();
//       await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//       await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//       await Promise.all([ 
//         page.click('button[type="submit"]'),
//         page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//       ]);

//       console.log('Logged into Instagram...');
//       await saveCookies(page);  // Save cookies after login
//     }

//     console.time('Scrape Time After Login');

//     await gotoWithRetry(page, `https://www.instagram.com/${username}/`);

//     // Wait for the profile page to fully load
//     await page.waitForSelector('header section ul li span', { timeout: 5000 });

//     // Try to extract followers count dynamically based on the profile page layout
//     const followersCount = await page.evaluate(() => {
//       const followersElement = document.querySelector('header section ul li a span');
      
//       if (followersElement && followersElement.textContent) {
//         const followersText = followersElement.textContent.trim();
//         const followersMatch = followersText.match(/(\d+([,\.]\d{1,3})*)/); // match numbers with commas or periods
//         return followersMatch ? followersMatch[0] : null;
//       }

//       return null;
//     });

//     console.log('Followers count:', followersCount);

//     if (followersCount) {
//       console.log(`Followers Count: ${followersCount}`);
//     } else {
//       console.log('Followers count not found.');
//     }

//     await browser.close();

//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');

//     return { followersCount };
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');
//     return null;
//   }
// }


//this code give username, followersCount
// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     const browser = await chromium.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const context = await browser.newContext({
//       userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     });

//     const page = await context.newPage();

//     await page.route('**/*', (route) => {
//       const resourceType = route.request().resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         route.abort();
//       } else {
//         route.continue();
//       }
//     });

//     await loadCookies(page);  // Load cookies if they exist

//     // If there are no cookies, login to Instagram and save cookies
//     if (!(await page.context().cookies()).length) {
//       await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 10000 });

//       await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//       await humanDelay();
//       await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//       await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//       await Promise.all([ 
//         page.click('button[type="submit"]'),
//         page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//       ]);

//       console.log('Logged into Instagram...');
//       await saveCookies(page);  // Save cookies after login
//     }

//     console.time('Scrape Time After Login');

//     await gotoWithRetry(page, `https://www.instagram.com/${username}/`);

//     // Wait for the profile page to fully load
//     await page.waitForSelector('header section ul li span', { timeout: 5000 });

//     // Try to extract the user's name, followers count, and following count
//     const userData = await page.evaluate(() => {
//       const name = document.querySelector('h1') ? document.querySelector('h1').textContent : null;

//       // Use meta tag or another selector to find the username (in case it's in a different location)
//       const username = document.querySelector('meta[property="og:title"]') ? document.querySelector('meta[property="og:title"]').getAttribute('content').split('•')[0].trim() : null;

//       const followersElement = document.querySelector('header section ul li a span');
//       const followingElement = document.querySelector('header section ul li a[title="Following"] span');

//       let followersCount = null;
//       let followingCount = null;

//       if (followersElement && followersElement.textContent) {
//         const followersText = followersElement.textContent.trim();
//         const followersMatch = followersText.match(/(\d+([,\.]\d{1,3})*)/); // match numbers with commas or periods
//         followersCount = followersMatch ? followersMatch[0] : null;
//       }

//       if (followingElement && followingElement.textContent) {
//         const followingText = followingElement.textContent.trim();
//         const followingMatch = followingText.match(/(\d+([,\.]\d{1,3})*)/); // match numbers with commas or periods
//         followingCount = followingMatch ? followingMatch[0] : null;
//       }

//       return {
//         username,
//         name,
//         followersCount,
//         followingCount,
//       };
//     });

//     console.log('User Data:', userData);

//     if (userData.followersCount) {
//       console.log(`Followers Count: ${userData.followersCount}`);
//     } else {
//       console.log('Followers count not found.');
//     }

//     if (userData.followingCount) {
//       console.log(`Following Count: ${userData.followingCount}`);
//     } else {
//       console.log('Following count not found.');
//     }

//     if (userData.name) {
//       console.log(`User Name: ${userData.name}`);
//     } else {
//       console.log('User name not found.');
//     }

//     if (userData.username) {
//       console.log(`Instagram Username: ${userData.username}`);
//     } else {
//       console.log('Instagram username not found.');
//     }

//     await browser.close();

//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');

//     return userData;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');
//     return null;
//   }
// }

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     const browser = await chromium.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const context = await browser.newContext({
//       userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     });

//     const page = await context.newPage();

//     await page.route('**/*', (route) => {
//       const resourceType = route.request().resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         route.abort();
//       } else {
//         route.continue();
//       }
//     });

//     await loadCookies(page);  // Load cookies if they exist

//     // If there are no cookies, login to Instagram and save cookies
//     if (!(await page.context().cookies()).length) {
//       await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 10000 });

//       await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//       await humanDelay();
//       await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//       await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//       await Promise.all([ 
//         page.click('button[type="submit"]'),
//         page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//       ]);

//       console.log('Logged into Instagram...');
//       await saveCookies(page);  // Save cookies after login
//     }

//     console.time('Scrape Time After Login');

//     await gotoWithRetry(page, `https://www.instagram.com/${username}/`);

//     // Wait for the profile page to fully load
//     await page.waitForSelector('header section ul li span', { timeout: 5000 });    

//     // Try to extract the username, followers count, following count, and posts count
// const userData = await page.evaluate(() => {
//   // Extract username from the 'og:title' meta tag
//   const username = document.querySelector('meta[property="og:title"]')
//     ? document.querySelector('meta[property="og:title"]').getAttribute('content').split('•')[0].trim()
//     : null;

//   // Get elements directly from the header section
//   const followersElement = document.querySelector('header section ul li a span');
//   // Try different selectors for followingElement to ensure it is captured
//   const followingElement = document.querySelector('header section ul li a[href*="/following"] span') ||
//                            document.querySelector('header section ul li:nth-child(3) span');
//   const postsElement = document.querySelector('header section ul li span');

//   let followersCount = null;
//   let followingCount = null;
//   let postsCount = null;

//   // Extract followers count
//   if (followersElement && followersElement.textContent) {
//     const followersText = followersElement.textContent.trim();
//     const followersMatch = followersText.match(/(\d+([,\.]\d{1,3})*)/);
//     followersCount = followersMatch ? followersMatch[0] : null;
//   }

//   // Extract following count
//   if (followingElement && followingElement.textContent) {
//     const followingText = followingElement.textContent.trim();
//     const followingMatch = followingText.match(/(\d+([,\.]\d{1,3})*)/);
//     followingCount = followingMatch ? followingMatch[0] : null;
//   } else {
//     // Fallback to meta tag if element not found
//     const ogDescription = document.querySelector('meta[property="og:description"]');
//     const descriptionContent = ogDescription ? ogDescription.getAttribute('content') : null;
//     if (descriptionContent) {
//       const followingMatch = descriptionContent.match(/, ([\d.,]+) Following/);
//       followingCount = followingMatch ? followingMatch[1] : null;
//     }
//   }

//   // Extract posts count
//   if (postsElement && postsElement.textContent) {
//     const postsText = postsElement.textContent.trim();
//     const postsMatch = postsText.match(/(\d+([,\.]\d{1,3})*)/);
//     postsCount = postsMatch ? postsMatch[0] : null;
//   }

//   return {
//     username,
//     followersCount,
//     followingCount,
//     postsCount,
//   };
// });


//     console.log('User Data:', userData);

//     if (userData.username) {
//       console.log(`Instagram Username: ${userData.username}`);
//     } else {
//       console.log('Instagram username not found.');
//     }

//     if (userData.followersCount) {
//       console.log(`Followers Count: ${userData.followersCount}`);
//     } else {
//       console.log('Followers count not found.');
//     }

//     if (userData.followingCount) {
//       console.log(`Following Count: ${userData.followingCount}`);
//     } else {
//       console.log('Following count not found.');
//     }

//     if (userData.postsCount) {
//       console.log(`Posts Count: ${userData.postsCount}`);
//     } else {
//       console.log('Posts count not found.');
//     }

//     await browser.close();

//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');

//     return userData;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');
//     return null;
//   }
// }


// this code give followres value correct K or M added

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { chromium } = require('playwright');
// const fs = require('fs');
// const delay = require('delay');  // Delay for human-like interaction

// const app = express();
// const port = process.env.PORT || 8080;

// const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME;
// const INSTAGRAM_PASSWORD = process.env.INSTAGRAM_PASSWORD;

// const COOKIE_FILE_PATH = './cookies.json';  // Path to store cookies

// console.log('Username:', INSTAGRAM_USERNAME);
// console.log('Password:', INSTAGRAM_PASSWORD);

// // Enable CORS for all routes
// app.use(cors());

// // Human-like delay for simulating real user interaction
// async function humanDelay(min = 5, max = 20) {
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay * 1000); // delay in milliseconds
// }

// // Retry mechanism for navigating to the page
// async function gotoWithRetry(page, url, retries = 3) {
//   for (let i = 0; i < retries; i++) {
//     try {
//       await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
//       return; // If successful, exit
//     } catch (error) {
//       console.error(`Attempt ${i + 1} failed: ${error.message}`);
//       if (i === retries - 1) throw error; // Throw error after last retry
//       await page.reload(); // Reload and try again
//     }
//   }
// }

// // Function to load cookies from the JSON file
// async function loadCookies(page) {
//   if (fs.existsSync(COOKIE_FILE_PATH)) {
//     const cookies = JSON.parse(fs.readFileSync(COOKIE_FILE_PATH));
//     await page.context().addCookies(cookies);
//     console.log('Cookies loaded from file');
//   }
// }

// // Function to save cookies to the JSON file
// async function saveCookies(page) {
//   const cookies = await page.context().cookies();
//   fs.writeFileSync(COOKIE_FILE_PATH, JSON.stringify(cookies, null, 2));
//   console.log('Cookies saved to file');
// }


// async function scrapeInstagramData(username) {
//   console.time('Total Scraper Time');

//   let browser = null;
//   try {
//     browser = await chromium.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const context = await browser.newContext({
//       userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     });

//     const page = await context.newPage();

//     // Block unnecessary requests like images and stylesheets
//     await page.route('**/*', (route) => {
//       const resourceType = route.request().resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         route.abort();
//       } else {
//         route.continue();
//       }
//     });

//     // Load cookies if they exist
//     await loadCookies(page);  

//     // If no cookies, log in and save cookies
//     if (!(await page.context().cookies()).length) {
//       await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 10000 });
//       await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//       await humanDelay();
//       await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//       await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });
//       await Promise.all([
//         page.click('button[type="submit"]'),
//         page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//       ]);
//       console.log('Logged into Instagram...');
//       await saveCookies(page);  // Save cookies after login
//     }

//     console.time('Scrape Time After Login');
//     await gotoWithRetry(page, `https://www.instagram.com/${username}/`);
//     await page.waitForSelector('header section ul li span', { timeout: 5000 });

//     // Scrape data
//     const userData = await page.evaluate(() => {
//       const username = document.querySelector('meta[property="og:title"]')
//         ? document.querySelector('meta[property="og:title"]').getAttribute('content').split('•')[0].trim()
//         : null;

//       const followersElement = document.querySelector('header section ul li a span');
//       const followingElement = document.querySelector('header section ul li a[href*="/following"] span') ||
//                                document.querySelector('header section ul li:nth-child(3) span');
//       const postsElement = document.querySelector('header section ul li span');

//       let followersCount = null;
//       let followingCount = null;
//       let postsCount = null;

//       // if (followersElement && followersElement.textContent) {
//       //   const followersText = followersElement.textContent.trim();
//       //   const followersMatch = followersText.match(/(\d+([,\.]\d{1,3})*)/);
//       //   followersCount = followersMatch ? followersMatch[0] : null;
//       // }
//       if (followersElement && followersElement.textContent) {
//         const followersText = followersElement.textContent.trim();
//         const followersMatch = followersText.match(/(\d+(\.\d+)?)([KMBkmb]?)\s*/);
//         followersCount = followersMatch ? followersMatch[0] : null;
//       }
      

//       if (followingElement && followingElement.textContent) {
//         const followingText = followingElement.textContent.trim();
//         const followingMatch = followingText.match(/(\d+([,\.]\d{1,3})*)/);
//         followingCount = followingMatch ? followingMatch[0] : null;
//       } else {
//         const ogDescription = document.querySelector('meta[property="og:description"]');
//         const descriptionContent = ogDescription ? ogDescription.getAttribute('content') : null;
//         if (descriptionContent) {
//           const followingMatch = descriptionContent.match(/, ([\d.,]+) Following/);
//           followingCount = followingMatch ? followingMatch[1] : null;
//         }
//       }

//       if (postsElement && postsElement.textContent) {
//         const postsText = postsElement.textContent.trim();
//         const postsMatch = postsText.match(/(\d+([,\.]\d{1,3})*)/);
//         postsCount = postsMatch ? postsMatch[0] : null;
//       }

//       return { username, followersCount, followingCount, postsCount };
//     });

//     console.log('User Data:', userData);

//     if (userData.username) {
//       console.log(`Instagram Username: ${userData.username}`);
//     } else {
//       console.log('Instagram username not found.');
//     }

//     if (userData.followersCount) {
//       console.log(`Followers Count: ${userData.followersCount}`);
//     } else {
//       console.log('Followers count not found.');
//     }

//     if (userData.followingCount) {
//       console.log(`Following Count: ${userData.followingCount}`);
//     } else {
//       console.log('Following count not found.');
//     }

//     if (userData.postsCount) {
//       console.log(`Posts Count: ${userData.postsCount}`);
//     } else {
//       console.log('Posts count not found.');
//     }

//     return userData;

//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     return null;
//   } finally {
//     // Ensure timing ends and browser is closed even if there was an error
//     if (browser) {
//       await browser.close();
//     }
//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');
//   }
// }


// // Default route for root URL
// app.get('/', (req, res) => {
//   res.send('API is running successfully, hurrah!');
// });

// app.get('/profile/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: data.username,
//       followers: data.followersCount,
//       following: data.followingCount,
//       posts: data.postsCount
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });


// // New endpoint to fetch cookies
// app.get('/get-cookies', async (req, res) => {
//   if (fs.existsSync(COOKIE_FILE_PATH)) {
//     const cookies = JSON.parse(fs.readFileSync(COOKIE_FILE_PATH));
//     res.json({ cookies });
//   } else {
//     res.status(404).json({ error: 'Cookies not found. Please log in first.' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });



//perfectly run 
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { chromium } = require('playwright');
const fs = require('fs');
const delay = require('delay');  // Delay for human-like interaction

const app = express();
const port = process.env.PORT || 8080;

const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME;
const INSTAGRAM_PASSWORD = process.env.INSTAGRAM_PASSWORD;

const COOKIE_FILE_PATH = './cookies.json';  // Path to store cookies

// console.log('Username:', INSTAGRAM_USERNAME);
// console.log('Password:', INSTAGRAM_PASSWORD);

// Enable CORS for all routes
app.use(cors());

// Human-like delay for simulating real user interaction
async function humanDelay(min = 5, max = 20) {
  const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
  await delay(randomDelay * 1000); // delay in milliseconds
}

// Retry mechanism for navigating to the page
async function gotoWithRetry(page, url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      return; // If successful, exit
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${error.message}`);
      if (i === retries - 1) throw error; // Throw error after last retry
      await page.reload(); // Reload and try again
    }
  }
}

// Function to load cookies from the JSON file
async function loadCookies(page) {
  if (fs.existsSync(COOKIE_FILE_PATH)) {
    const cookies = JSON.parse(fs.readFileSync(COOKIE_FILE_PATH));
    await page.context().addCookies(cookies);
    // console.log('Cookies loaded from file');
  }
}

async function loadCookies(page) {
  console.time('Cookie Load Time');
  if (fs.existsSync(COOKIE_FILE_PATH)) {
    const cookies = JSON.parse(fs.readFileSync(COOKIE_FILE_PATH));
    await page.context().addCookies(cookies);
    // console.log('Cookies loaded from file');
  }
  // console.timeEnd('Cookie Load Time');
}

async function scrapeInstagramData(username) {
  console.time('Total Scraper Time');

  let browser = null;
  try {
    browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
      defaultViewport: { width: 1280, height: 800 }
    });

    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    });

    const page = await context.newPage();

    // Block unnecessary requests like images and stylesheets
    await page.route('**/*', (route) => {
      const resourceType = route.request().resourceType();
      if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
        route.abort();
      } else {
        route.continue();
      }
    });

    // Load cookies if they exist
    await loadCookies(page);  

    // If no cookies, log in and save cookies
    if (!(await page.context().cookies()).length) {
      console.time('Login Time');
      await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 10000 });
      await page.waitForSelector('input[name="username"]', { timeout: 30000 });
      await humanDelay();
      await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
      await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });
      await Promise.all([
        page.click('button[type="submit"]'),
        page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
      ]);
      // console.log('Logged into Instagram...');
      await saveCookies(page);  // Save cookies after login
      // console.timeEnd('Login Time');
    }

    // Scraping data
    // console.time('Username Scrape Time');
    await gotoWithRetry(page, `https://www.instagram.com/${username}/`);
    await page.waitForSelector('header section ul li span', { timeout: 30000 });

    const userData = await page.evaluate(() => {
      const username = document.querySelector('meta[property="og:title"]')
        ? document.querySelector('meta[property="og:title"]').getAttribute('content').split('•')[0].trim()
        : null;

      const followersElement = document.querySelector('header section ul li a span');
      const followingElement = document.querySelector('header section ul li a[href*="/following"] span') ||
                               document.querySelector('header section ul li:nth-child(3) span');
      const postsElement = document.querySelector('header section ul li span');

      let followersCount = null;
      let followingCount = null;
      let postsCount = null;

      if (followersElement && followersElement.textContent) {
        const followersText = followersElement.textContent.trim();
        const followersMatch = followersText.match(/(\d+(\.\d+)?)([KMBkmb]?)\s*/);
        followersCount = followersMatch ? followersMatch[0] : null;
      }

      if (followingElement && followingElement.textContent) {
        const followingText = followingElement.textContent.trim();
        const followingMatch = followingText.match(/(\d+([,\.]\d{1,3})*)/);
        followingCount = followingMatch ? followingMatch[0] : null;
      } else {
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const descriptionContent = ogDescription ? ogDescription.getAttribute('content') : null;
        if (descriptionContent) {
          const followingMatch = descriptionContent.match(/, ([\d.,]+) Following/);
          followingCount = followingMatch ? followingMatch[1] : null;
        }
      }

      if (postsElement && postsElement.textContent) {
        const postsText = postsElement.textContent.trim();
        const postsMatch = postsText.match(/(\d+([,\.]\d{1,3})*)/);
        postsCount = postsMatch ? postsMatch[0] : null;
      }

      return { username, followersCount, followingCount, postsCount };
    });

    // console.timeEnd('Username Scrape Time');

    // console.time('Followers Scrape Time');
    // console.log(`Followers Count: ${userData.followersCount}`);
    // console.timeEnd('Followers Scrape Time');

    // console.time('Following Scrape Time');
    // console.log(`Following Count: ${userData.followingCount}`);
    // console.timeEnd('Following Scrape Time');

    // console.time('Posts Scrape Time');
    // console.log(`Posts Count: ${userData.postsCount}`);
    // console.timeEnd('Posts Scrape Time');

    return userData;

  } catch (error) {
    console.error('Error scraping Instagram data:', error);
    return null;
  } finally {
    if (browser) {
      await browser.close();
    }
    console.timeEnd('Total Scraper Time');
  }
}


// Default route for root URL
app.get('/', (req, res) => {
  res.send('API is running successfully, hurrah!');
});

app.get('/profile/:username', async (req, res) => {
  const { username } = req.params;
  const data = await scrapeInstagramData(username);

  if (data) {
    res.json({
      username: data.username,
      followers: data.followersCount,
      following: data.followingCount,
      posts: data.postsCount
    });
  } else {
    res.status(500).json({ error: 'Unable to fetch profile data' });
  }
});


// New endpoint to fetch cookies
app.get('/get-cookies', async (req, res) => {
  if (fs.existsSync(COOKIE_FILE_PATH)) {
    const cookies = JSON.parse(fs.readFileSync(COOKIE_FILE_PATH));
    res.json({ cookies });
  } else {
    res.status(404).json({ error: 'Cookies not found. Please log in first.' });
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});



