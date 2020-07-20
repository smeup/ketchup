/* 
Keep the properties of the JSON generic, 
so by changing the layouts the component will try to render itself without changing the data.
Ideally the properties should be progressively numbered depending on its positioning inside the card, starting from top to bottom.
Advised properties, as of June 2020:

button1: kup-button (kup-button props)
chart1: kup-chart (kup-chart props)
chip1: kup-chip (kup-chip props)
color1: string (when there is a prominent color)
image1: kup-image (kup-image props)
progressBar1: kup-progress-bar (kup-progress-bar props)
text1: string (generic text)

*/

export interface ComponentCardElement {
    [index: string]: any;
}
