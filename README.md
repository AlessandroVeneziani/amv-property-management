# AVM Property Management

Sito Next.js per un brand premium di property management, interior direction e real estate value enhancement. Il progetto adotta App Router, Tailwind CSS, immagini locali ottimizzate e contenuti in italiano con tono editoriale, essenziale e architettonico.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `next/image` per immagini ottimizzate
- SEO base con metadata, `sitemap.xml` e `robots.txt`

## Avvio locale

1. Installa le dipendenze:

```bash
npm install
```

2. Avvia l'ambiente di sviluppo:

```bash
npm run dev
```

3. Apri [http://localhost:3000](http://localhost:3000).

## Build produzione

```bash
npm run build
npm run start
```

## Struttura

- `app/`: route principali, API route del form contatti, metadata tecnici
- `components/`: header, footer, cards, filtri, animazioni leggere, form
- `content/`: contenuti e dati centralizzati per servizi, progetti e navigazione
- `public/images/`: asset visivi del sito, inclusi gli interni originali generati per hero e portfolio

## Note operative

- Il form contatti include validazione lato client e server e una route `app/api/contact/route.ts` pronta per essere collegata a un provider email o CRM.
- I contatti in `content/site.ts` sono centralizzati: se hai recapiti ufficiali diversi, basta aggiornarli in un solo punto.
- Le immagini del portfolio sono locali e vengono servite tramite `next/image`.
