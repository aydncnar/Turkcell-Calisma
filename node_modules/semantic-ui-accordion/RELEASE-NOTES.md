#### Bugs

- **Accordion** - Added missing notation for accordion docs [#2812](https://github.com/Semantic-Org/Semantic-UI/issues/2812)

### Version 2.0.0 - June 30, 2015

- **Accordion** - adds `onOpening` and `onClosing` callback (before animation) to go with `onOpen`, `onClose` (after animation) **Thanks @cluppric**
- **Accordion** - Added `on` setting for specifying accordion trigger event.
- **Accordion** - Fixed bug where `exclusive: true` could sometimes cause other accordion element animations to get stuck when animating rapidly
- **Accordion** - Accordion no longer sets a `font-size` to better couple with other components defaults

### Version 1.11.2 - March 6, 2015

- **Accordion** - Accordion can now specify a trigger element instead of `title`, added an [example in docs](http://www.semantic-ui.com/modules/accordion.html#changing-trigger)
- **Accordion** - Accordion can now hide while opening animation is still occurring
- **Accordion** - Removed mistaken extra `1px` top border on nested `styled accordion`

### Version 1.6.1 - January 05, 2015

- **Accordion** - Accordion now uses ``useFailSafe: true`` to avoid callbacks not occurring because of race conditions with `transitionend` in webkit

### Version 1.6.0 - January 05, 2015

- **Accordion** - Child element animations now use ``$.fn.transition`` and css animations by default (if available)
- **Accordion** - Added ``animateChildren`` option to disable/enable opacity animation on child elements
- **Accordion** - Accordion now uses `easeOutQuint`` instead of ``easeInOutQuint`` to increase perceived responsiveness of drawers

### Version 1.4.0 - December 22, 2014

- **Accordion** - Added inverted accordion variation

### Version 1.0.0 - November 24, 2014

- **Accordion** - Accordions are now unstyled by default allowing for simpler coupling with other UI without having to override styles. Styled accordions are now included as a variation ``ui styled accordion``
- **Accordion** - Accordion now includes all icons in an embedded font instead of requiring icons

### Version 0.19.0 - July 3, 2014

- **Accordion** - Fixes incompatibilities with ``ui list`` when used inside a ``ui accordion``, fixes issues with menu accordion display in some circumstances

### Version 0.18.0 - June 6, 2014

- **Accordion** - Accordion title does not know have to be :first-child to receive proper border **Thanks BigBlueHat**

### Version 0.13.1 - Feb 28, 2014

- **Accordion** - Fixes issues with accordion rules being too specific, causing several common usages of accordions to break

### Version 0.13.0 - Feb 20, 2014

- **Accordion** - Accordions now preserve inline styles when animating

### Version 0.9.1 - Nov 7, 2013

- **Accordion** - Adds formatting for nested accordions
- **Accordion** - Fixes issue with accordion events inside accordions

### Version 0.7.0 - Oct 22, 2013

- **Accordion** - Reduces vertical padding on basic accordion content

### Version 0.5.0 - Oct 10, 2013

- Accordion now comes bundled with proper easing

### Version 0.3.8 - Oct 8, 2013

- Display issues with accordion

### Version 0.3.6 - Oct 7, 2013

- Updates form and accordion docs
- Adds fluid variation to accordion

### Version 0.3.4 - Oct 2, 2013

- Fixes accordion in safari styles getting stuck

### Version 0.1.0 - Sep 25, 2013

- Adds dropdown icon sexiness to accordions, now with rotating pointing arrows
- Accordion settings documentation