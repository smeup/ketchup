import { GenericMap, GenericObject, KulComponent } from '../types/GenericTypes';

/**
 * Retrieves component's prop values based on a list and option to include descriptions.
 * @param {KulComponent} comp - The component requesting prop values.
 * @param {GenericMap} list - A map listing the prop keys, optionally containing their descriptions.
 * @param {boolean} [descriptions=false] - If true, returns the list itself including descriptions. Otherwise, returns the actual prop values from the component.
 * @returns {GenericObject} - An object with prop keys and values, or keys and descriptions based on the `descriptions` parameter.
 */
export function getProps(
    comp: KulComponent,
    list: GenericMap,
    descriptions?: boolean
): GenericObject {
    let props: GenericObject = {};
    if (descriptions) {
        props = list;
    } else {
        for (const key in list) {
            if (Object.prototype.hasOwnProperty.call(list, key)) {
                props[key] = comp[key];
            }
        }
    }
    return props;
}
/**
 * Dynamically sets properties on a component or its root HTML element based on the prop list.
 * @param {KulComponent} comp - The component to set properties on.
 * @param {GenericMap} list - A map of custom property keys specific to the component.
 * @param {GenericObject} props - An object containing properties to be set on the component or its root element.
 */
export function setProps(
    comp: KulComponent,
    list: GenericMap,
    props: GenericObject
): void {
    for (const key in props) {
        // If key is a custom prop it will be set on the component (i.e.: "data", "customStyle", ecc.)
        if (list[key]) {
            comp[key] = props[key];
        } else {
            // Otherwise, it will be set on its HTML element (i.e.: "id", "style", ecc.)
            comp.rootElement[key] = props[key];
        }
    }
}
