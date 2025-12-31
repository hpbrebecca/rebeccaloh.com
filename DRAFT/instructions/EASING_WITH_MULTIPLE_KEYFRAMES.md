# Easing mit mehreren Keyframes - Erklärung

## Kurze Antwort

**Nein, `cubic-bezier` braucht KEINEN x3/y3 Parameter!**

Das Easing wird **zwischen jedem Keyframe-Paar** angewendet, nicht für die gesamte Animation. Das gleiche Easing wird für alle Übergänge verwendet.

---

## Detaillierte Erklärung

### Wie funktioniert Easing mit mehreren Keyframes?

Das `cubic-bezier(x1, y1, x2, y2)` wird **zwischen jedem Keyframe-Paar** angewendet:

```css
@keyframes elasticBounce {
    0%   { scale(0.8) }   ← Start
    40%  { scale(1.15) }  ← Zwischenpunkt 1
    70%  { scale(0.80) }  ← Zwischenpunkt 2
    100% { scale(1) }     ← Ende
}

animation: elasticBounce 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Was passiert:**

1. **0% → 40%** (scale 0.8 → 1.15):
   - Das Easing `cubic-bezier(0.68, -0.55, 0.265, 1.55)` wird angewendet
   - Beschleunigt mit Schwung zum Overshoot

2. **40% → 70%** (scale 1.15 → 0.80):
   - **Das gleiche Easing** wird angewendet
   - Geht zurück mit Rückwärts-Schwung

3. **70% → 100%** (scale 0.80 → 1):
   - **Das gleiche Easing** wird angewendet
   - Pendelt sich ein

---

## Warum nur 4 Parameter?

`cubic-bezier` beschreibt eine **kubische Bézier-Kurve**, die mathematisch immer **2 Kontrollpunkte** hat:

```
P0 (Start) ────→ P1 (Kontrollpunkt 1: x1, y1) ────→ P2 (Kontrollpunkt 2: x2, y2) ────→ P3 (Ende)
```

- **P0**: Startpunkt (immer 0, 0)
- **P1**: Erster Kontrollpunkt (x1, y1)
- **P2**: Zweiter Kontrollpunkt (x2, y2)
- **P3**: Endpunkt (immer 1, 1)

Das ist eine mathematische Kurve zwischen **zwei Punkten**. Mehr Kontrollpunkte würden eine andere Art von Kurve ergeben (z.B. quadratische Bézier mit 3 Punkten, oder höhere Ordnung).

---

## Visuelle Darstellung

### Mit einem Easing für alle Übergänge:

```
Zeit:  0% ──────── 40% ──────── 70% ──────── 100%
Scale: 0.8        1.15        0.80        1.0
       │          │           │           │
       │  Easing  │  Easing   │  Easing   │
       └──────────┴───────────┴───────────┘
       (gleiches Easing für alle Übergänge)
```

### Jeder Übergang verwendet das gleiche Easing:

- **0% → 40%**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` = Overshoot nach vorne
- **40% → 70%**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` = Rückwärts-Bounce
- **70% → 100%**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` = Einpendeln

---

## Was wäre, wenn man unterschiedliche Easings haben möchte?

Wenn Sie für jeden Übergang ein **anderes Easing** haben möchten, müssten Sie:

### Option 1: Separate Animationen kombinieren
```css
@keyframes bounce1 {
    0% { scale(0.8) }
    100% { scale(1.15) }
}

@keyframes bounce2 {
    0% { scale(1.15) }
    100% { scale(0.80) }
}

@keyframes bounce3 {
    0% { scale(0.80) }
    100% { scale(1) }
}
```

### Option 2: Animation-Timing-Funktionen pro Keyframe (CSS4 - experimentell)
```css
@keyframes elasticBounce {
    0% {
        transform: scale(0.8);
        animation-timing-function: ease-out; /* Für 0% → 40% */
    }
    40% {
        transform: scale(1.15);
        animation-timing-function: ease-in; /* Für 40% → 70% */
    }
    70% {
        transform: scale(0.80);
        animation-timing-function: ease-in-out; /* Für 70% → 100% */
    }
    100% {
        transform: scale(1);
    }
}
```

**Aber:** Dies ist noch nicht vollständig unterstützt in allen Browsern.

---

## Warum funktioniert unser aktuelles Easing gut?

Unser `cubic-bezier(0.68, -0.55, 0.265, 1.55)` funktioniert gut für **alle** Übergänge, weil:

1. **y2 = 1.55** (Overshoot nach vorne) → Perfekt für 0% → 40% (Zoom zu Overshoot)
2. **y1 = -0.55** (Rückwärts-Overshoot) → Perfekt für 40% → 70% (Zurück zur Undershoot)
3. **Beide zusammen** → Perfekt für 70% → 100% (Einpendeln)

Das Easing ist so konstruiert, dass es **bidirektional** funktioniert - sowohl für Vorwärts- als auch Rückwärts-Bewegungen.

---

## Zusammenfassung

| Frage | Antwort |
|-------|---------|
| Braucht Easing x3/y3 für mehr Keyframes? | **Nein** - Easing wird zwischen jedem Keyframe-Paar angewendet |
| Wie viele Parameter hat cubic-bezier? | **Immer 4** (x1, y1, x2, y2) |
| Wird das Easing mehrfach angewendet? | **Ja** - einmal pro Übergang (0%→40%, 40%→70%, 70%→100%) |
| Kann man unterschiedliche Easings haben? | **Ja**, aber komplizierter (separate Animationen oder CSS4) |
| Funktioniert unser Easing für alle Übergänge? | **Ja** - es ist bidirektional konstruiert |

---

## Fazit

Das `cubic-bezier` Easing wird **automatisch zwischen allen Keyframes** angewendet. Sie brauchen keine zusätzlichen Parameter - das Easing "weiß" bereits, wie es zwischen den verschiedenen Sequenzen (Zoom → Overshoot → Undershoot → Final) zu arbeiten hat!

