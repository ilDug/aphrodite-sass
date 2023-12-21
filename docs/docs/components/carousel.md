# Carousel

CSS only! carousel.

## HTML

La struttura del **carousel** deve essere contenuta usando elementi col le classi corrispondenti all'esempio:

```html
<div class="carousel" id="my-carousel">
    <div class="slide active">
        <img src="/assets/images/img1.png" alt="..." />
    </div>
    <div class="slide">
        <img src="/assets/images/img2.png" alt="..." />
    </div>
    <div class="slide">
        <img src="/assets/images/img3.png" alt="..." />
    </div>

    <div class="commands">
        <a class="prev-slide">
            <i class="fa-angle-left fa-solid fa-3x "></i>
        </a>

        <a class="next-slide">
            <i class="fa-angle-right fa-solid fa-3x "></i>
        </a>
    </div>
</div>
```

### Caricamento dinamico PHP

```php
<?php
for ($i = 0; $i < count($images); $i++)
{
    echo '<div class="slide ' . ($i == 0 ? " active" : " ")  . '"> <img src="/assets/images/products/' . $images[$i] .  '" alt="' . $details[$i] . '"> </div>';
}
?>
```

## TypeScript

Eseguire la seguente funzione passando come argomento la stringa corrisopndente all'id dell'elemento HTML carousel.

```typescript
export function applyCarousel(carouselId: string) {
    const carousel = document.getElementById(carouselId)!;
    const next = carousel.querySelector(".commands .next-slide")! as HTMLAnchorElement;
    const previous = carousel.querySelector(".commands .prev-slide")! as HTMLAnchorElement;
    const slides = [...carousel.querySelectorAll(".slide")];
    let active: number = 0;

    const classCtrl = (slide, i) => slide.classList[i == active ? "add" : "remove"]("active");

    next.addEventListener("click", (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
        active = active == slides.length - 1 ? 0 : active + 1;
        slides.forEach(classCtrl);
    });

    previous.addEventListener("click", (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
        active = active == 0 ? slides.length - 1 : active - 1;
        slides.forEach(classCtrl);
    });
}
```
