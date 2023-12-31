# The Project

La necessità di avere un sistema strutturato per la gestione degli stili, ha portato alla creazione di una base soluda e testata dove inserire il codice di partenza per la realizzaizione degli stili CSS d un sito internet.

Un altro motivo che ha incoraggiato la crescita di questo progetto, è il voler svincolarsi da librerie come **bootstrap** o **tailwind**, troppo pesanti da incorporare completamente nei siti snelli.

## SCSS based.

Il progetto non è altro che una raccolta di stli in formato scss, strutturato in cartelle, da copiare e personalizzare nel proprio sito.

La struttura del progetto da copiare è disponibile nella cartella `src`. Il progetto è scaricabile dalla pagina [github](https://github.com/ilDug/aphrodite-sass).

## Cartelle

### core

La cartella `core` contiene le basi per poter configurare le varibili di tutto il progetto, come i colori, i fonts, la griglia di impaginazione...

### components

La cartella `components` contiene gli stili dei componenti base di una pagina, come le immagini e i bottoni.

### pages

La cartella `pages` è il terzo livello di personalizzazione, dove è necessario inserire gli stili dedicati ad una specifica pagina web.

## Compilazione

I file `scss` insieme alla parte **typescript** sono da compilare per poterli utilizzare all'interno di un sito web. 

Per la compilazione utilizzo **sass** per gli stili e **esbuild** per gli scripts.

Il primo passo è installare i rispettivi packages per la compilazione: 

```bash
npm i -save-dev esbuild sass prettier typescript;
npm i @popperjs/core
```

nella sezione `scripts` aggiungere i seguenti comandi. Uno è relativo alla compilazione degli stili, l'altro è il bundler per i file javascript.

``` javascript title="package.json" hl_lines="7-8"
"scripts": {
    "sass:dev": "sass --watch --update --poll --style=expanded src/styles:dist/styles",
    "sass:prod": "sass --no-source-map --style=compressed src/styles:dist/styles",
    "es:dev": "esbuild src/scripts/index.tsx --bundle --watch --sourcemap --outfile=dist/bundle.js",
    "es:build": "esbuild src/scripts/index.tsx --bundle --minify  --outfile=dist/bundle.js",
    "clear": "rm -rf dist/*",
    "dev": "bun run sass:dev & bun run es:dev", 
    "build": "bun run clear & bun run sass:prod & bun run es:build"
},
```
Gli ultimi due comandi servono per unire sia la parte di compilazione degli stili, sia quella per la compilazione degli scripts.

Nel terminale eseguire il comando,  (con `npm` o `bun`). Per esempio durante la fase di sviluppo, è possibile entrare in modalità **watch**:

```sh
bun run dev
```

