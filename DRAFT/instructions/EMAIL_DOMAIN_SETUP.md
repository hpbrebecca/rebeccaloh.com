# E-Mail-Adresse info@rebeccaloh.com einrichten

Um eine professionelle E-Mail-Adresse `info@rebeccaloh.com` zu erstellen, benötigst du:

1. **Eine Domain** (`rebeccaloh.com`) - diese musst du besitzen oder registrieren
2. **Einen E-Mail-Service** - verschiedene Optionen unten

## Schritt 1: Domain prüfen

Falls du die Domain `rebeccaloh.com` noch nicht besitzt:
- Registriere sie bei einem Domain-Registrar (z.B. Namecheap, GoDaddy, Google Domains)
- Kosten: ca. 10-15€/Jahr

Falls du die Domain bereits besitzt:
- Prüfe, ob sie bereits auf deinen Hosting-Server zeigt
- Notiere dir, wo die Domain verwaltet wird

## Schritt 2: E-Mail-Service wählen

### Option 1: ImprovMX (KOSTENLOS - Empfohlen für den Start) ⭐

**Vorteile:**
- ✅ Komplett kostenlos (unbegrenzte E-Mails)
- ✅ Weiterleitung an deine bestehende E-Mail (z.B. rebecca.loh@outlook.com)
- ✅ Keine eigenen Server nötig
- ✅ Sehr einfache Einrichtung
- ✅ Professionelle E-Mail-Adresse ohne zusätzliche Kosten

**Nachteile:**
- ❌ Weiterleitung nur (du kannst nicht direkt von info@rebeccaloh.com antworten)
- ❌ Antworte-als funktioniert nur mit Premium (kostenpflichtig)

**Setup:**
1. Gehe zu https://improvmx.com/
2. Klicke "Sign Up" (kostenlos)
3. Gib deine Domain ein: `rebeccaloh.com`
4. Verifiziere deine Domain (DNS-Einstellungen werden angezeigt)
5. Füge Alias hinzu: `info@rebeccaloh.com` → leite weiter an `rebecca.loh@outlook.com`

**DNS-Einstellungen (MX Records):**
Du musst diese Einträge bei deinem Domain-Registrar hinzufügen:
```
Type: MX
Host: @
Value: mx.improvmx.com
Priority: 10

Type: MX
Host: @
Value: feedback-smtp.improvmx.com
Priority: 20

Type: TXT
Host: @
Value: v=spf1 include:spf.improvmx.com ~all
```

**Kosten:** 0€/Monat (kostenlos für Weiterleitung)

---

### Option 1b: Zoho Mail (KOSTENLOS - Falls verfügbar)

**WICHTIG:** Der kostenlose Plan ist manchmal schwer zu finden. Versuche es so:

1. Gehe zu https://www.zoho.com/mail/
2. Klicke auf "Sign Up" oder "Get Started"
3. **NICHT** "Business" wählen - stattdessen direkt zu https://www.zoho.com/workplace/pricing.html gehen
4. Suche nach "Mail Lite" oder "Free Forever Plan"
5. Oder gehe direkt zu: https://www.zoho.com/mail/zohomail-pricing.html
6. Falls immer noch kein kostenloser Plan: Zoho hat möglicherweise die kostenlosen Pläne eingestellt

**Alternative für Zoho:**
- Versuche es über "Zoho Workplace" → "Mail Lite" → "Free Plan"
- Oder kontaktiere Zoho Support, ob der kostenlose Plan noch verfügbar ist

**DNS-Einstellungen (falls Zoho funktioniert):**
```
Type: MX
Host: @
Value: mx.zoho.com
Priority: 10

Type: MX
Host: @
Value: mx2.zoho.com
Priority: 20
```

**Kosten:** 0€/Monat (wenn verfügbar)

---

### Option 2: Google Workspace (Kostenpflichtig, aber professionell)

**Vorteile:**
- ✅ Sehr professionell und zuverlässig
- ✅ Gmail-Interface (bekannt und benutzerfreundlich)
- ✅ 30GB Speicherplatz
- ✅ Google Drive, Calendar, etc. inklusive
- ✅ Sehr gute Spam-Filter

**Nachteile:**
- ❌ Kostenpflichtig: ca. 5-6€/Monat pro E-Mail-Adresse

**Setup:**
1. Gehe zu https://workspace.google.com/
2. Wähle "Get Started"
3. Gib deine Domain ein: `rebeccaloh.com`
4. Verifiziere deine Domain
5. Erstelle die E-Mail-Adresse: `info@rebeccaloh.com`

**Kosten:** ~5-6€/Monat

---

### Option 3: Microsoft 365 (Outlook) (Kostenpflichtig)

