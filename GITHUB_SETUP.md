# 🚀 Quick Guide: Push to GitHub

Follow these simple steps to get your website on GitHub!

## Prerequisites

1. **Install Git** (if you don't have it):
   - Download from: https://git-scm.com/download/win
   - Install with default settings

2. **Create a GitHub account** (if you don't have one):
   - Go to: https://github.com
   - Sign up for free

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to https://github.com and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository name: `rebeccaloh.com`
4. Choose **Public** or **Private** - both work! ✅
   - **Public**: Anyone can see your code (but your website is public anyway)
   - **Private**: Only you can see the code (website is still public)
5. **DO NOT** check any of these options (we already have these files):
   - ❌ "Add a README file" (we already have README.md)
   - ❌ "Add .gitignore" (we already have .gitignore)
   - ❌ "Choose a license" (optional - you can add one later if you want)
6. Click **"Create repository"**

### 2. Open Terminal in Your Project Folder

**Option A: Using File Explorer (EASIEST!)** ⭐
1. Open File Explorer (press `Windows key + E`)
2. Navigate to: `C:\Users\rebec\rebeccaloh-website`
3. Click in the address bar and type: `powershell` then press Enter
   - OR right-click in the folder → **"Open in Terminal"** or **"Open PowerShell window here"**

**Option B: Using Command Prompt**
1. Press `Win + R`, type `cmd`, press Enter
2. Type one of these (try both if one doesn't work):
   ```
   cd C:\Users\rebec\rebeccaloh-website
   ```
   OR with quotes:
   ```
   cd "C:\Users\rebec\rebeccaloh-website"
   ```

**Option C: Using PowerShell**
1. Press `Win + X`, select **"Windows PowerShell"** or **"Terminal"**
2. Type:
   ```
   cd C:\Users\rebec\rebeccaloh-website
   ```

### 3. Set Up Git Identity (First Time Only)

If this is your first time using Git, you need to tell Git who you are. Run these commands (replace with your actual name and email):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Use the email associated with your GitHub account!** This can be your GitHub email or any email you use.

**Example:**
```bash
git config --global user.name "Rebecca Loh"
git config --global user.email "your-email@gmail.com"
```

### 4. Run These Commands

Copy and paste these commands one by one (replace `YOUR_USERNAME` with your actual GitHub username):

```bash
git init
git add .
git commit -m "Initial commit: Add website files"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rebeccaloh.com.git
git push -u origin main
```

**Note:** When you run `git push`, GitHub will ask for your username and password. 
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your regular password)
  - Get one here: https://github.com/settings/tokens
  - Click "Generate new token (classic)"
  - Give it a name like "Website Upload"
  - Check "repo" permission
  - Click "Generate token"
  - Copy the token and use it as your password

### 5. Make Repository Public (If Needed)

If your repository is private and you want to make it public (to use free GitHub Pages):

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll all the way down to the bottom of the Settings page
4. You'll see a section called **"Danger Zone"**
5. Click **"Change visibility"** → **"Change to public"**
6. Type your repository name to confirm
7. Click **"I understand, change repository visibility"**

**Note:** Making it public means anyone can see your code, but your website will be public anyway.

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu, next to "Code", "Issues", etc.)
3. In the left sidebar, scroll down and click **"Pages"** (under "Code and automation" section)
4. You should see a section called **"Build and deployment"** or **"Source"**
   - Look for a dropdown that says **"None"** or **"Deploy from a branch"**
   - Click the dropdown and select **"Deploy from a branch"**
5. Under **"Branch"**, select:
   - Branch: **main**
   - Folder: **/ (root)**
6. Click **"Save"** button
7. Wait 2-3 minutes for GitHub to build your site
8. You'll see a message like: "Your site is live at `https://YOUR_USERNAME.github.io/rebeccaloh.com`"
   - The URL will appear in a green box at the top of the Pages settings
   - **Important:** The URL format is `https://YOUR_USERNAME.github.io/REPOSITORY-NAME`
   - So if your repo is `rebeccaloh.com`, the URL is: `https://hpbrebecca.github.io/rebeccaloh.com`
   - **NOT** just `https://hpbrebecca.github.io` (that would only work for a special repo named `hpbrebecca.github.io`)

**Can't find it?** Try:
- Make sure you're in the **Settings** tab (not Code, Issues, etc.)
- Scroll down in the left sidebar - "Pages" is usually near the bottom
- If you still can't see it, the repository might need to be public (or you need GitHub Pro for private repos)

### 7. (Optional) Use Your Custom Domain

If you own `rebeccaloh.com` and want to use it instead of `YOUR_USERNAME.github.io/rebeccaloh.com`:

**What is DNS?**
DNS (Domain Name System) is like a phone book for the internet. It tells browsers where to find your website when someone types `rebeccaloh.com`. You need to add a DNS record that points your domain to GitHub's servers.

**Step 1: Add Domain in GitHub**
1. Go to your repository → **Settings** → **Pages**
2. Under **"Custom domain"**, type: `rebeccaloh.com`
3. Click **Save**
4. GitHub will show you what DNS records to add

**Step 2: Add DNS Record at Your Domain Provider**

**DO NOT change your nameservers!** Just add a DNS record.

1. Log into where you bought your domain (GoDaddy, Namecheap, Google Domains, etc.)
2. Look for **"DNS Management"**, **"DNS Settings"**, or **"Manage DNS"**
3. Find the section for **"DNS Records"** or **"Records"**
4. Add a new **CNAME record**:
   - **Name/Host**: `rebeccaloh.com` or `@` (some providers use `@` for the root domain)
   - **Value/Target/Points to**: `hpbrebecca.github.io` (replace with YOUR GitHub username)
   - **TTL**: Leave as default (usually 3600 or 1 hour)
5. Click **Save** or **Add Record**

**Alternative: If CNAME doesn't work, use A records:**
Some providers require A records instead. Add these 4 A records:
- Name: `rebeccaloh.com` or `@`
- Type: `A`
- Value: `185.199.108.153`
- (Repeat for these IPs: `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)

**Step 3: Wait**
- DNS changes can take 5 minutes to 48 hours to take effect
- Usually works within 1-2 hours
- Check if it's working by visiting `rebeccaloh.com` in your browser

**Need help?** The exact steps vary by provider. Look for:
- "DNS Management"
- "DNS Records" 
- "DNS Settings"
- Contact your domain provider's support if you can't find it

## 🎉 Done!

Your website is now live! Any time you make changes:

```bash
git add .
git commit -m "Update website"
git push
```

Changes will appear on your site in a few minutes!

## Need Help?

- GitHub Docs: https://docs.github.com
- Git Tutorial: https://git-scm.com/docs

