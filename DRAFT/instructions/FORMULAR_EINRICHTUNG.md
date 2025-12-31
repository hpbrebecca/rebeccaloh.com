# Contact Form einrichten - E-Mail direkt an rebecca.loh@outlook.com senden

Diese Anleitung zeigt dir, wie du das Contact Form so einrichtest, dass beim Klick auf "Send" eine E-Mail direkt an `rebecca.loh@outlook.com` gesendet wird, ohne dass der E-Mail-Client geöffnet wird.

## Schritt 1: EmailJS Account erstellen

1. Gehe zu https://www.emailjs.com/
2. Klicke auf **"Sign Up"** (oben rechts)
3. Erstelle einen kostenlosen Account
   - Du kannst dich mit Google, GitHub oder einer E-Mail-Adresse registrieren
   - Der kostenlose Plan erlaubt 200 E-Mails pro Monat (mehr als genug!)

## Schritt 2: Email Service einrichten

**Wichtig:** EmailJS braucht einen E-Mail-Service, um E-Mails zu senden.

### Option A: Gmail verwenden (Einfachste Option)

1. In EmailJS Dashboard → Klicke auf **"Email Services"** (linkes Menü)
2. Klicke auf **"Add New Service"**
3. Wähle **"Gmail"**
4. Klicke **"Connect Account"**
5. Logge dich mit deinem Gmail-Account ein und erlaube den Zugriff
6. **Service Name:** Lass den Standard-Namen oder nenne ihn "Gmail Service"
7. Klicke **"Create Service"**
8. **WICHTIG:** Kopiere die **Service ID** (z.B. `service_abc123`) - du brauchst sie später!

### Option B: Outlook verwenden (Falls du Outlook direkt nutzen willst)

1. In EmailJS Dashboard → **"Email Services"**
2. Klicke **"Add New Service"**
3. Wähle **"Other SMTP"** (Outlook funktioniert nicht direkt)
4. **Service Name:** "Outlook SMTP"
5. **SMTP Server:** `smtp-mail.outlook.com`
6. **SMTP Port:** `587`
7. **Secure Connection:** `TLS`
8. **Username:** Deine Outlook-E-Mail (`rebecca.loh@outlook.com`)
9. **Password:** Dein Outlook-Passwort (oder ein App-Passwort, falls 2FA aktiviert ist)
10. Klicke **"Create Service"**
11. Kopiere die **Service ID**

**Hinweis:** Für Outlook benötigst du möglicherweise ein App-Passwort statt deinem normalen Passwort. Google "Outlook app password" für Details.

## Schritt 3: Email Template erstellen

1. In EmailJS Dashboard → Klicke auf **"Email Templates"** (linkes Menü)
2. Klicke auf **"Create New Template"**
3. **Template Name:** "Contact Form" (oder wie du willst)

4. **To Email:** `rebecca.loh@outlook.com`
   - ⚠️ **WICHTIG:** Gib die E-Mail direkt ein, NICHT als Variable wie `{{to_email}}`
   - So bleibt deine E-Mail-Adresse verborgen!

5. **From Name:** `{{from_name}}`
   - Das wird automatisch durch den Namen des Formularabsenders ersetzt

6. **From Email:** `{{from_email}}`
   - Das wird automatisch durch die E-Mail-Adresse des Formularabsenders ersetzt

7. **Reply To:** `{{reply_to}}`
   - Damit kannst du direkt auf die E-Mail des Absenders antworten

8. **Subject:** `Contact Form: {{from_name}}`
   - Beispiel: "Contact Form: John Doe"

9. **Content (Message):**
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```

10. Klicke **"Save"**
11. **WICHTIG:** Kopiere die **Template ID** (z.B. `template_xyz789`) - du brauchst sie später!

## Schritt 4: Public Key kopieren

1. In EmailJS Dashboard → Klicke auf **"Account"** (oben rechts) → **"General"**
2. Scrolle nach unten zu **"API Keys"**
3. Kopiere deine **Public Key** (z.B. `abc123xyz789`)
   - Falls noch keine vorhanden ist, klicke **"Create"**

## Schritt 5: IDs in contact-form.js eintragen

1. Öffne die Datei `contact-form.js` in deinem Editor
2. Finde diese Zeilen (ca. Zeile 194-196):
   ```javascript
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```

3. Ersetze die Platzhalter mit deinen echten Werten:
   ```javascript
   const EMAILJS_SERVICE_ID = 'service_abc123';  // Deine Service ID
   const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Deine Template ID
   const EMAILJS_PUBLIC_KEY = 'abc123xyz789';     // Deine Public Key
   ```

4. Speichere die Datei

## Schritt 6: Testen

1. Lade deine Website im Browser
2. Gehe zur Contact Section
3. Fülle das Formular aus
4. Klicke auf **"Send"**
5. Du solltest eine Erfolgsmeldung sehen
6. Prüfe dein E-Mail-Postfach (`rebecca.loh@outlook.com`) - die E-Mail sollte innerhalb weniger Sekunden ankommen!

## Troubleshooting

**Problem: E-Mail kommt nicht an**
- Prüfe die Browser-Konsole (F12) auf Fehler
- Stelle sicher, dass alle IDs korrekt eingetragen sind (keine Leerzeichen, keine Anführungszeichen außer denen im Code)
- Prüfe im EmailJS Dashboard unter "Logs", ob der Versand erfolgreich war

**Problem: "EmailJS send failed"**
- Prüfe, ob der Email Service korrekt verbunden ist
- Bei Outlook: Stelle sicher, dass du ein App-Passwort verwendest (nicht dein normales Passwort)
- Bei Gmail: Stelle sicher, dass du den Zugriff erlaubt hast

**Problem: E-Mail-Adresse wird angezeigt**
- Stelle sicher, dass in der Template "To Email" direkt `rebecca.loh@outlook.com` steht, NICHT `{{to_email}}`

## Fertig! 🎉

Jetzt sendet dein Contact Form E-Mails direkt an `rebecca.loh@outlook.com`, ohne den E-Mail-Client zu öffnen. Deine E-Mail-Adresse bleibt dabei komplett verborgen!

