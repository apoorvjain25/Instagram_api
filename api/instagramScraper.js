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

// // console.log('Username:', INSTAGRAM_USERNAME);
// // console.log('Password:', INSTAGRAM_PASSWORD);

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
//     // console.log('Cookies loaded from file');
//   }
// }

// async function loadCookies(page) {
//   console.time('Cookie Load Time');
//   if (fs.existsSync(COOKIE_FILE_PATH)) {
//     const cookies = JSON.parse(fs.readFileSync(COOKIE_FILE_PATH));
//     await page.context().addCookies(cookies);
//     // console.log('Cookies loaded from file');
//   }
//   // console.timeEnd('Cookie Load Time');
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
//       console.time('Login Time');
//       await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 10000 });
//       await page.waitForSelector('input[name="username"]', { timeout: 30000 });
//       await humanDelay();
//       await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//       await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });
//       await Promise.all([
//         page.click('button[type="submit"]'),
//         page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//       ]);
//       // console.log('Logged into Instagram...');
//       await saveCookies(page);  // Save cookies after login
//       // console.timeEnd('Login Time');
//     }

//     // Scraping data
//     // console.time('Username Scrape Time');
//     await gotoWithRetry(page, `https://www.instagram.com/${username}/`);
//     await page.waitForSelector('header section ul li span', { timeout: 30000 });

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

//     // console.timeEnd('Username Scrape Time');

//     // console.time('Followers Scrape Time');
//     // console.log(`Followers Count: ${userData.followersCount}`);
//     // console.timeEnd('Followers Scrape Time');

//     // console.time('Following Scrape Time');
//     // console.log(`Following Count: ${userData.followingCount}`);
//     // console.timeEnd('Following Scrape Time');

//     // console.time('Posts Scrape Time');
//     // console.log(`Posts Count: ${userData.postsCount}`);
//     // console.timeEnd('Posts Scrape Time');

//     return userData;

//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     return null;
//   } finally {
//     if (browser) {
//       await browser.close();
//     }
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


//it also work perfectly without muktiole proxy code
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

//     // Check if cookies are in an array format
//     if (Array.isArray(cookies)) {
//       await page.context().addCookies(cookies);
//       // console.log('Cookies loaded from file');
//     } else {
//       console.error('Error: Cookies are not in the correct array format');
//     }
//   }
// }


// // Function to save cookies after login
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

    // const context = await browser.newContext({
    //   userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    // });

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
//       console.time('Login Time');
//       await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 10000 });
//       await page.waitForSelector('input[name="username"]', { timeout: 30000 });
//       await humanDelay();
//       await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//       await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });
//       await Promise.all([
//         page.click('button[type="submit"]'),
//         page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//       ]);
//       console.log('Logged into Instagram...');
//       await saveCookies(page);  // Save cookies after login
//       console.timeEnd('Login Time');
//     }

//     // Scraping data
//     await gotoWithRetry(page, `https://www.instagram.com/${username}/`);
//     await page.waitForSelector('header section ul li span', { timeout: 30000 });

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

//     return userData;

//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     return null;
//   } finally {
//     if (browser) {
//       await browser.close();
//     }
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



// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const { chromium } = require('playwright');
// const fs = require('fs');
// const delay = require('delay');
// const Chance = require('chance');
// const proxyChain = require('proxy-chain');

// const app = express();
// const port = process.env.PORT || 8080;

// const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME;
// const INSTAGRAM_PASSWORD = process.env.INSTAGRAM_PASSWORD;
// const COOKIE_FILE_PATH = './cookies.json'; // Path to store cookies

// // Proxy list with third-party proxies (from your data)
// const proxies = [
//   'http://154.213.196.228:3128',
//   'http://156.228.112.182:3128',
//   'http://104.207.53.119:3128',
//   'http://156.228.95.195:3128'
// ];

// let currentProxyIndex = 0;  // Keep track of the proxy to rotate

// // Function to get the next proxy in the list
// function getNextProxy() {
//   currentProxyIndex = (currentProxyIndex + 1) % proxies.length;
//   return proxies[currentProxyIndex];
// }

// // Human-like delay for simulating real user interaction
// async function humanDelay(min = 5, max = 20) {
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay * 1000); // delay in milliseconds
// }

// // Function to load cookies from the JSON file
// async function loadCookies(page) {
//   if (fs.existsSync(COOKIE_FILE_PATH)) {
//     const cookies = JSON.parse(fs.readFileSync(COOKIE_FILE_PATH));
//     if (Array.isArray(cookies)) {
//       await page.context().addCookies(cookies);
//     } else {
//       console.error('Error: Cookies are not in the correct array format');
//     }
//   }
// }

// // Function to save cookies after login
// async function saveCookies(page) {
//   const cookies = await page.context().cookies();
//   fs.writeFileSync(COOKIE_FILE_PATH, JSON.stringify(cookies, null, 2));
//   console.log('Cookies saved to file');
// }

// // Function to log proxy IP when rotating proxies
// async function logProxyIp(proxyUrl) {
//   const proxiedUrl = await proxyChain.anonymizeProxy(proxyUrl);
//   console.log(`Using Proxy: ${proxyUrl}`);
//   console.log(`Proxy URL after anonymizing: ${proxiedUrl}`);
//   // Log the IP of the current proxy in the console
//   // No need to use external APIs here, just log the IP rotation
// }

// async function scrapeInstagramData(username) {
//   console.time('Total Scraper Time');

//   let browser = null;
//   try {
//     const proxyUrl = getNextProxy();  // Rotate proxy
//     await logProxyIp(proxyUrl);  // Log the IP being used

