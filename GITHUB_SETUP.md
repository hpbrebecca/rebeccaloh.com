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

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**
6. Wait 2-3 minutes
7. Your site will be live at: `https://YOUR_USERNAME.github.io/rebeccaloh.com`

### 6. (Optional) Use Your Custom Domain

If you own `rebeccaloh.com`:

1. In GitHub Pages settings, add your domain: `rebeccaloh.com`
2. Update your domain's DNS (where you bought the domain):
   - Add a CNAME record: `rebeccaloh.com` → `YOUR_USERNAME.github.io`
   - Or ask your domain provider for help

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

