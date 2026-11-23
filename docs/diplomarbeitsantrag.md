# Diplomarbeitsantrag – TableTap

---

## Eckdaten

| | |
|---|---|
| **Arbeitstitel** | TableTap – Vom Tisch in die Küche mit einem Tap |
| **Klasse / Schuljahr** | 3AHITM, 2026/27 |
| **Team** | Adyan Midzic, Valentina Vrhovac, Finn Eser |
| **Betreuer:in** | Prof. Rammelmüller |

---

## 1. Ausgangslage

In vielen kleinen Restaurants schreibt das Servicepersonal Bestellungen auf Zettel und trägt sie in die Küche. Jede Bestellung geht so über drei Stationen, Sonderwünsche wie Allergien gehen dabei leicht verloren. Gäste und Service sehen nicht, ob das Essen schon zubereitet wird. Kassensysteme lösen das nur mit teurer Hardware, und den Tagesumsatz sieht der Inhaber erst nach Ladenschluss.

Zeichen: `390 / 400`

---

## 2. Untersuchungsanliegen der individuellen Themenstellungen

**Hr. Midzic:**

- Analysieren, wie Tische, Speisen, Bestellungen und Reservierungen in einer MySQL-Datenbank modelliert werden.
- Evaluieren, wie die Rollen Service, Küche und Inhaber mit JWT sicher voneinander getrennt werden können.

**Fr. Vrhovac:**

- Untersuchen, wie eine Speisekarte am Handy gestaltet sein muss, damit Gäste nach dem Scannen des QR-Codes ohne Erklärung bestellen.
- Prüfen, ob der Figma-Prototyp in Usability-Tests mit Testpersonen verstanden wird.

**Hr. Eser:**

- Prüfen, ob WebSockets eine neue Bestellung in unter drei Sekunden auf das Küchendisplay bringen.
- Untersuchen, wie Statuswechsel einer Bestellung gleichzeitig an Gast und Service übertragen werden.

Zeichen: `661 / 800`

---

## 3. Zielsetzung

Ziel ist eine Web-App, mit der Gäste per QR-Code am eigenen Handy bestellen und die Bestellung in unter drei Sekunden am Küchendisplay erscheint, ohne App-Download und ohne eigene Hardware. Sonderwünsche gehen nicht mehr verloren, alle sehen den aktuellen Status, und der Inhaber sieht Umsatz, Stoßzeiten und Bestseller live statt erst nach Ladenschluss.

Zeichen: `354 / 400`

---

## 4. Geplantes Ergebnis der individuellen Themenstellungen

**Hr. Midzic:**

- Ein Express-Backend mit MySQL-Datenbank, Rollenverwaltung und Umsatzstatistik.

**Fr. Vrhovac:**

- Eine mit Usability-Tests geprüfte Bestelloberfläche für Gäste in Next.js.

**Hr. Eser:**

- Ein Live-Küchendisplay und ein Tischplan mit Echtzeit-Updates über WebSockets.

**Kosten:** Keine zu erwartenden Kosten.

Zeichen: `303 / 400`

---

## 5. Meilensteine

| Nr. | Meilenstein (überprüfbare Aussage) | Datum |
|---|---|---|
| 1 | Der klickbare Figma-Prototyp der fünf Hauptscreens (Speisekarte, Warenkorb, Küchendisplay, Tischplan, Statistik) wurde mit drei Testpersonen getestet. | 18.12.2026 |
| 2 | Die MySQL-Datenbank mit Benutzern, Tischen, Speisen, Bestellungen und Reservierungen läuft mit Testdaten, und die Anmeldung mit den drei Rollen funktioniert. | 29.01.2027 |
| 3 | Eine Bestellung per QR-Code wird gespeichert und erscheint in unter drei Sekunden ohne Neuladen am Küchendisplay. | 19.03.2027 |
| 4 | Alle sechs Kernfunktionen (QR-Bestellung, Küchendisplay, Tischplan mit Reservierungen, Rollen, Speisekartenverwaltung, Umsatzstatistik) sind umgesetzt und wurden von fünf Personen im Betatest geprüft. | 07.05.2027 |
| 5 | TableTap läuft auf einem Server und wurde in einem echten oder einem Demo-Restaurant mit Testbestellungen erprobt und ausgewertet. | 28.05.2027 |

---

## 6. Individuelle Themenstellungen der Kandidat:innen

| Kandidat:in | Individuelle Themenstellung (Fokus) | Arbeitsaufwand |
|---|---|---|
| Adyan Midzic | Datenmodell und REST-Backend mit Express und MySQL, Authentifizierung mit JWT und Rollen, Umsatzstatistik | 180 h |
| Valentina Vrhovac | Design in Figma und Umsetzung der Bestelloberfläche für Gäste in Next.js inklusive Usability-Tests | 180 h |
| Finn Eser | Live-Küchendisplay und Tischplan mit Echtzeit-Updates über WebSockets | 180 h |

---

## 7. Kooperationspartner:in bzw. Auftraggeber:in

Keine.

### Rechtliche Regelung

Es wurde mündlich vereinbart, dass sowohl Code als auch Ergebnisse den ProfessorInnen demonstriert werden dürfen. Sämtliche potentiell firmenkritischen Daten und Bilder werden bei der Einbindung in die Diplomarbeit entsprechend unkenntlich gemacht.
