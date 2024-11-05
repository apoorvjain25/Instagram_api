// // // 16-17sec
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

// // Modify humanDelay to use milliseconds
// async function humanDelay(min = 10, max = 50) {  // Reduced delay
//   const delay = await loadDelay();
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay);
// }

// async function scrapeInstagramData(username) {
//   try {
//     const browser = await puppeteer.launch({
//       headless: true,  // Running in headless mode
//       args: ['--no-sandbox', '--disable-setuid-sandbox'],
//     });

//     const page = await browser.newPage();

//     await page.setRequestInterception(true);
//     page.on('request', (req) => {
//       const resourceType = req.resourceType();
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         req.abort();  // Block unnecessary resources
//       } else {
//         req.continue();
//       }
//     });

//     await page.setUserAgent(
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//     );

//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'domcontentloaded',  // Optimized page load strategy
//     });

//     await page.waitForSelector('input[name="username"]');
//     await humanDelay();
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 }); // No delay
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 }); // No delay

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
//     ]);

//     console.log('Logged into Instagram...');

//     await humanDelay(50, 100);  // Further reduced delay

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await page.goto(url, { waitUntil: 'domcontentloaded' });

//     await humanDelay(50, 100);  // Further reduced delay

//     await page.waitForSelector('header section ul li span', { timeout: 5000 });  // Reduced timeout

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');

//       const posts = stats[0]?.querySelector('span')?.innerText || null;
//       const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector('span')?.innerText || null;
//       const extractedUsername = document.querySelector('header h2')?.innerText || null;

//       return { extractedUsername, posts, followers, following };
//     });

//     await browser.close();
//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
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


// //14-15 sec
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
// async function humanDelay(min = 5, max = 20) {  // Reduced delay
//   const delay = await loadDelay();
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay);
// }

// async function scrapeInstagramData(username) {
//   try {
//     const browser = await puppeteer.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//       defaultViewport: { width: 1280, height: 800 }  // Set viewport size
//     });

//     const page = await browser.newPage();

//     await page.setRequestInterception(true);
//     page.on('request', (req) => {
//       const resourceType = req.resourceType();
//       // Block unnecessary resources
//       if (['image', 'stylesheet', 'font', 'media'].includes(resourceType)) {
//         req.abort();
//       } else {
//         req.continue();
//       }
//     });

//     await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

//     // Optimize page load with timeout
//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,  // Set timeout for navigation
//     });

//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })  // Set timeout for navigation
//     ]);

//     console.log('Logged into Instagram...');

//     // await humanDelay(10, 20);  // Reduced delay

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });  // Set timeout for navigation

//     // await humanDelay(10, 20);  // Reduced delay

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
//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
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


// //extra
// const express = require('express');
// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// const app = express();
// const port = 5000;

// const INSTAGRAM_USERNAME = 'tarunwizardingmedia@gmail.com';
// const INSTAGRAM_PASSWORD = 'wmtesting@123';

// // Use Stealth Plugin to avoid detection
// puppeteer.use(StealthPlugin());

// async function scrapeInstagramFollowing(username) {
//   try {
//     const browser = await puppeteer.launch({
//       headless: false, // Set to false for debugging
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//     });

//     const page = await browser.newPage();
//     await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle2', timeout: 60000 });

//     // Log in
//     await page.waitForSelector('input[name="username"]', { timeout: 10000 });
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME);
//     await page.waitForSelector('input[name="password"]', { timeout: 10000 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD);
//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
//     ]);

//     console.log('Logged into Instagram...');

//     // Navigate to the user's following list
//     const url = `https://www.instagram.com/${username}/following/`;
//     console.log('Navigating to:', url);
//     await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

//     // Wait for the following list to load
//     console.log('Waiting for the following dialog...');
//     await page.waitForSelector('div[role="dialog"]', { timeout: 30000 });

//     const followingList = [];
//     let prevHeight = 0;

//     while (true) {
//       // Extract usernames
//       const usernames = await page.evaluate(() => {
//         const elements = document.querySelectorAll('div[role="dialog"] ul li a');
//         return Array.from(elements).map(el => el.innerText);
//       });
//       followingList.push(...usernames);

//       // Scroll down to load more usernames
//       await page.evaluate(() => {
//         const dialog = document.querySelector('div[role="dialog"]');
//         dialog.scrollTop = dialog.scrollHeight;
//       });

//       // Wait for new content to load
//       await page.waitForTimeout(1000); // Wait a bit to let content load

//       // Check if new content has loaded
//       const newHeight = await page.evaluate(() => document.querySelector('div[role="dialog"]').scrollHeight);
//       if (newHeight === prevHeight) break; // Exit if no more content
//       prevHeight = newHeight;
//     }

//     await browser.close();
//     return followingList.filter(username => username); // Filter out any undefined usernames
//   } catch (error) {
//     console.error('Error scraping Instagram following list:', error);
//     return null;
//   }
// }

// app.get('/following/:username', async (req, res) => {
//   const { username } = req.params;
//   const followingList = await scrapeInstagramFollowing(username);

//   if (followingList) {
//     res.json({ following: followingList });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch following list' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });


//...

// const express = require('express');
// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// const app = express();
// const port = 5000;

// const INSTAGRAM_USERNAME = 'tarunwizardingmedia@gmail.com';
// const INSTAGRAM_PASSWORD = 'wmtesting@123';

// // Use Stealth Plugin to avoid detection
// puppeteer.use(StealthPlugin());

// async function scrapeInstagramFollowing(username) {
//   try {
//     const browser = await puppeteer.launch({
//       headless: false,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//     });

//     const page = await browser.newPage();
//     await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle2', timeout: 60000 });

//     // Log in
//     await page.waitForSelector('input[name="username"]', { timeout: 10000 });
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME);
//     await page.waitForSelector('input[name="password"]', { timeout: 10000 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD);
//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
//     ]);

//     console.log('Logged into Instagram...');

//     // Navigate to the user's profile page
//     const url = `https://www.instagram.com/${username}/`;
//     console.log('Navigating to:', url);
//     await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

