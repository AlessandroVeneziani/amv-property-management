# AVM Phase 1B — ESLint Fix

## 1. Errore iniziale

Esecuzione fallita di `npm run lint` / `pnpm lint` durante il caricamento di `eslint-config-next/core-web-vitals` e del plugin React con il seguente errore:

```text
Failed to load plugin 'react' declared in ' » eslint-config-next/core-web-vitals ...':
Cannot find module './IsCallable'
```

Lo stack puntava a:

- `eslint-config-next`
- `eslint-plugin-react`
- `object.fromentries`
- `es-abstract@1.24.2`

## 2. Causa individuata

La causa non era nel codice del sito né nella configurazione delle route o dei componenti.

La dipendenza installata localmente `node_modules/.pnpm/es-abstract@1.24.2/...` era incompleta: il file richiesto `2024/IsCallable.js` mancava davvero dall'installazione locale, anche se `2024/GetMethod.js` lo richiedeva.

La verifica del pacchetto pubblicato `es-abstract@1.24.2` ha confermato che `IsCallable.js` è presente nel tarball ufficiale. Il problema era quindi dovuto a un'installazione locale corrotta o non perfettamente riallineata al lockfile.

## 3. Dipendenze coinvolte

- `eslint`
- `eslint-config-next`
- `eslint-plugin-react`
- `es-abstract`
- `object.fromentries`
- `pnpm-lock.yaml`

## 4. Soluzione applicata

È stata applicata la soluzione meno invasiva possibile:

1. identificazione del package manager corretto del progetto: `pnpm`
2. verifica dell'assenza di lockfile concorrenti (`package-lock.json`, `yarn.lock`, `npm-shrinkwrap.json`)
3. reinstallazione forzata e coerente con il lockfile:

```bash
pnpm install --force --frozen-lockfile
```

4. verifica della ricomparsa del file mancante:

```text
node_modules/.pnpm/es-abstract@1.24.2/node_modules/es-abstract/2024/IsCallable.js
```

5. aggiunta del campo `packageManager` in `package.json` per rendere esplicito l'uso di `pnpm@10.33.0` ed evitare future reinstallazioni ambigue

## 5. File modificati

- `package.json`
- `docs/AVM-PHASE-1B-ESLINT-FIX.md`

Nessun file UI, contenuto, route, metadata, immagini o Tailwind è stato modificato.

## 6. Risultato lint

Comando eseguito:

```bash
pnpm lint
```

Esito:

```text
✔ No ESLint warnings or errors
```

## 7. Risultato build

Comando eseguito:

```bash
pnpm build
```

Esito:

- build completata con successo
- generazione statica completata
- nessun errore runtime o di compilazione emerso durante la build

## 8. Eventuali rischi residui

- `next lint` è deprecato in Next.js 15 e verrà rimosso in Next.js 16; non è un errore bloccante oggi, ma andrà migrato in una fase successiva all'uso diretto della CLI ESLint
- durante la reinstallazione `pnpm` ha segnalato build scripts ignorati per alcune dipendenze opzionali (`sharp`, `unrs-resolver`), ma la build del progetto è terminata correttamente

## 9. Conferma finale

Confermo che:

- nessun file UI o contenuto del sito è stato modificato
- nessuna route è stata cambiata
- nessuna modifica funzionale è stata introdotta
- la correzione ha riguardato esclusivamente la toolchain ESLint e l'allineamento del package manager
