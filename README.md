# Frontend Mentor - Tip Calculator App Solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Tip Calculator App Solution](#frontend-mentor---tip-calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](/images/Screenshot-tip-calculator.png)

Active states
![](/images/Active-states.png)

### Links

- [Solution](https://github.com/DanyGlez94/Tip-Calculator)
- [Live Site](https://danyglez94.github.io/Tip-Calculator/)

## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to use regular expressions to filter what I want to be accepted in an input, also, I practiced the BEM metodology. It helped me a lot to better organize my classes and find them faster when I wanted to modify something of them.

I didn't know it was possible to add a little javascript inside of an HTML, so I learned that too.

Also, I discovered the HTML input pattern attribute.

```html
<input id="billInput" type="number" pattern="\d*\.\d*" placeholder="0" onkeypress="if (this.value.length===8) return false;">
```

### Continued development

In my next projects I will use SASS because I want to become better using it, also, I will still using BEM methodology, to be able to name my classes an everything I create in a better descriptive way.

### Useful resources

- [Regexr](https://regexr.com/) - This helped me to better understand how the regular expressions work.
- [BEM](https://9elements.com/bem-cheat-sheet/) - This helped me to understand how to better name my classes using BEM methodology.


## Author

- Website - [DanyGlez94](https://github.com/DanyGlez94)
- Frontend Mentor - [@DanyGlez94](https://www.frontendmentor.io/profile/DanyGlez94)
- Twitter - [@DanielGlez94](https://twitter.com/DanielGlez94)
