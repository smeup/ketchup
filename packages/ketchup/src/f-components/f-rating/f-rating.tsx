import { FunctionalComponent, VNode, h } from '@stencil/core';
import type { FRatingProps } from './f-rating-declarations';

/*-------------------------------------------------*/
/*                C o m p o n e n t                */
/*-------------------------------------------------*/

export const FRating: FunctionalComponent<FRatingProps> = (
    props: FRatingProps
) => {
    if (!props.maxValue) {
        props.maxValue = 5;
    }
    return (
        <div
            class={`f-rating ${props.disabled ? 'disabled' : ''} ${
                props.danger ? 'kup-danger' : ''
            } ${props.info ? 'kup-info' : ''} ${
                props.secondary ? 'kup-secondary' : ''
            } ${props.success ? 'kup-success' : ''} ${
                props.warning ? 'kup-warning' : ''
            } ${props.wrapperClass ? props.wrapperClass : ''}`}
        >
            {buildStars(props)}
        </div>
    );
};

function buildStars(props: FRatingProps) {
    const stars: VNode[] = [];

    for (let i = 1; i <= props.maxValue; i++) {
        if (i <= props.value) {
            stars.push(
                <span
                    class="rating"
                    onClick={
                        props.onClick
                            ? props.onClick.bind(props.onClick, i)
                            : null
                    }
                >
                    &#x2605;
                </span>
            );
        } else {
            stars.push(
                <span
                    class="rating"
                    onClick={
                        props.onClick
                            ? props.onClick.bind(props.onClick, i)
                            : null
                    }
                >
                    &#x2606;
                </span>
            );
        }
    }

    return stars;
}
