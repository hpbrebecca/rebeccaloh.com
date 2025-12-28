# Parameter der bewegenden Fläche im Originalzustand (ohne Hover)

## Aktuelle Parameter für `.logo-tile-image-wrapper::before`

### 1. GRÖSSE

#### `width: 90%` und `height: 90%` (AKTUELL - erhöht auf 90%)
- **Bedeutung:** Die Fläche ist 90% der Breite und Höhe des `.logo-tile-image-wrapper` Containers
- **Berechnung:** Bei einer Tile-Größe von 240px × 240px = 216px × 216px
- **Positionierung:** Zentriert durch `transform: translate(-50%, -50%)` mit `top: 50%` und `left: 50%`
- **Anpassung:** Weitere Anpassungen möglich (z.B. `width: 95%`, `height: 95%` für noch größer, oder kleiner für subtiler)

### 2. BEWEGUNG (Animation)

#### `animation: liquid-blob 8s ease-in-out infinite;`
- **Dauer:** `8s` (8 Sekunden pro Zyklus)
- **Easing:** `ease-in-out` (sanftes Beschleunigen und Abbremsen)
- **Wiederholung:** `infinite` (endlos)

#### `@keyframes liquid-blob` Animation:
```css
0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}
50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
}
```

**Bewegungsstärke (border-radius Änderungen):**

**Start/Ende (0%, 100%):**
- Horizontale Radien: `60% 40% 30% 70%` (oben-rechts, unten-rechts, unten-links, oben-links)
- Vertikale Radien: `60% 30% 70% 40%` (oben-rechts, unten-rechts, unten-links, oben-links)
- **Bedeutung:** Organische, flüssige Form

**Mitte (50%) - AKTUELL (reduziert):**
- Horizontale Radien: `50% 55% 55% 50%` 
- Vertikale Radien: `55% 55% 50% 55%`
- **Bedeutung:** Reduzierte Verformung - subtilere Bewegung

**Bewegungsintensität:**
- Die Differenz zwischen Start- und Mittelpunkt bestimmt die Stärke der Bewegung
- **AKTUELL (reduziert):** Unterschiede von 5-10% (z.B. 60% → 50%, 40% → 55%) - **viel subtiler**
- **Vorher:** Unterschiede von 30-40% (z.B. 60% → 30%, 40% → 60%)
- **Für noch weniger Bewegung:** Reduziere die Differenzen weiter auf 2-5% (z.B. 60% → 58%, 40% → 42%)

### 3. ABRUNDUNG (border-radius)

#### Aktuelle Werte (bei 0%/100%):
```css
border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
```

**Format:** `horizontal-top-left horizontal-top-right horizontal-bottom-right horizontal-bottom-left / vertical-top-left vertical-top-right vertical-bottom-right vertical-bottom-left`

**Erklärung:**
- `/` trennt horizontale und vertikale Radien
- Jede Zahl ist ein Prozentsatz der jeweiligen Dimension
- **Beispiel:** `60%` bedeutet 60% der Breite (horizontal) oder Höhe (vertikal)
- **Effekt:** Erzeugt eine organische, flüssige Form statt eines perfekten Kreises

**Mögliche Anpassungen:**
- **Weniger organisch/more geometrisch:** Nutze ähnlichere Werte (z.B. `55% 50% 50% 55%`)
- **Mehr organisch:** Nutze größere Unterschiede (z.B. `70% 30% 40% 60%`)
- **Perfekter Kreis:** `50% / 50%` (aber das entfernt die organische Bewegung)

### 4. WEITERE PARAMETER

#### `filter: blur(2px);`
- **Bedeutung:** Leichter Blur-Filter für sanfte Kugelgrenze
- **Effekt:** Macht die Ränder der bewegenden Fläche weicher und verschwommener
- **Anpassung:** Erhöhe auf `blur(3px)` oder `blur(4px)` für mehr Blur, reduziere auf `blur(1px)` für weniger

#### `backdrop-filter: blur(12px) saturate(120%);`
- **blur(12px):** Blur-Effekt für den Hintergrund
- **saturate(120%):** Sättigung (reduziert von 180% auf 120% für neutralere Farben)
- **Anpassung:** Reduziere `saturate()` weiter (z.B. `saturate(100%)` = keine Sättigung) für noch neutralere Farben

#### Farbe und Transparenz:
- **Aktuelle Farbe:** Farben aus dem Farbkonzept - Dunkle Hintergrundfarben (rgba(14, 26, 47, 0.85) = #0E1A2F und rgba(30, 46, 102, 0.85) = #1E2E66)
- **Transparenz:** 85% (0.8 opacity)
- **Entspricht:** var(--color-dark-primary) und var(--color-dark-secondary) aus dem Farbkonzept

### 5. ZUSAMMENFASSUNG DER ANPASSUNGSMÖGLICHKEITEN

**Größe ändern:**
```css
width: 90%;  /* Aktuell */
height: 90%; /* Aktuell */
```

**Bewegung weiter reduzieren (falls gewünscht):**
```css
@keyframes liquid-blob {
    0%, 100% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
        border-radius: 58% 45% 35% 65% / 58% 35% 65% 45%; /* Noch kleinere Differenzen (2-5%) = sehr subtile Bewegung */
    }
}
```

**Animationsdauer ändern:**
```css
animation: liquid-blob 10s ease-in-out infinite; /* Langsamer = 10s statt 8s */
```

**Blur für Ränder anpassen:**
```css
filter: blur(3px); /* Mehr Blur für weichere Ränder */
```