//     // Click on the "following" link
//     console.log('Clicking on Following button...');
//     await page.waitForSelector('a[href$="/following/"]', { timeout: 15000 });
//     await page.click('a[href$="/following/"]');

//     // Wait for the following list dialog to appear, increase the timeout if necessary
//     console.log('Waiting for the following list to load...');
//     await page.waitForSelector('div[role="dialog"] ul', { timeout: 30000 }); // Increased timeout to 30 seconds
    
//     const followingList = new Set();
//     let prevHeight;

//     while (true) {
//       const newFollowing = await page.evaluate(() => {
//         const elements = document.querySelectorAll('div[role="dialog"] ul li a');
//         return Array.from(elements).map(el => el.textContent);
//       });

//       newFollowing.forEach(username => followingList.add(username));

//       prevHeight = await page.evaluate('document.querySelector("div[role=\'dialog\'] ul").scrollHeight');
//       await page.evaluate(() => {
//         const dialog = document.querySelector('div[role="dialog"] ul');
//         dialog.scrollTo(0, dialog.scrollHeight);
//       });

//       await page.waitForTimeout(1000);

//       const newHeight = await page.evaluate('document.querySelector("div[role=\'dialog\'] ul").scrollHeight');
//       if (newHeight === prevHeight) break;
//     }

//     await browser.close();
//     return Array.from(followingList);
//   } catch (error) {
//     console.error('Error scraping Instagram following list:', error);
//     return null;
//   }
// }


// app.get('/following/:username', async (req, res) => {
//   const { username } = req.params;
//   const followingList = await scrapeInstagramFollowing(username);

//   if (followingList) {
//     res.json({ following: followingList });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch following list' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });

// const express = require('express');
// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// const app = express();
// const port = 5000;

// const INSTAGRAM_USERNAME = 'tarunwizardingmedia@gmail.com';
// const INSTAGRAM_PASSWORD = 'wmtesting@123';

// puppeteer.use(StealthPlugin());

// async function scrapeInstagramFollowing(username) {
//   try {
//     const browser = await puppeteer.launch({
//       headless: false,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//     });

//     const page = await browser.newPage();
//     await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle2', timeout: 60000 });

//     // Log in
//     await page.waitForSelector('input[name="username"]', { timeout: 10000 });
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME);
//     await page.waitForSelector('input[name="password"]', { timeout: 10000 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD);
//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 }),
//     ]);

//     console.log('Logged into Instagram...');

//     // Navigate to the user's profile page
//     const profileUrl = `https://www.instagram.com/${username}/`;
//     await page.goto(profileUrl, { waitUntil: 'networkidle2', timeout: 60000 });
//     console.log(`Navigating to: ${profileUrl}`);

//     // Click on the "Following" button
//     console.log('Clicking on Following button...');
//     await page.waitForSelector('a[href$="/following/"]', { timeout: 10000 });
//     await page.click('a[href$="/following/"]');

//     // Wait for the dialog to load
//     console.log('Waiting for the following list to load...');
//     await page.waitForTimeout(3000); // Extra delay to ensure dialog loads
//     await page.waitForSelector('div[role="dialog"] ul', { timeout: 90000 }); // Increase timeout to 90s

//     // Scroll and collect usernames
//     const followingList = [];
//     let prevHeight = 0;

//     while (true) {
//       const usernames = await page.evaluate(() => {
//         const dialog = document.querySelector('div[role="dialog"] ul');
//         return Array.from(dialog.querySelectorAll('a')).map(anchor => anchor.textContent);
//       });
//       followingList.push(...usernames);

//       // Scroll down to load more
//       await page.evaluate(() => {
//         const dialog = document.querySelector('div[role="dialog"]');
//         dialog.scrollTop = dialog.scrollHeight;
//       });

//       await page.waitForTimeout(1000);

//       // Check if scrolling has reached the end
//       const newHeight = await page.evaluate(() => document.querySelector('div[role="dialog"]').scrollHeight);
//       if (newHeight === prevHeight) break;
//       prevHeight = newHeight;
//     }

//     await browser.close();
//     return Array.from(new Set(followingList)); // Remove duplicates

//   } catch (error) {
//     console.error('Error scraping Instagram following list:', error);
//     return null;
//   }
// }

// app.get('/following/:username', async (req, res) => {
//   const { username } = req.params;
//   const followingList = await scrapeInstagramFollowing(username);

//   if (followingList) {
//     res.json({ following: followingList });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch following list' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });


// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// const port = 5000;

// const INSTAGRAM_USERNAME = 'tarunwizardingmedia@gmail.com';
// const INSTAGRAM_PASSWORD = 'Highcourt@123';

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
//     const browser = await puppeteer.launch({
//         headless: true, // Set to false for debugging
//         args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//         defaultViewport: { width: 1280, height: 800 }
//     });

//     let data = null; // Initialize data variable

//     try {
//         const page = await browser.newPage();

//         // Set request interception to skip non-essential resources
//         await page.setRequestInterception(true);
//         page.on('request', (req) => {
//             if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
//                 req.abort(); // Skip non-essential requests
//             } else {
//                 req.continue();
//             }
//         });

//         await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'); // Example User-Agent

//         console.time('Total Scraper Time');
//         await page.goto('https://www.instagram.com/accounts/login/', {
//             waitUntil: 'networkidle2',
//             timeout: 60000 // Increase timeout
//         });

//         // Proceed with login logic
//         await page.waitForSelector('input[name="username"]', { timeout: 10000 });
//         await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 100 }); // Add human-like typing delay
//         await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 100 });
        
//         await Promise.all([
//             page.click('button[type="submit"]'),
//             page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 })
//         ]);

//         console.log('Logged into Instagram...');

//         const url = `https://www.instagram.com/${username}/`;
//         console.log(`Navigating to: ${url}`);
//         await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

//         // Extract data logic (you'll need to implement this based on the current structure of Instagram)
//         // This is just an example, you'll need to adapt this to your needs
//         data = await page.evaluate(() => {
//             const usernameElement = document.querySelector('h1') || {};
//             const postsElement = document.querySelectorAll('span')[0] || {};
//             const followersElement = document.querySelectorAll('a')[1] || {};
//             const followingElement = document.querySelectorAll('a')[2] || {};