//     const proxiedBrowser = await proxyChain.anonymizeProxy(proxyUrl); // Set up proxy

//     browser = await chromium.launch({
//       headless: false,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', `--proxy-server=${proxiedBrowser}`],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const context = await browser.newContext({
//       userAgent: new Chance().pickone([  
//         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//         'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//         'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0',
//         'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 Edge/91.0.864.54'
//       ]), 
//       acceptDownloads: true
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
//       console.time('Login Time');
//       await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'load', timeout: 10000 });
//       await page.waitForSelector('input[name="username"]', { timeout: 30000 });
//       await humanDelay();
//       await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//       await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });
//       await Promise.all([
//         page.click('button[type="submit"]'),
//         page.waitForNavigation({ waitUntil: 'load', timeout: 10000 })
//       ]);
//       console.log('Logged into Instagram...');
//       await saveCookies(page);  // Save cookies after login
//       console.timeEnd('Login Time');
//     }

//     // Scraping data with extended timeout and networkidle
//     try {
//       await page.goto(`https://www.instagram.com/${username}/`, { waitUntil: 'networkidle', timeout: 60000 });
//     } catch (error) {
//       console.error('Error loading Instagram profile:', error);
//       return null;
//     }

//     await page.waitForSelector('header section ul li span', { timeout: 30000 });

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

//       if (followersElement && followersElement.textContent) {
//         const followersText = followersElement.textContent.trim();
//         const followersMatch = followersText.match(/(\d+(\.\d+)?)([KMBkmb]?)\s*/);
//         followersCount = followersMatch ? followersMatch[0] : null;
//       }

//       if (followingElement && followingElement.textContent) {
//         const followingText = followingElement.textContent.trim();
//         const followingMatch = followingText.match(/(\d+([,\.]\d{1,3})*)/);
//         followingCount = followingMatch ? followingMatch[0] : null;
//       }

//       if (postsElement && postsElement.textContent) {
//         const postsText = postsElement.textContent.trim();
//         const postsMatch = postsText.match(/(\d+([,\.]\d{1,3})*)/);
//         postsCount = postsMatch ? postsMatch[0] : null;
//       }

//       return { username, followersCount, followingCount, postsCount };
//     });

//     return userData;

//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     return null;
//   } finally {
//     if (browser) {
//       await browser.close();
//     }
//     console.timeEnd('Total Scraper Time');
//   }
// }

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

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });



// working code of scrap profile user basic data without login successfully
// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// const port = 5000;

// // Minimize human delay for better performance
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

//     const browser = await puppeteer.launch({
//       headless: false,
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

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });

//     // Handle the login pop-up or modal if it appears
//     try {
//       await page.waitForSelector('button[type="button"]:not([style="display: none;"])', { timeout: 5000 });
//       console.log('Login popup detected, closing it...');
//       await page.click('button[type="button"]:not([style="display: none;"])');
//     } catch (err) {
//       console.log('No login popup appeared');
//     }

//     // Wait for the profile page elements to load
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

//     console.timeEnd('Total Scraper Time');

//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
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




// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// const port = 8080;

// // Minimize human delay for better performance
// async function loadDelay() {
//   return (await import('delay')).default;
// }

// async function humanDelay(min = 5, max = 20) {
//   const delay = await loadDelay();
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay);
// }

// // List of 10 unique user agents
// const userAgents = [
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
//   'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:81.0) Gecko/20100101 Firefox/81.0',
//   'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:93.0) Gecko/20100101 Firefox/93.0',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
// ];

// // Function to pick a random user agent
// const getRandomUserAgent = () => userAgents[Math.floor(Math.random() * userAgents.length)];

// async function scrapeInstagramData(username) {
//   try {
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

//     // Set a random User-Agent from the list
//     await page.setUserAgent(getRandomUserAgent());

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await page.goto(url, { waitUntil: 'networkidle0', timeout: 20000 });

//     // Handle the login pop-up or modal if it appears
//     try {
//       await page.waitForSelector('button[type="button"]:not([style="display: none;"])', { timeout: 5000 });
//       console.log('Login popup detected, closing it...');
//       await page.click('button[type="button"]:not([style="display: none;"])');
//     } catch (err) {
//       console.log('No login popup appeared');
//     }

//     // Wait for the profile page elements to load
//     await page.waitForSelector('header section ul li span', { timeout: 10000 });

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');
//       const posts = stats[0]?.querySelector('span')?.innerText || null;
//       const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector('span')?.innerText || null;
//       const extractedUsername = document.querySelector('header h2')?.innerText || null;
//       return { extractedUsername, posts, followers, following };
//     });

//     await browser.close();

//     console.timeEnd('Total Scraper Time');

//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
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

// app.get('/', (req, res) => {
//   res.send('API is running');
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });



// const express = require('express');
// const puppeteer = require('puppeteer');
// const loadDelay = require('delay');

// const app = express();
// const port = 8080;

// const proxies = [
//   '156.233.86.178:3128', // Brazil
//   '45.202.78.80:3128', // Italy
//   '156.253.171.164:3128', // United Kingdom
//   '104.207.46.127:3128', // United States of America
//   '156.228.79.82:3128', // United States of America
//   '156.228.79.151:3128', // United States of America
//   '156.228.94.21:3128', // United States of America
//   '154.213.195.66:3128', // France
//   '45.201.10.7:3128', // Thailand
//   '156.228.189.249:3128' // United States of America
// ];


// // Function to get a random proxy from the list
// const getRandomProxy = () => proxies[Math.floor(Math.random() * proxies.length)];

