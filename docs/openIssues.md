# Open issues

# Problem with classes on older browsers

I don't know if there is already an issue for this. In substance: 1 - Browser do not support ShadowDOM -> Polyfill kicks in. 2 - Css classes gets rewritten adding a custom classes to their declarations. 3 - A dynamically created polyfilled class gets automatically added to the elements which make use of CSS class. 4 - For the first render, everything works like it is expected to do. 5 - After the first render, if you're using dynamic JSX class binding `class={this.class}` the render will force the exact specified classes, deleting the polyfill added ones. 6 - Style can broke down.

This can be solved by not using dynamic class binding.

An example of this behavior can be found inside the ketchup-combo in Edge16: after clicking on the menu as it gets activated, the polyfilled class is removed and the svg increases in size.
