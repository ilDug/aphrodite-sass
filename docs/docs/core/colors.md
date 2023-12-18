# Colors

Per creare un tema , il promo passo è scegliere i colori (testo, sfodo bordi).

## Tinte

I colori vengono nominati con una eqqnza che li permete di dedicare ai diversi usi possibili:

```
-- main
-- vice
-- alter
```

### Sfumature

Le sfumature possono andare da 100 a 900 per ogni tinta disponibile, esse variano la luminosita d una specifica tonalità in modo da poterla adattare per i diversi usi.

## variabili root

pper poter utilizzare uno specifico colore iun un componente, si deve richiamare la variabile root:

```css
.my-class {
  color: var(--c-tint-shade);
  color: var(--c-main-500);
}
```

oppure personalizzare in locale solo per una certa classe:

```css
.my-class {
  --c-main-500: #cccccc;
}
```

## testo

## sfondo

## bordi