// // List of 10 unique user agents
// const userAgents = [
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
//   'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:81.0) Gecko/20100101 Firefox/81.0',
//   'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:93.0) Gecko/20100101 Firefox/93.0',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
// ];

// // Function to pick a random user agent
// const getRandomUserAgent = () => userAgents[Math.floor(Math.random() * userAgents.length)];

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     // Randomly pick a proxy
//     const proxy = getRandomProxy();
//     console.log(`Using proxy: ${proxy}`);

//     const browser = await puppeteer.launch({
//       headless: true,
//       args: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-dev-shm-usage',
//         `--proxy-server=${proxy}` // Set the proxy here
//       ],
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

//     // Set a random User-Agent from the list
//     await page.setUserAgent(getRandomUserAgent());

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await page.goto(url, { waitUntil: 'networkidle0', timeout: 20000 });

//     // Handle the login pop-up or modal if it appears
//     try {
//       await page.waitForSelector('button[type="button"]:not([style="display: none;"])', { timeout: 5000 });
//       console.log('Login popup detected, closing it...');
//       await page.click('button[type="button"]:not([style="display: none;"])');
//     } catch (err) {
//       console.log('No login popup appeared');
//     }

//     // Wait for the profile page elements to load
//     await page.waitForSelector('header section ul li span', { timeout: 10000 });

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');
//       const posts = stats[0]?.querySelector('span')?.innerText || null;
//       const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector('span')?.innerText || null;
//       const extractedUsername = document.querySelector('header h2')?.innerText || null;
//       return { extractedUsername, posts, followers, following };
//     });

//     await browser.close();

//     console.timeEnd('Total Scraper Time');

//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
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

// app.get('/', (req, res) => {
//   res.send('API is running');
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });

// without login code work with proxy rotation but instagram detect unusual hit without login on default page
// const express = require('express');
// const puppeteer = require('puppeteer');
// const loadDelay = require('delay');

// const app = express();
// const port = 8080;

// const proxies = [
//   '156.233.86.178:3128', // Brazil
//   '45.202.78.80:3128', // Italy
//   '156.253.171.164:3128', // United Kingdom
//   '104.207.46.127:3128', // United States of America
//   '156.228.79.82:3128', // United States of America
//   '156.228.79.151:3128', // United States of America
//   '156.228.94.21:3128', // United States of America
//   '154.213.195.66:3128', // France
//   '45.201.10.7:3128', // Thailand
//   '156.228.189.249:3128' // United States of America
// ];

// // Function to get a random proxy from the list
// const getRandomProxy = () => proxies[Math.floor(Math.random() * proxies.length)];

// // List of 10 unique user agents
// const userAgents = [
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
//   'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:81.0) Gecko/20100101 Firefox/81.0',
//   'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:93.0) Gecko/20100101 Firefox/93.0',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
// ];

// // Function to pick a random user agent
// const getRandomUserAgent = () => userAgents[Math.floor(Math.random() * userAgents.length)];

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     // Randomly pick a proxy
//     const proxy = getRandomProxy();
//     console.log(`Using proxy: ${proxy}`);

//     const browser = await puppeteer.launch({
//       headless: false, // Set to false to see the browser window
//       args: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-dev-shm-usage',
//         `--proxy-server=${proxy}` // Set the proxy here
//       ],
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

//     // Set a random User-Agent from the list
//     await page.setUserAgent(getRandomUserAgent());

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

//     // Handle the login pop-up or modal if it appears
//     try {
//       await page.waitForSelector('button[type="button"]:not([style="display: none;"])', { timeout: 5000 });
//       console.log('Login popup detected, closing it...');
//       await page.click('button[type="button"]:not([style="display: none;"])');
//     } catch (err) {
//       console.log('No login popup appeared');
//     }

//     // Wait for the profile page elements to load, with increased timeout
//     await page.waitForSelector('header section ul li span', { timeout: 30000 });

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');
//       const posts = stats[0]?.querySelector('span')?.innerText || null;
//       const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector('span')?.innerText || null;
//       const extractedUsername = document.querySelector('header h2')?.innerText || null;
//       return { extractedUsername, posts, followers, following };
//     });

//     await browser.close();

//     console.timeEnd('Total Scraper Time');

//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
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

// app.get('/', (req, res) => {
//   res.send('API is running');
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });

// require('dotenv').config(); // Load environment variables
// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// const port = 8080;

// // Environment Variables for Proxy and Instagram Credentials
// const proxyHost = process.env.PROXY_HOST || "proxy.toolip.io";
// const proxyPort = process.env.PROXY_PORT || "31114";
// const proxyUsername = process.env.PROXY_USERNAME;
// const proxyPassword = process.env.PROXY_PASSWORD;
// const instagramPassword = process.env.INSTAGRAM_PASSWORD; // Store Instagram password securely

// async function loginToInstagram(username) {
//   try {
//     console.time('Total Scraper Time');

//     // Puppeteer launch options
//     const browser = await puppeteer.launch({
//       headless: true,
//       args: [
//         `--proxy-server=http://${proxyHost}:${proxyPort}`,
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-dev-shm-usage',
//       ],
//       ignoreHTTPSErrors: true,
//     });

//     const page = await browser.newPage();

//     // Proxy authentication
//     console.log('Authenticating proxy...');
//     await page.authenticate({
//       username: proxyUsername,
//       password: proxyPassword,
//     });

//     // Set user agent and viewport
//     const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
//     await page.setUserAgent(userAgent);
//     await page.setViewport({ width: 1366, height: 768 });

//     console.log('Navigating to Instagram login page...');
//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'networkidle2',
//       timeout: 30000,
//     });

