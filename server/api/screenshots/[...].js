import puppeteer, { KnownDevices } from "puppeteer";
import { existsSync, readFileSync } from "fs";

export default defineEventHandler(async (event) => {
  const Link = decodeURIComponent(event.path.split("/").pop()),
    query = getQuery(event),
    [full, mobile] = [
      query.hasOwnProperty("full"),
      query.hasOwnProperty("mobile"),
    ],
    WebsiteName = new URL(Link).hostname.replace("www.", "");
  if (mobile && full) {
    if (existsSync(`./public/screenshots/${WebsiteName}-mobile-full.webp`))
      return readFileSync(
        `./public/screenshots/${WebsiteName}-mobile-full.webp`
      );
    else {
      const browser = await puppeteer.launch({
        headless: "new",
        args: ["--ignore-certificate-errors"],
      });
      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(0);
      await page.emulate(KnownDevices["iPhone X"]);
      await page.goto(Link, { waitUntil: "domcontentloaded" });
      await page.evaluate(async () => {
        const selectors = Array.from(document.querySelectorAll("img"));
        await Promise.all(
          selectors.map((img) => {
            if (img.complete) return;
            return new Promise((resolve, reject) => {
              img.addEventListener("load", resolve);
              img.addEventListener("error", reject);
            });
          })
        );
      });
      await page.screenshot({
        path: `./public/screenshots/${WebsiteName}-mobile-full.webp`,
        fullPage: true,
        type: "webp",
        quality: 70,
      });
      await browser.close();

      return readFileSync(
        `./public/screenshots/${WebsiteName}-mobile-full.webp`
      );
    }
  } else if (mobile) {
    if (existsSync(`./public/screenshots/${WebsiteName}-mobile.webp`))
      return readFileSync(`./public/screenshots/${WebsiteName}-mobile.webp`);
    else {
      const browser = await puppeteer.launch({
        headless: "new",
        args: ["--ignore-certificate-errors"],
      });
      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(0);
      await page.emulate(KnownDevices["iPhone X"]);
      await page.goto(Link, { waitUntil: "domcontentloaded" });
      await page.evaluate(async () => {
        const selectors = Array.from(document.querySelectorAll("img"));
        await Promise.all(
          selectors.map((img) => {
            if (img.complete) return;
            return new Promise((resolve, reject) => {
              img.addEventListener("load", resolve);
              img.addEventListener("error", reject);
            });
          })
        );
      });
      await page.screenshot({
        path: `./public/screenshots/${WebsiteName}-mobile.webp`,
        type: "webp",
        quality: 70,
      });
      await browser.close();

      return readFileSync(`./public/screenshots/${WebsiteName}-mobile.webp`);
    }
  } else if (full) {
    if (existsSync(`./public/screenshots/${WebsiteName}-full.webp`))
      return readFileSync(`./public/screenshots/${WebsiteName}-full.webp`);
    else {
      const browser = await puppeteer.launch({
        headless: "new",
        args: ["--ignore-certificate-errors"],
      });
      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(0);
      await page.goto(Link, { waitUntil: "domcontentloaded" });
      await page.setViewport({ width: 1280, height: 720 });
      await page.evaluate(async () => {
        const selectors = Array.from(document.querySelectorAll("img"));
        await Promise.all(
          selectors.map((img) => {
            if (img.complete) return;
            return new Promise((resolve, reject) => {
              img.addEventListener("load", resolve);
              img.addEventListener("error", reject);
            });
          })
        );
      });
      await page.screenshot({
        path: `./public/screenshots/${WebsiteName}-full.webp`,
        fullPage: true,
        type: "webp",
        quality: 70,
      });
      await browser.close();

      return readFileSync(`./public/screenshots/${WebsiteName}-full.webp`);
    }
  } else {
    if (existsSync(`./public/screenshots/${WebsiteName}.webp`))
      return readFileSync(`./public/screenshots/${WebsiteName}.webp`);
    else {
      const browser = await puppeteer.launch({
        headless: "new",
        args: ["--ignore-certificate-errors"],
      });
      const page = await browser.newPage();
      page.setDefaultNavigationTimeout(0);
      await page.goto(Link, { waitUntil: "domcontentloaded" });
      await page.setViewport({ width: 1280, height: 720 });
      await page.evaluate(async () => {
        const selectors = Array.from(document.querySelectorAll("img"));
        await Promise.all(
          selectors.map((img) => {
            if (img.complete) return;
            return new Promise((resolve, reject) => {
              img.addEventListener("load", resolve);
              img.addEventListener("error", reject);
            });
          })
        );
      });
      const screenshot = await page.screenshot({
        path: `./public/screenshots/${WebsiteName}.webp`,
        type: "webp",
        quality: 70,
      });
      await browser.close();

      return screenshot;
    }
  }
});
