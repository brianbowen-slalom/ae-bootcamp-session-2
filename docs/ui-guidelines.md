# UI Guidelines

## Overview

This document defines the UI/UX standards for the TODO application. All frontend development must use **Material UI (MUI)** components and follow the design language defined here.

---

## Design Theme: Cyberpunk

The app uses a dark, high-contrast cyberpunk aesthetic — deep blacks with vivid neon accents that evoke a futuristic, electric feel.

---

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Background | Deep Charcoal | `#0D0D0D` |
| Surface / Cards | Dark Navy | `#1A1A2E` |
| Primary Accent | Electric Cyan | `#00F5FF` |
| Secondary Accent | Hot Magenta | `#FF00FF` |
| Highlight / Success | Neon Yellow-Green | `#CCFF00` |
| Body Text | Off-White | `#E0E0E0` |
| Headings | Electric Cyan | `#00F5FF` |

---

## Typography

- **Headings** (page title, section headers): `Orbitron` — futuristic geometric display font, sourced from Google Fonts
- **Body / Task text**: `Share Tech Mono` — classic terminal/hacker monospace, sourced from Google Fonts
- **Category labels and filter tabs**: ALL-CAPS for a techy, industrial feel
- **Heading sizes**: Follow MUI's default type scale (`h4` for page title, `h6` for section headers)

> Both fonts are available free via [Google Fonts](https://fonts.google.com). Import both in `index.html` or via `@import` in CSS.

---

## Button Styles

- **Shape**: Sharp or very slight border radius (`4px`) — industrial and techy
- **Primary action** (e.g., Add Task): Electric Cyan background, dark text
- **Secondary action** (e.g., Edit): Outlined style with Cyan neon border
- **Danger action** (e.g., Delete): Hot Magenta (`#FF00FF`)
- **Complete/Success action**: Neon Yellow-Green (`#CCFF00`) with dark text
- **Hover effect**: Glowing `box-shadow` in the button's neon color, e.g.:
  ```css
  box-shadow: 0 0 10px #00F5FF, 0 0 20px #00F5FF;
  ```
- **Add Task button**: May include a subtle flicker/pulse animation for visual flair

---

## Component Guidelines (Material UI)

- **Task List**: Use MUI `List` and `ListItem` components
- **Task Cards**: Use MUI `Card` with a dark surface color (`#1A1A2E`) and a neon-colored left border to indicate priority
- **Text Inputs**: Use MUI `TextField` with `variant="outlined"` and a cyan-focused outline
- **Checkboxes**: Use MUI `Checkbox` styled with neon cyan for the checked state
- **Selects / Dropdowns**: Use MUI `Select` for priority and sort options
- **Snackbars**: Use MUI `Snackbar` + `Alert` for success and error feedback

---

## Priority Color Coding

| Priority | Color |
|----------|-------|
| High | Hot Magenta `#FF00FF` |
| Medium | Electric Cyan `#00F5FF` |
| Low | Off-White `#E0E0E0` |

Task cards display a colored left border matching the priority color.

---

## Accessibility Requirements

- **Contrast**: All text must meet WCAG 2.1 AA minimum contrast ratio (4.5:1). Neon on near-black generally exceeds this.
- **Keyboard navigation**: All interactive elements (buttons, inputs, checkboxes) must be fully keyboard-accessible.
- **ARIA labels**: Icon-only buttons (e.g., delete icon) must include descriptive `aria-label` attributes.
- **Focus indicators**: Visible focus rings must never be suppressed (`outline: none` is not allowed without a custom replacement).
- **State changes**: Glow effects and color alone must not be the only indicator of state — always pair with a text or icon change (e.g., a checkmark for completed tasks).
- **Screen readers**: Task list must use semantic HTML (`ul`/`li` or MUI `List`) so screen readers can navigate correctly.