//     // Wait for the login form
//     await page.waitForSelector('input[name="username"]', { timeout: 10000 });

//     console.log('Entering login credentials...');
//     await page.type('input[name="username"]', username, { delay: 100 });
//     await page.type('input[name="password"]', instagramPassword, { delay: 100 });

//     console.log('Submitting login form...');
//     await page.click('button[type="submit"]');
//     await page.waitForNavigation({ waitUntil: 'networkidle2' });

//     // Check for login error
//     const loginError = await page.$('div[role="alert"]');
//     if (loginError) {
//       console.error('Login failed. Please check your credentials.');
//       await browser.close();
//       return null;
//     }

//     console.log('Login successful. Navigating to profile page...');
//     await page.goto(`https://www.instagram.com/${username}/`, { waitUntil: 'networkidle2' });

//     console.log('Extracting profile data...');
//     const profileData = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');
//       return {
//         posts: stats[0]?.innerText || 'N/A',
//         followers: stats[1]?.innerText || 'N/A',
//         following: stats[2]?.innerText || 'N/A',
//       };
//     });

//     await browser.close();
//     console.timeEnd('Total Scraper Time');
//     return profileData;
//   } catch (error) {
//     console.error('Error during scraping:', error);
//     return null;
//   }
// }

// // API route to fetch profile data
// app.get('/profile/:username', async (req, res) => {
//   const username = req.params.username;

//   console.log(`Scraping Instagram profile for user: ${username}`);
//   const data = await loginToInstagram(username);

//   if (data) {
//     res.json(data);
//   } else {
//     res.status(500).json({ error: 'Failed to fetch profile data' });
//   }
// });

// // Start the Express server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// require('dotenv').config();
// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// const fs = require('fs');

// // Use Puppeteer stealth plugin to avoid detection
// puppeteer.use(StealthPlugin());

// async function loginToInstagram() {
//   try {
//     // Load proxy configuration from JSON file
//     const proxies = JSON.parse(fs.readFileSync('proxyConfig.json', 'utf8'));

//     // Use the first proxy in the list (you can add logic for rotation if needed)
//     const proxy = proxies[0];

//     const { login, password, host, port } = proxy;
//     const { INSTAGRAM_USERNAME, INSTAGRAM_PASSWORD } = process.env;

//     // Determine proxy type (HTTP or SOCKS)
//     const proxyType = proxy.socks5 ? 'socks5' : 'http';

//     const browser = await puppeteer.launch({
//       headless: false, // Set to true for headless mode
//       args: [`--proxy-server=${proxyType}://${host}:${port}`],
//     });

//     const page = await browser.newPage();

//     // Authenticate with the proxy
//     await page.authenticate({
//       username: login,
//       password,
//     });

//     // Set a user agent
//     await page.setUserAgent(
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.5790.102 Safari/537.36'
//     );

//     // Navigate to Instagram login page
//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'networkidle2',
//       timeout: 60000,
//     });

//     // Wait for the username input field and fill in credentials
//     await page.waitForSelector('input[name="username"]', { timeout: 30000 });
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 100 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 100 });

//     // Click login button
//     await page.click('button[type="submit"]');

//     // Wait for navigation after login
//     await page.waitForNavigation({ waitUntil: 'networkidle2' });

//     console.log('Login successful');

//     // Optionally: Take a screenshot for debugging
//     await page.screenshot({ path: 'login-success.png' });

//     await browser.close();
//   } catch (err) {
//     console.error('Error during scraping:', err);
//   }
// }

// loginToInstagram();

// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const path = require('path');

// async function loginToInstagram() {
//   try {
//     // Build absolute path for proxyConfig.json
//     const configPath = path.join(__dirname, 'proxyConfig.json');

//     // Check if the file exists
//     if (!fs.existsSync(configPath)) {
//       throw new Error(`File not found: ${configPath}`);
//     }

//     // Load and parse proxy configuration
//     const proxies = JSON.parse(fs.readFileSync(configPath, 'utf8'));
//     const proxy = proxies[0];  // Assuming you only have one proxy configuration

//     // Log proxy details to verify
//     console.log('Using proxy:', proxy);

//     // Start Puppeteer with proxy configuration and bypass SSL errors
//     const browser = await puppeteer.launch({
//       headless: false,  // Set to true if you don't want to see the browser UI
//       args: [
//         `--proxy-server=${proxy.host}:${proxy.port}`,
//       ],
//       ignoreHTTPSErrors: true,  // Ignore SSL certificate errors
//     });

//     const page = await browser.newPage();

//     // Set proxy authentication credentials
//     await page.authenticate({
//       username: proxy.login,
//       password: proxy.password,
//     });

//     // Use page context to also ignore SSL errors
//     await page.setRequestInterception(true);

//     page.on('request', (request) => {
//       if (request.resourceType() === 'document') {
//         request.continue();
//       } else {
//         request.continue();
//       }
//     });

//     console.log('Navigating to Instagram login page...');
//     await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle2' });

//     // Perform Instagram login
//     await page.type('input[name="username"]', 'arunsharma99758'); // Your Instagram username
//     await page.type('input[name="password"]', 'Arun@123'); // Your Instagram password
//     await page.click('button[type="submit"]');

//     console.log('Logging in...');
//     await page.waitForNavigation({ waitUntil: 'networkidle2' });

//     // After logging in, you can start scraping the Instagram profile
//     console.log('Logged in successfully, now scraping profile...');

//     // Navigate to the Instagram profile
//     await page.goto('https://www.instagram.com/arunsharma99758/', { waitUntil: 'networkidle2' });

