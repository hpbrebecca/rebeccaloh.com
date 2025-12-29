# Pilates Project - Deployment Checklist

## Files Required for Online Version

Make sure ALL these files are uploaded to `/0/pilates/` on the server:

1. ✅ `index.html` - Main HTML file
2. ✅ `styles.css` - CSS stylesheet (with cache-busting: `?v=1.0`)
3. ✅ `Pilates-Picture.jpg` - Hero image
4. ✅ `Pilatespicture2.jpg` - About section image
5. ✅ `Pilatespicture3.jpg` - Benefits section image

## File Structure on Server

```
/0/pilates/
├── index.html
├── styles.css
├── Pilates-Picture.jpg
├── Pilatespicture2.jpg
└── Pilatespicture3.jpg
```

## Troubleshooting

If the design doesn't show online:

1. **Check file paths**: All files must be in the same directory (`/0/pilates/`)
2. **Clear browser cache**: Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac) to hard refresh
3. **Check file permissions**: Make sure CSS file is readable (chmod 644)
4. **Verify CSS is loaded**: Open browser DevTools (F12) → Network tab → Reload page → Check if `styles.css` loads (status 200)
5. **Check for errors**: Open browser DevTools (F12) → Console tab → Look for CSS loading errors

## CSS Cache-Busting

The CSS link includes a version parameter: `styles.css?v=1.0`
- If you update the CSS, change to `?v=1.1`, `?v=1.2`, etc.
- This forces browsers to reload the CSS file

## Testing

After uploading, test:
- [ ] Page loads at `https://rebeccaloh.com/0/pilates/`
- [ ] CSS styles are applied (white background, flat design)
- [ ] All 3 images are visible
- [ ] Navigation links work (Home, Über uns, Vorteile, Preise, Kontakt)
- [ ] No console errors in browser DevTools

