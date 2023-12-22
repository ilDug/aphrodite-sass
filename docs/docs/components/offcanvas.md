# Offcanvas

## HTML

```html
<div class="offcanvas-right" id="offcanvas" data-show>
    <div class="offcanvas-header">
        <h5><i class="fa-duotone fa-cart-shopping text-primary"></i> Offcanvas</h5>
        <a class="btn-offcanvas-close"></a>
    </div>

    <div class="offcanvas-body">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit officia
            aliquam? Odio provident rerum numquam, eius perferendis vel cumque. Voluptatibus
            deserunt culpa nihil architecto laudantium cupiditate nisi, dolorum aliquam..
        </p>
    </div>
</div>
```

## Typescript

```typescript
export function applyOffcanvas() {
    const oc = document.getElementById("offcanvas");
    const closeBtn = oc.querySelector(".btn-offcanvas-close");
    const openBtn = document.querySelector(".btn-offcanvas-open");

    const action = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        oc.toggleAttribute("data-show");
    };
    closeBtn.addEventListener("click", action);
    openBtn.addEventListener("click", action);
}
```
