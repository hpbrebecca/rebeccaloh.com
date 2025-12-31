# Farbübersicht - rebeccaloh.com

## 1. FARBKONZEPT (Clear/Bright Winter)

### Dunkle Hintergründe (NUR Hintergründe, nie Text)
- **`--color-dark-primary: #0A0F1A`** - Globaler Body/HTML Hintergrund (immer dunkel)
- **`--color-dark-secondary: #1C2552`** - Dunkler Hintergrund Alternative (Clear Winter)
- **`--color-dark-tertiary: #1A1428`** - Dunkler Hintergrund Alternative (Clear Winter)

### Helle Oberflächen (NUR Content-Oberflächen auf dunkler Basis)
- **`--color-light-bg: #F1F3F8`** - Helle Content-Oberfläche
- **`--color-white-content: #FFFFFF`** - Reine weiße Content-Oberfläche

### Text-Oberflächen (10% transparent / 0.9 Opazität - STRENG)
- **`--color-text-surface-dark: rgba(10, 15, 26, 0.9)`** - Dunkle Text-Oberfläche (10% transparent)
- **`--color-text-surface-light: rgba(241, 243, 248, 0.9)`** - Helle Text-Oberfläche (10% transparent)

### Navigation Hintergrund (50% transparent / 0.5 Opazität - NUR Navigation)
- **`--color-nav-background: rgba(10, 15, 26, 0.5)`** - Navigation NUR (50% transparent)

### Text-Farben (NIEMALS Opazität verwenden, immer vollständig opak)
- **`--color-text-on-dark: #FFFFFF`** - Text auf dunklen Hintergründen NUR (vollständig opak)
- **`--color-text-on-light: #0A0F1A`** - Text auf hellen Oberflächen (primär)
- **`--color-text-on-light-alt: #1C2552`** - Text auf hellen Oberflächen (Alternative)

### Section Headers auf hellen Oberflächen
- **`--color-section-header: #1C2552`** - NUR für Section Headers/Labels auf hellen Oberflächen

### Akzentfarben (NUR für Links, CTAs, Icons, Hover-States - tief gesättigt, NICHT neon)
- **`--color-accent-primary: #4B3A8F`** - Primäre Akzentfarbe (tief gesättigtes Violett) - Links, CTAs, Icons, Hover
- **`--color-accent-secondary: #6A2F6F`** - Sekundäre Akzentfarbe (optional, sparsam verwendet)

**WICHTIG:** Akzentfarben werden NIEMALS für Hintergründe oder Body-Text verwendet.

---

## 2. ANDERE FARBEN IM CODE (NICHT Teil des Farbkonzepts)

### Logo-Tile Overlay (blaue bewegende Fläche beim Hover)
- **`rgba(10, 15, 26, 0.99)`** - Dunkelblau (99% opak) - Start/Ende des Gradient
- **`rgba(28, 37, 82, 0.98)`** - Helleres Blau (98% opak) - Mitte des Gradient
- **Verwendung:** Hintergrund für das Hover-Overlay der Logo-Kacheln mit Liquid-Blob Animation

### Holographic Grid (subtiler Hintergrund-Grid)
- **`rgba(80, 150, 255, 0.04)`** - Sehr transparentes Blau (4% opak)
- **`rgba(80, 170, 255, 0.03)`** - Sehr transparentes Hellblau (3% opak)
- **Verwendung:** Dekoratives Hintergrund-Grid (sehr subtil)

### Profile/UI Elemente (Transparente Weiß-Töne)
- **`rgba(255, 255, 255, 0.02)`** - Sehr transparentes Weiß (2% opak) - Profile Orb Hintergrund
- **`rgba(255, 255, 255, 0.05)`** - Transparentes Weiß (5% opak) - Verschiedene UI Elemente
- **`rgba(255, 255, 255, 0.08)`** - Transparentes Weiß (8% opak) - Input Fields
- **`rgba(255, 255, 255, 0.09)`** - Transparentes Weiß (9% opak) - Gradient Stops
- **`rgba(255, 255, 255, 0.12)`** - Transparentes Weiß (12% opak) - Borders, Profile Orb
- **`rgba(255, 255, 255, 0.15)`** - Transparentes Weiß (15% opak) - Borders, Dividers
- **`rgba(255, 255, 255, 0.2)`** - Transparentes Weiß (20% opak) - Borders, Scrollbars
- **`rgba(255, 255, 255, 0.25)`** - Transparentes Weiß (25% opak) - Hover Borders
- **`rgba(255, 255, 255, 0.3)`** - Transparentes Weiß (30% opak) - Scrollbars, UI Elements
- **`rgba(255, 255, 255, 0.4)`** - Transparentes Weiß (40% opak) - Focus Outlines
- **`rgba(255, 255, 255, 0.5)`** - Transparentes Weiß (50% opak) - Focus Outlines
- **`rgba(255, 255, 255, 0.75)`** - Transparentes Weiß (75% opak) - Text (Disabled States)
- **`rgba(255, 255, 255, 0.9)`** - Transparentes Weiß (90% opak) - Text (Sekundär)
- **`rgba(255, 255, 255, 0.92)`** - Transparentes Weiß (92% opak) - Text
- **`rgba(255, 255, 255, 0.98)`** - Transparentes Weiß (98% opak) - Text
- **`#FFFFFF`** - Reines Weiß - Profile Image Background, SVG Fills

