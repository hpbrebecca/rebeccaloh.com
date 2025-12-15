# Google Indexing Anleitung - URL-Struktur aktualisieren

## Problem
Google indexiert aktuell nur `rebeccaloh.com/connect`, aber die Website verwendet jetzt URLs mit Sprachpräfixen:
- `rebeccaloh.com/en/contact` (Englisch)
- `rebeccaloh.com/de/contact` (Deutsch)
- `rebeccaloh.com/fr/contact` (Französisch)
- `rebeccaloh.com/zh/contact` (Chinesisch)

## Lösung: 3-Schritte-Plan

### Schritt 1: Redirect-Datei erstellt ✅
Ich habe bereits eine `connect.html` Datei erstellt, die automatisch von `/connect` zu `/en/contact` weiterleitet.

### Schritt 2: Google Search Console konfigurieren

1. **Gehe zu Google Search Console**
   - Öffne: https://search.google.com/search-console
   - Wähle die Property `rebeccaloh.com`

2. **Sitemap neu einreichen**
   - Gehe zu **Sitemaps** (linke Sidebar)
   - Falls `sitemap.xml` bereits eingereicht ist, klicke auf **"Neu einreichen"**
   - Falls nicht, füge `https://rebeccaloh.com/sitemap.xml` hinzu
   - Klicke auf **"Einreichen"**

3. **URL-Prüfung durchführen**
   - Gehe zu **URL-Prüfung** (oben in der Suchleiste)
   - Teste: `https://rebeccaloh.com/en/contact`
   - Teste: `https://rebeccaloh.com/de/contact`
   - Teste: `https://rebeccaloh.com/fr/contact`
   - Teste: `https://rebeccaloh.com/zh/contact`
   - Stelle sicher, dass alle URLs erreichbar sind

4. **Alte URL entfernen (wichtig!)**
   - Gehe zu **Entfernen** (linke Sidebar)
   - Klicke auf **"Temporäre Entfernung anfordern"**
   - Wähle **"URL-Präfix entfernen"**
   - Gib ein: `https://rebeccaloh.com/connect`
   - **WICHTIG:** Wähle **"Nur die angegebene URL entfernen"** (nicht das gesamte Präfix)
   - Gib als Grund an: "URL wurde zu sprachspezifischen URLs umgeleitet"
   - Klicke auf **"Weiter"** und bestätige

5. **Neue URLs zur Indexierung einreichen**
   - Gehe zu **URL-Prüfung**
   - Für jede Sprache:
     - Gib die URL ein: `https://rebeccaloh.com/en/contact`
     - Klicke auf **"Indexierung anfordern"**
     - Wiederhole für: `/de/contact`, `/fr/contact`, `/zh/contact`

### Schritt 3: Canonical Tags prüfen

Die Website verwendet bereits Canonical Tags in der `index.html`. Stelle sicher, dass alle Seiten die richtigen Canonical URLs haben:

- `/en/connect` → Canonical: `https://rebeccaloh.com/en/connect`
- `/de/connect` → Canonical: `https://rebeccaloh.com/de/connect`
- etc.

## Zusätzliche Maßnahmen

### Hreflang Tags prüfen
Die Sitemap enthält bereits `<xhtml:link rel="alternate" hreflang="...">` Tags. Stelle sicher, dass diese auch in den HTML-Seiten vorhanden sind.

### Monitoring
1. **Nach 1-2 Wochen prüfen:**
   - Gehe zu Google Search Console → **Abdeckung**
   - Prüfe, ob die neuen URLs (`/en/connect`, etc.) indexiert werden
   - Prüfe, ob die alte URL (`/connect`) nicht mehr indexiert wird

2. **Google Suche testen:**
   - Suche nach: `site:rebeccaloh.com/connect`
   - Erwartetes Ergebnis: Sollte zu `/en/connect` oder anderen Sprachversionen weiterleiten

## Wichtige Hinweise

- **Geduld:** Google braucht Zeit (meist 1-4 Wochen), um die Änderungen zu übernehmen
- **Konsistenz:** Stelle sicher, dass alle internen Links die neuen URLs mit Sprachpräfix verwenden
- **Backlinks:** Falls andere Websites auf `/connect` verlinken, werden diese automatisch zu `/en/connect` weitergeleitet

## Falls Probleme auftreten

1. **Alte URL wird immer noch indexiert:**
   - Warte 2-4 Wochen
   - Falls immer noch indexiert, verwende "Temporäre Entfernung" erneut
   - Prüfe, ob die Redirect-Datei (`connect.html`) korrekt funktioniert

2. **Neue URLs werden nicht indexiert:**
   - Prüfe die Sitemap: `https://rebeccaloh.com/sitemap.xml`
   - Stelle sicher, dass alle URLs erreichbar sind
   - Verwende "URL-Prüfung" und "Indexierung anfordern" für jede URL

3. **Technische Probleme:**
   - Prüfe die Browser-Konsole auf Fehler
   - Teste die Redirects manuell: `https://rebeccaloh.com/connect` sollte zu `/en/connect` weiterleiten