//             return {
//                 extractedUsername: usernameElement.innerText,
//                 posts: postsElement.innerText.replace(/,/g, ''), // Remove commas for numbers
//                 followers: followersElement.innerText,
//                 following: followingElement.innerText
//             };
//         });

//     } catch (error) {
//         console.error('Error scraping Instagram data:', error);
//     } finally {
//         await browser.close();
//         console.timeEnd('Total Scraper Time');
//     }

//     return data; // Return the extracted data
// }

// app.get('/profile/:username', async (req, res) => {
//     const { username } = req.params;
//     const data = await scrapeInstagramData(username);

//     if (data) {
//         res.json({
//             username: data.extractedUsername || username,
//             posts: data.posts,
//             followers: data.followers,
//             following: data.following
//         });
//     } else {
//         res.status(500).json({ error: 'Unable to fetch profile data' });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`App running on http://localhost:${port}`);
// });

//test code work...

// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// const port = 5000;

// const INSTAGRAM_USERNAME = 'tarunwizardingmedia@gmail.com';
// const INSTAGRAM_PASSWORD = 'Highcourt@123';

// // Load delay dynamically
// async function loadDelay() {
//   return (await import('delay')).default;
// }

// // Minimize human delay for better performance
// async function humanDelay(min = 500, max = 2000) { // Delays in milliseconds for more control
//   const delay = await loadDelay();
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay);
// }

// async function scrapeInstagramData(username) {
//   const browser = await puppeteer.launch({
//     headless: true, // Set to false for debugging
//     args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//     defaultViewport: { width: 1280, height: 800 }
//   });

//   let data = null; // Initialize data variable

//   try {
//     const page = await browser.newPage();

//     // Set request interception to skip non-essential resources
//     await page.setRequestInterception(true);
//     page.on('request', (req) => {
//       if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
//         req.abort(); // Skip non-essential requests
//       } else {
//         req.continue();
//       }
//     });

//     await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

//     console.time('Total Scraper Time');
//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'networkidle2',
//       timeout: 60000 // Increase timeout
//     });

//     await humanDelay(); // Pause before typing to avoid detection

//     // Proceed with login logic
//     await page.waitForSelector('input[name="username"]', { timeout: 10000 });
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 100 }); // Add human-like typing delay
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 100 });
    
//     await humanDelay(); // Pause before submitting login form

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 })
//     ]);

//     console.log('Logged into Instagram...');
//     await humanDelay(); // Short delay after login

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
//     await humanDelay(1000, 3000); // Longer delay to mimic browsing behavior

//     // Extract data logic
//     data = await page.evaluate(() => {
//       const usernameElement = document.querySelector('h1') || {};
//       const postsElement = document.querySelectorAll('span')[0] || {};
//       const followersElement = document.querySelectorAll('a')[1] || {};
//       const followingElement = document.querySelectorAll('a')[2] || {};

//       return {
//         extractedUsername: usernameElement.innerText,
//         posts: postsElement.innerText.replace(/,/g, ''), // Remove commas for numbers
//         followers: followersElement.innerText,
//         following: followingElement.innerText
//       };
//     });

//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//   } finally {
//     await browser.close();
//     console.timeEnd('Total Scraper Time');
//   }

//   return data; // Return the extracted data
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

// // Start the server
// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });


//work code 1 mi res time

// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// const port = 5000;

// const INSTAGRAM_USERNAME = 'tarunwizardingmedia@gmail.com';
// const INSTAGRAM_PASSWORD = 'Highcourt@123';

// // Load delay dynamically
// async function loadDelay() {
//   return (await import('delay')).default;
// }

// // Minimize human delay for better performance
// async function humanDelay(min = 5, max = 20) {
//   const delay = await loadDelay();
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay * 1000); // Convert to milliseconds
// }

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

//     await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,
//     });

//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();  // Delay after reaching login page
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await humanDelay();  // Delay after typing username
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });
//     await humanDelay();  // Delay after typing password

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//     ]);

//     console.log('Logged into Instagram...');

//     console.time('Scrape Time After Login');

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await humanDelay();  // Delay before navigating to profile page
//     await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });

//     await page.waitForSelector('header section ul li span', { timeout: 5000 });
//     await humanDelay();  // Delay after reaching profile page

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

// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// const port = 5000;

// const INSTAGRAM_USERNAME = 'tarunwizardingmedia@gmail.com';
// const INSTAGRAM_PASSWORD = 'Highcourt@123';

// // Load delay dynamically
// async function loadDelay() {
//   return (await import('delay')).default;
// }

// // Minimize human delay for better performance
// async function humanDelay(min = 5, max = 20) {
//   const delay = await loadDelay();
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay * 1000); // Convert to milliseconds
// }

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

//     await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,
//     });

//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });
//     await humanDelay();

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//     ]);

//     console.log('Logged into Instagram...');

//     console.time('Scrape Time After Login');

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await humanDelay();
//     await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });

//     await page.waitForSelector('header section ul li span', { timeout: 5000 });
//     await humanDelay();

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');
//       const posts = stats[0]?.querySelector('span')?.innerText || null;
//       const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector('span')?.innerText || null;
//       const extractedUsername = document.querySelector('header h2')?.innerText || null;
//       return { extractedUsername, posts, followers, following };
//     });

//     // Function to fetch all following usernames
//     async function fetchFollowingUsernames() {
//       // Open "following" modal
//       await page.click('a[href$="/following/"]');
//       await page.waitForSelector('div[role="dialog"]', { timeout: 5000 });

//       let previousHeight;
//       const followingUsernames = new Set();

//       while (true) {
//         // Extract usernames currently visible
//         const newUsernames = await page.evaluate(() => {
//           const elements = document.querySelectorAll('div[role="dialog"] ul div li div div div span a');
//           return Array.from(elements).map(el => el.textContent);
//         });

//         newUsernames.forEach(username => followingUsernames.add(username));

