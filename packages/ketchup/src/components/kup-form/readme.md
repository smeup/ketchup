# kup-form

Kup-form is a web component that allows to generate forms.

## Fields

Fields config, layout and values are defined in fields prop. Each field must have a unique key prop.

## Sections

Fields can be organized in sections. Sections can also contains other sections. To define sections use the sections prop.

## Validation

By default fields values are validated when the form is submitted or when another form action is submitted or when the fields prop is updated.

If you set a liveValidate=true inside config prop everytime a field is blurred a form validation is performed.

## Extra messages

When a form is submitted or when another form event is performed some backend logic can be executed. In this case you can have the need to show some backend messages (for example backend validation messages) inside the form.

You can show these kind of messages using the extraMessages prop.

## Actions

As default, if actions prop is empty, a submit button and a reset button (not yet implemented) will be rendered in the bottom right of the form. The reset will empty all fields when clicked.

If you want to add actions or customize submit and/or reset buttons (or hide them) you have to set actions prop. You have to define both actions fields (they are button widget so you can add all the attributes of a BTN shape or J4BTN object) and actions sections. There are only four possibile sections with position: TL (top left), TR (top right), BL (bottom left), BR (bottom right). As a form field an action field must have a unique key. Submit action has "submit" key, reset action has "reset" key. Performing a submit will generate a kupFormSubmitted event while performing other actions will generate a kupFormActionSubmitted event.

## State

The props: config, fields, sections, extraMessages are mutable (they can be updated by the component) and they are syncronized with the actual state of that entities. So if you want to obtain the actual state of fields (for example actual fields values) you can use fields props from the component (using for example: this.\$refs.form.fields).

During events is not sent all the state of the component. So if you need some state info in a event callback use props. During events are sent all field values and old values (oldValue is the field value calculated when fields prop is changed).

---

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute | Description | Type            | Default     |
| --------------- | --------- | ----------- | --------------- | ----------- |
| `actions`       | --        |             | `FormActions`   | `undefined` |
| `config`        | --        |             | `FormConfig`    | `{}`        |
| `extraMessages` | --        |             | `FormMessage[]` | `[]`        |
| `fields`        | --        |             | `FormFields`    | `undefined` |
| `sections`      | --        |             | `FormSection`   | `undefined` |


## Events

| Event                    | Description | Type                                     |
| ------------------------ | ----------- | ---------------------------------------- |
| `kupFormActionSubmitted` |             | `CustomEvent<FormActionSubmittedDetail>` |
| `kupFormFieldBlurred`    |             | `CustomEvent<FormFieldBlurredDetail>`    |
| `kupFormFieldFocused`    |             | `CustomEvent<FormFieldFocusedDetail>`    |
| `kupFormSubmitted`       |             | `CustomEvent<FormActionSubmittedDetail>` |


## CSS Custom Properties

| Name                                                                   | Description                        |
| ---------------------------------------------------------------------- | ---------------------------------- |
| `--form_border-color, --kup-form_border-color`                         | form border color                  |
| `--form_border-radius, --kup-form_border-radius`                       | form border radius                 |
| `--form_color, --kup-form_color`                                       | text color                         |
| `--form_titled-section-bg-color, --kup-form_titled-section-bg-color`   | background color for section title |
| `--form_titled-section-font-size, --kup-form_titled-section-font-size` | font size for section title        |
| `--form_titled-section-top, --kup-form_titled-section-top`             | top position for section title     |


## Dependencies

### Depends on

- [kup-text-input](../kup-text-input)
- [kup-button](../kup-button)

### Graph
```mermaid
graph TD;
  kup-form --> kup-text-input
  kup-form --> kup-button
  style kup-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
