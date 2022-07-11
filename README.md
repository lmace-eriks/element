# Element

## VTEX Block Example - Columns Only
```
"element#kids-size-table": {
    "props": {
      "caption": "Kids' Bicycle Sizing Chart",
      "columns": [
        "Rider Height",
        "Bike Size"
      ],
      "data": [
        [
          "42in - 50in",
          "20in Bike"
        ],
        [
          "50in - 58in",
          "24in Bike"
        ],
        [
          "58in +",
          {
            "text": "Adult Bike Sizes",
            "url": "#adult-sizing",
            "newTab": false
          }
        ]
      ]
    }
  }
```
* Table renders in a `<figure>` tag.
* Caption Prop renders above the table data in a `<figcaption>` tag.
* Columns Prop is an array of strings containing the column headers. Number of columns is C.
* Columns render in `<th>` tags and are bold text.
* Data Prop is an array of arrays.
    * Inner Array must be of length C.
    * Array item may be a string or a link prop
        * Link Prop is...
        ```
        "text": "string",
        "url": "string",
        "newTab: boolean
        ```

## DOM Example - Columns Only
```
<figure class="eriksbikeshop-element-1-x-tableDataContainer">
    <figcaption class="eriksbikeshop-element-1-x-caption">
        <div class="eriksbikeshop-element-1-x-captionText">Kids' Bicycle Sizing Chart</div>
    </figcaption>
    <table class="eriksbikeshop-element-1-x-table">
        <thead class="eriksbikeshop-element-1-x-thead">
            <tr data-tr="0" class="eriksbikeshop-element-1-x-tr">
                <th data-th="0" style="width: 50%;" class="eriksbikeshop-element-1-x-th">Rider Height</th>
                <th data-th="1" style="width: 50%;" class="eriksbikeshop-element-1-x-th">Bike Size</th>
            </tr>
        </thead>
        <tbody>
            <tr data-tr="1" class="eriksbikeshop-element-1-x-tr">
                <td class="eriksbikeshop-element-1-x-td">42in - 50in</td>
                <td class="eriksbikeshop-element-1-x-td">20in Bike</td>
            </tr>
            <tr data-tr="2" class="eriksbikeshop-element-1-x-tr">
                <td class="eriksbikeshop-element-1-x-td">50in - 58in</td>
                <td class="eriksbikeshop-element-1-x-td">24in Bike</td>
            </tr>
            <tr data-tr="3" class="eriksbikeshop-element-1-x-tr">
                <td class="eriksbikeshop-element-1-x-td">58in +</td>
                <td class="eriksbikeshop-element-1-x-td">
                    <a href="#adult-sizing" target="_self" class="eriksbikeshop-element-1-x-tdLink">Adult Bike Sizes</a></td>
            </tr>
        </tbody>
    </table>
</figure>
```

## VTEX Block Example - Columns and Rows
```
"element#bike-comparison": {
    "props": {
      "caption": "Comparing Bikes",
      "columns": [
        "Bike 1",
        "Bike 2",
        "Bike 3",
        "Bike 4"
      ],
      "data": [
        [
          {
            "rowTitle": "Type"
          },
          "Mountain",
          "Road",
          "Gravel",
          "Commuter"
        ],
        [
          {
            "rowTitle": "Frame Meterial"
          },
          "Carbon",
          "Steel",
          "Ti",
          {
            "text": "More Details",
            "url": "#more",
            "newTab": false
          }
        ],
        [
          {
            "rowTitle": "Gears"
          },
          "10",
          "11",
          "1",
          "8"
        ]
      ]
    }
  }
```

* Each Data Array must have a `{rowTitle: "Your Row Title"}` object as the row's title.
* Other data in the Data Array may be a string, or a link. Same syntax as Column Only.
* Caption / Table Title renders below the table in this orientation.
* Data Cell highlights the Row and Column it corresponds to.

## DOM Example - Columns and Rows
```
<figure class="eriksbikeshop-element-1-x-tableDataContainer eriksbikeshop-element-1-x-hasRows">
    <figcaption class="eriksbikeshop-element-1-x-caption eriksbikeshop-element-1-x-bottomCaption">
        <div class="eriksbikeshop-element-1-x-captionText eriksbikeshop-element-1-x-standAloneCaption">Comparing Bikes</div>
    </figcaption>
    <table class="eriksbikeshop-element-1-x-table">
        <thead class="eriksbikeshop-element-1-x-thead">
            <tr data-tr="0" class="eriksbikeshop-element-1-x-tr">
                <th style="width: 20%;" class="eriksbikeshop-element-1-x-thBlank"></th>
                <th data-th="1" style="width: 20%;" class="eriksbikeshop-element-1-x-th">Bike 1</th>
                <th data-th="2" style="width: 20%;" class="eriksbikeshop-element-1-x-th">Bike 2</th>
                <th data-th="3" style="width: 20%;" class="eriksbikeshop-element-1-x-th">Bike 3</th>
                <th data-th="4" style="width: 20%;" class="eriksbikeshop-element-1-x-th">Bike 4</th>
            </tr>
        </thead>
        <tbody>
            <tr data-tr="1" class="eriksbikeshop-element-1-x-tr">
                <th scope="row" data-cell="row-1-col-0" class="eriksbikeshop-element-1-x-td">Type</th>
                <td data-cell="row-1-col-1" class="eriksbikeshop-element-1-x-td">Mountain</td>
                <td data-cell="row-1-col-2" class="eriksbikeshop-element-1-x-td">Road</td>
                <td data-cell="row-1-col-3" class="eriksbikeshop-element-1-x-td">Gravel</td>
                <td data-cell="row-1-col-4" class="eriksbikeshop-element-1-x-td">Commuter</td>
            </tr>
            <tr data-tr="2" class="eriksbikeshop-element-1-x-tr">
                <th scope="row" data-cell="row-2-col-0" class="eriksbikeshop-element-1-x-td">Frame Meterial</th>
                <td data-cell="row-2-col-1" class="eriksbikeshop-element-1-x-td">Carbon</td>
                <td data-cell="row-2-col-2" class="eriksbikeshop-element-1-x-td">Steel</td>
                <td data-cell="row-2-col-3" class="eriksbikeshop-element-1-x-td">Ti</td>
                <td data-cell="row-2-col-4" class="eriksbikeshop-element-1-x-td"><a href="#more" target="_self"
                        class="eriksbikeshop-element-1-x-tdLink">More Details</a></td>
            </tr>
            <tr data-tr="3" class="eriksbikeshop-element-1-x-tr">
                <th scope="row" data-cell="row-3-col-0" class="eriksbikeshop-element-1-x-td">Gears</th>
                <td data-cell="row-3-col-1" class="eriksbikeshop-element-1-x-td">10</td>
                <td data-cell="row-3-col-2" class="eriksbikeshop-element-1-x-td">11</td>
                <td data-cell="row-3-col-3" class="eriksbikeshop-element-1-x-td">1</td>
                <td data-cell="row-3-col-4" class="eriksbikeshop-element-1-x-td">8</td>
            </tr>
        </tbody>
    </table>
</figure>
```