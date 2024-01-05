# Grid layout

La scelta è quella di impostare il layot usando la proprietà `display: grid`.

Le classi si applicano unicamente al container della sezione e permettono di scegliere il numero di colonne da mostrare.

```html
<div class="grid-3">
  <div>colonna 1</div>
  <div>colonna 2</div>
  <div>colonna 3</div>
</div>
```

Si possono specificare fino a **12 colonne**.

## Span

Per permettere ad una colonna di essere più larga delle altr, si applica all'elemento **child** la classe `.span-n`, dove `n` è il numero di colonne che deve occupare in larghezza.

```html
<div class="grid-3">
  <div class="span-2">colonna 1</div>
  <div>colonna 2</div>
</div>
```

## Responsive layout

Naturalmente si può specificare il comportamento in base alla larghezza della finestra indicado il [breakpoint](./breakpoints.md) di riferimento nella classe. Questo applica la proprietà anche agli altri endpoints di dimensioni **maggiori** (se non diversamente specificato).

```html
<div class="grid-2-md grid-3-lg">
  <div class="span-2-lg">colonna 1</div>
  <div>colonna 2</div>
  <div>colonna 3</div>
</div>
```

Anche in questo caso si può specificare lo span applicabile solo da un certo [breakpoint](./breakpoints.md) in su.

In ultimo c'è da citare anche la classe `.span-2-lg-only` per chi volesse il comportamento dello span solo per il breakpoint specificato

