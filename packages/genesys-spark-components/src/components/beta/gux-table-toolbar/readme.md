# gux-table-toolbar-beta



<!-- Auto Generated Below -->


## Slots

| Slot                   | Description                  |
| ---------------------- | ---------------------------- |
| `"contextual-actions"` | Slot for contextual actions. |
| `"menu-actions"`       | Slot for menu actions.       |
| `"permanent-actions"`  | Slot for permanent actions.  |
| `"primary-action"`     | Slot for a primary action.   |
| `"search-and-filter"`  | Slot for search and filter.  |


## Dependencies

### Depends on

- [gux-table-toolbar-menu-button](gux-table-toolbar-menu-button)

### Graph
```mermaid
graph TD;
  gux-table-toolbar-beta --> gux-table-toolbar-menu-button
  gux-table-toolbar-menu-button --> gux-popup
  gux-table-toolbar-menu-button --> gux-button-slot-beta
  gux-table-toolbar-menu-button --> gux-icon
  gux-table-toolbar-menu-button --> gux-list
  style gux-table-toolbar-beta fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
