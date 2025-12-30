# Nebula Positionierung und Delays

## Grid-System (4x4 = 16 Clouds)

### Positionierung
- **Grid**: 4 Spalten × 4 Zeilen = 16 Segmente
- **Zellgröße**: 
  - `cellWidth = 100 / 4 = 25%` pro Spalte
  - `cellHeight = 100 / 4 = 25%` pro Zeile

### Grid-Positionen (Zentren)
- **Spalte 0**: 12.5% (0% + 25%/2)
- **Spalte 1**: 37.5% (25% + 25%/2)
- **Spalte 2**: 62.5% (50% + 25%/2)
- **Spalte 3**: 87.5% (75% + 25%/2)

- **Zeile 0**: 12.5% (0% + 25%/2)
- **Zeile 1**: 37.5% (25% + 25%/2)
- **Zeile 2**: 62.5% (50% + 25%/2)
- **Zeile 3**: 87.5% (75% + 25%/2)

### Zufällige Offsets
- **Offset X**: `(Math.random() - 0.5) * 25%` = ±12.5% innerhalb der Zelle
- **Offset Y**: `(Math.random() - 0.5) * 25%` = ±12.5% innerhalb der Zelle

### Finale Positionen (Beispiel)
Jede Cloud wird in der Mitte ihrer Grid-Zelle positioniert mit zufälligem Offset:
- **Cloud 0** (col=0, row=0): ~12.5% ± 12.5% horizontal, ~12.5% ± 12.5% vertikal
- **Cloud 1** (col=1, row=0): ~37.5% ± 12.5% horizontal, ~12.5% ± 12.5% vertikal
- **Cloud 2** (col=2, row=0): ~62.5% ± 12.5% horizontal, ~12.5% ± 12.5% vertikal
- **Cloud 3** (col=3, row=0): ~87.5% ± 12.5% horizontal, ~12.5% ± 12.5% vertikal
- **Cloud 4** (col=0, row=1): ~12.5% ± 12.5% horizontal, ~37.5% ± 12.5% vertikal
- ... usw. bis Cloud 15

## Animation Delays

### Initial Delay
- **Bereich**: `1 + (Math.random() * 24)` Sekunden
- **Min**: 1 Sekunde
- **Max**: 25 Sekunden
- **Zweck**: Staggered start, damit nicht alle Clouds gleichzeitig erscheinen

### Animation Duration
- **Bereich**: `20 + (Math.random() * 20)` Sekunden
- **Min**: 20 Sekunden
- **Max**: 40 Sekunden
- **Zweck**: Jede Cloud hat ihre eigene Zyklusdauer für organische Variation

### Fade-Timing (pro Cloud)
- **Fade-In**: 20% der Zyklusdauer (z.B. 4-8s bei 20-40s Zyklus)
- **Sichtbar**: 30% der Zyklusdauer (z.B. 6-12s bei 20-40s Zyklus)
- **Fade-Out**: 20% der Zyklusdauer (z.B. 4-8s bei 20-40s Zyklus)
- **Unsichtbar**: 30% der Zyklusdauer (z.B. 6-12s bei 20-40s Zyklus)

### Movement Duration
- **Dauer**: `animationDuration * 0.5` (50% der Zyklusdauer)
- **Zweck**: Bewegung ist schneller als Fade, für dynamischeres Gefühl

## Beispiel-Delays (für 16 Clouds)

| Cloud | Grid Position | Initial Delay (s) | Animation Duration (s) | Fade-In (s) | Visible (s) | Fade-Out (s) | Invisible (s) |
|-------|--------------|-------------------|----------------------|-------------|-------------|--------------|---------------|
| 0     | (0,0)        | 1-25             | 20-40               | 4-8         | 6-12        | 4-8          | 6-12          |
| 1     | (1,0)        | 1-25             | 20-40               | 4-8         | 6-12        | 4-8          | 6-12          |
| 2     | (2,0)        | 1-25             | 20-40               | 4-8         | 6-12        | 4-8          | 6-12          |
| ...   | ...          | ...               | ...                  | ...         | ...         | ...          | ...           |
| 15    | (3,3)        | 1-25             | 20-40               | 4-8         | 6-12        | 4-8          | 6-12          |

## Sichtbarkeit zu jedem Zeitpunkt

### Theorie
- Mit 16 Clouds und 30% Sichtbarkeitszeit pro Cloud
- **Erwartete sichtbare Clouds**: `16 × 0.3 = 4.8` Clouds im Durchschnitt
- **Range**: 2-5 Clouds sichtbar zu jedem Zeitpunkt (durch zufällige Delays)

### Warum nur links sichtbar?
**Problem**: Clouds werden in `document.body` eingefügt, nicht in `.nebula-container`
**Lösung**: Container wird jetzt erstellt und Clouds werden dort eingefügt

## Cloud-Größe
- **Bereich**: `150px - 350px` (zufällig)
- **Zweck**: Variation in Größe für organischeres Aussehen

## 3D Depth
- **Bereich**: `-500px bis +500px` (zufällig)
- **Zweck**: Tiefeneffekt für räumliche Dimension

## Movement Amplitude
- **X-Bewegung**: `±60%` (von initialer Position)
- **Y-Bewegung**: `±60%` (von initialer Position)
- **Zweck**: Organische, fließende Bewegung ohne Geschwindigkeitsänderung

