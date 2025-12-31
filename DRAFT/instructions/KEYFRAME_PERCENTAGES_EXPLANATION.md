# Keyframe-Prozentangaben - Erklärung

## Kurze Antwort

**Ja, die Prozentangaben sind die Zeit!**

Sie geben an, **zu welchem Zeitpunkt** (in Prozent der Gesamtdauer) die Animation bestimmte Werte erreichen soll.

---

## Detaillierte Erklärung

### Wie funktionieren die Prozentangaben?

Die Prozentangaben beziehen sich auf die **Gesamtdauer der Animation**.

```css
animation: elasticBounce 0.4s cubic-bezier(...);
```

**Bei einer Dauer von 0.4s bedeutet das:**

| Prozent | Zeitpunkt | Berechnung |
|---------|-----------|------------|
| **0%** | **0.0s** | 0% von 0.4s = 0.0s (Start) |
| **40%** | **0.16s** | 40% von 0.4s = 0.16s |
| **70%** | **0.28s** | 70% von 0.4s = 0.28s |
| **100%** | **0.4s** | 100% von 0.4s = 0.4s (Ende) |

---

## Visuelle Darstellung

### Zeitachse der Animation:

```
Zeit:  0s ──────── 0.16s ──────── 0.28s ──────── 0.4s
       │           │              │              │
       0%          40%            70%            100%
       │           │              │              │
    Start      Overshoot      Undershoot      Final
```

### Was passiert zu welchem Zeitpunkt?

```css
@keyframes elasticBounce {
    0% {
        transform: scale(0.8);  /* Bei 0.0s: Größe = 0.8 */
    }
    40% {
        transform: scale(1.15); /* Bei 0.16s: Größe = 1.15 (Overshoot) */
    }
    70% {
        transform: scale(0.80);  /* Bei 0.28s: Größe = 0.80 (zurück) */
    }
    100% {
        transform: scale(1);     /* Bei 0.4s: Größe = 1.0 (Final) */
    }
}
```

---

## Zeitbereiche zwischen den Keyframes

### 0% → 40% (0.0s → 0.16s)
- **Dauer**: 0.16s (40% der Gesamtdauer)
- **Was passiert**: Zoom von 0.8 zu 1.15
- **Easing**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` wird angewendet

### 40% → 70% (0.16s → 0.28s)
- **Dauer**: 0.12s (30% der Gesamtdauer)
- **Was passiert**: Zurück von 1.15 zu 0.80
- **Easing**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` wird angewendet

### 70% → 100% (0.28s → 0.4s)
- **Dauer**: 0.12s (30% der Gesamtdauer)
- **Was passiert**: Einpendeln von 0.80 zu 1.0
- **Easing**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` wird angewendet

---

## Wichtige Punkte

### 1. Prozentangaben sind relativ zur Gesamtdauer

Wenn Sie die Animation-Dauer ändern:
- **0.4s**: 40% = 0.16s
- **0.8s**: 40% = 0.32s (doppelt so lange!)
- **0.2s**: 40% = 0.08s (halb so lange!)

### 2. Die Zeitbereiche sind unterschiedlich lang

- **0% → 40%**: 40% der Gesamtdauer (0.16s bei 0.4s Animation)
- **40% → 70%**: 30% der Gesamtdauer (0.12s bei 0.4s Animation)
- **70% → 100%**: 30% der Gesamtdauer (0.12s bei 0.4s Animation)

Das bedeutet: Der erste Übergang (Zoom zu Overshoot) dauert **länger** als die anderen beiden!

### 3. Sie können auch absolute Zeiten verwenden

Statt Prozenten können Sie auch `from`, `to` oder absolute Zeiten verwenden:

```css
@keyframes example {
    from { scale(0.8); }        /* = 0% */
    0.16s { scale(1.15); }      /* = 40% bei 0.4s Animation */
    0.28s { scale(0.80); }      /* = 70% bei 0.4s Animation */
    to { scale(1); }            /* = 100% */
}
```

Aber **Prozentangaben sind flexibler**, weil sie sich automatisch an die Gesamtdauer anpassen!

---

## Praktisches Beispiel

### Wenn Sie die Animation-Dauer ändern:

**Vorher (0.4s):**
```
0% = 0.0s, 40% = 0.16s, 70% = 0.28s, 100% = 0.4s
```

**Nachher (0.6s):**
```
0% = 0.0s, 40% = 0.24s, 70% = 0.42s, 100% = 0.6s
```

Die **Prozentangaben bleiben gleich**, aber die **absoluten Zeiten** ändern sich!

---

## Zusammenfassung

| Frage | Antwort |
|-------|---------|
| Was bedeuten die Prozentangaben? | **Zeitpunkte** in Prozent der Gesamtdauer |
| 0% = ? | **Start** der Animation (0.0s) |
| 100% = ? | **Ende** der Animation (0.4s bei unserer Animation) |
| Sind die Zeitbereiche gleich lang? | **Nein** - 0-40% ist länger (40%) als 40-70% (30%) |
| Kann man auch absolute Zeiten verwenden? | **Ja**, aber Prozentangaben sind flexibler |

---

## Fazit

Die Prozentangaben (0%, 40%, 70%, 100%) sind **Zeitpunkte** während der Animation. Sie geben an, **wann** (zu welchem Zeitpunkt) die Animation bestimmte Werte erreichen soll. Das Easing bestimmt dann, **wie** die Übergänge zwischen diesen Zeitpunkten verlaufen.

