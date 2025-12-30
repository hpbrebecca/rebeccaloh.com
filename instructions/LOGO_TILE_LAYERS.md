# Logo Tile Ebenenstruktur (Originalzustand - ohne Hover)

## HTML-Struktur:
```
.logo-tile-link (a-Tag)
  ├── .logo-tile-image-wrapper (div)
  │     ├── ::before (pseudo-element) - Hintergrundbild
  │     └── .logo-tile-image (img-Tag) - Logo
  └── .logo-tile-overlay (div) - nur bei Hover sichtbar
```

## Ebenen (Z-Index Hierarchie) im Originalzustand:

### 1. Hintergrundebene (ganz hinten)
- **Element:** `.logo-tile-image-wrapper::before`
- **z-index:** `0`
- **Inhalt:** Hintergrundbild mit liquid blob Animation
- **CSS-Variable:** `--tile-bg-image` (gesetzt via JavaScript)
- **Größe:** `width: 100%`, `height: 100%`
- **Position:** `absolute`, `top: 0`, `left: 0`
- **Opacity:** `1.0` (vollständig deckend)
- **Border-radius:** Liquid blob Form (animiert)
- **Status:** Sollte für alle Tiles sichtbar sein (inkl. Hou Wei TCM und MarVELOus)

### 2. Logo-Wrapper-Ebene
- **Element:** `.logo-tile-image-wrapper`
- **z-index:** `1`
- **Isolation:** `isolate` (erstellt neuen stacking context)
- **Overflow:** `hidden`
- **Hintergrund:** `transparent`
- **Funktion:** Container für Hintergrundbild (::before) und Logo

### 3. Logo-Ebene (ganz vorne)
- **Element:** `.logo-tile-image` (alle Logos) oder `.logo-hou-wei-tcm` (nur Hou Wei TCM)
- **z-index:** `100` (sehr hoch)
- **Position:** `absolute`, `bottom: 30px`, `left: 50%`
- **Transform:** `translateX(-50%)` (horizontal zentriert)
- **Größe:** `height: 30px`, `max-height: 30px`, `width: auto`, `max-width: 200px`
- **Opacity:** `1.0` (vollständig sichtbar)
- **Status:** Sollte immer sichtbar sein

### 4. Overlay-Ebene (nur bei Hover)
- **Element:** `.logo-tile-overlay`
- **z-index:** `50`
- **Position:** `absolute`, `top: 0`, `left: 0`
- **Größe:** `width: 100%`, `height: 100%`
- **Opacity:** `0` (im Originalzustand unsichtbar)
- **Visibility:** `hidden` (im Originalzustand versteckt)
- **Status:** Nur bei Hover sichtbar (nicht Teil des Originalzustands)

## Mögliche Probleme mit Hintergrundbildern:

### Für Hou Wei TCM und MarVELOus:
1. **CSS-Variable wird möglicherweise nicht vererbt:**
   - Variable wird auf `.logo-tile-image-wrapper` gesetzt
   - `::before` pseudo-element erbt die Variable
   - Aber: `isolation: isolate` könnte die Vererbung beeinflussen

2. **Overflow: hidden könnte abschneiden:**
   - `.logo-tile-image-wrapper` hat `overflow: hidden`
   - Das könnte das `::before` Element abschneiden
   - ABER: `::before` ist innerhalb des Wrappers, sollte also sichtbar sein

3. **Pfad-Probleme:**
   - MarVELOus: `'logos/MarVELOus hintergrund.webp'` (mit Leerzeichen)
   - Hou Wei TCM: `'logos/Hou Wei TCM Breitenbach-Background.jpg'` (mit Leerzeichen)
   - Leerzeichen in Dateinamen sollten in URL() funktionieren, aber könnten problematisch sein

4. **CSS-Variable Fallback:**
   - CSS verwendet: `var(--tile-bg-image, none)`
   - Wenn Variable nicht gesetzt ist, wird `none` verwendet
   - Das würde erklären, warum Hintergrundbilder fehlen

## Zusammenfassung für Originalzustand:

**Ebenen von hinten nach vorne:**
1. Hintergrundbild (`::before`, z-index: 0) - **SOLLTE sichtbar sein**
2. Logo-Wrapper (z-index: 1) - Container
3. Logo-Bild (z-index: 100) - **IST sichtbar**

**Problem:** Hintergrundbilder für Hou Wei TCM und MarVELOus sind nicht sichtbar, obwohl sie vorhanden sein sollten.

