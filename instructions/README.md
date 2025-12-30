# rebeccaloh.com

Personal website for Rebecca Loh.

## 🚀 Getting Started

This is a simple, modern website built with HTML, CSS, and JavaScript. No build process required - just open `index.html` in your browser!

## 📁 Project Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🎨 Customization

You can easily customize this website:

- **Colors**: Edit the CSS variables in `styles.css` (lines 5-11)
- **Content**: Update the text in `index.html`
- **Sections**: Add or remove sections as needed
- **Contact Links**: Update the contact links in the contact section

## 📤 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `rebeccaloh.com` (or any name you prefer)
5. Choose **Public** or **Private** - both work with GitHub Pages! ✅
6. **Don't** check any initialization options:
   - ❌ "Add a README file" (we already have README.md)
   - ❌ "Add .gitignore" (we already have .gitignore)
   - ❌ "Choose a license" (optional - you can add one later if you want)
7. Click "Create repository"

### Step 2: Push Your Code to GitHub

Open your terminal/command prompt in this folder and run:

```bash
# Initialize git (if you haven't already)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Add website files"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/rebeccaloh.com.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**
6. Wait a few minutes, then your site will be live at:
   `https://YOUR_USERNAME.github.io/rebeccaloh.com`

### Step 4: Use Custom Domain (Optional)

If you own `rebeccaloh.com`:

1. In GitHub Pages settings, add your custom domain: `rebeccaloh.com`
2. Update your domain's DNS settings to point to GitHub Pages:
   - Add a CNAME record: `rebeccaloh.com` → `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

## 🔄 Making Updates

After making changes to your website:

```bash
git add .
git commit -m "Describe your changes"
git push
```

Your changes will be live on GitHub Pages within a few minutes!

## 📝 License

Feel free to use this template for your own website!

