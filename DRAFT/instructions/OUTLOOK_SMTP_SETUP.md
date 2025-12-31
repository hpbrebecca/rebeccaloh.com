# EmailJS mit Outlook einrichten (ohne Gmail)

Diese Anleitung zeigt dir, wie du EmailJS mit deinem Outlook-Account (`rebecca.loh@outlook.com`) einrichtest, ohne Gmail verwenden zu müssen.

## Schritt 1: EmailJS Account erstellen (Falls noch nicht geschehen)

1. Gehe zu https://www.emailjs.com/
2. Registriere dich (du hast das bereits gemacht)
3. Logge dich ein

## Schritt 2: Outlook SMTP Service einrichten

1. **Im EmailJS Dashboard:**
   - Klicke auf **"Email Services"** (linkes Menü)
   - Klicke auf **"Add New Service"**

2. **Service-Typ wählen:**
   - Wähle **"Other (SMTP)"** (NICHT Gmail!)
   - Das ist die Option für Outlook

3. **SMTP-Einstellungen ausfüllen:**
   
   **Service Name:** `Outlook Service` (oder wie du willst)
   
   **SMTP Server:** `smtp-mail.outlook.com`
   
   **SMTP Port:** `587`
   
   **Secure Connection:** `TLS` (wähle das aus dem Dropdown)
   
   **Username:** `rebecca.loh@outlook.com`
   
   **Password:** 
   - **WICHTIG:** Falls du **2-Faktor-Authentifizierung (2FA)** aktiviert hast, musst du ein **App-Passwort** verwenden
   - Falls **kein 2FA aktiviert** ist, verwende dein normales Outlook-Passwort

4. Klicke auf **"Create Service"**

5. **WICHTIG:** Kopiere die **Service ID** (sieht aus wie `service_abc123`) - du brauchst sie später!

## Schritt 3: App-Passwort erstellen (Nur wenn 2FA aktiviert ist)

Falls du 2-Faktor-Authentifizierung in Outlook aktiviert hast, brauchst du ein App-Passwort:

1. Gehe zu https://account.microsoft.com/security
2. Logge dich mit `rebecca.loh@outlook.com` ein
3. Klicke auf **"Security"** (Sicherheit)
4. Suche nach **"App passwords"** (App-Passwörter)
5. Klicke auf **"Create a new app password"**
6. **Name:** `EmailJS` (oder wie du willst)
7. Klicke **"Generate"**
8. **Kopiere das generierte Passwort** (zeige es nur einmal an!)
9. Verwende dieses App-Passwort im EmailJS SMTP-Setup (Schritt 2, Feld "Password")

**Wichtig:** Falls du kein 2FA aktiviert hast, kannst du diesen Schritt überspringen und dein normales Outlook-Passwort verwenden.

## Schritt 4: Email Template erstellen

1. Im EmailJS Dashboard → Klicke auf **"Email Templates"** (linkes Menü)
2. Klicke auf **"Create New Template"**
3. **Template Name:** `Contact Form` (oder wie du willst)

4. **To Email:** `rebecca.loh@outlook.com`
   - ⚠️ **WICHTIG:** Gib die E-Mail direkt ein, NICHT als Variable wie `{{to_email}}`
   - So bleibt deine E-Mail-Adresse verborgen!

5. **From Name:** `{{from_name}}`

6. **From Email:** `rebecca.loh@outlook.com`
   - Das ist deine Outlook-E-Mail, von der die E-Mail gesendet wird
   - Oder: `{{from_email}}` (dann kommt die E-Mail vom Absender, aber Outlook erlaubt das möglicherweise nicht)

7. **Reply To:** `{{reply_to}}`
   - Das ist die E-Mail-Adresse des Formularabsenders
   - So kannst du direkt auf die E-Mail des Absenders antworten

8. **Subject:** `Contact Form: {{from_name}}`

9. **Content (Message):**
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```

10. Klicke **"Save"**
11. **WICHTIG:** Kopiere die **Template ID** (sieht aus wie `template_xyz789`) - du brauchst sie später!

## Schritt 5: Public Key kopieren

1. Im EmailJS Dashboard → Klicke auf **"Account"** (oben rechts) → **"General"**
2. Scrolle nach unten zu **"API Keys"**
3. Kopiere deine **Public Key** (sieht aus wie `abc123xyz789`)
   - Falls noch keine vorhanden ist, klicke **"Create"**

## Schritt 6: IDs in contact-form.js eintragen

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

## Schritt 7: Testen

1. Lade deine Website im Browser
2. Gehe zur Contact Section
3. Fülle das Formular aus
4. Klicke auf **"Send"**
5. Du solltest eine Erfolgsmeldung sehen
6. Prüfe dein Outlook-Postfach (`rebecca.loh@outlook.com`) - die E-Mail sollte innerhalb weniger Sekunden ankommen!

## Troubleshooting

**Problem: "Authentication failed" oder "Login failed"**
- Stelle sicher, dass du das richtige Passwort verwendest
- Falls 2FA aktiviert ist, verwende ein App-Passwort (nicht dein normales Passwort)
- Prüfe, ob deine Outlook-E-Mail korrekt ist: `rebecca.loh@outlook.com`

**Problem: "SMTP server connection failed"**
- Prüfe, ob der SMTP Server korrekt ist: `smtp-mail.outlook.com`
- Prüfe, ob der Port korrekt ist: `587`
- Prüfe, ob "Secure Connection" auf `TLS` gesetzt ist

**Problem: E-Mail kommt nicht an**
- Prüfe die Browser-Konsole (F12) auf Fehler
- Prüfe im EmailJS Dashboard unter "Logs", ob der Versand erfolgreich war
- Prüfe deinen Outlook-Spam-Ordner

**Problem: "From Email" funktioniert nicht**
- Outlook erlaubt möglicherweise nicht, dass du von anderen E-Mail-Adressen sendest
- Setze "From Email" auf `rebecca.loh@outlook.com` (deine eigene E-Mail)
- Die "Reply To" Adresse bleibt der Absender des Formulars, also kannst du trotzdem antworten

## Sicherheit

- Dein Outlook-Passwort wird sicher in EmailJS gespeichert (verschlüsselt)
- Deine E-Mail-Adresse (`rebecca.loh@outlook.com`) ist im Template verborgen und wird nicht an Website-Besucher übertragen
- Falls du 2FA verwendest, ist das App-Passwort sicherer als dein Hauptpasswort

## Fertig! 🎉

Jetzt sendet dein Contact Form E-Mails direkt an `rebecca.loh@outlook.com`, ohne den E-Mail-Client zu öffnen, und du musst kein Gmail verwenden!

