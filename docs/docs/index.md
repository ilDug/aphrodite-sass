# The Project

La necessità di avere un sistema strutturato per la gestione degli stili, ha portato alla creazione di una base soluda e testata dove inserire il codice di partenza per la realizzaizione degli stili CSS d un sito internet.

Un altro motivo che ha incoraggiato la crescita di questo progetto, è il voler svincolarsi da librerie come **bootstrap** o **tailwind**, troppo pesanti da incorporare completamente nei siti snelli.

## SCSS based.

Il progetto non è altro che una raccolta di stli in formato scss, strutturato in cartelle, da copiare e personalizzare nel proprio sito.

La struttura del progetto da copiare è disponibile nella cartella `src`. Il progetto è scaricabile dalla pagina [github](https://github.com/ilDug/aphrodite-sass).

Se si utilizza uno strumento come **webpack** è possibile importare il file `styls.scss` che si trova nel primo livello del progetto e che incorpora tutti i riferimenti necessaria compilare gli stili.

    @import "styles/styles.scss";

## Cartelle

### core

La cartella `core` contiene le basi per poter configurare le varibili di tutto il progetto, come i colori, i fonts, la griglia di impaginazione...

### components

La cartella `components` contiene gli stili dei componenti base di una pagina, come le immagini e i bottoni.

### pages

La cartella `pages` è il terzo livello di personalizzazione, dove è necessario inserire gli stili dedicati ad una specifica pagina web.