//         // Scroll down and wait for new users to load
//         previousHeight = await page.evaluate('document.querySelector("div[role=\'dialog\'] ul").scrollHeight');
//         await page.evaluate('document.querySelector("div[role=\'dialog\'] ul").scrollTo(0, document.querySelector("div[role=\'dialog\'] ul").scrollHeight)');
        
//         await humanDelay(2, 5); // Add delay to simulate human scrolling

//         // Check if scroll height has increased
//         const newHeight = await page.evaluate('document.querySelector("div[role=\'dialog\'] ul").scrollHeight');
//         if (newHeight === previousHeight) break; // Exit if no more content is loading
//       }

//       return Array.from(followingUsernames);
//     }

//     // Get following usernames and add it to the data
//     data.followingUsernames = await fetchFollowingUsernames();

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
//       following: data.following,
//       followingUsernames: data.followingUsernames // Include following usernames in the response
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });



// testttt

// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// const port = 5000;

// // Replace with your Instagram credentials
// const INSTAGRAM_USERNAME = 'tarunwizardingmedia@gmail.com';
// const INSTAGRAM_PASSWORD = 'Highcourt@123';

// // Load delay dynamically
// async function loadDelay() {
//   return (await import('delay')).default;
// }

// // Minimize human delay for better performance
// async function humanDelay(min = 5, max = 20) {
//   const delay = await loadDelay();
//   const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
//   await delay(randomDelay * 1000); // Convert to milliseconds
// }

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     const browser = await puppeteer.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const page = await browser.newPage();

//     // Block unnecessary resources
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

//     // Navigate to Instagram login page
//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,
//     });

//     // Login process
//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });
//     await humanDelay();

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//     ]);

//     console.log('Logged into Instagram...');

//     // Check if login was successful
//     const loginSuccess = await page.evaluate(() => {
//       return document.querySelector('header') !== null; // Check if the header is present
//     });

//     if (!loginSuccess) {
//       throw new Error('Login failed, please check your credentials.');
//     }

//     console.time('Scrape Time After Login');

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await humanDelay();
//     await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });

//     // Wait for user stats to load
//     console.log('Waiting for user stats to load...');
//     await page.waitForSelector('header section ul li span', { timeout: 10000 });
//     await humanDelay();

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');
//       const posts = stats[0]?.querySelector('span')?.innerText || null;
//       const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector('span')?.innerText || null;
//       const extractedUsername = document.querySelector('header h2')?.innerText || null;
//       return { extractedUsername, posts, followers, following };
//     });

//     // Scroll down to load more posts if necessary
//     await page.evaluate(() => {
//       window.scrollTo(0, document.body.scrollHeight);
//     });
//     await humanDelay(2, 5); // Wait a few seconds for posts to load

//     // Click on the first post
//     await page.waitForSelector('article div a', { timeout: 10000 });
//     const firstPostLink = await page.$eval('article div a', el => el.href);
//     await page.goto(firstPostLink, { waitUntil: 'domcontentloaded', timeout: 10000 });
//     await humanDelay();

//     // Get the likes count of the first post
//     const likesCount = await page.evaluate(() => {
//       const likesElement = document.querySelector('a[href*="/liked_by/"] span');
//       return likesElement ? likesElement.innerText.split(' ')[0] : null; // Extract the number of likes before the word "likes"
//     });

//     // Add likes count to the data object
//     data.likesCount = likesCount;

//     await browser.close();

//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');

//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     return null;
//   }
// }

// // Define the route to get profile data
// app.get('/profile/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: data.extractedUsername || username,
//       posts: data.posts,
//       followers: data.followers,
//       following: data.following,
//       likesCount: data.likesCount // Include likes count in the response
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });

// // Start the Express server
// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });

// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// const port = 5000;

// // Replace with your Instagram credentials
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
//   await delay(randomDelay * 1000); // Convert to milliseconds
// }

// async function scrapeInstagramData(username) {
//   try {
//     console.time('Total Scraper Time');

//     const browser = await puppeteer.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//       defaultViewport: { width: 1280, height: 800 }
//     });

//     const page = await browser.newPage();

//     // Block unnecessary resources
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

//     // Navigate to Instagram login page
//     await page.goto('https://www.instagram.com/accounts/login/', {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,
//     });

//     // Login process
//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await humanDelay();
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });
//     await humanDelay();

//     await Promise.all([
//       page.click('button[type="submit"]'),
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
//     ]);

//     console.log('Logged into Instagram...');

//     // Check if login was successful
//     const loginSuccess = await page.evaluate(() => {
//       return document.querySelector('header') !== null; // Check if the header is present
//     });

//     if (!loginSuccess) {
//       throw new Error('Login failed, please check your credentials.');
//     }

//     console.time('Scrape Time After Login');

//     const url = `https://www.instagram.com/${username}/`;
//     console.log(`Navigating to: ${url}`);
//     await humanDelay();
//     await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });

//     // Wait for user stats to load
//     console.log('Waiting for user stats to load...');
//     await page.waitForSelector('header section ul li span', { timeout: 10000 });
//     await humanDelay();

//     const data = await page.evaluate(() => {
//       const stats = document.querySelectorAll('header section ul li');
//       const posts = stats[0]?.querySelector('span')?.innerText || null;
//       const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//       const following = stats[2]?.querySelector('span')?.innerText || null;
//       const extractedUsername = document.querySelector('header h2')?.innerText || null;
//       return { extractedUsername, posts, followers, following };
//     });

//     // Click on the first post
//     await page.waitForSelector('article div a', { timeout: 10000 });
//     const firstPostLink = await page.$eval('article div a', el => el.href);
//     await page.goto(firstPostLink, { waitUntil: 'domcontentloaded', timeout: 10000 });
//     await humanDelay();

//     // Get the likes count of the first post
//     const likesCount = await page.evaluate(() => {
//       const likesElement = document.querySelector('a[href*="/liked_by/"] span');
//       return likesElement ? likesElement.innerText.split(' ')[0] : null; // Extract the number of likes before the word "likes"
//     });

//     // Add likes count to the data object
//     data.likesCount = likesCount;

//     await browser.close();

