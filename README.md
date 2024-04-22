# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![](./src/assets/page-screenshot.png)
Screenshot in Desktop (1440px) viewport

<img src="./src/assets/sm-page-screenshot.png" width="20%">
Screenshot in Mobile (375px) viewport

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- CSS Grid
- Responsive workflow
- [Vite](https://vitejs.dev/) - Front-end tool
- [React](https://reactjs.org/) - JS library

### What I learned

With this project I got the chance to practice with a new approach for responsive pages, that instead of using multiple containers and setting breakpoints.

Here is a small part of the Grid Template:

```css
/* GRID'S NAMED LINES */
display: grid;
grid-template-columns:
  [full-width-start] var(--full-width)
  [feature-start] var(--feature)
  [breakout-start] var(--breakout)
  [content-start] var(--content) [content-end]
  var(--breakout) [breakout-end]
  var(--feature) [feature-end]
  var(--full-width) [full-width-end];
```

### Continued development

Although I know all the basics of HTML and CSS. There is always something new to learn. And, specially with CSS, that recently implemented nesting selectors.

### Useful resources

- [Kevin Powell's video](https://www.youtube.com/watch?v=c13gpBrnGEw) - This video helped me perfectioning this new approach with Grid.
- [Layout Breakouts with CSS Grid](https://ryanmulligan.dev/blog/layout-breakouts/) - This is a well structured and solid article about this Grid layout.

## Author

- Website - [Santiago Gomez](https://santiago-gomez.netlify.app/)
- Frontend Mentor - [@2G2-99](https://www.frontendmentor.io/profile/2G2-99)
