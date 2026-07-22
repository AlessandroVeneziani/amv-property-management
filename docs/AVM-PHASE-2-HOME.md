# AVM Phase 2 — Home Redesign

## 1. Obiettivo della fase

Ricostruire la Home AVM secondo la gerarchia definitiva approvata, mantenendo stack Next.js, TypeScript, Tailwind, header e footer già riallineati, design system esistente, palette, font, componenti validi, comportamento responsive e tono editoriale premium.

## 2. Branch creato

- `feat/avm-home-redesign`

## 3. File modificati

- `app/page.tsx`
- `content/site.ts`
- `components/site-header.tsx`

## 4. File creati

- `docs/AVM-PHASE-2-HOME.md`

## 5. Struttura Home precedente

1. Hero
2. Posizionamento
3. Pilastri / servizi
4. Portfolio
5. Metodo
6. Destinatari
7. Valore
8. CTA finale

La struttura precedente manteneva ancora logiche da blocchi commerciali e da catalogo, non allineate alla nuova architettura AVM.

## 6. Struttura Home nuova

1. Hero
2. Posizionamento
3. Progetti selezionati
4. Metodo AVM
5. Prima. Processo. Dopo.
6. Materia e luce
7. Alessandro Veneziani
8. Contatto finale
9. Footer

## 7. Componenti mantenuti

- `Reveal`
- `SiteFooter`
- struttura globale `app/layout.tsx`
- sistema di pulsanti e classi Tailwind già presenti

## 8. Componenti modificati

- `components/site-header.tsx`

Modifica minima introdotta:

- menu desktop visibile da `xl` invece che da `lg`
- menu hamburger disponibile su tablet per evitare wrapping delle voci di navigazione a `1024px`

## 9. Componenti creati

- nessun nuovo componente separato creato

La Home è stata ricostruita in `app/page.tsx` con un componente locale dedicato ai preview editoriali dei progetti, evitando di introdurre un nuovo file condiviso non necessario.

## 10. Asset usati

- `/images/hero-milano.png`
- `/images/projects/la-galleria.png`
- `/images/projects/certosa-residence.png`
- `/images/projects/marco-aurelio.png`
- `/images/projects/method-detail.png`

## 11. Asset temporanei

- sezione `Progetti selezionati`: uso temporaneo di `La Galleria`, `Certosa Residence`, `Marco Aurelio` sulla base dei progetti oggi più forti nel dataset disponibile
- sezione `Prima. Processo. Dopo.`: il blocco `Prima` usa un materiale testuale di diagnosi invece di una fotografia reale del prima
- sezione `Alessandro Veneziani`: uso temporaneo di un’immagine di progetto al posto di un ritratto autentico

## 12. Materiali mancanti

- fotografia autentica editoriale di Alessandro Veneziani
- documentazione fotografica reale del `prima` per la sequenza `Prima. Processo. Dopo.`
- selezione portfolio definitiva approvata per la Home, se diversa dai tre progetti oggi presenti

## 13. Verifica desktop

Verifica eseguita in locale su viewport desktop largo.

Controlli confermati:

- hero leggibile e dominante
- ordine corretto delle sezioni
- header desktop stabile con logo, menu corretto e CTA `Contatti`
- blocco progetti con ritmo editoriale non da catalogo
- metodo in sequenza verticale leggibile
- sezione `Materia e luce` correttamente caricata dopo correzione locale sugli asset
- blocco finale e footer coerenti

## 14. Verifica mobile

Verifica eseguita in locale su viewport `390px`.

Controlli confermati:

- hero leggibile
- CTA del hero non sovrapposte
- nessun overflow orizzontale (`scrollWidth` inferiore alla viewport effettiva)
- menu mobile apribile e navigazione completa visibile
- sezione `Alessandro` leggibile
- CTA finale leggibile
- footer leggibile nel flusso mobile

## 15. Risultato lint

Comando eseguito:

```bash
pnpm lint
```

Esito:

- `No ESLint warnings or errors`

## 16. Risultato build

Comando eseguito:

```bash
pnpm build
```

Esito:

- build completata con successo
- nessun errore runtime o TypeScript emerso

## 17. Problemi aperti

- manca ancora il ritratto autentico di Alessandro Veneziani
- manca ancora il materiale fotografico reale del `prima`
- `next lint` resta deprecato in Next.js 15, ma non è un blocco per questa fase

## 18. Raccomandazioni per la fase successiva

- sviluppare in forma editoriale completa la pagina `Chi è AVM` usando uno shooting dedicato
- integrare veri materiali `before / process / after` per almeno un caso studio completo
- validare la selezione portfolio definitiva della Home rispetto al futuro portfolio completo
- rifinire eventuali micro-crop immagine dopo l’inserimento dei materiali finali approvati
