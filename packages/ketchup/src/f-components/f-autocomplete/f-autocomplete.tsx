import { FunctionalComponent, VNode, h } from '@stencil/core';
import { FAutocompleteProps } from './f-autocomplete-declarations';
import { FTextFieldProps } from '../f-text-field/f-text-field-declarations';
import { FTextField } from '../f-text-field/f-text-field';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/
let timeout;

export const FAutocomplete: FunctionalComponent<FAutocompleteProps> = (
    props: FAutocompleteProps
) => {
    const minCharsForOptions: number = props.minCharsForAutocomplete || 3;

    const listClass: Record<string, boolean> = {
        'f-autocomplete-list': true,
    };

    const handleOnInput = (event) => {
        props.onInput(event);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            showOptions({
                event: event,
                minChars: minCharsForOptions,
            });
        }, 400);
    };

    return (
        <div class="f-autocomplete">
            <FTextField {...props} onInput={handleOnInput} />
            <ul class={listClass}>
                {props.options
                    .filter((option) =>
                        option.label
                            .toLowerCase()
                            .includes(props.value?.toLowerCase() ?? '')
                    )
                    .map((option, index) => (
                        <li
                            key={`f-autocomplete-list-item-${index}-${option.value}`}
                            class="f-autocomplete-list-item"
                            onClick={() => {
                                props.onOptionClick(option.value);
                            }}
                        >
                            {option.label}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

/*-------------------------------------------------*/
/*                  M e t h o d s                  */
/*-------------------------------------------------*/

const showOptions = ({
    event,
    minChars,
}: {
    event: InputEvent;
    minChars: number;
}) => {
    const element = event.target as HTMLInputElement;
    const root = element.shadowRoot;

    if (root) {
        const input = root.querySelector('input');
        const list = root.querySelector('.f-autocomplete-list');

        if (input.value.length >= minChars) {
            list.classList.add('f-autocomplete-list--visible');
        } else {
            list.classList.remove('f-autocomplete-list--visible');
        }
    }
};