//     console.timeEnd('Scrape Time After Login');
//     console.timeEnd('Total Scraper Time');

//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     return null;
//   }
// }

// // Define the route to get profile data
// app.get('/profile/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: data.extractedUsername || username,
//       posts: data.posts,
//       followers: data.followers,
//       following: data.following,
//       likesCount: data.likesCount // Include likes count in the response
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });

// // Start the Express server
// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });


// it store the sessison to avoid multiple insta login

// const express = require('express');
// const puppeteer = require('puppeteer');

// const app = express();
// const port = 5000;

// const INSTAGRAM_USERNAME = 'arunsharma7866@outlook.com';
// const INSTAGRAM_PASSWORD = 'Wmtesting@123';

// let instagramSession = null; // Variable to hold session cookies

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

// async function loginToInstagram() {
//   try {
//     const browser = await puppeteer.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//       defaultViewport: { width: 1280, height: 800 },
//     });

//     const page = await browser.newPage();
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
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }),
//     ]);

//     // Save session cookies after successful login
//     instagramSession = await page.cookies();

//     console.log('Logged into Instagram...');
//     await browser.close();
//   } catch (error) {
//     console.error('Error logging into Instagram:', error);
//   }
// }

// async function scrapeInstagramData(username) {
//   try {
//     if (!instagramSession) {
//       throw new Error('You must log in first');
//     }

//     const browser = await puppeteer.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//       defaultViewport: { width: 1280, height: 800 },
//     });

//     const page = await browser.newPage();

//     // Set the cookies from the logged-in session
//     await page.setCookie(...instagramSession);

//     await page.goto(`https://www.instagram.com/${username}/`, {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,
//     });

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
//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     return null;
//   }
// }

// app.get('/login', async (req, res) => {
//   await loginToInstagram();
//   res.json({ message: 'Logged in successfully!', session: instagramSession });
// });

// app.get('/scrape/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: data.extractedUsername || username,
//       posts: data.posts,
//       followers: data.followers,
//       following: data.following,
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
// const port = 5000;

// const INSTAGRAM_USERNAME = 'arunsharma7866@outlook.com';
// const INSTAGRAM_PASSWORD = 'Wmtesting@123';

// let instagramSession = null; // Variable to hold session cookies

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

// async function loginToInstagram() {
//   try {
//     const browser = await puppeteer.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//       defaultViewport: { width: 1280, height: 800 },
//     });

//     const page = await browser.newPage();
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
//       page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }),
//     ]);

//     // Save session cookies after successful login
//     instagramSession = await page.cookies();

//     console.log('Logged into Instagram...');
//     await browser.close();
//   } catch (error) {
//     console.error('Error logging into Instagram:', error);
//   }
// }

// async function scrapeInstagramData(username) {
//   try {
//     if (!instagramSession) {
//       throw new Error('You must log in first');
//     }

//     const browser = await puppeteer.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//       defaultViewport: { width: 1280, height: 800 },
//     });

//     const page = await browser.newPage();
//     // Set the cookies from the logged-in session
//     await page.setCookie(...instagramSession);

//     await page.goto(`https://www.instagram.com/${username}/`, {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,
//     });

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
//     return data;
//   } catch (error) {
//     console.error('Error scraping Instagram data:', error);
//     return null;
//   }
// }

// // New function to scrape the likes of the first post
// async function scrapeFirstPostLikes(username) {
//   try {
//     if (!instagramSession) {
//       throw new Error('You must log in first');
//     }

//     const browser = await puppeteer.launch({
//       headless: true,
//       args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//       defaultViewport: { width: 1280, height: 800 },
//     });

//     const page = await browser.newPage();
//     // Set the cookies from the logged-in session
//     await page.setCookie(...instagramSession);

//     await page.goto(`https://www.instagram.com/${username}/`, {
//       waitUntil: 'domcontentloaded',
//       timeout: 10000,
//     });

//     // Wait for the posts to load
//     await page.waitForSelector('article div div div div a', { timeout: 10000 });

//     // Click on the first post
//     const firstPost = await page.$('article div div div div a');
//     await firstPost.click();

//     // Wait for the post to load and get likes count
//     await page.waitForSelector('section.EDfFK .Nm9Fw', { timeout: 10000 });
//     const likesCount = await page.evaluate(() => {
//       const likesElement = document.querySelector('section.EDfFK .Nm9Fw');
//       return likesElement ? likesElement.innerText : null;
//     });

//     await browser.close();
//     return likesCount;
//   } catch (error) {
//     console.error('Error scraping first post likes:', error);
//     return null;
//   }
// }

// app.get('/login', async (req, res) => {
//   await loginToInstagram();
//   res.json({ message: 'Logged in successfully!', session: instagramSession });
// });

// app.get('/scrape/:username', async (req, res) => {
//   const { username } = req.params;
//   const data = await scrapeInstagramData(username);

//   if (data) {
//     res.json({
//       username: data.extractedUsername || username,
//       posts: data.posts,
//       followers: data.followers,
//       following: data.following,
//     });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch profile data' });
//   }
// });

// // New endpoint to get the likes count of the first post
// app.get('/scrape/:username/first-post-likes', async (req, res) => {
//   const { username } = req.params;
//   const likesCount = await scrapeFirstPostLikes(username);

//   if (likesCount) {
//     res.json({ username, firstPostLikes: likesCount });
//   } else {
//     res.status(500).json({ error: 'Unable to fetch first post likes count' });
//   }
// });

// app.listen(port, () => {
//   console.log(`App running on http://localhost:${port}`);
// });


// const express = require('express');
// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const port = 5000;

// // Instagram credentials
// const INSTAGRAM_USERNAME = 'arunsharma7866@outlook.com';
// const INSTAGRAM_PASSWORD = 'Wmtesting@123';

// // File path to store cookies
// const cookieFilePath = path.join(__dirname, 'cookies.json');

// // Load cookies from JSON file
// async function loadCookies() {
//     try {
//         const data = fs.readFileSync(cookieFilePath);
//         return JSON.parse(data).session;
//     } catch (error) {
//         console.error('Error loading cookies:', error);
//         return null;
//     }
// }

