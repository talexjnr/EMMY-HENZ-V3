//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0R4QUpMek5BbG9nNGg3bE9aZmZQZ2kvQ2NHd2pxSUtDenhrWFpya0wzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1lvUEYxL054bncwSUJ5dnVHU0x6WkdNNCtVYU5uSzM5SXNZeFpUdThDST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRjM5RitiQ3FNNUtCcmZaNFpLYVlqL3Q4VTRRSHpLN1J4YlhUWEdGMm1FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIdkF6dmcwUjEwWXpNTUdsY1hwbTd1OVBWNEVheFI1S1grd0dpRHcwUDEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklLUmoySzM2bmQrY0Z4aDlPZkZWQVZFT1dGd3A4RER4UWRXS3RCR3NUbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktVZUI1WWNwcVM3cEt1dHB2bUcvZ1llNUtVODZ3ZVNYUlZReG0rRFZmQUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0prMzNNSXhGam5WUWFqU0psc3ZqRHBJTXAyVFpka3lnM25Pd2hNUTRWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEhVaU1JQU5MZjhuK0pEM01Gb3E5SmdZWGN2OThYL1VEd3N2ZUF3dzJIRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZzam4vSkNDTjBpbVRzSFBJTG04cm5SenI0WFUxczdnLzY5S041U0c5bGpCQ1h6UEpEK1llTFBXNDR3bGZMRTBKUk5tblZvNTI4YWpYeGNGbkdLNkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJ1TGFNK2pHK3MrQ0EwSW5MczNnUHYzV214QmlWUGVUT21qcDZ1d0hkUkw0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKS3VObjVzelI2R3JHODVoTWNNWmhnIiwicGhvbmVJZCI6ImIyYWIwNWMxLWRiY2MtNDU1YS1iYTVlLTdkMDIwYTM5MmYzNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2N1ZMVnN3Yk1aeTV3bzhxUmJQUWZTRlhocTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTllZFFvQ2lMRWZGaTRVcnFMMG1hYVFYWmVnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdSR1ZGR0I5IiwibWUiOnsiaWQiOiIyMzQ4MTE2MjE5MzkxOjE4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMbkp0TEFERU9qQy83Y0dHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4Qk9yK0pnQ3FvK05BUUJqVXplWHlVOUdYbTQ2akhMQTlxV01Ec1VFL0I4PSIsImFjY291bnRTaWduYXR1cmUiOiJ4c1ZCTTlyNkdDaXN3dndFVU0yT2lNbkcxdHdwemo1NkRSOEp2YVA2RmVFa3h1NGFBVzJuRXBWUUFOZWVVdldYMzVLcW5pR2lObkpnNk1mdXg4cXJCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRzZWaExSQkpUTUFGcmdwcWNqZThMVCtvem0yZTh2N1BMYTBMejVQdndXN0J5ZzR3Mlo0YkxTQk52NkFkOCtReDArbTV2dnBZeHdITXMrNjdnRHhNQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTE2MjE5MzkxOjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNRVHEvaVlBcXFQalFFQVkxTTNsOGxQUmw1dU9veHl3UGFsakE3RkJQd2YifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgwNDU0MzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmR2In0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
