# AVM — La Galleria Real Before / After

## 1. Allegati ricevuti

| Allegato originale | Classificazione | Dimensioni | Rapporto | Peso |
| --- | --- | --- | --- | --- |
| `PRIMA.JPG` | Prima | 586 × 390 px | circa 3:2 | circa 72 KB |
| `DOPO.jpg` | Dopo | 1536 × 1024 px | 3:2 | circa 263 KB |

## 2. Classificazione Prima / Dopo

- `PRIMA.JPG`: stato precedente di La Galleria, utilizzata come showroom, ufficio e spazio eventi.
- `DOPO.jpg`: stato successivo alla trasformazione in residenza hospitality.

## 3. Nomi finali nel repository

- `public/images/projects/la-galleria/before/la-galleria-showroom-before-01.jpg`
- `public/images/projects/la-galleria/after/la-galleria-hospitality-after-01.jpg`

## 4. File modificati

- `app/page.tsx`
- `app/progetti/[slug]/page.tsx`
- `content/projects.ts`
- `content/site.ts`
- `public/images/projects/la-galleria/before/la-galleria-showroom-before-01.jpg`
- `public/images/projects/la-galleria/after/la-galleria-hospitality-after-01.jpg`
- `docs/AVM-LA-GALLERIA-REAL-BEFORE-AFTER.md`

## 5. Crop e object-position

- `before`: `objectPosition: "center center"`, rapporto consigliato `3:2`
- `after`: `objectPosition: "center center"`, rapporto consigliato `3:2`
- Home `Prima. Processo. Dopo.`:
  - `Prima`: immagine reale con testo sotto l’immagine per evitare clipping del copy e preservare leggibilità
  - `Dopo`: immagine reale con testo sotto l’immagine per mantenere una struttura editoriale coerente
- Pagina progetto `/progetti/la-galleria`:
  - `Prima della trasformazione`: immagine ampia a sinistra, testo a destra su desktop
  - `Il risultato`: testo a sinistra, immagine ampia a destra su desktop
  - mobile: stacking in una colonna, senza overflow orizzontale

## 6. Versioni web ottimizzate

- Nessuna copia WebP / AVIF aggiuntiva creata in questa fase.
- Gli originali copiati nel repository sono già leggeri e sufficienti per questa integrazione iniziale.

## 7. Verifica desktop

- Home verificata in preview locale sulla sezione `Prima. Processo. Dopo.` con immagini reali negli slot corretti.
- Sequenza corretta: `PRIMA -> PROCESSO -> DOPO`
- Desktop `1440px`:
  - nessun overflow orizzontale
  - griglia a tre card corretta
  - copy del `Prima` non più tagliato
- Pagina progetto desktop:
  - cover aggiornata con immagine reale `DOPO`
  - sezioni `Prima della trasformazione` e `Il risultato` presenti
  - layout editoriale alternato corretto
  - nessun overflow orizzontale

## 8. Verifica mobile

- Home `390px`:
  - `documentWidth = 390`
  - `overflowX = false`
  - griglia trasformata in una colonna (`gridTemplateColumns = 292px`)
- Pagina progetto `390px`:
  - `documentWidth = 390`
  - `overflowX = false`
  - sezioni `Prima della trasformazione` e `Il risultato` stacked in una colonna (`gridTemplateColumns = 292px`)
- Tablet / mobile verificati anche a livello strutturale tramite controllo headless Chrome delle larghezze e delle colonne generate.

## 9. Risultato lint

```bash
pnpm lint
```

- Esito: `PASS`

## 10. Risultato build

```bash
pnpm build
```

- Esito: `PASS`

## 11. Materiali ancora mancanti

- Ulteriori fotografie reali `before` o `after` di La Galleria per ampliare la gallery editoriale della pagina progetto.
- Eventuali dettagli aggiuntivi di:
  - ingresso
  - living / dining
  - camere / bagni
  - dettagli materici o di atmosfera

## Note finali

- Nessun asset placeholder o AI è rimasto negli slot `Prima` e `Dopo` della Home per La Galleria.
- I testi richiesti sono stati aggiornati con il copy approvato.
- Nessun push, merge o deploy eseguito in questa fase.