// // Save cookies to JSON file
// async function saveCookies(cookies) {
//     const cookieData = { session: cookies };
//     fs.writeFile(cookieFilePath, JSON.stringify(cookieData, null, 2), (err) => {
//         if (err) {
//             console.error('Error saving cookies:', err);
//         } else {
//             console.log('Cookies saved successfully!');
//         }
//     });
// }

// // Login to Instagram
// async function loginToInstagram() {
//     const browser = await puppeteer.launch({
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//         defaultViewport: { width: 1280, height: 800 },
//     });
    
//     const page = await browser.newPage();
//     await page.goto('https://www.instagram.com/accounts/login/', {
//         waitUntil: 'domcontentloaded',
//         timeout: 10000,
//     });
    
//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });
    
//     await Promise.all([
//         page.click('button[type="submit"]'),
//         page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }),
//     ]);

//     const cookies = await page.cookies();
//     await saveCookies(cookies); // Save cookies to file
//     console.log('Logged into Instagram...');
//     await browser.close();
// }

// // Scrape Instagram data
// async function scrapeInstagramData(username) {
//     const cookies = await loadCookies();
//     if (!cookies) {
//         throw new Error('You must log in first');
//     }

//     const browser = await puppeteer.launch({
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//         defaultViewport: { width: 1280, height: 800 },
//     });
    
//     const page = await browser.newPage();
//     await page.setCookie(...cookies); // Set cookies for the session

//     await page.goto(`https://www.instagram.com/${username}/`, {
//         waitUntil: 'domcontentloaded',
//         timeout: 10000,
//     });

//     await page.waitForSelector('header section ul li span', { timeout: 5000 });

//     const data = await page.evaluate(() => {
//         const stats = document.querySelectorAll('header section ul li');
//         const posts = stats[0]?.querySelector('span')?.innerText || null;
//         const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//         const following = stats[2]?.querySelector('span')?.innerText || null;
//         const extractedUsername = document.querySelector('header h2')?.innerText || null;
//         return { extractedUsername, posts, followers, following };
//     });

//     await browser.close();
//     return data;
// }

// // API Routes
// app.get('/login', async (req, res) => {
//     await loginToInstagram();
//     res.json({ message: 'Logged in successfully!' });
// });

// app.get('/scrape/:username', async (req, res) => {
//     const { username } = req.params;
//     try {
//         const data = await scrapeInstagramData(username);
//         res.json({
//             username: data.extractedUsername || username,
//             posts: data.posts,
//             followers: data.followers,
//             following: data.following,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Unable to fetch profile data' });
//     }
// });

// // Start server
// app.listen(port, () => {
//     console.log(`App running on http://localhost:${port}`);
// });


// const express = require('express');
// const cors = require('cors'); // Import cors
// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const port = 5000;

// // Enable CORS for all routes
// app.use(cors());

// // Instagram credentials
// const INSTAGRAM_USERNAME = 'arunsharma7866@outlook.com';
// const INSTAGRAM_PASSWORD = 'Wmtesting@123';

// // File path to store cookies
// const cookieFilePath = path.join(__dirname, 'cookies.json');

// // Load cookies from JSON file
// async function loadCookies() {
//     try {
//         const data = fs.readFileSync(cookieFilePath);
//         return JSON.parse(data).session;
//     } catch (error) {
//         console.error('Error loading cookies:', error);
//         return null;
//     }
// }

// // Save cookies to JSON file
// async function saveCookies(cookies) {
//     const cookieData = { session: cookies };
//     fs.writeFile(cookieFilePath, JSON.stringify(cookieData, null, 2), (err) => {
//         if (err) {
//             console.error('Error saving cookies:', err);
//         } else {
//             console.log('Cookies saved successfully!');
//         }
//     });
// }

// // Login to Instagram
// async function loginToInstagram() {
//     const browser = await puppeteer.launch({
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//         defaultViewport: { width: 1280, height: 800 },
//     });
    
//     const page = await browser.newPage();
//     await page.goto('https://www.instagram.com/accounts/login/', {
//         waitUntil: 'domcontentloaded',
//         timeout: 10000,
//     });
    
//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });
    
//     await Promise.all([
//         page.click('button[type="submit"]'),
//         page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }),
//     ]);

//     const cookies = await page.cookies();
//     await saveCookies(cookies); 
//     console.log('Logged into Instagram...');
//     await browser.close();
// }

// // Scrape Instagram data
// async function scrapeInstagramData(username) {
//     const cookies = await loadCookies();
//     if (!cookies) {
//         throw new Error('You must log in first');
//     }

//     const browser = await puppeteer.launch({
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//         defaultViewport: { width: 1280, height: 800 },
//     });
    
//     const page = await browser.newPage();
//     await page.setCookie(...cookies); // Set cookies for the session

//     await page.goto(`https://www.instagram.com/${username}/`, {
//         waitUntil: 'domcontentloaded',
//         timeout: 10000,
//     });

//     await page.waitForSelector('header section ul li span', { timeout: 5000 });

//     const data = await page.evaluate(() => {
//         const stats = document.querySelectorAll('header section ul li');
//         const posts = stats[0]?.querySelector('span')?.innerText || null;
//         const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//         const following = stats[2]?.querySelector('span')?.innerText || null;
//         const extractedUsername = document.querySelector('header h2')?.innerText || null;
//         return { extractedUsername, posts, followers, following };
//     });

//     await browser.close();
//     return data;
// }

// // API Routes
// app.get('/login', async (req, res) => {
//     await loginToInstagram();
//     res.json({ message: 'Logged in successfully!' });
// });

// app.get('/scrape/:username', async (req, res) => {
//     const { username } = req.params;
//     try {
//         const data = await scrapeInstagramData(username);
//         res.json({
//             username: data.extractedUsername || username,
//             posts: data.posts,
//             followers: data.followers,
//             following: data.following,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Unable to fetch profile data' });
//     }
// });

// // Start server
// app.listen(port, () => {
//     console.log(`App running on http://localhost:${port}`);
// });


// const express = require('express');
// const cors = require('cors'); // Import cors
// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const port = 5000;

