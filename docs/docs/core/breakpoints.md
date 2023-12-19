# Breakpoints

I breakpoints sono personalizzabili e si riferiscono alla laghezza dello schermo in px.

I valori di defaults sono : 

- `sm`: 576px,
- `md`: 768px,
- `lg`: 992px,
- `xl`: 1200px,
- `xxl`: 1400px,

## Breakpoints mixins

Esistono tre **mixins** che permettono di personalizzare lo stile di una classe in base alla dimesione delle finestra.

### media-up

Si usa per aplicare gli stili da un certo breakpoint in su.

```scss
.my-class {
    @media-up(md){
        font-size: 2rem;
    }
}

// oppure

@media-up(md){
    .my-class{
        border: none
    }
}
```

### media-down

Come il precedente, aplicabie ai breakpoint minori.

```scss
.my-class {
    @media-down(md){
        max-height: 2rem;
    }
}
```

### media-only

Si applica ad un solo breakpoint specifico

```scss
.my-class {
    @media-only(md){
        display: flex;
    }
}
```