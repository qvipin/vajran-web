// USED AI

import puppeteer from 'puppeteer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const html = `
<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px;
      height: 630px;
      background: #080808;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 180px 60px 120px;
      font-family: 'Instrument Serif', serif;
    }
    .text .line1 {
      font-size: 72px;
      color: #ededed;
      line-height: 1.2;
    }
    .text .line2 {
      font-size: 72px;
      color: #ededed;
      line-height: 1.2;
      font-style: italic;
      opacity: 0.6;
    }
    .branding {
      position: absolute;
      bottom: 60px;
      left: 120px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .branding .name {
      font-size: 20px;
      color: #ededed;
      letter-spacing: 3px;
    }
    .branding .copyright {
      font-size: 16px;
      color: #ededed;
      opacity: 0.5;
    }
  </style>
</head>
<body>
  <div class="text">
    <div class="line1">We build what</div>
    <div class="line2">you dream.</div>
  </div>
  <svg width="180" height="180" viewBox="0 0 100 100" fill="#ededed">
    <path d="M50 5 L5 50 L45 95 Z" />
    <path d="M55 5 L95 50 L55 90 Z" opacity="0.4" />
  </svg>
  <div class="branding">
    <span class="name">VAJRAN</span>
    <span class="copyright">© 2026</span>
  </div>
</body>
</html>
`;

async function generate() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html, { waitUntil: 'networkidle0' });

  // Wait for font to load
  await page.evaluateHandle('document.fonts.ready');

  const outputPath = join(__dirname, '..', 'public', 'og.png');
  await page.screenshot({ path: outputPath, type: 'png' });

  await browser.close();
  console.log('Generated:', outputPath);
}

generate().catch(console.error);
