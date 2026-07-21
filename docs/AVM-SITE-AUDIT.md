# AVM Site Audit

## Ambito dell'audit

Repository analizzato:

`/Users/alessandroveneziani/Documents/Codex/2026-04-18-files-mentioned-by-the-user-photo/amv-property-management`

Documento di confronto:

`AVM Asset Direction — Architettura definitiva del sito`

Dominio di produzione dichiarato e verificato:

`https://alessandroveneziani.it/`

Regola seguita in questo audit:

- nessuna modifica ai file esistenti;
- nessun commit;
- nessun push;
- nessun intervento su Vercel;
- creazione del solo presente documento.

---

## 1. Stato reale del sito AVM attuale

Il sito attuale non e un template da scartare, ma una prima implementazione credibile del posizionamento AVM. La base tecnologica e il linguaggio visivo sono gia coerenti con un brand premium, editoriale e scuro. Il repository usa gia il brand `AVM`, una palette vicina a quella corretta, un header/footer personalizzati e una struttura Next.js moderna.

Allo stesso tempo, il sito non e ancora allineato all'architettura definitiva AVM Asset Direction. Le differenze principali non sono estetiche ma strutturali:

- menu principale ancora impostato su `Home / Progetti / Metodo / Servizi / Investitori / Contatti`;
- mancano le pagine chiave `Asset Direction` e `Chi e AVM`;
- `Metodo` esiste ma con profondita insufficiente e route non definitiva;
- `Progetti` e troppo vicino a un catalogo filtrabile rispetto all'impostazione editoriale prevista;
- le pagine progetto non sono ancora vere case history AVM;
- `Contatti` e troppo leggero rispetto al flusso consulenziale previsto;
- mancano privacy, cookie e pagina `Consulenza`;
- README, lint e parte della documentazione tecnica non riflettono lo stato reale del progetto.

In sintesi: il sito e pubblicabile come base di presenza, ma non e ancora il sito definitivo descritto nel documento strategico.

---

## 2. Snapshot tecnico del repository

### Stack e configurazione

- Framework: Next.js `15.x` con App Router
- Linguaggio: TypeScript
- UI: React `19`
- Styling: Tailwind CSS `3.4.x`
- Font: `Inter` + `Playfair Display` via `next/font/google`
- Immagini: `next/image`
- SEO base: metadata API, `robots.ts`, `sitemap.ts`, manifest

### Struttura reale

- `app/`
- `components/`
- `content/`
- `public/`
- `tailwind.config.ts`
- `next.config.ts`
- `eslint.config.mjs`

### Contenuti e dati

Il contenuto e centralizzato soprattutto in:

- `content/site.ts`
- `content/projects.ts`

Questo e un buon segnale: i contenuti core sono gia parzialmente separati dai componenti e il progetto e predisposto a una migrazione ordinata.

### Cosa e configurato correttamente

- App Router pulito e comprensibile
- design tokens Tailwind coerenti con il brand
- metadata centralizzati
- componenti sezionali riutilizzabili
- sitemap e robots gia presenti
- wordmark, favicon e asset brand gia nel progetto
- pagine statiche prerenderizzate correttamente

### Cosa e fragile o incompleto

- `README.md` non corrisponde allo stato reale del codice
- il form contatti e un semplice `mailto`, non un vero flusso applicativo
- nessuna pagina privacy/cookie
- nessuna analytics rilevata
- nessun middleware, nessun `vercel.json`, nessuna `.env.example`
- routing e sitemap non allineati all'architettura definitiva
- immagini principali molto pesanti e ancora in PNG

### Cosa e obsoleto o da riconsiderare

- pagina `Servizi` come voce autonoma principale
- pagina `Investitori` nel menu principale
- filtri portfolio con solo 4 progetti
- nomenclatura e stato progetto non coerenti con la nuova mappa AVM

### Verifica tecnica

- `npm run build`: build completata
- `npm run lint`: fallisce per problema di dipendenze ESLint/plugin React

Questo significa che il sito builda, ma la catena di validazione tecnica non e affidabile.

---

## 3. Mappa del sito attuale

