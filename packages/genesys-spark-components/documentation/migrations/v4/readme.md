# V4 Migration Guide

_This migration guide is open to anyone to edit. If you have migrated a component and think it would be helpful to others to document something you encountered please do so. We understand that at the moment because of the need to fork the repo the overhead of making a small contribution is high so feel free to raise an issue on the COMUI board instead it that is more convenient and a core team member will create the PR._

## Breaking changes at a glance

- Typescript updated to v5
- remove `-beta` from components that have been [promoted to stable](#v3-beta-components-promoted-to-stable-in-v4)
- add `-legacy` to components that have been [removed from stable](#v3-stable-components-archived-to-legacy-in-v4)
- change `-beta` to `-legacy` for components that have been [removed from beta](#v3-beta-components-archived-to-legacy-in-v4)
- migrate away from usage of legacy components [removed from v4](#v3-legacy-components-removed-from-v4)
- [Stable component changes](#stable-component-changes):
  - TODO

## V3 Beta Components Promoted to Stable in V4

Action: _(required)_ remove `-beta` from the tag name of the component.

```diff
- <gux-example-beta>
+ <gux-example>
  ...
- </gux-example-beta>
+ </gux-example>
```

### There have been no API changes in these components.

| V3 tag name           | V4 tag name      |
| --------------------- | ---------------- |
| gux-inline-alert-beta | gux-inline-alert |
| gux-popup-beta        | gux-popup        |

#### gux-calendar

The `input` event has been renamed `calendarSelect`

## V3 Stable Components Archived to Legacy in V4

| V3 tag name            | V4 tag name                   | V4 stable equivalent (requires API changes) | Migration Guide                            |
| ---------------------- | ----------------------------- | ------------------------------------------- | ------------------------------------------ |
| gux-action-toast       | gux-action-toast-legacy       | gux-toast                                   | [link](./gux-action-toast-legacy.md)       |
| gux-notification-toast | gux-notification-toast-legacy | gux-toast                                   | [link](./gux-notification-toast-legacy.md) |
| gux-simple-toast       | gux-simple-toast-legacy       | gux-toast                                   | [link](./gux-simple-toast-legacy.md)       |

Action: _(required)_ add `-legacy` to the tag name of the component.

```diff
- <gux-example>
+ <gux-example-legacy>
  ...
- </gux-example>
+ </gux-example-legacy>
```

If possible, avoid the usage of legacy components and do a full migration to a stable component. The basic migration of adding `-legacy` will have to be followed up with a full migration to a stable component before the next major version is released.

## V3 Beta Components Archived to Legacy in V4

| V3 tag name      | V4 tag name        |
| ---------------- | ------------------ |
| gux-example-beta | gux-example-legacy |

Action: _(required)_ remove the `-beta` tag and add `-legacy` to the tag name of the component.

```diff
- <gux-example-beta>
+ <gux-example-legacy>
  ...
- </gux-example-beta>
+ </gux-example-legacy>
```

If possible, avoid the usage of legacy components and do a full migration to a stable component. The basic migration of replacing the `-beta` suffix with `-legacy` will have to be followed up with a full migration to a stable component before the next major version is released. Contact the Core UI team if you need help migrating away from these components.

## V3 Legacy Components Removed from V4

| V3 tag name                | V4 stable equivalent (requires API changes) | V3 Migration Guide                        |
| -------------------------- | ------------------------------------------- | ----------------------------------------- |
| gux-accordion-legacy       | gux-accordion                               | [link](../v3/gux-accordion-legacy.md)     |
| gux-action-button-legacy   | gux-action-button                           | [link](../v3/gux-action-button-legacy.md) |
| gux-action-list-legacy     | gux-list                                    | [link](../v3/gux-list-legacy.md)          |
| gux-button-multi-legacy    | gux-button-multi                            | [link](../v3/gux-button-multi-legacy.md)  |
| gux-command-palette-legacy | N/A                                         | N/A                                       |
| gux-dropdown-legacy        | gux-dropdown                                | [link](../v3/gux-dropdown-legacy.md)      |
| gux-form-field-legacy      | gux-form-field-{type}                       | [link](../v3/gux-form-field-legacy.md)    |
| gux-list-legacy            | gux-list                                    | [link](../v3/gux-list-legacy.md)          |
| gux-panel-frame-legacy     | N/A                                         | N/A                                       |
| gux-side-panel-legacy      | N/A                                         | N/A                                       |
| gux-tabs-advanced          | gux-tabs, gux-tabs-advanced                 | [link](../v3/gux-tabs-legacy.md)          |
| gux-text-label-legacy      | gux-form-field-{type}                       | [link](../v3/gux-form-field-legacy.md)    |

## Stable Component Changes

### gux-form-field

It will be necessary to add `margin: 16px 0 16px 0` to the component in order to have the component look the same as it did in v3

### gux-icon

#### legacy icons

- **No legacy icons have been removed in v4 but how they are accessed has changed.**
- We have removed automatic `legacy/` prefixing of icon names that only existed in the legacy icon list. You may need to add this prefix yourself in v4 and plan to migrate to an official Spark icon.
- We have removed automatic icon mapping from one icon name to another. You may need to change your icon name if you were using an icon name that was mapped to another.
- These changes simplify the icon component as now all icon names are a one-to-one mapping to an svg file.
- These changes should also make it clearer to application teams if the icons they are using are official Spark icons or not.
- The process for adding Official Spark icons has been streamlined and you should contact the UX Design System Team if you require an official replacement for a legacy icon used in your application
