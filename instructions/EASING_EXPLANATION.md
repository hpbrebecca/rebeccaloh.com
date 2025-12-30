# Easing / Cubic-Bezier Erklärung

## Was ist Easing?

**Easing** (dt. "Erleichterung" oder "Beschleunigung") bestimmt, **wie** eine Animation von Punkt A zu Punkt B gelangt - nicht nur **wohin**, sondern **wie schnell** und mit welcher **Beschleunigung/Verzögerung**.

Stellen Sie sich vor:
- **Linear**: Ein Auto fährt konstant 50 km/h von A nach B
- **Ease-in**: Ein Auto startet langsam und beschleunigt (wie beim Anfahren)
- **Ease-out**: Ein Auto fährt schnell und bremst dann ab (wie beim Anhalten)
- **Ease-in-out**: Kombination - langsam starten, schnell in der Mitte, langsam enden

## Cubic-Bezier Funktion

`cubic-bezier(x1, y1, x2, y2)` ist eine mathematische Funktion, die eine **Kurve** beschreibt, die den Animationsverlauf steuert.

### Die 4 Parameter erklärt:

```
cubic-bezier(x1, y1, x2, y2)
            │   │   │   │
            │   │   │   └─ y2: Y-Koordinate des 2. Kontrollpunkts (Endgeschwindigkeit)
            │   │   └───── x2: X-Koordinate des 2. Kontrollpunkts (Zeitpunkt)
            │   └───────── y1: Y-Koordinate des 1. Kontrollpunkts (Startgeschwindigkeit)
            └───────────── x1: X-Koordinate des 1. Kontrollpunkts (Zeitpunkt)
```

### Visuelle Darstellung:

```
Y (Geschwindigkeit/Progress)
↑
1.0 ┤                    ╭───────╮
    │                   ╱         ╲
    │                  ╱           ╲
    │                 ╱             ╲
    │                ╱               ╲
    │               ╱                 ╲
    │              ╱                   ╲
0.0 ┼─────────────╯                     ╰───────→ X (Zeit)
    0.0                                 1.0
```

### Konkrete Bedeutung:

1. **x1, y1** (erster Kontrollpunkt):
   - **x1**: Zu welchem Zeitpunkt (0-1) beginnt die Kurve zu steigen?
   - **y1**: Wie schnell startet die Animation? (kann < 0 oder > 1 sein für Overshoot)

2. **x2, y2** (zweiter Kontrollpunkt):
   - **x2**: Zu welchem Zeitpunkt (0-1) beginnt die Kurve zu fallen?
   - **y2**: Wie schnell endet die Animation? (kann < 0 oder > 1 sein für Overshoot)

### Unser aktueller Wert: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`

```
x1 = 0.68  → Kontrollpunkt 1 bei 68% der Zeit
y1 = -0.55 → Startet mit "negativer Geschwindigkeit" (geht zurück/unter 0) = Overshoot nach hinten
x2 = 0.265 → Kontrollpunkt 2 bei 26.5% der Zeit (sehr früh!)
y2 = 1.55  → Endet mit Geschwindigkeit über 1.0 = Overshoot nach vorne
```

**Effekt**: 
- Startet langsam
- Beschleunigt schnell (y2 = 1.55 = Overshoot)
- Geht leicht zurück (y1 = -0.55 = Rückwärts-Overshoot)
- Pendelt sich ein

### Häufige Easing-Werte:

- `cubic-bezier(0.25, 0.1, 0.25, 1)` = **ease** (Standard)
- `cubic-bezier(0.42, 0, 1, 1)` = **ease-in** (langsam starten)
- `cubic-bezier(0, 0, 0.58, 1)` = **ease-out** (langsam enden)
- `cubic-bezier(0.42, 0, 0.58, 1)` = **ease-in-out** (langsam starten & enden)
- `cubic-bezier(0.68, -0.55, 0.265, 1.55)` = **elastic/bounce** (unser Wert - mit Schwung!)

### Visuelle Tools zum Verstehen:

- **cubic-bezier.com** - Interaktive Visualisierung
- **easings.net** - Vorgefertigte Easing-Funktionen mit Vorschau

### Warum verwenden wir diesen Wert?

Für einen **"Elastic Bounce"** Effekt brauchen wir:
- **Overshoot** (über das Ziel hinausgehen) → y2 > 1.0
- **Rückwärts-Overshoot** (leicht zurückgehen) → y1 < 0
- **Schnelle Beschleunigung** → frühe Kontrollpunkte

Das erzeugt den gewünschten "Schwung"-Effekt, als würde etwas mit Momentum kommen und dann einpendeln.