| URL | Pagina | File principale | Componenti / note | Stato |
| --- | --- | --- | --- | --- |
| `/` | Home | `app/page.tsx` | hero, positioning, pillars, portfolio, method, target, value, CTA finale | Presente ma da revisionare |
| `/progetti` | Portfolio | `app/progetti/page.tsx` | hero + `ProjectExplorer` + filtri | Presente ma da ricostruire |
| `/progetti/[slug]` | Dettaglio progetto | `app/progetti/[slug]/page.tsx` | hero, scheda, challenge/approach/outcome, gallery, CTA | Presente ma da ricostruire |
| `/metodo` | Metodo | `app/metodo/page.tsx` | hero + 4 step + sezioni di supporto | Presente ma da ricostruire |
| `/servizi` | Servizi | `app/servizi/page.tsx` | hero + cards servizi | Da accorpare / ridurre |
| `/investitori` | Investitori | `app/investitori/page.tsx` | pagina conforme come tono, ma fuori dalla nuova IA principale | Da spostare o rendere secondaria |
| `/contatti` | Contatti | `app/contatti/page.tsx` | hero + contatti diretti + `ContactForm` | Presente ma da revisionare |
| `/_not-found` | 404 | `app/not-found.tsx` | buona base | Riutilizzabile |
| `/robots.txt` | SEO | `app/robots.ts` | corretto ma minimale | Da revisionare |
| `/sitemap.xml` | SEO | `app/sitemap.ts` | include route attuali, non quelle definitive | Da revisionare |

### Header

File: `components/site-header.tsx`

Stato:

- visivamente forte e premium;
- sticky, responsive, con menu mobile funzionante;
- include CTA principale;
- struttura riutilizzabile.

Problemi:

- menu non coerente con la nuova architettura;
- presenza di `Servizi` e `Investitori` come voci primarie;
- assenza di `Asset Direction` e `Chi e AVM`.

### Footer

File: `components/site-footer.tsx`

Stato:

- gia impostato su 3 colonne;
- tono elegante e istituzionale;
- dati societari gia presenti.

Problemi:

- architettura footer non coerente con il documento definitivo;
- navigation ancora derivata dal menu attuale;
- mancano privacy, cookie e link social futuri;
- brand nel footer ancora più `Property Management` che `Asset Direction`.

### Form, link e CTA

- CTA email centralizzate correttamente su `info@alessandroveneziani.it`
- `ContactForm` usa `mailto:` e non un invio strutturato
- nessun upload allegati
- campi form insufficienti rispetto al documento definitivo

### Responsive

Dal codice, la base responsive e ordinata e credibile:

- griglie adattive corrette;
- header mobile presente;
- uso consistente di Tailwind responsive utilities.

Limite dell'audit:

non e stato possibile eseguire una validazione visuale completa su localhost nel browser integrato; la verifica responsive e stata quindi effettuata su codice, classi e struttura, con conferma del dominio live pubblico.

---

## 4. Confronto con la nuova architettura AVM

Architettura target:

- Home
- Asset Direction
- Metodo
- Progetti
- Chi e AVM
- Contatti

### Valutazione pagina per pagina

| Pagina richiesta | Stato nel repo attuale | Valutazione | Motivo |
| --- | --- | --- | --- |
| Home | Esiste | PRESENTE MA DA REVISIONARE | Base molto buona, ma gerarchia e contenuti non coincidono con la home definitiva |
| Asset Direction | Assente | ASSENTE E DA CREARE | E una delle pagine cardine del nuovo posizionamento e oggi non esiste |
| Metodo | Esiste come `/metodo` | PRESENTE MA DA RICOSTRUIRE | La logica attuale e troppo breve e la route definitiva prevista e `/metodo-avm` |
| Progetti | Esiste | PRESENTE MA DA RICOSTRUIRE | La struttura attuale e ancora troppo catalogo/filter-first |
| Chi e AVM | Assente | ASSENTE E DA CREARE | Manca completamente la pagina editoriale sul fondatore e lo sguardo AVM |
| Contatti | Esiste | PRESENTE MA DA REVISIONARE | C'e la base, ma mancano il percorso consulenziale e i campi richiesti |
| Servizi | Esiste | DA ACCORPARE | Non risulta centrale nella nuova IA primaria |
| Investitori | Esiste | DA SPOSTARE | Puo rimanere come pagina secondaria o futura, ma non come voce principale |
| Dettagli progetto | Esistono | PRESENTE MA DA RICOSTRUIRE | Servono template molto piu editoriali e narrativi |
| Consulenza | Assente | ASSENTE E DA CREARE | Prevista nella nuova mappa |
| Privacy Policy | Assente | ASSENTE E DA CREARE | Necessaria |
| Cookie Policy | Assente | ASSENTE E DA CREARE | Necessaria |

