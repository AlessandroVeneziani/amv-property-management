# AVM Phase 1 - Global Architecture

## 1. Obiettivo della fase

Riallineare l'ossatura globale del sito AVM Asset Direction senza ricostruire ancora le pagine principali di contenuto.

Interventi inclusi:

- navigazione principale;
- header;
- footer;
- metadata globali;
- routing;
- redirect;
- sitemap;
- robots;
- predisposizione delle route mancanti;
- configurazione globale dei contenuti.

Interventi esclusi in questa fase:

- ricostruzione completa di Home;
- ricostruzione di Progetti e pagine progetto;
- ricostruzione estesa di Metodo;
- sviluppo finale di Asset Direction;
- sviluppo finale di Chi è AVM;
- ricostruzione completa di Contatti e Consulenza;
- refactor generale;
- interventi su dipendenze o deploy.

## 2. Branch creato

`feat/avm-global-architecture`

## 3. File modificati

- `content/site.ts`
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `components/site-header.tsx`
- `components/site-footer.tsx`
- `app/metodo/page.tsx`

## 4. File creati

- `app/asset-direction/page.tsx`
- `app/metodo-avm/page.tsx`
- `app/chi-e-avm/page.tsx`
- `app/consulenza/page.tsx`
- `app/privacy-policy/page.tsx`
- `app/cookie-policy/page.tsx`
- `docs/AVM-PHASE-1-GLOBAL-ARCHITECTURE.md`

Nota:

`docs/AVM-SITE-AUDIT.md` era già presente come output della fase di audit precedente e non è stato modificato in questa fase.

## 5. Menu precedente e menu nuovo

### Menu precedente

- Home
- Progetti
- Metodo
- Servizi
- Investitori
- Contatti

### Menu nuovo

- Home
- Asset Direction
- Metodo
- Progetti
- Chi è AVM
- Contatti

### Mapping

- Home → `/`
- Asset Direction → `/asset-direction`
- Metodo → `/metodo-avm`
- Progetti → `/progetti`
- Chi è AVM → `/chi-e-avm`
- Contatti → `/contatti`

Trattamento visivo:

- `Contatti` è ora la voce più evidente della navigazione principale;
- desktop e mobile condividono la stessa architettura;
- `Servizi` e `Investitori` sono stati rimossi dalla navigazione primaria.

## 6. Footer precedente e footer nuovo

### Footer precedente

- brand testuale ancora centrato su `AVM Property Management`;
- navigation derivata dal vecchio menu;
- nessun link privacy/cookie;
- nessuna predisposizione social;
- dati societari corretti ma architettura incompleta rispetto al nuovo sistema.

### Footer nuovo

Contiene ora:

- logo AVM Asset Direction;
- definizione `Direzione strategica dell’immobile`;
- statement guida del brand;
- descrizione sintetica coerente con Asset Direction;
- navigazione primaria aggiornata;
- link `Privacy Policy` e `Cookie Policy`;
- predisposizione social senza URL fittizi;
- dati professionali e societari già presenti.

## 7. Route create

- `/asset-direction`
- `/metodo-avm`
- `/chi-e-avm`
- `/consulenza`
- `/privacy-policy`
- `/cookie-policy`

Stato:

- tutte create come strutture iniziali sobrie;
- tutte con metadata specifici;
- tutte con H1 coerente;
- tutte con introduzione minima e CTA essenziali dove pertinenti.

## 8. Redirect introdotti

È stato introdotto un redirect permanente:

- `/metodo` → `/metodo-avm`

Implementazione:

- `app/metodo/page.tsx` ora usa `permanentRedirect("/metodo-avm")`

Motivazione:

- mantenere compatibilità SEO e coprire eventuali link interni ancora presenti verso la vecchia route.

## 9. Sitemap aggiornata

La sitemap ora include:

- `/`
- `/asset-direction`
- `/metodo-avm`
- `/progetti`
- `/chi-e-avm`
- `/contatti`
- `/consulenza`
- `/privacy-policy`
- `/cookie-policy`

Sono mantenute anche le singole pagine progetto esistenti, perché già pubbliche e già parte dell'architettura corrente.

La sitemap non include più:

- `/metodo`
- `/servizi`
- `/investitori`

## 10. Metadata aggiornati

Aggiornamenti principali:

- brand pubblico impostato su `AVM Asset Direction`;
- definizione principale allineata a `Direzione strategica dell’immobile`;
- dominio canonico stabilizzato su `https://alessandroveneziani.it`;
- `metadataBase` centralizzato nel sistema di metadata;
- title base aggiornato in `app/layout.tsx`;
- description globale riallineata ad Asset Direction;
- Open Graph e canonical ereditano ora il dominio di produzione corretto.

Non sono state inventate immagini Open Graph aggiuntive.

## 11. Trattamento di Servizi e Investitori

Le route esistenti:

- `/servizi`
- `/investitori`

non sono state eliminate.

Sono state però trattate così:

- rimosse dal menu principale;
- rimosse dalla navigazione primaria del footer;
- mantenute raggiungibili via URL diretto;
- escluse dalla sitemap principale;
- lasciate intatte nel contenuto, in attesa di una fase successiva di rivalutazione o ricollocazione.