### Text Shadows (Schwarze Transparenz)
- **`rgba(0, 0, 0, 0.05)`** - Sehr subtiler schwarzer Schatten (5% opak) - Text Shadows
- **`rgba(0, 0, 0, 0.08)`** - Subtiler schwarzer Schatten (8% opak) - Text Shadows
- **`rgba(0, 0, 0, 0.1)`** - Subtiler schwarzer Schatten (10% opak) - Text Shadows
- **`rgba(0, 0, 0, 0.15)`** - Subtiler schwarzer Schatten (15% opak) - Text Shadows
- **`rgba(0, 0, 0, 0.2)`** - Subtiler schwarzer Schatten (20% opak) - Text Shadows
- **`rgba(0, 0, 0, 0.3)`** - Mittlerer schwarzer Schatten (30% opak) - Box Shadows, Text Shadows
- **`rgba(0, 0, 0, 0.4)`** - Stärkerer schwarzer Schatten (40% opak) - Box Shadows, Text Shadows
- **`rgba(0, 0, 0, 0.5)`** - Starker schwarzer Schatten (50% opak) - Text Shadows

### Akzent-Farben mit Opazität (Violett - Abgeleitet von --color-accent-primary)
- **`rgba(75, 58, 143, 0.15)`** - Violett (15% opak) - Subtile Glow Effects
- **`rgba(75, 58, 143, 0.2)`** - Violett (20% opak) - Box Shadows
- **`rgba(75, 58, 143, 0.25)`** - Violett (25% opak) - Text Shadows (Outer Glow)
- **`rgba(75, 58, 143, 0.3)`** - Violett (30% opak) - Ripple Effects, Text Shadows, Backgrounds
- **`rgba(75, 58, 143, 0.4)`** - Violett (40% opak) - Text Shadows, Drop Shadows, Backgrounds
- **`rgba(75, 58, 143, 0.5)`** - Violett (50% opak) - Text Shadows, Gradient Borders, Ripple Effects
- **`rgba(75, 58, 143, 0.6)`** - Violett (60% opak) - Text Shadows (Strong Glow)
- **`rgba(75, 58, 143, 0.8)`** - Violett (80% opak) - Gradient Lines

### Sekundäre Akzent-Farben mit Opazität (Magenta/Violett - Abgeleitet von --color-accent-secondary)
- **`rgba(106, 47, 111, 0.1)`** - Magenta/Violett (10% opak) - Subtile Glow Effects
- **`rgba(106, 47, 111, 0.2)`** - Magenta/Violett (20% opak) - Drop Shadows, Glow Effects
- **`rgba(106, 47, 111, 0.5)`** - Magenta/Violett (50% opak) - Gradient Borders (deaktiviert)

### Spezielle Farben
- **`rgba(200, 200, 200, 0.18)`** - Grau (18% opak) - Disabled Input Background
- **`rgba(30, 47, 85, 0.2)`** - Dunkles Blau (20% opak) - Border Bottom (vermutlich Legacy)

### Nebula Background (project1/nebula.js)
Die bewegenden Hintergrund-Kugeln verwenden eine große Palette von RGB-Farben (ohne Opazität, da diese dynamisch berechnet wird):
- **Rote Töne:** { r: 165-245, g: 25-75, b: 55-115 }
- **Pink Töne:** { r: 185-225, g: 50-75, b: 90-115 }
- **Blaue Töne:** { r: 45-105, g: 85-155, b: 155-255 }
- **Violett Töne:** { r: 95-185, g: 40-85, b: 155-245 }
- **Purple/Magenta Töne:** { r: 135-195, g: 35-65, b: 105-165 }
- **Midnight Blues:** { r: 35-55, g: 55-75, b: 125-165 }

**Verwendung:** Animierte Hintergrund-Nebula-Wolken mit dynamischer Opazität und Radial-Gradients.