// // Enable CORS for all routes
// app.use(cors());

// // Instagram credentials
// const INSTAGRAM_USERNAME = 'arunsharma7866@outlook.com';
// const INSTAGRAM_PASSWORD = 'Wmtesting@123';

// // Hardcoded cookies instead of reading from a file
// const hardcodedCookies = [
//     {
//         name: "sessionid",
//         value: "69822885006%3ACxTpbUcvlv5Ffh%3A5%3AAYftVVDQnKW8BcpFqcIVEGSrn3ns344apm9OfvDcRw",
//         domain: ".instagram.com",
//         path: "/",
//         expires: 1762253981.072406,
//         size: 86,
//         httpOnly: true,
//         secure: true,
//         session: false,
//         priority: "Medium",
//         sameParty: false,
//         sourceScheme: "Secure"
//     },
//     {
//         name: "ds_user_id",
//         value: "69822885006",
//         domain: ".instagram.com",
//         path: "/",
//         expires: 1738493981.07192,
//         size: 21,
//         httpOnly: false,
//         secure: true,
//         session: false,
//         priority: "Medium",
//         sameParty: false,
//         sourceScheme: "Secure"
//     },
//     {
//         name: "rur",
//         value: "\"VLL\\05469822885006\\0541762253981:01f7fa02199d35226ec28b45d3a831e229fd337d70724445e3ab154556e8c73a64c838c7\"",
//         domain: ".instagram.com",
//         path: "/",
//         expires: -1,
//         size: 110,
//         httpOnly: true,
//         secure: true,
//         session: true,
//         sameSite: "Lax",
//         priority: "Medium",
//         sameParty: false,
//         sourceScheme: "Secure"
//     },
//     {
//         name: "csrftoken",
//         value: "850Xve3qr3l3dnNL5ICtXdDf7CJ3xrQZ",
//         domain: ".instagram.com",
//         path: "/",
//         expires: 1762167581.071598,
//         size: 41,
//         httpOnly: false,
//         secure: true,
//         session: false,
//         priority: "Medium",
//         sameParty: false,
//         sourceScheme: "Secure"
//     },
//     {
//         name: "ig_nrcb",
//         value: "1",
//         domain: ".instagram.com",
//         path: "/",
//         expires: 1762253976.314774,
//         size: 8,
//         httpOnly: false,
//         secure: true,
//         session: false,
//         priority: "Medium",
//         sameParty: false,
//         sourceScheme: "Secure"
//     },
//     {
//         name: "mid",
//         value: "ZyipGAALAAFmwzKdDRHHfuivPNzZ",
//         domain: ".instagram.com",
//         path: "/",
//         expires: 1765277976.314643,
//         size: 31,
//         httpOnly: false,
//         secure: true,
//         session: false,
//         priority: "Medium",
//         sameParty: false,
//         sourceScheme: "Secure"
//     },
//     {
//         name: "wd",
//         value: "1280x800",
//         domain: ".instagram.com",
//         path: "/",
//         expires: 1731322775,
//         size: 10,
//         httpOnly: false,
//         secure: true,
//         session: false,
//         sameSite: "Lax",
//         priority: "Medium",
//         sameParty: false,
//         sourceScheme: "Secure"
//     },
//     {
//         name: "ig_did",
//         value: "51CBC1CE-CA25-412A-B6C2-2DD7AD6679D0",
//         domain: ".instagram.com",
//         path: "/",
//         expires: 1762253981.072304,
//         size: 42,
//         httpOnly: true,
//         secure: true,
//         session: false,
//         priority: "Medium",
//         sameParty: false,
//         sourceScheme: "Secure"
//     },
//     {
//         name: "datr",
//         value: "FqkoZwswnwwocXxcNX5ju4nL",
//         domain: ".instagram.com",
//         path: "/",
//         expires: 1765277974.486814,
//         size: 28,
//         httpOnly: true,
//         secure: true,
//         session: false,
//         sameSite: "None",
//         priority: "Medium",
//         sameParty: false,
//         sourceScheme: "Secure"
//     }
// ];

// // Load cookies from hardcoded array
// async function loadCookies() {
//     return hardcodedCookies;
// }

// // Login to Instagram (optional, if needed to refresh cookies)
// async function loginToInstagram() {
//     const browser = await puppeteer.launch({
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//         defaultViewport: { width: 1280, height: 800 },
//     });
    
//     const page = await browser.newPage();
//     await page.goto('https://www.instagram.com/accounts/login/', {
//         waitUntil: 'domcontentloaded',
//         timeout: 10000,
//     });
    
//     await page.waitForSelector('input[name="username"]', { timeout: 5000 });
//     await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
//     await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });
    
//     await Promise.all([
//         page.click('button[type="submit"]'),
//         page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }),
//     ]);

//     const cookies = await page.cookies();
//     console.log('Logged into Instagram...');
//     await browser.close();
// }

// // Scrape Instagram data
// async function scrapeInstagramData(username) {
//     const cookies = await loadCookies();
//     if (!cookies) {
//         throw new Error('You must log in first');
//     }

//     const browser = await puppeteer.launch({
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
//         defaultViewport: { width: 1280, height: 800 },
//     });
    
//     const page = await browser.newPage();
//     await page.setCookie(...cookies); // Set cookies for the session

//     await page.goto(`https://www.instagram.com/${username}/`, {
//         waitUntil: 'domcontentloaded',
//         timeout: 10000,
//     });

//     await page.waitForSelector('header section ul li span', { timeout: 5000 });

//     const data = await page.evaluate(() => {
//         const stats = document.querySelectorAll('header section ul li');
//         const posts = stats[0]?.querySelector('span')?.innerText || null;
//         const followers = stats[1]?.querySelector('span')?.getAttribute('title') || stats[1]?.innerText || null;
//         const following = stats[2]?.querySelector('span')?.innerText || null;
//         const extractedUsername = document.querySelector('header h2')?.innerText || null;
//         return { extractedUsername, posts, followers, following };
//     });

//     await browser.close();
//     return data;
// }

