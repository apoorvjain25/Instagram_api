// // 15 sec print scrapper time
// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// const port = 5000;

// const INSTAGRAM_USERNAME = 'tarunwizardingmedia@gmail.com';
// const INSTAGRAM_PASSWORD = 'wmtesting@123';

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
// const port = 5000;

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
//          '--disable-setuid-sandbox',
//          '--disable-dev-shm-usage',
//          '--disable-gpu'], 
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


require('dotenv').config();
const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || 8080;

const INSTAGRAM_USERNAME = process.env.INSTAGRAM_USERNAME;
const INSTAGRAM_PASSWORD = process.env.INSTAGRAM_PASSWORD;

console.log('Username:', INSTAGRAM_USERNAME);
console.log('Password:', INSTAGRAM_PASSWORD);

// Load delay dynamically
async function loadDelay() {
  return (await import('delay')).default;
}

// Minimize human delay for better performance
async function humanDelay(min = 5, max = 20) {
  const delay = await loadDelay();
  const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
  await delay(randomDelay);
}

async function scrapeInstagramData(username) {
  try {
    console.time('Total Scraper Time');

    
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: puppeteer.executablePath(), // This line sets the executable path for Chrome
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ],
      defaultViewport: { width: 1280, height: 800 }
    });

    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const resourceType = req.resourceType();
      if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'domcontentloaded', timeout: 10000 });
    await page.waitForSelector('input[name="username"]', { timeout: 5000 });
    await humanDelay();
    await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
    await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
    ]);

    console.log('Logged into Instagram...');

    console.time('Scrape Time After Login');

    const url = `https://www.instagram.com/${username}/`;
    console.log(`Navigating to: ${url}`);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });
    await page.waitForSelector('header section ul li span', { timeout: 5000 });

    const data = await page.evaluate(() => {
      const stats = document.querySelectorAll('header section ul li');
      const posts = stats[0]?.querySelector('span')?.innerText || null;
      const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
      const following = stats[2]?.querySelector('span')?.innerText || null;
      const extractedUsername = document.querySelector('header h2')?.innerText || null;
      return { extractedUsername, posts, followers, following };
    });

    await browser.close();

    console.timeEnd('Scrape Time After Login');
    console.timeEnd('Total Scraper Time');

    return data;
  } catch (error) {
    console.error('Error scraping Instagram data:', error);
    console.timeEnd('Scrape Time After Login');
    console.timeEnd('Total Scraper Time');
    return null;
  }
}

app.get('/profile/:username', async (req, res) => {
  const { username } = req.params;
  const data = await scrapeInstagramData(username);

  if (data) {
    res.json({
      username: data.extractedUsername || username,
      posts: data.posts,
      followers: data.followers,
      following: data.following
    });
  } else {
    res.status(500).json({ error: 'Unable to fetch profile data' });
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