//     // Scraping logic here...
//     const profileData = await page.evaluate(() => {
//       return {
//         username: document.querySelector('h1') ? document.querySelector('h1').innerText : null,
//         posts: document.querySelectorAll('.v1Nh3') ? document.querySelectorAll('.v1Nh3').length : 0
//       };
//     });

//     console.log('Scraped Profile Data:', profileData);

//     await browser.close();
//   } catch (err) {
//     console.error('Error during scraping:', err);
//   }
// }

// loginToInstagram();


//ssl working code perfectly with proxy rotation

// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const path = require('path');

// async function scrapeInstagram() {
//   try {
//     // Build absolute path for proxyConfig.json and SSL certificate
//     const configPath = path.join(__dirname, 'proxyConfig.json');
//     const sslCertPath = path.join(__dirname, 'ssl_toolip_certificate.cer'); // Replace with actual path

//     // Check if the file exists
//     if (!fs.existsSync(configPath)) {
//       throw new Error(`File not found: ${configPath}`);
//     }

//     // Load and parse proxy configuration
//     const proxies = JSON.parse(fs.readFileSync(configPath, 'utf8'));
//     const proxy = proxies[0];  // Assuming you only have one proxy configuration

//     // Log proxy details to verify
//     console.log('Using proxy:', proxy);

//     // Check if SSL certificate exists
//     if (!fs.existsSync(sslCertPath)) {
//       throw new Error(`SSL certificate not found: ${sslCertPath}`);
//     }

//     // Start Puppeteer with proxy configuration and SSL certificate
//     const browser = await puppeteer.launch({
//       headless: true,  // Set to true if you don't want to see the browser UI
//       args: [
//         `--proxy-server=${proxy.host}:${proxy.port}`,
//         `--ignore-certificate-errors`,  // Ignore SSL certificate errors
//         `--cert-load=${sslCertPath}`,  // Load the SSL certificate
//       ],
//       ignoreHTTPSErrors: true,  // Ignore SSL certificate errors
//     });

//     const page = await browser.newPage();

//     // Set proxy authentication credentials
//     await page.authenticate({
//       username: proxy.login,
//       password: proxy.password,
//     });

//     // Navigate to Instagram profile
//     console.log('Navigating to Instagram profile page...');
//     await page.goto('https://www.instagram.com/iamsrk/', { waitUntil: 'networkidle2' });

//     // Scraping logic here...
//     const profileData = await page.evaluate(() => {
//       return {
//         username: document.querySelector('h1') ? document.querySelector('h1').innerText : null,
//         posts: document.querySelectorAll('.v1Nh3') ? document.querySelectorAll('.v1Nh3').length : 0
//       };
//     });

//     console.log('Scraped Profile Data:', profileData);

//     await browser.close();
//   } catch (err) {
//     console.error('Error during scraping:', err);
//   }
// }

// scrapeInstagram();


// const puppeteer = require("puppeteer-core");


// const URL = "https://www.instagram.com/";
// const BROWSER_WS = "wss://brd-customer-hl_c56b0932-zone-scraping_browser1:49qi53gye688@brd.superproxy.io:9222";

// // Replace this with the Instagram username you want to scrape
// const username = "tarunshrm222";

// run(URL, username);

// async function run(url, username) {
//   console.log("Connecting to browser...");
//   const browser = await puppeteer.connect({
//     browserWSEndpoint: BROWSER_WS,
//   });
//   console.log("Connected! Navigate to site...");
//   const page = await browser.newPage();
//   const profileUrl = `${url}${username}/`;
//   console.log(`Navigating to: ${profileUrl}`);
//   await page.goto(profileUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });

//   console.log("Waiting for necessary elements...");
//   // Wait for the elements (profile stats) to be available
//   await page.waitForSelector('header section ul li span', { timeout: 30000 });

//   console.log("Parsing data...");
//   const data = await page.evaluate(() => {
//     const stats = document.querySelectorAll('header section ul li');
    
//     // Extract posts, followers, and following
//     const posts = stats[0]?.querySelector('span')?.innerText || 'Not found';
//     const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || 'Not found';
//     const following = stats[2]?.querySelector('span')?.innerText || 'Not found';

//     // Extract the username (if available)
//     const extractedUsername = document.querySelector('header h2')?.innerText || 'Not found';
    
//     return { extractedUsername, posts, followers, following };
//   });

//   console.log("Data parsed:", JSON.stringify(data, null, 2));

//   await browser.close();
// }


// const puppeteer = require("puppeteer-core");

// const URL = "https://www.instagram.com/";
// const BROWSER_WS = "wss://brd-customer-hl_c56b0932-zone-scraping_browser1:49qi53gye688@brd.superproxy.io:9222";

// // Replace this with the Instagram username you want to scrape
// const username = "tarunshrm222";

// run(URL, username);

// async function run(url, username) {
//   try {
//     console.log("Connecting to browser...");
//     const browser = await puppeteer.connect({
//       browserWSEndpoint: BROWSER_WS,
//     });
//     console.log("Connected! Navigate to site...");
//     const page = await browser.newPage();
//     const profileUrl = `${url}${username}/`;
//     console.log(`Navigating to: ${profileUrl}`);

//     let retries = 3;
//     while (retries > 0) {
//       try {
//         // Attempt to navigate to the Instagram profile
//         await page.goto(profileUrl, { waitUntil: 'networkidle0', timeout: 60000 });
//         console.log("Navigation successful!");
//         break;
//       } catch (error) {
//         retries -= 1;
//         console.log(`Navigation failed. Retrying... Attempts left: ${retries}`);
//         if (retries === 0) {
//           throw new Error("Navigation failed after multiple attempts.");
//         }
//       }
//     }

