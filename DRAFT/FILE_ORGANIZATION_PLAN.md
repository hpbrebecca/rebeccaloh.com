# File Organization Plan

## Current Root Directory Files (19 total)

### **MUST STAY IN ROOT** (7 files) - Required by web standards/SEO:
- `index.html` - Main entry point (required)
- `robots.txt` - SEO crawler config (must be in root)
- `sitemap.xml` - SEO sitemap (should be in root)
- `manifest.webmanifest` - PWA manifest (should be in root)
- `CNAME` - GitHub Pages domain config (must be in root)
- `404.html` - Error page (should be in root)
- `script.js` - Main website script (currently referenced from root)

### **RECOMMENDED TO ORGANIZE:**

#### 1. **Legacy HTML Files** → Move to `archive/` or `legacy/` (4 files)
These appear to be old standalone page versions. The main site now uses sections within `index.html`:
- `aboutme.html` - Old standalone "About" page
- `quotes.html` - Old standalone "Quotes" page  
- `recommendations.html` - Old standalone "Recommendations" page
- `connect.html` - Redirect file (might be kept for SEO/backward compatibility, but could be moved if redirects are handled by server)

**Note:** `connect.html` contains a redirect to `/en/contact`. If you're using server-side redirects or the main site handles routing, this can be moved.

#### 2. **Images** → Move to `assets/images/` or `images/` (2 files)
- `profile.jpg.jpg` - Profile image
- `Rebecca Loh.jpg` - Another profile image

**Note:** Need to update image paths in `index.html` after moving.

#### 3. **Unused JavaScript** → Move to `archive/` or delete (1 file)
- `page-transitions.js` - Not referenced in `index.html`, appears unused

#### 4. **JavaScript Modules** → Move to `js/` folder (5 files)
Currently all in root, but could be organized:
- `elegant-transitions.js` - Used in index.html
- `advanced-effects.js` - Used in index.html
- `contact-form.js` - Used in index.html
- `quotes.js` - Used in index.html
- (Keep `script.js` in root as main script, or move if you update all references)

#### 5. **CSS Modules** → Move to `css/` folder (1 file)
- `contact-form.css` - Contact form stylesheet
- (Keep `styles.css` in root as main stylesheet, or move if you update all references)

## Recommended Structure:

```
/
├── index.html (STAY)
├── styles.css (STAY - or move to css/)
├── script.js (STAY - or move to js/)
├── robots.txt (STAY)
├── sitemap.xml (STAY)
├── manifest.webmanifest (STAY)
├── CNAME (STAY)
├── 404.html (STAY)
│
├── assets/
│   └── images/
│       ├── profile.jpg.jpg
│       └── Rebecca Loh.jpg
│
├── js/ (optional - for JavaScript modules)
│   ├── elegant-transitions.js
│   ├── advanced-effects.js
│   ├── contact-form.js
│   └── quotes.js
│
├── css/ (optional - for CSS modules)
│   └── contact-form.css
│
└── archive/ (for old/unused files)
    ├── aboutme.html
    ├── quotes.html
    ├── recommendations.html
    ├── connect.html (if not needed for redirects)
    └── page-transitions.js
```

## Priority Recommendations:

**High Priority (Clean separation):**
1. Move images to `assets/images/` - Good practice, improves organization
2. Move legacy HTML files to `archive/` - Cleans up root directory

**Medium Priority (Optional organization):**
3. Move JS modules to `js/` - Nice to have, but requires updating all script references
4. Move CSS modules to `css/` - Nice to have, but requires updating CSS imports

**Low Priority:**
5. Move `page-transitions.js` to `archive/` if confirmed unused

## Files to Update After Moving:

- **If moving images:** Update paths in `index.html`
- **If moving JS:** Update `<script src="">` tags in `index.html`
- **If moving CSS:** Update `<link rel="stylesheet">` tags in `index.html`

