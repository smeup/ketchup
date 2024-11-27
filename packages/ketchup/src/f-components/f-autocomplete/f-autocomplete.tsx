import { FunctionalComponent, VNode, h } from '@stencil/core';
import { FAutocompleteProps } from './f-autocomplete-declarations';
import { FTextFieldProps } from '../f-text-field/f-text-field-declarations';
import { FTextField } from '../f-text-field/f-text-field';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FAutocomplete: FunctionalComponent<FAutocompleteProps> = (
    props: FAutocompleteProps
) => {
    const minCharsForOptions: number = props.minCharsForAutocomplete || 3;
    const listIsShowed: boolean =
        props.optionsVisible || props.value?.length >= minCharsForOptions;

    const listClass: Record<string, boolean> = {
        'f-autocomplete-list': true,
        'f-autocomplete-list--visible': listIsShowed,
        [`f-autocomplete-list--${props.sizing || 'small'}`]: true,
    };

    return (
        <div class="f-autocomplete">
            <FTextField {...props} />
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
