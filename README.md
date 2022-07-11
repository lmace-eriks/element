# Element

## What this app does
Insert any HTML Element tag into VTEX with custom attributes.

## VTEX Block Example
```
"element#shipping-article": {
    "props": {
      "tag": "article",
      "attributes": [
        {
          "key": "lang",
          "value": "en"
        },
        {
          "key": "id",
          "value": "shipping-details"
        }
      ],
      "classes": [
        "fullWidth",
        "border2"
      ]
    },
    "children": [
      "rich-text#some-h1",
      "rich-text#some-paragraph"
    ]
  },
```

## Props
* Tag: String - Any HTML Element Tag (`<div>`, `<article>`, `<section>`, `<figure>`, `<img>`...  ). Defaults to `<div>` if not defined.
* Attributes: Array of Objects. Object should have a Key and Value that is the attribute name and value.
  * `{ "key": "lang", "value": "en" }` will render as `lang="en"` in the DOM as an attribute of the HTML Element.
  * Semicolons are not allowed in the attributes, so the `style` attribute is illegal, and semicolons should be avoided completely.
* Classes: Array of Strings
  * These classes will automatically be prefixed with `eriksbikeshop-element-1-x-` and are able to be defined in the eriksbikeshop.element.css file. This finally allows the use of multiple classes per element.

## Children
Accepts a children object that defines the decendants of this app.

## DOM Example
```
<article class="eriksbikeshop-element-1-x-fullWidth eriksbikeshop-element-1-x-border2">
            <h1>This is the example child title.</h1>
            <p>This is the example child paragraph.</p>
</article>
```