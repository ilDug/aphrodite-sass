# Colors

Per creare un tema , il promo passo è scegliere i colori (testo, sfodo bordi).

## Tinte

I colori vengono nominati con una eqqnza che li permete di dedicare ai diversi usi possibili:

- `main` : colore principale del tema del sito.
- `vice` : colore secondario alternativo, che stacca dal tema del sito.
- `alter`: colore secondario in linea con il tema del sito, con un motivo più tenue che serve a amalgamare le parti meno rilevanti.
- `accent`: colore dedicato alle evidenziazioni di parti che devono risaltare.
- `charm` : colore per le parti meno importanti come i blockquote o cards.
- `error,  warn, goal` : per le notifiche e lo stato.
- `gray`: tinte di grigio.

### Sfumature

Le sfumature possono andare da 100 a 900 per ogni tinta disponibile, esse variano la luminosita d una specifica tonalità in modo da poterla adattare per i diversi usi.

Il valore principale di default è il 500.

per richamare i colori si unisce la tinta con la sfumatura tramite un tratto: `--c-tint-shade`.

## Variabili root

Per poter utilizzare uno specifico colore iun un componente, si deve richiamare la variabile root:

```css
.my-class {
  color: var(--c-main-500);
  background: var(--c-charm-100);
}
```

Oppure personalizzare in locale solo per una certa classe:

```css
.my-class {
  --c-main-500: #cccccc;
  color: var(--c-main-500);
}
```

## Testo

Le classi per rendere il testo di un colore corrispondente alla tinte preimpostate seguono il pattern:

```html
<p class="t-main">testo colorato con la sfumatura di default (500).</p>
<p class="t-goal-300">Completato con successo.</p>
<p class="t-error-700">errore</p>
```

## Sfondo

Le classi dello sfondo, impostano il colore di background:

```html
.bg-main .bg-alter-200 .bg-charm-900
```

## Bordi

I bordi hanno di default il valore `solid` e lo spessore di `1px`.
Il colore
to dalle classi:

```html
.b-main .b-charm-200 .b-vice-100
```