Non è stato applicato `noindex` automatico.

## 12. Risultati build

Comando eseguito:

`npm run build`

Esito:

- build completata con successo;
- nuove route compilate correttamente;
- redirect `/metodo` mantenuto;
- nuove pagine statiche generate;
- sitemap e robots compilati correttamente.

Nota:

durante la build Next.js continua a segnalare il problema ESLint già noto, ma la generazione finale del sito si completa comunque con successo.

## 13. Risultati lint

Comando eseguito:

`npm run lint`

Esito:

- fallisce.

Errore rilevato:

- problema infrastrutturale già presente nel repository legato al caricamento del plugin `react` tramite `eslint-config-next/core-web-vitals`;
- modulo mancante: `./IsCallable`.

In questa fase non sono state modificate dipendenze o configurazioni ESLint, come richiesto.

## 14. Problemi rimasti aperti

- Home ancora non riallineata alla gerarchia definitiva AVM;
- `Progetti` e le pagine progetto restano da ricostruire in chiave editoriale;
- `Metodo AVM` esiste come struttura minima, non come pagina definitiva;
- `Asset Direction`, `Chi è AVM`, `Consulenza` sono predisposte ma non ancora sviluppate in profondità;
- il form contatti resta basato su `mailto`;
- mancano testi legali completi per privacy e cookie;
- il problema ESLint rimane aperto;
- le immagini pesanti e l'ottimizzazione asset non sono state affrontate in questa fase.

## 15. Prossima fase consigliata

Fase 2 consigliata:

- ricostruzione della Home secondo la nuova gerarchia AVM;
- sviluppo completo di `Asset Direction` e `Metodo AVM`;
- ricostruzione editoriale di `Progetti`;
- ridefinizione dei template delle pagine progetto;
- integrazione coerente della sezione `Chi è AVM`;
- revisione più strutturata di `Contatti` e `Consulenza`.

## 16. Verifica finale della Fase 1

### Route verificate

Verifica eseguita in locale su server dev avviato su `http://127.0.0.1:3001`.

Route controllate:

- `/`
- `/asset-direction`
- `/metodo-avm`
- `/metodo`
- `/progetti`
- `/chi-e-avm`
- `/contatti`
- `/consulenza`
- `/privacy-policy`
- `/cookie-policy`
- `/servizi`
- `/investitori`

Esito:

- tutte le route definitive si aprono correttamente;
- `/metodo` restituisce redirect permanente `308` verso `/metodo-avm`;
- `/servizi` e `/investitori` restano raggiungibili direttamente;
- nessun `404` inatteso rilevato;
- nessun errore runtime rilevato nei log browser delle route controllate.

### Verifica desktop

Controlli eseguiti:

- header sticky corretto;
- logo AVM corretto;
- menu desktop con esattamente:
  - Home
  - Asset Direction
  - Metodo
  - Progetti
  - Chi è AVM
  - Contatti
- assenza di `Servizi` e `Investitori` dal menu desktop;
- CTA visiva su `Contatti` coerente;
- footer con:
  - logo AVM Asset Direction
  - definizione `Direzione strategica dell’immobile`
  - navigazione primaria corretta
  - `Privacy Policy`
  - `Cookie Policy`
  - dati professionali e societari
- nessun link social inventato.

Esito:

- verifica desktop superata.

### Verifica mobile

Controlli eseguiti su viewport circa `390px`:

- menu hamburger funzionante;
- menu mobile con esattamente:
  - Home
  - Asset Direction
  - Metodo
  - Progetti
  - Chi è AVM
  - Contatti
- nessuna voce `Servizi` o `Investitori` nel menu mobile;
- nessun testo tagliato;
- nessun overflow orizzontale rilevato;
- footer leggibile e completo anche su mobile;
- pagine legali e nuove route non vuote.

Esito:

- verifica mobile superata.

### Problemi trovati

- la porta `3000` risultava già occupata da un altro processo locale, quindi la verifica browser è stata eseguita su `3001`;
- `npm run lint` continua a fallire per il problema ESLint già documentato;
- nei file globali modificati resta `AVM Property Management` solo nell'area dati societari del footer e in `legalInfo`, come denominazione legale, non come brand principale;
- in `content/site.ts` resta la voce `Investitori` dentro i contenuti della Home esistente, non nella navigazione globale: non è stata modificata perché fuori perimetro di questa fase.

### Correzioni effettuate

- nessuna correzione strutturale aggiuntiva necessaria dopo la verifica visuale;
- confermato che il sospetto iniziale di overflow desktop era un artefatto del full-page screenshot, non un problema reale di layout.

### Risultato build

Comando eseguito:

`npm run build`

Esito:

- build completata con successo.

### Risultato lint

Comando eseguito:

`npm run lint`

Esito:

- fallisce con lo stesso errore già documentato nella fase precedente:
  - impossibile caricare il plugin `react` tramite `eslint-config-next/core-web-vitals`;
  - modulo mancante `./IsCallable`.

Conferma:

- l'errore è identico a quello già documentato;
- non è stato introdotto da questa fase.

### Stato finale della fase

Valutazione finale:

- la Fase 1 è pronta per il commit.
