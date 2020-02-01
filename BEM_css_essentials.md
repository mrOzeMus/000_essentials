# BEM CSS

Bem est une méthodologie pour nommer les classes CSS de manière plus efficace et moins confusante.

BEM = Block.Element.Modifier

Block ->    class="card"
Element ->  class="card__picture"
            class="card__title"
            class="card__description"
            class="card__button"
Modifier -> class="card__button card__button--active"


## Exemple

L'exemple va etre fait en SASS car cela est efficace pour le nesting.

```html

<div class="card">
    <span class="card__img"></span>
    <div class="card__content">
        <ul class="card__list">
            <li class="card__item card__item--active">Adobe XD</li>
            <li class="card__item">Figma</li>
            <li class="card__item">Sketch</li>
        </ul>
        <p class="card__desc">Lorem Ipsum</p>
        <a class="card__link" href="#">Visit the link</a>
    </div>
</div>

```

Dans le css suivant le "&" est utilisé par le SASS. **Cela est très utile**.

```css
.card{
    padding: 0 5em;

    &__img {
        display: block;
        height: 100px;
        width: 100%;
        background: #e0466b;
    }

    &__content{
        padding: 1.6 em;
        background: white;
    }

    &__list{
        list-style-type:none;
        display:flex;
        margin: 0;
        padding: 0;
    }

    &__item{
        padding: .3em .5em;
        margin-right: .5em;
        background: gray;
        border-radius: .3em;
        font-size: .85em;

        &--active {
            background: #d4d4d4;
            font-weight: bold;
        }
    }

    &__link{
        backgourn: #2c8793;
        color:white;
        padding: .5em 1em;
        display: inline-block;
        margin-top: .5em;

        &:hover{
            background: #265732;
        }
    }

}
```
