# Expansion Box

## HTML

```html
<div class="exp-box">
    <div class="exp-h">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    <div class="exp-body">
        <p>
            Ex sint enim asperiores corporis, ipsum voluptatem quis dolores, facere veritatis quidem
            placeat sed consequatur nam accusamus perferendis nihil? Necessitatibus, maxime eveniet.
        </p>
    </div>
</div>
```

## Logic

lo script seguente serve a far espandere il box al clich dell'header

```typescript
export function applyExpBox() {
    const expBoxes = [...document.querySelectorAll(".exp-box")];

    expBoxes.forEach((box) => {
        box.querySelector(".exp-header").addEventListener("click", (e) => {
            box.toggleAttribute("data-show");
        });
    });
}
```