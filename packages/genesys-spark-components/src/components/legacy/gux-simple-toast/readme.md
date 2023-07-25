# gux-simple-toast

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description           | Type                                              | Default     |
| -------- | --------- | --------------------- | ------------------------------------------------- | ----------- |
| `accent` | `accent`  | The component accent. | `"alert" \| "neutral" \| "positive" \| "warning"` | `'neutral'` |


## Events

| Event        | Description | Type                |
| ------------ | ----------- | ------------------- |
| `guxdismiss` |             | `CustomEvent<void>` |


## Slots

| Slot        | Description                                |
| ----------- | ------------------------------------------ |
| `"icon"`    | Required slot for gux-icon                 |
| `"message"` | Required slot for the simple toast message |


## Dependencies

### Depends on

- [gux-truncate-beta](../../beta/gux-truncate)
- [gux-dismiss-button](../../stable/gux-dismiss-button)

### Graph
```mermaid
graph TD;
  gux-simple-toast-legacy --> gux-truncate-beta
  gux-simple-toast-legacy --> gux-dismiss-button
  gux-truncate-beta --> gux-tooltip
  gux-dismiss-button --> gux-icon
  style gux-simple-toast-legacy fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
