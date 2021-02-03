import { FunctionalComponent, getAssetPath, h, VNode } from '@stencil/core';

interface Props {
    color: string;
    resource: string;
    sizeX: string;
    sizeY: string;
}

export const FupImage: FunctionalComponent<Props> = ({
    color,
    resource,
    sizeX,
    sizeY,
}) => createImage(color, resource, sizeX, sizeY);

function createImage(
    color: string,
    resource: string,
    sizeX: string,
    sizeY: string
) {
    let el: VNode;

    if (
        resource.indexOf('.') > -1 ||
        resource.indexOf('/') > -1 ||
        resource.indexOf('\\') > -1
    ) {
        let iconStyle = {
            height: sizeY ? sizeX : 'auto',
            width: sizeX ? sizeX : '100%',
        };
        el = (
            <div class="fup-image" style={iconStyle}>
                <img style={iconStyle} src={resource}></img>
            </div>
        );
    } else {
        let iconStyle = {
            background: color ? color : 'var(--kup-icon-color)',
            mask: `url('${getAssetPath(
                `./assets/svg/${resource}.svg`
            )}') no-repeat center`,
            webkitMask: `url('${getAssetPath(
                `./assets/svg/${resource}.svg`
            )}') no-repeat center`,
            height: sizeY ? sizeY : '100%',
            width: sizeX ? sizeX : '100%',
        };
        el = <div class="fup-icon" style={iconStyle}></div>;
    }

    return el;
}