//     console.log("Waiting for necessary elements...");
//     // Wait for the elements (profile stats) to be available
//     await page.waitForSelector('header section ul li span', { timeout: 30000 });

//     console.log("Parsing data...");
//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');
      
//       // Extract posts, followers, and following
//       const posts = stats[0]?.querySelector('span')?.innerText || 'Not found';
//       const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || 'Not found';
//       const following = stats[2]?.querySelector('span')?.innerText || 'Not found';

//       // Extract the username (if available)
//       const extractedUsername = document.querySelector('header h2')?.innerText || 'Not found';
      
//       return { extractedUsername, posts, followers, following };
//     });

//     console.log("Data parsed:", JSON.stringify(data, null, 2));

//     await browser.close();
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }
// }




//perfect work with proxy latest code 16 Nov
// const puppeteer = require("puppeteer-core");

// const URL = "https://www.instagram.com/";
// const BROWSER_WS = "wss://brd-customer-hl_c56b0932-zone-scraping_browser1:49qi53gye688@brd.superproxy.io:9222";

// // Replace this with the Instagram username you want to scrape
// const username = "imkamaalkhan";

// run(URL, username);

// async function run(url, username) {
//   try {
//     console.log("Connecting to browser...");
//     const browser = await puppeteer.connect({
//       browserWSEndpoint: BROWSER_WS,
//     });
//     console.log("Connected! Navigate to site...");
//     const page = await browser.newPage();
//     const profileUrl = `${url}${username}/`;
//     console.log(`Navigating to: ${profileUrl}`);

//     let retries = 3;
//     while (retries > 0) {
//       try {
//         // Attempt to navigate to the Instagram profile
//         await page.goto(profileUrl, { waitUntil: 'networkidle0', timeout: 60000 });
//         console.log("Navigation successful!");
//         break;
//       } catch (error) {
//         retries -= 1;
//         console.log(`Navigation failed. Retrying... Attempts left: ${retries}`);
//         if (retries === 0) {
//           throw new Error("Navigation failed after multiple attempts.");
//         }
//       }
//     }

//     console.log("Waiting for necessary elements...");
//     try {
//       // Wait for the elements (profile stats) to be available
//       await page.waitForSelector('header section ul li span', { timeout: 5000 });
//       console.log("Elements found!");

//       // Parse the data
//       const data = await page.evaluate(() => {
//         const stats = document.querySelectorAll('header section ul li');
//         const posts = stats[0]?.querySelector('span')?.innerText || null;
//         const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//         const following = stats[2]?.querySelector('span')?.innerText || null;
//         const extractedUsername = document.querySelector('header h2')?.innerText || null;
//         return { extractedUsername, posts, followers, following };
//       });

//       console.log("Data parsed:", JSON.stringify(data, null, 2));
//     } catch (error) {
//       console.error("Error while waiting for selector:", error.message);
//     }

//     await browser.close();
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }
// }


// const puppeteer = require("puppeteer-core");
// const express = require("express");

// const URL = "https://www.instagram.com/";
// const BROWSER_WS = "wss://brd-customer-hl_c56b0932-zone-scraping_browser1:49qi53gye688@brd.superproxy.io:9222";

// const app = express();


// // Health check endpoint to verify API is running
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "API is running........",
//   });
// });


// // API endpoint to scrape Instagram profile with username from URL
// app.get("/profile/:username", async (req, res) => {
//   const { username } = req.params; // Extracting username from the URL
//   if (!username) {
//     return res.status(400).json({ error: "Username is required!" });
//   }

//   console.log(`Scraping profile for username: ${username}`);
//   try {
//     const data = await run(URL, username);
//     res.status(200).json({ success: true, data });
//   } catch (error) {
//     console.error("Error occurred during scraping:", error.message);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Start the Express server
// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// // Puppeteer scraping function
// async function run(url, username) {
//   try {
//     console.log("Connecting to browser...");
//     const browser = await puppeteer.connect({
//       browserWSEndpoint: BROWSER_WS,
//     });
//     console.log("Connected! Navigating to site...");
//     const page = await browser.newPage();
//     const profileUrl = `${url}${username}/`;
//     console.log(`Navigating to: ${profileUrl}`);

//     let retries = 3;
//     while (retries > 0) {
//       try {
//         await page.goto(profileUrl, { waitUntil: "networkidle0", timeout: 60000 });
//         console.log("Navigation successful!");
//         break;
//       } catch (error) {
//         retries -= 1;
//         console.log(`Navigation failed. Retrying... Attempts left: ${retries}`);
//         if (retries === 0) {
//           throw new Error("Navigation failed after multiple attempts.");
//         }
//       }
//     }

//     console.log("Waiting for necessary elements...");
//     await page.waitForSelector("header section ul li span", { timeout: 5000 });
//     console.log("Elements found!");

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll("header section ul li");
//       const posts = stats[0]?.querySelector("span")?.innerText || null;
//       const followers = stats[1]?.querySelector("span")?.getAttribute("title") || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector("span")?.innerText || null;
//       const extractedUsername = document.querySelector("header h2")?.innerText || null;
//       return { extractedUsername, posts, followers, following };
//     });

//     console.log("Data parsed:", JSON.stringify(data, null, 2));
//     await browser.close();

//     return data;
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//     throw error;
//   }
// }



// Proxcy code latest work perfect 
// const puppeteer = require("puppeteer-core");
// const express = require("express");
// const cors = require("cors"); // Import CORS

