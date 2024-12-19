Projekt: Responsiv CRUD-applikation

Introduktion

Genom detta projekt kommer vi att skapa en responsiv CRUD-applikation med Angular 18 och .NET 8 C# API. Målet är att implementera en modern och funktionell applikation med stöd för autentisering via JSON Web Tokens (JWT), en användarvänlig design och god responsivitet.

## Tech Stack

**Client:** Angular 18, Bootstrap, Font Awesome
**Backend:** .NET 8 C# API, Entity Framework Core

**Database:** SQL Server/SQLite

## Features

**⚙️ Krav:** 

- Implementera en webbapplikation med en sida som visar en lista över alla böcker.
- Skapa en startsida med en knapp för att lägga till en ny bok.
- Om du klickar på knappen "Lägg till ny bok" bör användaren omdirigeras till ett formulär där de kan ange information om en ny bok (t.ex. titel, författare, publiceringsdatum).
- Efter att ha skickat in formuläret ska användaren omdirigeras tillbaka till startsidan, där de kan se den nya boken som lagts till i listan.
- Varje bok i listan bör ha en "Redigera"-knapp som tar användaren till ett formulär där de kan redigera detaljerna i boken.
- Efter att ha skickat in formuläret ska användaren omdirigeras tillbaka till startsidan, där de kan se de uppdaterade bokdetaljerna i listan.
- Varje bok i listan bör ha en "Radera"-knapp som låter användaren ta bort boken.
- Efter att ha tagit bort en bok bör användaren se boken borttagen från listan.


 **👉Tokenhantering:**

- Implementera användarautentisering med JWT (JSON Web Tokens).
- Skapa en enkel inloggningssida där användare kan ange sina referenser (t.ex. användarnamn och lösenord).
- Efter lyckad inloggning bör back-end generera en token och skicka tillbaka den till front-end.
- Front-end bör lagra token säkert (t.ex. i lokal lagring eller en cookie) och använda den för efterföljande API-förfrågningar till back-end.
- Implementera token-validering på back-end för att säkerställa att endast autentiserade användare kan komma åt CRUD-operationerna.

**👉Mina citatsida:**

- Skapa en separat vy som heter "Mina citat".
- Visa listan på 5 citat du gillar.
- Det ska finnas en meny så att man kan gå mellan bokvyn och citatvyn.

**👉Responsiv designtestning:**

- Se till att applikationens layout och komponenter smidigt anpassar sig till olika skärmstorlekar, inklusive stationära datorer, surfplattor och mobila enheter.
- Testa applikationen genom att ändra storlek på webbläsarfönstret och verifiera att alla element justeras på rätt sätt.
- Kontrollera att navigeringsmenyer kollapsar till en responsiv mobilmeny på mindre skärmar.
- Verifiera att formulärfält, knappar och andra UI-element bibehåller korrekt avstånd och justering över olika visningsportar.
- Testa applikationen på olika enheter (t.ex. smartphones, surfplattor) och webbläsare för att säkerställa konsekvent beteende.

**👉Bootstrap och Font Awesome:**

- Använd Bootstrap för att skapa en lyhörd och visuellt tilltalande layout för applikationen.
- Använd Bootstrap-klasser för att utforma knappar, formulär och andra UI-komponenter.
- Inkludera Font Awesome-ikoner för att förbättra programmets visuella element.
- Verifiera att Font Awesome-ikonerna visas korrekt och används korrekt i hela programmet.

**👉Ytterligare utmaning:**

- Implementera en knapp som gör att användaren kan växla mellan ljusa och mörka UX-design för applikationen.



**CRUD FUNKTIONER**
**Backend:**
1. Create (Skapa ny bok)
2. Skapa en POST-endpoint i API:t för att ta emot bokinformation (t.ex., titel, författare, publiceringsdatum).
3. Validera den inkommande datan på servern.
4. Lägg till den nya boken i databasen via Entity Framework Core.
5. Returnera en bekräftelse med den skapade bokens data.

   **SIGNUP och SIGNIN**
   - jwt

**Frontend:**

1. Lägg till en knapp på startsidan för att navigera till ett formulär för att lägga till en ny bok.
2. Skapa ett formulär i Angular där användaren kan ange bokinformation.
3. Anropa API:t med ett POST-anrop via en Angular-tjänst för att skicka data till servern.
4. Efter en lyckad inskickning, uppdatera listan med böcker och navigera tillbaka till startsidan.
5. Read (Visa alla böcker)

**Backend:**

1. Skapa en GET-endpoint i API:t för att returnera en lista över alla böcker från databasen.
2. Säkerställ att endast autentiserade användare kan komma åt denna endpoint via token-validering.

**Frontend:**

1.Skapa en komponent i Angular för att visa en lista över böcker.
2.Anropa GET-endpointen via en Angular-tjänst för att hämta bokens data.
3.Visa böckerna i en tabell eller lista med hjälp av Bootstrap-klasser för layout.
4 Update (Redigera bokdetaljer)

**Backend:**

1.Skapa en PUT-endpoint i API:t som tar emot bok-ID och nya detaljer för att uppdatera en bok.
2.Validera den inkommande datan och kontrollera att boken existerar innan uppdatering.
3.Uppdatera bokdetaljerna i databasen och returnera en bekräftelse.

**Frontend:**

1.Lägg till en "Redigera"-knapp bredvid varje bok i listan.
2.Vid klick på knappen, navigera till ett formulär för att redigera bokens detaljer.
3.Använd en Angular-tjänst för att skicka ett PUT-anrop till API:t med de uppdaterade detaljerna.
4.Efter en lyckad uppdatering, navigera tillbaka till listan och visa den uppdaterade boken.
5. Delete (Ta bort en bok)

**Backend:**

1.Skapa en DELETE-endpoint i API:t som tar emot bok-ID som parameter.
2.Kontrollera att boken existerar innan borttagning.
3.Ta bort boken från databasen och returnera en bekräftelse.

**Frontend:**

1.Lägg till en "Radera"-knapp bredvid varje bok i listan.
2.Vid klick på knappen, visa en bekräftelsedialog innan borttagning.
3.Använd en Angular-tjänst för att skicka ett DELETE-anrop till API:t.
4.Efter en lyckad borttagning, uppdatera listan och ta bort boken från visningen.


**Cloning the Repository**

```bash
git clone https://github.com/prog-Yousef/HealtCarePulse.git
cd healthcare
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```


Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


## Installation

Install my-project with npm

```bash
npm install my-project
cd my-project
```

## Roadmap

- Additional browser support
- Add more integrations