**Vorteile:**
- ✅ Professionell
- ✅ Outlook-Interface
- ✅ 50GB Speicherplatz
- ✅ Office-Apps inklusive

**Nachteile:**
- ❌ Kostenpflichtig: ca. 5-6€/Monat

**Setup:**
1. Gehe zu https://www.microsoft.com/de-de/microsoft-365
2. Wähle "Business Basic" oder "Business Standard"
3. Gib deine Domain ein: `rebeccaloh.com`
4. Verifiziere deine Domain
5. Erstelle die E-Mail-Adresse: `info@rebeccaloh.com`

**Kosten:** ~5-6€/Monat

---

### Option 4: Hosting-Provider E-Mail (Oft kostenlos bei Hosting)

**Vorteile:**
- ✅ Oft kostenlos, wenn du bereits Hosting hast
- ✅ Einfach zu verwalten (im gleichen Dashboard)

**Nachteile:**
- ❌ Qualität variiert je nach Provider
- ❌ Oft weniger Speicherplatz

**Setup:**
- Logge dich in dein Hosting-Dashboard ein (z.B. cPanel, Plesk)
- Gehe zu "E-Mail-Accounts" oder "Mail"
- Erstelle neuen Account: `info@rebeccaloh.com`
- Setze Passwort

**Kosten:** Meist kostenlos bei bestehendem Hosting

---

## Schritt 3: DNS-Einstellungen konfigurieren

Nach der Wahl eines E-Mail-Services musst du DNS-Einträge bei deinem Domain-Registrar hinzufügen:

### Für ImprovMX:
```
MX Records:
@ → mx.improvmx.com (Priority: 10)
@ → feedback-smtp.improvmx.com (Priority: 20)

TXT Record (SPF):
@ → v=spf1 include:spf.improvmx.com ~all
```

### Für Zoho Mail:
```
MX Records:
@ → mx.zoho.com (Priority: 10)
@ → mx2.zoho.com (Priority: 20)

TXT Record (für Verifizierung):
@ → zoho-verification=xxxxx (wird von Zoho bereitgestellt)
```

### Für Google Workspace:
```
MX Records:
@ → aspmx.l.google.com (Priority: 1)
@ → alt1.aspmx.l.google.com (Priority: 5)
@ → alt2.aspmx.l.google.com (Priority: 5)
@ → alt3.aspmx.l.google.com (Priority: 10)
@ → alt4.aspmx.l.google.com (Priority: 10)

TXT Record:
@ → v=spf1 include:_spf.google.com ~all
```

### Für Microsoft 365:
```
MX Records:
@ → rebeccaloh-com.mail.protection.outlook.com (Priority: 0)

TXT Records:
@ → v=spf1 include:spf.protection.outlook.com -all
@ → MS=msxxxxx (wird von Microsoft bereitgestellt)
```

**Wichtig:** DNS-Änderungen können 24-48 Stunden dauern, bis sie aktiv sind.

---

## Schritt 4: E-Mail-Adresse in Contact Form verwenden

Nach der Einrichtung kannst du `info@rebeccaloh.com` in deinem Contact Form verwenden:

**Wichtig:** 
- Bei **ImprovMX**: E-Mails werden an `rebecca.loh@outlook.com` weitergeleitet
- Bei **Google Workspace/Zoho**: E-Mails kommen direkt in `info@rebeccaloh.com`

1. Öffne `contact-form.js`
2. Finde die Zeile:
   ```javascript
   const EMAIL_RECIPIENT = 'rebecca.loh@outlook.com';
   ```
3. Ändere zu:
   ```javascript
   const EMAIL_RECIPIENT = 'info@rebeccaloh.com';
   ```
4. In EmailJS Template: Ändere "To Email" zu `info@rebeccaloh.com`

---

## Empfehlung

**Für den Start:** 
- **ImprovMX** (kostenlos, Weiterleitung an deine Outlook-E-Mail) ⭐
- Falls du direkt von info@rebeccaloh.com antworten möchtest: **Google Workspace** (5€/Monat)

**Für langfristig:** Google Workspace (wenn Budget vorhanden, beste Erfahrung)

**Wichtig:** 
- **ImprovMX** ist perfekt, wenn dir Weiterleitung reicht (E-Mails kommen in dein Outlook-Postfach)
- Wenn du direkt von `info@rebeccaloh.com` antworten möchtest, brauchst du Google Workspace oder Microsoft 365

---

## Hilfe bei der Einrichtung

Falls du Hilfe bei der DNS-Konfiguration benötigst:
1. Teile mir mit, wo deine Domain registriert ist (z.B. Namecheap, GoDaddy)
2. Teile mir mit, welchen E-Mail-Service du wählst
3. Ich kann dir dann die genauen Schritte für deinen Provider geben