// const URL = "https://www.instagram.com/";
// const BROWSER_WS = "wss://brd-customer-hl_c56b0932-zone-scraping_browser1:49qi53gye688@brd.superproxy.io:9222";

// const app = express();

// // Use CORS middleware
// app.use(cors()); // Allow all origins

// // Health check endpoint to verify API is running
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "API is running........",
//   });
// });

// // API endpoint to scrape Instagram profile with username from URL
// app.get("/profile/:username", async (req, res) => {
//   const { username } = req.params; // Extracting username from the URL
//   if (!username) {
//     return res.status(400).json({ error: "Username is required!" });
//   }

//   console.log(`Scraping profile for username: ${username}`);
//   try {
//     const data = await run(URL, username);
//     res.status(200).json({ success: true, data });
//   } catch (error) {
//     console.error("Error occurred during scraping:", error.message);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Start the Express server
// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// // Puppeteer scraping function
// async function run(url, username) {
//   try {
//     console.log("Connecting to browser...");
//     const browser = await puppeteer.connect({
//       browserWSEndpoint: BROWSER_WS,
//     });
//     console.log("Connected! Navigating to site...");
//     const page = await browser.newPage();
//     const profileUrl = `${url}${username}/`;
//     console.log(`Navigating to: ${profileUrl}`);

//     let retries = 3;
//     while (retries > 0) {
//       try {
//         await page.goto(profileUrl, { waitUntil: "networkidle0", timeout: 60000 });
//         console.log("Navigation successful!");
//         break;
//       } catch (error) {
//         retries -= 1;
//         console.log(`Navigation failed. Retrying... Attempts left: ${retries}`);
//         if (retries === 0) {
//           throw new Error("Navigation failed after multiple attempts.");
//         }
//       }
//     }
//     console.log("Waiting for necessary elements...");
//     await page.waitForSelector("header section ul li span", { timeout: 5000 });
//     console.log("Elements found!");

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll("header section ul li");
//       const posts = stats[0]?.querySelector("span")?.innerText || null;
//       const followers = stats[1]?.querySelector("span")?.getAttribute("title") || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector("span")?.innerText || null;
//       const extractedUsername = document.querySelector("header h2")?.innerText || null;

//         // Extracting bio text
//   const bio = document.querySelector("header section div > span")?.innerText || null;

//       return { extractedUsername, posts, followers, following, bio };
//     });

//     console.log("Data parsed:", JSON.stringify(data, null, 2));
//     await browser.close();

//     return data;
//   } catch (error) {
    
//     console.error("An error occurred:", error.message);
//     throw error;
//   }
// }

//proxy code work & console all process time 

// const puppeteer = require("puppeteer-core");
// const express = require("express");
// const cors = require("cors"); // Import CORS

// const URL = "https://www.instagram.com/";
// const BROWSER_WS = "wss://brd-customer-hl_f7df9886-zone-scraping_browser1:unruwff8pb50@brd.superproxy.io:9222";

// const app = express();

// // Use CORS middleware
// app.use(cors()); // Allow all origins

// // Health check endpoint to verify API is running
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "API is running........",
//   });
// });

// // API endpoint to scrape Instagram profile with username from URL
// app.get("/profile/:username", async (req, res) => {
//   const { username } = req.params; // Extracting username from the URL
//   if (!username) {
//     return res.status(400).json({ error: "Username is required!" });
//   }

//   console.log(`Scraping profile for username: ${username}`);
//   try {
//     const data = await run(URL, username);
//     res.status(200).json({ success: true, data });
//   } catch (error) {
//     console.error("Error occurred during scraping:", error.message);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // Start the Express server
// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// // Puppeteer scraping function
// async function run(url, username) {
//   console.time("Total Time");
//   try {
//     console.time("Connecting to Browser");
//     const browser = await puppeteer.connect({
//       browserWSEndpoint: BROWSER_WS,
//     });
//     console.timeEnd("Connecting to Browser");

//     console.time("Opening New Page");
//     const page = await browser.newPage();
//     console.timeEnd("Opening New Page");

//     const profileUrl = `${url}${username}/`;
//     console.log(`Navigating to: ${profileUrl}`);

//     console.time("Page Load Time");
//     let retries = 3;
//     while (retries > 0) {
//       try {
//         await page.goto(profileUrl, { waitUntil: "networkidle0", timeout: 60000 });
//         console.timeEnd("Page Load Time");
//         console.log("Navigation successful!");
//         break;
//       } catch (error) {
//         retries -= 1;
//         console.log(`Navigation failed. Retrying... Attempts left: ${retries}`);
//         if (retries === 0) {
//           throw new Error("Navigation failed after multiple attempts.");
//         }
//       }
//     }

//     console.time("Element Wait Time");
//     await page.waitForSelector("header section ul li span", { timeout: 20000 });
//     console.timeEnd("Element Wait Time");
//     console.log("Elements found!");

//     console.time("Data Extraction Time");
//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll("header section ul li");
//       const posts = stats[0]?.querySelector("span")?.innerText || null;
//       const followers = stats[1]?.querySelector("span")?.getAttribute("title") || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector("span")?.innerText || null;
//       const extractedUsername = document.querySelector("header h2")?.innerText || null;

   
//     //Extracting bio text 
//   const bio1 = document.querySelector("header section div > span")?.innerText || null;
//   const bio2 = document.querySelector("header section div div > span")?.innerText || null;

      
//       return { extractedUsername, posts, followers, following, bio1, bio2};


//     });
//     console.timeEnd("Data Extraction Time");

