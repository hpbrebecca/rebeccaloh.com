# Unterschied: Keyframes vs. Easing

## Kurze Antwort

- **Keyframes**: Definieren **WAS** passiert (welche Werte zu welchen Zeitpunkten)
- **Easing**: Definiert **WIE** die Übergänge zwischen den Keyframes verlaufen (Beschleunigung/Geschwindigkeit)

---

## Detaillierte Erklärung

### 1. Keyframes (`@keyframes`) - "WAS passiert?"

**Keyframes** definieren die **konkreten Werte** zu bestimmten **Zeitpunkten** während der Animation.

```css
@keyframes elasticBounce {
    0% {
        transform: scale(0.8);  /* Bei 0% der Zeit: Größe = 0.8 */
        opacity: 0;
    }
    40% {
        transform: scale(1.10); /* Bei 40% der Zeit: Größe = 1.10 */
        opacity: 1;
    }
    70% {
        transform: scale(0.90); /* Bei 70% der Zeit: Größe = 0.90 */
        opacity: 1;
    }
    100% {
        transform: scale(1);    /* Bei 100% der Zeit: Größe = 1.0 */
        opacity: 1;
    }
}
```

**Keyframes sagen:**
- "Zu diesem Zeitpunkt soll der Wert X sein"
- "Zu jenem Zeitpunkt soll der Wert Y sein"
- Sie definieren die **Zielpunkte** der Animation

**Analogie**: Wie eine Route mit Wegpunkten:
- Wegpunkt 1: "Um 8:00 Uhr bin ich in Basel"
- Wegpunkt 2: "Um 10:00 Uhr bin ich in Zürich"
- Wegpunkt 3: "Um 12:00 Uhr bin ich in Bern"

---

### 2. Easing (`cubic-bezier`) - "WIE passiert es?"

**Easing** definiert, **wie schnell** und mit welcher **Beschleunigung** die Übergänge **zwischen** den Keyframes verlaufen.

```css
animation: elasticBounce 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Easing sagt:**
- "Wie schnell beschleunige ich von 0.8 zu 1.10?"
- "Wie schnell bremse ich von 1.10 zu 0.90?"
- "Gehe ich linear oder mit Schwung?"

**Analogie**: Wie Sie zwischen den Wegpunkten fahren:
- Fahren Sie konstant 50 km/h? (linear)
- Beschleunigen Sie schnell und bremsen dann? (ease-out)
- Kommen Sie mit Schwung an und gehen zurück? (elastic/bounce)

---

## Wie arbeiten sie zusammen?

### Beispiel aus unserem Code:

```css
/* KEYFRAMES: Definiert WAS passiert */
@keyframes elasticBounce {
    0%   { scale(0.8) }   ← Startpunkt
    40%  { scale(1.10) }  ← Zwischenpunkt
    70%  { scale(0.90) }  ← Zwischenpunkt
    100% { scale(1) }     ← Endpunkt
}

/* EASING: Definiert WIE die Übergänge verlaufen */
animation: elasticBounce 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Was passiert:**

1. **0% → 40%** (scale 0.8 → 1.10):
   - Keyframes sagen: "Gehe von 0.8 zu 1.10"
   - Easing sagt: "Beschleunige schnell, dann mit Schwung (y2 = 1.55 = Overshoot)"

2. **40% → 70%** (scale 1.10 → 0.90):
   - Keyframes sagen: "Gehe von 1.10 zurück zu 0.90"
   - Easing sagt: "Gehe mit Rückwärts-Schwung (y1 = -0.55)"

3. **70% → 100%** (scale 0.90 → 1):
   - Keyframes sagen: "Gehe von 0.90 zu 1.0"
   - Easing sagt: "Pendle dich sanft ein"

---

## Visueller Vergleich

### Mit Keyframes ALLEIN (linear easing):

```
Zeit:  0% ──────── 40% ──────── 70% ──────── 100%
Scale: 0.8 ──────── 1.10 ──────── 0.90 ──────── 1.0
       │            │            │            │
       └────────────┴────────────┴────────────┘
       Konstante Geschwindigkeit (langweilig!)
```

### Mit Keyframes + Elastic Easing:

```
Zeit:  0% ──── 40% ──── 70% ──── 100%
Scale: 0.8    1.10    0.90    1.0
       │      ╱╲      ╱╲      │
       │     ╱  ╲    ╱  ╲     │
       └────╯    ╲  ╱    ╰─────┘
       Mit Schwung und Bounce (dynamisch!)
```

---

## Praktisches Beispiel

### Szenario: Ein Ball springt

**Keyframes definieren die Positionen:**
```css
@keyframes ballBounce {
    0%   { top: 100px; }  /* Ball ist unten */
    50%  { top: 0px; }    /* Ball ist oben */
    100% { top: 100px; }   /* Ball ist wieder unten */
}
```

**Easing definiert die Bewegung:**
- `linear`: Ball bewegt sich konstant schnell (unrealistisch)
- `ease-out`: Ball beschleunigt schnell nach oben, fällt langsam (realistischer)
- `cubic-bezier(0.68, -0.55, 0.265, 1.55)`: Ball springt mit Schwung, geht über das Ziel hinaus, kommt zurück (elastic bounce)

---

## Zusammenfassung

| Aspekt | Keyframes | Easing |
|--------|-----------|--------|
| **Frage** | WAS passiert? | WIE passiert es? |
| **Definiert** | Konkrete Werte zu Zeitpunkten | Geschwindigkeit/Beschleunigung |
| **Beispiel** | "Bei 40%: scale(1.10)" | "Beschleunige mit Schwung" |
| **Analogie** | Wegpunkte auf einer Karte | Art des Fahrzeugs (Auto vs. Rakete) |
| **Kann man ohne das andere?** | Ja, aber langweilig | Nein, braucht Keyframes |

---

## In unserem Code

```css
/* KEYFRAMES: Die "Wegpunkte" */
@keyframes elasticBounce {
    0%   { scale(0.8) }   ← "Hier starte ich"
    40%  { scale(1.10) }  ← "Hier bin ich größer"
    70%  { scale(0.90) }  ← "Hier gehe ich zurück"
    100% { scale(1) }     ← "Hier ende ich"
}

/* EASING: Die "Art der Bewegung" */
cubic-bezier(0.68, -0.55, 0.265, 1.55)
    ↑
    └─ "Mit Schwung, Overshoot, Rückwärts-Bounce, dann Einpendeln"
```

**Ohne Easing**: Die Animation würde linear von 0.8 → 1.10 → 0.90 → 1.0 gehen (langweilig, roboterhaft)

**Mit Easing**: Die Animation kommt mit Schwung, überschwingt, geht zurück, pendelt sich ein (dynamisch, lebendig!)