---

## 5. Audit completo della Home attuale

Gerarchia definitiva richiesta:

1. Hero  
2. Posizionamento  
3. Progetti selezionati  
4. Metodo AVM  
5. Prima. Processo. Dopo.  
6. Materia e luce  
7. Alessandro Veneziani  
8. Contatto finale  
9. Footer

### 1. Hero

- Esiste: si
- File: `app/page.tsx`
- Stato: riutilizzabile come struttura, non come contenuto finale
- Note: visualmente forte; headline e subheadline non coincidono con la versione finale PDF

### 2. Posizionamento

- Esiste: si
- File: `app/page.tsx`
- Stato: riutilizzabile
- Note: e gia vicino al tono corretto, ma va riallineato alla sintesi definitiva

### 3. Progetti selezionati

- Esiste: si, come portfolio section
- Componenti: `ProjectCard`, dati da `content/projects.ts`
- Stato: da revisionare
- Note: buona base, ma va reso meno "catalogo" e piu editoriale

### 4. Metodo AVM

- Esiste: si
- Stato: presente ma insufficiente
- Note: oggi sintetizza 4 step; il documento definitivo richiede una logica piu ampia e più autorevole

### 5. Prima. Processo. Dopo.

- Esiste: no
- Stato: manca
- Note: oggi il concetto appare solo in modo implicito in alcune descrizioni progetto

### 6. Materia e luce

- Esiste: no
- Stato: manca
- Note: e un tassello concettuale chiave del brand AVM e oggi non ha una sezione autonoma

### 7. Alessandro Veneziani

- Esiste: no
- Stato: manca
- Note: oggi la figura del fondatore non e integrata come sezione editoriale in home

### 8. Contatto finale

- Esiste: si
- Stato: presente ma da revisionare
- Note: buona base come CTA finale, ma non coincide pienamente con la struttura consulenziale definitiva

### 9. Footer

- Esiste: si
- Stato: presente ma da revisionare
- Note: la struttura attuale e solida ma non ancora pienamente allineata alla nuova IA e ai link obbligatori

### Conclusione sulla Home

La Home attuale puo essere usata come base di migrazione, ma non basta un semplice rewriting del copy. Servono:

- nuova gerarchia editoriale;
- nuove sezioni mancanti;
- revisione del ritmo;
- riallineamento delle CTA;
- migliore continuita tra posizionamento, metodo e portfolio.

---

## 6. Audit visivo e UI

### Cosa funziona

- palette vicina al sistema strategico (`ink`, `sand`, `accent`)
- serif/sans coerenti con il posizionamento premium
- uso del nero e dell'oro misurato, non aggressivo
- bottoni e pannelli eleganti
- reveal animation sobria
- hero e portfolio con buon impatto visivo

### Cosa richiede attenzione

- alcune sezioni restano ancora troppo da landing page ordinata, meno da architettura editoriale selettiva
- la pagina `Progetti` comunica ancora logica da archivio prima che da selezione
- il footer non e ancora il footer finale AVM Asset Direction
- il sistema visivo e coerente, ma la gerarchia concettuale non e ancora sufficientemente distinta tra:
  - direzione strategica;
  - metodo;
  - portfolio;
  - biografia/fondatore.

### Rischio di percezione

Il rischio non e "sito brutto". Il rischio e "sito buono ma ancora troppo genericamente premium", mentre il documento finale chiede una percezione più netta: AVM non come property manager elegante, ma come direzione strategica dell'immobile.

---

## 7. Routing, SEO, performance, accessibilita

### Routing

Stato attuale:

- routing semplice e pulito;
- slug progetto statici funzionanti;
- not-found presente.

Gap principali:

