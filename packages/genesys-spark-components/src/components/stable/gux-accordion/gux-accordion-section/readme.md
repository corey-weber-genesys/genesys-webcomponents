# gux-accordion

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                                 | Type                 | Default  |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------- |
| `arrowPosition`   | `arrow-position`   | Position of the arrow chevron icon. Position can be 'start' or 'end'.                                                       | `"end" \| "start"`   | `'end'`  |
| `contentLayout`   | `content-layout`   | The content layout used in the accordion section. 'text' layout provides default padding, 'custom' removes default padding. | `"custom" \| "text"` | `'text'` |
| `disabled`        | `disabled`         |                                                                                                                             | `boolean`            | `false`  |
| `open`            | `open`             |                                                                                                                             | `boolean`            | `false`  |
| `reverseHeadings` | `reverse-headings` |                                                                                                                             | `boolean`            | `false`  |


## Events

| Event                   | Description | Type                |
| ----------------------- | ----------- | ------------------- |
| `internalsectionopened` |             | `CustomEvent<void>` |


## Slots

| Slot          | Description                     |
| ------------- | ------------------------------- |
| `"header"`    | Required slot for the heading   |
| `"icon"`      | Optional slot for an icon       |
| `"subheader"` | Optional slot for a subheader * |


## Dependencies

### Depends on

- [gux-icon](../../gux-icon)

### Graph
```mermaid
graph TD;
  gux-accordion-section --> gux-icon
  style gux-accordion-section fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
