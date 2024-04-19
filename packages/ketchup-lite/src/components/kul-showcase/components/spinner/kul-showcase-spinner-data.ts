import { SpinnerData } from './kul-showcase-spinner-declarations';

function createSpinnerData(
    barLayouts: number,
    widgetsLayouts: number
): SpinnerData {
    const spinnerData: SpinnerData = {
        bar: {},
        widget: {},
    };

    const exampleTypes = ['spinner', 'spinnerActive'];

    for (let i = 1; i <= barLayouts; i++) {
        exampleTypes.forEach((exampleType) => {
            const isActive = exampleType === 'spinnerActive';
            const description = isActive ? 'Active' : 'Inactive';

            if (!spinnerData.bar[i]) {
                spinnerData.bar[i] = {};
            }

            spinnerData.bar[i][exampleType] = {
                ['data-description']: description,
                kulActive: isActive,
                kulBarVariant: true,
                kulLayout: i,
            };
        });
    }

    for (let i = 1; i <= widgetsLayouts; i++) {
        exampleTypes.forEach((exampleType) => {
            const isActive = exampleType === 'spinnerActive';
            const description = isActive ? 'Active' : 'Inactive';

            if (!spinnerData.widget[i]) {
                spinnerData.widget[i] = {};
            }

            spinnerData.widget[i][exampleType] = {
                ['data-description']: description,
                kulActive: isActive,
                kulLayout: i,
            };
        });
    }

    return spinnerData;
}
export const SPINNER_EXAMPLES = createSpinnerData(2, 14);