- mancano route strategiche chiave;
- la route `metodo` non corrisponde alla nomenclatura finale `metodo-avm`;
- non esiste `asset-direction`;
- non esiste `chi-e-avm`;
- non esiste `consulenza`;
- non esistono `privacy-policy` e `cookie-policy`.

### SEO

Punti positivi:

- metadata page-level presenti;
- `robots.ts` e `sitemap.ts` attivi;
- canonical generabile tramite `createMetadata()`.

Punti critici:

- meta architecture non ancora allineata alla nuova IA;
- assenza di structured data / JSON-LD;
- assenza di OG image dedicata;
- `app/layout.tsx` usa ancora un title base orientato a `Gestione immobiliare e valorizzazione`, meno netto rispetto ad `Asset Direction`;
- sitemap include pagine non più centrali e non include future pagine obbligatorie.

### Performance

Punti positivi:

- rendering statico;
- `next/image`;
- shared JS contenuto.

Punti critici:

- immagini hero e progetto in PNG pesanti, sopra i 2.5 MB circa;
- possibile spreco di banda e LCP non ottimale;
- duplicazione di asset brand in cartelle diverse.

### Accessibilita

Punti positivi:

- base semantica discreta;
- struttura headings presente;
- contrasto generale buono;
- supporto `prefers-reduced-motion` in CSS.

Punti critici:

- audit accessibilita non completo senza verifica browser assistita;
- da rafforzare il controllo su alt text, focus states estesi e eventuale semantica del form;
- form `mailto` e debole anche lato UX/accessibilita.

---

## 8. Stato del portfolio attuale

File dati:

`content/projects.ts`

Stato reale:

- 4 progetti presenti;
- 3 fortemente esposti in home;
- pagina archivio con filtri per citta e stato;
- dettaglio progetto con buona base ma ancora sintetica.

### Cosa funziona

- la base contenutistica esiste;
- i progetti hanno slug, immagini, metriche e storytelling minimo;
- `ProjectCard` e una buona base di presentazione.

### Cosa non e allineato

- con 4 progetti i filtri non sono necessari e indeboliscono la selezione editoriale;
- status portfolio non coerenti con il documento finale;
- i dettagli progetto non raggiungono ancora lo standard case history AVM;
- mancano sezioni strutturali come `Contesto`, `Potenziale`, `Direzione`, `Decisioni chiave`, `Materia e luce`, `Prima / Processo / Dopo`, `Risultato`.

### Valutazione

Portfolio generale:

- PRESENTE MA DA RICOSTRUIRE

Pagine progetto:

- PRESENTI MA DA RICOSTRUIRE

---

## 9. Componenti riutilizzabili

Questi componenti meritano di essere mantenuti o rifattorizzati, non eliminati:

- `components/site-header.tsx`
- `components/site-footer.tsx`
- `components/page-hero.tsx`
- `components/section-heading.tsx`
- `components/reveal.tsx`
- `components/project-card.tsx`

Questi componenti richiedono revisione sostanziale:

- `components/project-explorer.tsx`
- `components/contact-form.tsx`

Questi file contenuto sono buone basi ma devono essere riallineati:

- `content/site.ts`
- `content/projects.ts`

---

## 10. File da modificare, creare o eliminare

### File da modificare

- `app/layout.tsx`
- `app/page.tsx`
- `app/metodo/page.tsx`
- `app/progetti/page.tsx`
- `app/progetti/[slug]/page.tsx`
- `app/contatti/page.tsx`
- `app/sitemap.ts`
- `components/site-header.tsx`
- `components/site-footer.tsx`
- `components/contact-form.tsx`
- `components/project-explorer.tsx`
- `content/site.ts`
- `content/projects.ts`

### File da creare

- `app/asset-direction/page.tsx`
- `app/metodo-avm/page.tsx`
- `app/chi-e-avm/page.tsx`
- `app/consulenza/page.tsx`
- `app/privacy-policy/page.tsx`
- `app/cookie-policy/page.tsx`

### File da eliminare o declassare

Non e obbligatorio eliminare subito:

- `app/servizi/page.tsx`
- `app/investitori/page.tsx`

Ma vanno almeno:

- rimossi dal menu principale;
- rivalutati come pagine secondarie;
- oppure accorpati in architetture più coerenti.

### File/documentazione da correggere

