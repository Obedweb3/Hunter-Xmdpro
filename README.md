<div align="center">

<img src="https://files.catbox.moe/xka13x.jpg" width="180" style="border-radius:50%" alt="Hunter XMD Pro"/>

# 🏹 HUNTER XMD PRO

### Advanced Multi-Device WhatsApp Bot

[![Version](https://img.shields.io/badge/Version-5.1_PRO-blueviolet?style=for-the-badge&logo=whatsapp)](https://github.com/Obedweb3/Hunter-Xmd1code)
[![Node](https://img.shields.io/badge/Node.js-18%2B-green?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Made By](https://img.shields.io/badge/Made_by-ObedTech-orange?style=for-the-badge)](https://github.com/Obedweb3)

**Powerful • Fast • Smart Automation • 140+ Commands**

---

### 🔑 Get Your Session ID First

[![Get Session](https://img.shields.io/badge/GET%20SESSION%20ID-Click%20Here-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://mys-1.onrender.com)

---

### 🚀 Deploy Instantly

[![Deploy to Heroku](https://img.shields.io/badge/DEPLOY_TO-HEROKU-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://dashboard.heroku.com/new?template=https://github.com/Obedweb3/Hunter-Xmdpro/tree/main)
[![Deploy to Railway](https://img.shields.io/badge/DEPLOY_TO-RAILWAY-0B0D0E?style=for-the-badge&logo=railway)](https://railway.app)
[![Deploy to Render](https://img.shields.io/badge/DEPLOY_TO-RENDER-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://render.com)
[![Deploy to Koyeb](https://img.shields.io/badge/DEPLOY_TO-KOYEB-121212?style=for-the-badge&logo=koyeb)](https://koyeb.com)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Requirements](#-requirements)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Commands](#-commands)
- [Deployment](#-deployment)
- [Anti-Delete Setup](#-anti-delete-setup)
- [Auto-Bio Setup](#-auto-bio-setup)
- [FAQ](#-faq)
- [Credits](#-credits)

---

## 🤖 About

**Hunter XMD Pro** is a feature-rich, multi-device WhatsApp bot built on top of [hunter-baileys](https://www.npmjs.com/package/hunter-baileys) — a lightweight, full-featured WhatsApp Web API for Node.js developed by ObedTech.

It ships with 140+ commands across fun, group management, downloads, AI, media editing, and full automation — all configurable through simple environment variables with zero code changes needed.

---

## ✨ Features

| Category | What it does |
|---|---|
| 🛡️ **Protection** | Anti-Delete (recovers to DM), Anti-Link, Anti-Spam, Anti-Bad Words, Anti-View-Once |
| 👥 **Group Tools** | Welcome/Goodbye, Kick, Promote, Demote, Tag All, Lock/Unlock, Poll, Link Reset |
| 📥 **Downloaders** | YouTube, TikTok, Facebook, Instagram, Pinterest, Spotify, Ringtones |
| 🤖 **AI** | AI Chat, Image Generation, Image Scanner |
| 🎨 **Media Editing** | Sticker Maker, Blur/Invert/Greyscale, Remove BG, Wanted & Jail posters |
| ⚙️ **Automation** | Auto-Bio, Auto-Status Seen/React/Reply, Auto-Typing, Auto-Recording, Auto-Sticker |
| 🎉 **Fun** | Fun commands, Ship, Match, Quotes, Fancy Text, Prank tools, Emotions |
| 🔧 **Owner Tools** | Broadcast, Manage ENV live, Sudo users, Ban, Update checker, Restart |

---

## 📋 Requirements

- **Node.js** v18 or higher
- **npm** v8 or higher
- A **WhatsApp account** (personal number recommended, not business)
- A **Session ID** — [get yours here](https://mys-1.onrender.com)
- **FFmpeg** (for media — auto-installed via npm packages)

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/Obedweb3/Hunter-Xmd1code.git
cd Hunter-Xmd1code
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create your config file
Create a file named `config.env` in the root folder:
```env
SESSION_ID=Hunter-xmd~your_session_id_here
OWNER_NUMBER=2547xxxxxxxxx
BOT_NAME=Hunter XMD Pro
PREFIX=.
MODE=public
ANTI_DELETE=false
AUTO_BIO=false
```

### 4. Start the bot
```bash
npm start
```

> **No session yet?** Just run `node index.js`, scan the QR code that appears in the terminal, and your session is saved automatically in the `sessions/` folder.

---

## ⚙️ Configuration

All settings are controlled via environment variables. Set them in `config.env` for local use, or in your platform's dashboard (Heroku Config Vars, Railway Variables, etc.).

### 🔴 Required

| Variable | Description | Example |
|---|---|---|
| `SESSION_ID` | Your WhatsApp session (base64 string) | `Hunter-xmd~xxxxx` |
| `OWNER_NUMBER` | Owner phone number — country code, no `+` | `254701082940` |
| `PREFIX` | Command trigger character | `.` |

### 🟡 Bot Identity

| Variable | Default | Description |
|---|---|---|
| `BOT_NAME` | `𝐇𝐔𝐍𝐓𝐄𝐑 𝐗𝐌𝐃 PRO` | Bot display name used in menus |
| `OWNER_NAME` | `ObedTechX` | Owner name shown in menus |
| `STICKER_NAME` | `𝐇𝐔𝐍𝐓𝐄𝐑 𝐗𝐌𝐃 PRO` | Sticker pack name |
| `DESCRIPTION` | `© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴏʙᴇᴅᴛᴇᴄʜ` | Footer text on menus |
| `MENU_IMAGE_URL` | catbox image | Image used in menu & mention replies |
| `ALIVE_IMG` | catbox image | Image shown in `.alive` command |
| `LIVE_MSG` | default alive msg | Custom alive/ping message |

### 🟢 Behaviour

| Variable | Default | Description |
|---|---|---|
| `MODE` | `public` | `public` / `private` / `inbox` / `group` |
| `ALWAYS_ONLINE` | `true` | Keep bot always online |
| `READ_MESSAGE` | `false` | Auto-read all incoming messages |
| `READ_CMD` | `false` | Mark command messages as read |
| `PUBLIC_MODE` | `true` | Allow all users to use commands |

### 🔵 Automation

| Variable | Default | Description |
|---|---|---|
| `AUTO_BIO` | `false` | ✏️ Auto-update bio every minute |
| `AUTO_BIO_TEXT` | `🏹 Hunter XMD Pro \| ⏱ {uptime} \| 🕒 {time}` | Bio template — supports `{uptime}` `{time}` `{date}` `{botname}` |
| `AUTO_REPLY` | `false` | Auto-reply to messages |
| `AUTO_REACT` | `true` | Auto-react to every message |
| `CUSTOM_REACT` | `false` | Use your own custom reaction emojis |
| `CUSTOM_REACT_EMOJIS` | `💝,💖,❤️...` | Comma-separated custom emoji list |
| `AUTO_STICKER` | `false` | Auto-convert images to stickers |
| `AUTO_VOICE` | `false` | Auto-send voice replies |
| `AUTO_TYPING` | `false` | Show typing indicator automatically |
| `AUTO_RECORDING` | `true` | Show recording indicator |

### 🟣 Status Automation

| Variable | Default | Description |
|---|---|---|
| `AUTO_STATUS_SEEN` | `true` | Auto-view all status updates |
| `AUTO_STATUS_REACT` | `true` | Auto-like/react to statuses |
| `AUTO_STATUS_REPLY` | `false` | Auto-reply when viewing a status |
| `AUTO_STATUS_MSG` | default text | Custom status reply message |

### 🔴 Protection

| Variable | Default | Description |
|---|---|---|
| `ANTI_DELETE` | `false` | 🛡️ Recover deleted messages → sent to your DM |
| `ANTI_LINK` | `true` | Delete WhatsApp/Telegram group links |
| `ANTI_LINK_KICK` | `true` | Kick members who post group links |
| `ANTI_BAD` | `true` | Auto-delete offensive/bad words |
| `ANTI_VV` | `true` | Bypass view-once messages |
| `DELETE_LINKS` | `true` | Delete links silently without kicking |
| `ANTI_DEL_PATH` | `log` | Where to send deleted msg: `log` (owner DM) or `same` (same chat) |

### 🟤 Group Events

| Variable | Default | Description |
|---|---|---|
| `WELCOME` | `true` | Send welcome & goodbye messages |
| `ADMIN_EVENTS` | `false` | Announce promotions and demotions |
| `MENTION_REPLY` | `false` | Reply when someone mentions the bot |

---

## 💬 Commands

> Replace `.` with whatever you set as your `PREFIX`.

### 🛡️ Anti-Delete

| Command | Description |
|---|---|
| `.antidelete on` | Enable anti-delete (runtime toggle) |
| `.antidelete off` | Disable anti-delete |
| `.antidelete status` | Show Heroku env status + command toggle status |
| `.testantidel` | Check cache sizes and confirm system is running |

### ✏️ Auto-Bio

| Command | Description |
|---|---|
| `.autobio on` | Start auto-bio updates |
| `.autobio off` | Stop auto-bio |
| `.autobio status` | Check current status and active template |
| `.autobio set 🏹 {botname} \| {uptime}` | Set a custom bio template |

### 👥 Group Management

| Command | Description |
|---|---|
| `.kick @user` | Remove a member from the group |
| `.promote @user` | Make a member group admin |
| `.demote @user` | Remove admin from a member |
| `.tagall` | Mention all group members |
| `.admins` | Mention all group admins |
| `.lock` / `.unlock` | Lock or unlock the group |
| `.mute` / `.unmute` | Stop or allow members from sending messages |
| `.gname <text>` | Change the group name |
| `.gdesc <text>` | Change the group description |
| `.link` | Get the group invite link |
| `.resetlink` | Reset the group invite link |
| `.poll <question>` | Create a vote poll |
| `.newgc <name>` | Create a new group |
| `.add <number>` | Add a member to the group |
| `.out` | Leave the current group |

### 📥 Downloads

| Command | Description |
|---|---|
| `.ytmp3 <url>` | Download YouTube audio (MP3) |
| `.ytmp4 <url>` | Download YouTube video (MP4) |
| `.play <song name>` | Search and play a YouTube song |
| `.tiktok <url>` | Download TikTok video (no watermark) |
| `.fb <url>` | Download Facebook video |
| `.pinterest <query>` | Download Pinterest image |
| `.spotify <query>` | Download Spotify track |
| `.ringtone <name>` | Download a ringtone |

### 🤖 AI & Smart Tools

| Command | Description |
|---|---|
| `.ai <prompt>` | Chat with AI |
| `.imagine <prompt>` | Generate an AI image |
| `.imagescan` | Describe/analyze an image |
| `.tts <text>` | Convert text to speech |
| `.translate <text>` | Translate text to English |
| `.define <word>` | Dictionary definition |
| `.weather <city>` | Get current weather info |
| `.wiki <topic>` | Search Wikipedia |

### 🎨 Image Editing

| Command | Description |
|---|---|
| `.sticker` | Convert image or video to sticker |
| `.blur` | Blur an image |
| `.grey` | Convert image to greyscale |
| `.invert` | Invert image colors |
| `.rmbg` | Remove image background |
| `.wanted` | Put a face on a wanted poster |
| `.jail` | Put a face behind jail bars |
| `.nokia` | Nokia photo meme |

### 🎉 Fun

| Command | Description |
|---|---|
| `.ship @user1 @user2` | Calculate love compatibility |
| `.match @user1 @user2` | Match percentage |
| `.quote` | Random inspirational quote |
| `.fancy <text>` | Convert text to fancy Unicode |
| `.truth` | Random truth question |
| `.dare` | Random dare challenge |
| `.joke` | Random joke |

### 🔧 Owner & Admin

| Command | Description |
|---|---|
| `.alive` | Check if bot is online |
| `.ping` | Check bot response speed |
| `.uptime` | How long bot has been running |
| `.restart` | Restart the bot |
| `.broadcast <msg>` | Send a message to all active chats |
| `.addenv KEY=VALUE` | Add or update a config variable live |
| `.delenv KEY` | Delete a config variable |
| `.sudo @user` | Add a sudo (trusted) user |
| `.unsudo @user` | Remove sudo from a user |
| `.ban @user` | Ban a user from using the bot |
| `.unban @user` | Unban a user |
| `.getjid` | Get the JID of a group or user |
| `.block` / `.unblock` | Block or unblock a contact |

---

## 🌍 Deployment

### ☁️ Heroku

1. Click the **Deploy to Heroku** button at the top of this README
2. Enter your app name
3. Fill in the required config vars:
   - `SESSION_ID` — your session string
   - `OWNER_NUMBER` — your phone number
   - `PREFIX` — command prefix (default `.`)
4. Click **Deploy App** and wait for build to finish
5. Go to **Resources** tab → enable the **worker** dyno

> To keep anti-delete active after restarts, go to **Settings → Config Vars** and add `ANTI_DELETE=true`

### 🚂 Railway

1. Fork the repo to your GitHub
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Select your forked repo
4. Add all environment variables in the **Variables** tab
5. Railway auto-deploys on every push

### 🎨 Render

1. Fork the repo
2. Create a **New Web Service** on [render.com](https://render.com)
3. Connect your GitHub repo
4. Set **Start Command** to `npm start`
5. Add environment variables in the **Environment** tab
6. Deploy

### 💻 Local / VPS

```bash
# Clone
git clone https://github.com/Obedweb3/Hunter-Xmd1code.git
cd Hunter-Xmd1code

# Install
npm install

# Configure
cp config.env.example config.env   # or create config.env manually
nano config.env                     # add your settings

# Run
npm start
```

**Persistent VPS running with PM2:**
```bash
npm install -g pm2
pm2 start index.js --name "hunter-xmd"
pm2 save
pm2 startup
```

---

## 🗑️ Anti-Delete Setup

Hunter XMD Pro detects when someone deletes a message and **immediately forwards the full content to your DM**.

**Supported types:** Text, Images, Videos, Audio, Voice Notes, Stickers, Documents

### Method 1 — Permanent (recommended for Heroku/Railway/Render)
Add to your platform's config vars / environment variables:
```
ANTI_DELETE=true
```

### Method 2 — Runtime command
Send this in any chat where the bot is active:
```
.antidelete on
```

### How the recovery works
```
Someone sends a message
       ↓
Bot caches full message + pre-downloads any media
       ↓
Someone deletes the message
       ↓
Bot detects deletion event
       ↓
Bot sends text alert + recovered media to your DM
```

> **Tip:** Both the env var and command toggle work independently. Either one being active is enough. Use `.antidelete status` to see both.

---

## ✏️ Auto-Bio Setup

Auto-Bio updates your WhatsApp profile status/bio every **60 seconds** with live bot information.

### Enable via config:
```env
AUTO_BIO=true
AUTO_BIO_TEXT=🏹 Hunter XMD Pro | ⏱ {uptime} | 🕒 {time}
```

### Enable via command:
```
.autobio on
```

### Template variables:

| Variable | Example Output |
|---|---|
| `{uptime}` | `2h 15m 30s` |
| `{time}` | `02:15 PM` |
| `{date}` | `15 Mar 2026` |
| `{botname}` | `Hunter XMD Pro` |

### Example bio templates:
```
🏹 {botname} | ⏱ {uptime} | 🕒 {time}
🤖 Running for {uptime} | Last seen {time}
Hunter XMD Pro • {date} • {time}
⚡ Always on | Up {uptime}
```

---

## ❓ FAQ

**Q: Bot connects but doesn't respond to commands**
> Make sure your `PREFIX` matches what you're typing (e.g. `.ping`), and `MODE` is set to `public`.

**Q: Session expired or bot got logged out**
> Get a fresh session ID from [mys-1.onrender.com](https://mys-1.onrender.com) and update your `SESSION_ID` config var.

**Q: Anti-delete isn't working**
> Run `.testantidel` — it shows whether the system is active and how many messages are cached. The bot must receive a message BEFORE it's deleted to cache it. Very fast deletions (under 1 second) may be missed.

**Q: Media not being recovered by anti-delete**
> Media is downloaded immediately on receipt. If the sender deleted within milliseconds of sending, the buffer may not have saved in time. Text messages are always captured instantly.

**Q: `Cannot find module 'hunter-baileys'` error**
> Run `npm install` — the dependency wasn't installed yet.

**Q: Bot keeps disconnecting on Heroku free tier**
> Free Heroku dynos sleep after 30 minutes of inactivity. Upgrade to a paid dyno or use [UptimeRobot](https://uptimerobot.com) to ping your app every 25 minutes.

**Q: How do I add another sudo user?**
> Use `.sudo @user` to add them via command, or edit `lib/sudo.json` directly.

**Q: Can I use this bot on multiple numbers?**
> Yes — deploy separate instances with different `SESSION_ID` values.

**Q: What's the difference between `ANTI_LINK` and `ANTI_LINK_KICK`?**
> `ANTI_LINK=true` deletes the link message. `ANTI_LINK_KICK=true` also kicks the member who sent it.

---

## 🙏 Credits

| Role | Name / Link |
|---|---|
| **Bot Developer** | [ObedTech](https://github.com/Obedweb3) |
| **WhatsApp Library** | [hunter-baileys v2.1.1](https://www.npmjs.com/package/hunter-baileys) |
| **Original Baileys** | [@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys) |

---

<div align="center">

**© 2026 ObedTech — Hunter XMD Pro**

*If you use or fork this project, please give credit and keep the watermark.*

[![GitHub Stars](https://img.shields.io/github/stars/Obedweb3/Hunter-Xmd1code?style=social)](https://github.com/Obedweb3/Hunter-Xmd1code)
[![GitHub Forks](https://img.shields.io/github/forks/Obedweb3/Hunter-Xmd1code?style=social)](https://github.com/Obedweb3/Hunter-Xmd1code/fork)

</div>