//     console.log("Data parsed:", JSON.stringify(data, null, 2));

//     console.time("Browser Close Time");
//     await browser.close();
//     console.timeEnd("Browser Close Time");

//     console.timeEnd("Total Time");
//     return data;
//   } catch (error) {
//     console.timeEnd("Total Time");
//     console.error("An error occurred:", error.message);
//     throw error;
//   }
// }




//test code 
const puppeteer = require("puppeteer-core");
const express = require("express");
const cors = require("cors"); // Import CORS

const URL = "https://www.instagram.com/";
const BROWSER_WS = "wss://brd-customer-hl_f7df9886-zone-scraping_browser1:unruwff8pb50@brd.superproxy.io:9222";

const app = express();

// Use CORS middleware
app.use(cors()); // Allow all origins

// Health check endpoint to verify API is running
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running........",
  });
});

// API endpoint to scrape Instagram profile with username from URL
app.get("/profile/:username", async (req, res) => {
  const { username } = req.params; // Extracting username from the URL
  if (!username) {
    return res.status(400).json({ error: "Username is required!" });
  }

  console.log(`Scraping profile for username: ${username}`);
  try {
    const data = await run(URL, username);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error occurred during scraping:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the Express server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Puppeteer scraping function
async function run(url, username) {
  console.time("Total Time");
  try {
    console.time("Connecting to Browser");
    const browser = await puppeteer.connect({
      browserWSEndpoint: BROWSER_WS,
    });
    
    console.timeEnd("Connecting to Browser");

    console.time("Opening New Page");
    const page = await browser.newPage();
    console.timeEnd("Opening New Page");

    const profileUrl = `${url}${username}/`;
    console.log(`Navigating to: ${profileUrl}`);

    console.time("Page Load Time");
    let retries = 3;
    while (retries > 0) {
      try {
        // await page.goto(profileUrl, { waitUntil: "networkidle0", timeout: 60000 });
        await page.goto(profileUrl, { waitUntil: "domcontentloaded", timeout: 10000 });


        console.timeEnd("Page Load Time");
        console.log("Navigation successful!");
        break;
      } catch (error) {
        retries -= 1;
        console.log(`Navigation failed. Retrying... Attempts left: ${retries}`);
        if (retries === 0) {
          throw new Error("Navigation failed after multiple attempts.");
        }
      }
    }

    console.time("Element Wait Time");
    await page.waitForSelector("header section ul li span", { timeout: 20000 });
    console.timeEnd("Element Wait Time");
    console.log("Elements found!");

    console.time("Data Extraction Time");
    const data = await page.evaluate(() => {
      const stats = document.querySelectorAll("header section ul li");
      const posts = stats[0]?.querySelector("span")?.innerText || null;
      const followers = stats[1]?.querySelector("span")?.getAttribute("title") || stats[1]?.innerText || null;
      const following = stats[2]?.querySelector("span")?.innerText || null;
      const extractedUsername = document.querySelector("header h2")?.innerText || null;

   
    //Extracting bio text 
  const name = document.querySelector("header section div > span")?.innerText || null;
  //const bio = document.querySelector("header section div div")?.innerText || null;

  //   // Extract the bio from the `description` meta tag
  // const metaDescription = document.querySelector("meta[name='description']")?.getAttribute("content") || null;
  // let bio = null;

  // if (metaDescription) {
  //   // Extract the part after "on Instagram:"
  //   const match = metaDescription.match(/on Instagram: (.+)$/);
  //   bio = match ? match[1].trim() : null;
  // }

  // Extract profile image URL from `og:image` meta tag
  const profileImageUrl = document.querySelector("meta[property='og:image']")?.getAttribute("content") || null;
  //const fullBio = document.querySelector("meta[property='og:description']")?.getAttribute("content") || null;
  
  // Select the meta tag with the name "description"
const fullBio = document.querySelector("meta[name='description']")?.getAttribute("content") || null;

  const userUrl = document.querySelector("meta[property='og:url']")?.getAttribute("content") || null;

  
      return { extractedUsername, posts, followers, following, name, fullBio, profileImageUrl, userUrl};


    });
    console.timeEnd("Data Extraction Time");

// // Wait for post data
// await page.waitForSelector("a[href*='/reel/']", { timeout: 20000 });

// console.time("Post Data Extraction Time");
// const postData = await page.evaluate(() => {
//   // Locate the first post using its anchor element
//   const firstPostAnchor = document.querySelector("a[href*='/reel/']");
//   let likes = null;
//   let caption = null;

//   if (firstPostAnchor) {
//     // Navigate to the parent div containing likes and caption
//     const postContainer = firstPostAnchor.closest("div");

//     // Extract likes count
//     const likesElement = postContainer.querySelector("span[aria-label*='like']"); // Update the selector if needed
//     likes = likesElement ? likesElement.innerText.replace(/[^\d]/g, '') : "Likes not found";

//     // Extract caption content
//     const captionElement = postContainer.querySelector("img[alt]");
//     caption = captionElement ? captionElement.alt : "Caption not found";
//   }

//   return {
//     likesCount: likes,
//     postCaption: caption,
//   };
// });

// console.timeEnd("Post Data Extraction Time");

// // Combine the results
// const result = { profileData: data, postData };
// console.log("Extracted Data:", result);


    console.log("Data parsed:", JSON.stringify(data, null, 2));

    console.time("Browser Close Time");
    await browser.close();
    console.timeEnd("Browser Close Time");

    console.timeEnd("Total Time");
    return data;
  } catch (error) {
    console.timeEnd("Total Time");
    console.error("An error occurred:", error.message);
    throw error;
  }
}



