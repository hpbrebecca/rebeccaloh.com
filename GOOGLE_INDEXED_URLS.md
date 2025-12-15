# Google Indexierung - Alle URLs in der Sitemap

Mit der neuen Sitemap wird Google **insgesamt 22 URLs** indexieren:

## 🏠 Homepage (1 URL)
- `https://rebeccaloh.com/` (Priorität: 1.0)

## 🏡 Home Section (4 URLs - alle Sprachen)
- `https://rebeccaloh.com/en/home` (Priorität: 1.0) - Englisch
- `https://rebeccaloh.com/de/home` (Priorität: 1.0) - Deutsch
- `https://rebeccaloh.com/fr/home` (Priorität: 1.0) - Französisch
- `https://rebeccaloh.com/zh/home` (Priorität: 1.0) - Chinesisch

## 👤 Bio Section (4 URLs - alle Sprachen)
- `https://rebeccaloh.com/en/bio` (Priorität: 0.9) - Englisch
- `https://rebeccaloh.com/de/bio` (Priorität: 0.9) - Deutsch
- `https://rebeccaloh.com/fr/bio` (Priorität: 0.9) - Französisch
- `https://rebeccaloh.com/zh/bio` (Priorität: 0.9) - Chinesisch

## 📧 Contact Section (4 URLs - alle Sprachen)
- `https://rebeccaloh.com/en/contact` (Priorität: 0.9) - Englisch
- `https://rebeccaloh.com/de/contact` (Priorität: 0.9) - Deutsch
- `https://rebeccaloh.com/fr/contact` (Priorität: 0.9) - Französisch
- `https://rebeccaloh.com/zh/contact` (Priorität: 0.9) - Chinesisch

## 💬 Quotes Section (4 URLs - alle Sprachen)
- `https://rebeccaloh.com/en/quotes` (Priorität: 0.8) - Englisch
- `https://rebeccaloh.com/de/quotes` (Priorität: 0.8) - Deutsch
- `https://rebeccaloh.com/fr/quotes` (Priorität: 0.8) - Französisch
- `https://rebeccaloh.com/zh/quotes` (Priorität: 0.8) - Chinesisch

## 🔗 Recommendations Section (4 URLs - alle Sprachen)
- `https://rebeccaloh.com/en/recommendations` (Priorität: 0.8) - Englisch
- `https://rebeccaloh.com/de/recommendations` (Priorität: 0.8) - Deutsch
- `https://rebeccaloh.com/fr/recommendations` (Priorität: 0.8) - Französisch
- `https://rebeccaloh.com/zh/recommendations` (Priorität: 0.8) - Chinesisch

## 📄 Zusätzliche Seiten (2 URLs)
- `https://rebeccaloh.com/audio/` (Priorität: 0.7)
- `https://rebeccaloh.com/zhaw-bookkeeping/` (Priorität: 0.7)

---

## 📊 Zusammenfassung

**Gesamt: 22 URLs**

Nach Priorität:
- **Priorität 1.0** (höchste): 5 URLs (Homepage + 4 Home-Sections)
- **Priorität 0.9**: 8 URLs (Bio + Contact)
- **Priorität 0.8**: 8 URLs (Quotes + Recommendations)
- **Priorität 0.7**: 2 URLs (Zusätzliche Seiten)

Nach Sprache:
- **Englisch (en)**: 5 URLs
- **Deutsch (de)**: 5 URLs
- **Französisch (fr)**: 5 URLs
- **Chinesisch (zh)**: 5 URLs
- **Sprachunabhängig**: 2 URLs (Homepage + zusätzliche Seiten)

---

## 🔍 Wichtige Hinweise

1. **Hreflang Tags**: Alle Sprachversionen haben `<xhtml:link rel="alternate" hreflang="...">` Tags, damit Google die Sprachversionen korrekt zuordnet.

2. **Alte URL**: Die alte URL `https://rebeccaloh.com/connect` ist **NICHT** in der Sitemap, wird aber durch `connect.html` automatisch zu `/en/connect` weitergeleitet.

3. **Indexierung**: Google wird alle diese URLs indexieren, aber es kann 1-4 Wochen dauern, bis alle URLs vollständig indexiert sind.

4. **Suche**: Nutzer werden je nach Sprache und Suchanfrage die passende Sprachversion finden:
   - Deutsche Suche → `/de/*` URLs
   - Englische Suche → `/en/*` URLs
   - Französische Suche → `/fr/*` URLs
   - Chinesische Suche → `/zh/*` URLs

