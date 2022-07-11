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
        "border2",
        "fontSize3"
      ]
    },
    "children": [
      "rich-text#shipping-info-title",
      "rich-text#shipping-info-paragraph"
    ]
  },
```

## Props
* Tag: String - Any HTML Element Tag (`<div>`, `<article>`, `<section>`, `<figure>`, `<img>`...  )
* Attributes: Array of Objects. Object should have a Key and Value that is the attribute name and value.
  * `{ "key": "lang", "value": "en" }` will render as `lang="en"` in the DOM as an attribute of the HTML Element.
  * Semicolons are not allowed in the attributes, so the `style` attribute is illegal.