- `README.md`

Motivo:

descrive funzionalita non corrispondenti allo stato reale del repository, incluso un endpoint contatti che non risulta presente.

---

## 11. Piano di migrazione consigliato

### Raccomandazione

Conviene una **revisione progressiva con ricostruzione parziale strutturale**.

Non conviene una ricostruzione completa da zero.

### Perche non rifare tutto

La base attuale ha gia valore:

- stack corretto;
- brand AVM gia presente;
- design system quasi giusto;
- componenti riutilizzabili;
- struttura repository leggibile;
- produzione gia attiva.

### Perche non basta una revisione leggera

Le differenze con l'architettura definitiva sono troppo profonde su:

- IA del sito;
- mappa di navigazione;
- home;
- metodo;
- portfolio;
- dettaglio progetto;
- contatti;
- SEO e pagine legali.

### Sequenza suggerita

1. riallineare `content/site.ts`, navigation e metadata globali  
2. introdurre le nuove route principali mancanti  
3. ricostruire Home secondo la nuova gerarchia  
4. ricostruire `Metodo` e `Asset Direction`  
5. riprogettare `Progetti` e template dettaglio  
6. riscrivere il flusso `Contatti / Consulenza`  
7. completare footer, privacy, cookie e sitemap finale  
8. ottimizzare immagini e ripristinare catena lint affidabile

---

## 12. Rischi legati a Git, Vercel, routing e SEO

### Git

- il repository sembra tecnicamente utilizzabile, ma la documentazione interna non e aggiornata;
- prima di una migrazione ampia serve chiarezza su branch strategy e allineamento tra locale/GitHub;
- presenza di file generati e di sistema da monitorare per evitare commit rumore.

### Vercel

- il dominio live e attivo e mostra una build coerente con questo repo;
- ogni modifica a route e metadata impattera direttamente deploy, sitemap e indicizzazione;
- prima del refactor delle pagine principali serve controllare con precisione canonical e path finali.

### Routing

- cambiare `metodo` in `metodo-avm` senza redirect creera rotture;
- introdurre nuove pagine senza aggiornare header/footer/sitemap produrra incoerenze;
- lasciare `servizi` e `investitori` nel menu principale manterra una IA mista e ambigua.

### SEO

- cambi di slug e IA senza redirect possono disperdere ranking e segnali di scansione;
- l'assenza attuale di pagine legal e di structured data limita maturita SEO;
- il dominio di produzione dovrebbe essere fissato in modo esplicito via env/canonical stabile, non solo via fallback.

---

## 13. Cosa puo essere mantenuto

- stack Next.js + TypeScript + Tailwind
- architettura generale del repository
- palette base e font strategy
- header shell
- footer shell
- componenti `PageHero`, `SectionHeading`, `Reveal`
- base di `ProjectCard`
- contenuto iniziale dei progetti come bozza di partenza
- metadata centralizzati come pattern

---

## 14. Cosa deve essere modificato

- navigazione principale
- struttura Home
- struttura `Contatti`
- struttura `Metodo`
- metadata globali e page-level
- sitemap
- tassonomia portfolio
- copy architecture tra pagine e sezioni
- footer link architecture
- gestione del form
- ottimizzazione immagini

---

## 15. Cosa deve essere ricostruito

- pagina `Asset Direction`
- pagina `Chi e AVM`
- pagina `Consulenza`
- privacy policy
- cookie policy
- pagina `Metodo` nella sua forma definitiva
- pagina `Progetti` in chiave editoriale
- template dettagli progetto in chiave case history AVM

---

## 16. Decisione finale consigliata

Scelta raccomandata:

**Revisione progressiva con ricostruzione parziale importante.**

Tradotto operativamente:

- non buttare il repository;
- non rifare il design system da zero;
- ricostruire invece architettura, flusso contenuti e template principali sopra una base tecnica gia valida.

---

## 17. Conferma finale operativa

Questo audit e stato eseguito senza modificare i file esistenti del sito.

Unico file creato:

- `docs/AVM-SITE-AUDIT.md`

Nessun commit eseguito.  
Nessun push eseguito.  
Nessun deploy eseguito.  
Nessun altro file del repository deve risultare modificato oltre a questo documento.