// // API Routes
// app.get('/login', async (req, res) => {
//     await loginToInstagram();
//     res.json({ message: 'Logged in successfully!' });
// });

// app.get('/scrape/:username', async (req, res) => {
//     const { username } = req.params;
//     try {
//         const data = await scrapeInstagramData(username);
//         res.json({
//             username: data.extractedUsername || username,
//             posts: data.posts,
//             followers: data.followers,
//             following: data.following,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Unable to fetch profile data' });
//     }
// });

// // Start server
// app.listen(port, () => {
//     console.log(`App running on http://localhost:${port}`);
// });

const express = require('express');
const cors = require('cors'); // Import cors
const puppeteer = require('puppeteer');

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Instagram credentials (Consider using environment variables for security)
// Instagram credentials
const INSTAGRAM_USERNAME = 'arunsharma7866@outlook.com';
const INSTAGRAM_PASSWORD = 'Wmtesting@123';

// Hardcoded cookies instead of reading from a file
const hardcodedCookies = [
    {
        name: "sessionid",
        value: "69822885006%3ACxTpbUcvlv5Ffh%3A5%3AAYftVVDQnKW8BcpFqcIVEGSrn3ns344apm9OfvDcRw",
        domain: ".instagram.com",
        path: "/",
        expires: 1762253981.072406,
        size: 86,
        httpOnly: true,
        secure: true,
        session: false,
        priority: "Medium",
        sameParty: false,
        sourceScheme: "Secure"
    },
    {
        name: "ds_user_id",
        value: "69822885006",
        domain: ".instagram.com",
        path: "/",
        expires: 1738493981.07192,
        size: 21,
        httpOnly: false,
        secure: true,
        session: false,
        priority: "Medium",
        sameParty: false,
        sourceScheme: "Secure"
    },
    {
        name: "rur",
        value: "\"VLL\\05469822885006\\0541762253981:01f7fa02199d35226ec28b45d3a831e229fd337d70724445e3ab154556e8c73a64c838c7\"",
        domain: ".instagram.com",
        path: "/",
        expires: -1,
        size: 110,
        httpOnly: true,
        secure: true,
        session: true,
        sameSite: "Lax",
        priority: "Medium",
        sameParty: false,
        sourceScheme: "Secure"
    },
    {
        name: "csrftoken",
        value: "850Xve3qr3l3dnNL5ICtXdDf7CJ3xrQZ",
        domain: ".instagram.com",
        path: "/",
        expires: 1762167581.071598,
        size: 41,
        httpOnly: false,
        secure: true,
        session: false,
        priority: "Medium",
        sameParty: false,
        sourceScheme: "Secure"
    },
    {
        name: "ig_nrcb",
        value: "1",
        domain: ".instagram.com",
        path: "/",
        expires: 1762253976.314774,
        size: 8,
        httpOnly: false,
        secure: true,
        session: false,
        priority: "Medium",
        sameParty: false,
        sourceScheme: "Secure"
    },
    {
        name: "mid",
        value: "ZyipGAALAAFmwzKdDRHHfuivPNzZ",
        domain: ".instagram.com",
        path: "/",
        expires: 1765277976.314643,
        size: 31,
        httpOnly: false,
        secure: true,
        session: false,
        priority: "Medium",
        sameParty: false,
        sourceScheme: "Secure"
    },
    {
        name: "wd",
        value: "1280x800",
        domain: ".instagram.com",
        path: "/",
        expires: 1731322775,
        size: 10,
        httpOnly: false,
        secure: true,
        session: false,
        sameSite: "Lax",
        priority: "Medium",
        sameParty: false,
        sourceScheme: "Secure"
    },
    {
        name: "ig_did",
        value: "51CBC1CE-CA25-412A-B6C2-2DD7AD6679D0",
        domain: ".instagram.com",
        path: "/",
        expires: 1762253981.072304,
        size: 42,
        httpOnly: true,
        secure: true,
        session: false,
        priority: "Medium",
        sameParty: false,
        sourceScheme: "Secure"
    },
    {
        name: "datr",
        value: "FqkoZwswnwwocXxcNX5ju4nL",
        domain: ".instagram.com",
        path: "/",
        expires: 1765277974.486814,
        size: 28,
        httpOnly: true,
        secure: true,
        session: false,
        sameSite: "None",
        priority: "Medium",
        sameParty: false,
        sourceScheme: "Secure"
    }
];


// Load cookies from hardcoded array
async function loadCookies() {
    return hardcodedCookies;
}

// Login to Instagram (optional, if needed to refresh cookies)
async function loginToInstagram() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        defaultViewport: { width: 1280, height: 800 },
    });

    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/accounts/login/', {
        waitUntil: 'domcontentloaded',
        timeout: 10000,
    });

    await page.waitForSelector('input[name="username"]', { timeout: 5000 });
    await page.type('input[name="username"]', INSTAGRAM_USERNAME, { delay: 0 });
    await page.type('input[name="password"]', INSTAGRAM_PASSWORD, { delay: 0 });

    await Promise.all([
        page.click('button[type="submit"]'),
        page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }),
    ]);

    const cookies = await page.cookies();
    await browser.close();

    console.log('Logged into Instagram...');
    return cookies; // Return cookies if needed
}

// Scrape Instagram data
async function scrapeInstagramData(username) {
    const cookies = await loadCookies();
    if (!cookies) {
        throw new Error('You must log in first');
    }

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        defaultViewport: { width: 1280, height: 800 },
    });

    const page = await browser.newPage();
    await page.setCookie(...cookies); // Set cookies for the session

    await page.goto(`https://www.instagram.com/${username}/`, {
        waitUntil: 'domcontentloaded',
        timeout: 10000,
    });

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
    return data;
}

// API Routes
app.get('/login', async (req, res) => {
    try {
        const cookies = await loginToInstagram();
        res.json({ message: 'Logged in successfully!', cookies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Login failed' });
    }
});

app.get('/scrape/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const data = await scrapeInstagramData(username);
        res.json({
            username: data.extractedUsername || username,
            posts: data.posts,
            followers: data.followers,
            following: data.following,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch profile data' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
