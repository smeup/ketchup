import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ketchup-fld',
  styleUrl: 'ketchup-fld.scss',
  shadow: true
})
export class KetchupFld {
  /**
   * The type of the FLD
   */
  @Prop() type: string;
  /**
   * Props to be passed to the submit button
   */
  @Prop() submitProps: {
    [index: string]: string;
  } = {};
  /**
   * Chooses if there is the need to show the submit button or not
   */
  @Prop() showSubmit: boolean = false;
  /**
   * Chooses the submit button position
   */
  @Prop() submitPos: string = 'right'; // "left / right / top"
  /**
   * Chooses the label to show
   * If set to empty or has only white space chars, the label get removed
   */
  @Prop() label: string = ''; // Example "Insert user name"
  /**
   * Chooses label position
   */
  @Prop() labelPos: string = 'left'; // 'left / right / top'
  /**
   * Other configurations
   */
  @Prop() extensions: {
    minQueryLength?: number;
    forceSelection?: boolean;
  } = {};
  /**
   * Effective data to pass to the component
   */
  @Prop() data: any;


  //---- Internal state ----

  //-- Not reactive --

  //---- Event handlers ----
  onSubmitClicked() {
    console.log('Submit clicked');
  }


  //---- Rendering functions ----
  render() {
    let toRender = [];
    const baseClass = 'ketchup-fld';

    //-- Checks if there is label to output --
    if (this.label.trim().length) {
      toRender.push(
          <label
            class={baseClass + '__label' + ' ' + baseClass + '--' + this.labelPos}>
            {this.label}
          </label>
      );
    }

    //-- Outputs the main dynamic component to render --
    /**
     * JSX dynamic component notation
     * @see: https://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name
     */
    console.log(this.type);
    const $DynamicComponent = ('ketchup-' + this.type) as any;
    toRender.push(
        <$DynamicComponent
            class={baseClass + '__component'}
            {...this.data}/>
    );

    //-- Submit --
    if (this.showSubmit) {
      toRender.push(
          <ketchup-button
              class={baseClass + '__submit'}
              {...this.submitProps}
              onKetchupButtonClicked={this.onSubmitClicked.bind(this)}/>
      );
    }

    return toRender;
  }
}
