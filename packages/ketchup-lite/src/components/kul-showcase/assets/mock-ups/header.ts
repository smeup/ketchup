const HEAD = `
<head>
<meta charset="utf-8" />
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
/>
<title>KulHeader</title>
<script type="module" src="/build/ketchup-lite.esm.js"></script>
<script nomodule src="/build/ketchup-lite.js"></script>
<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html,
    body,
    #ketchup-lite-showcase {
        height: 100%;
        width: 100%;
    }
    html {
        background-color: var(--kul-background-color, black);
        color: var(--kul-text-color);
        font-family: var(--kul-font-family);
        font-size: var(--kul-font-size);
    }
    .flex-wrapper {
        align-items: center;
        display: flex;
        height: 100%;
        width: 100%;
    }
    .flex-wrapper__left {
        --kul-button-primary-color: var(--kul-header-color);
        --kul-button-primary-color-rgb: var(--kul-header-color-rgb);
        --kul-button-primary-color-h: var(--kul-header-color-h);
        --kul-button-primary-color-s: var(--kul-header-color-s);
        --kul-button-primary-color-l: var(--kul-header-color-l);

        align-items: center;
        display: flex;
        width: 60px;
    }
    .flex-wrapper__title {
        font-size: 24px;
    }
</style>
</head>`;

const TEXT = `
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut sapien nulla. Aenean ligula quam, pellentesque quis enim non, posuere feugiat velit. Proin ac ante nisi. Nullam gravida augue urna, venenatis efficitur elit condimentum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut massa urna, maximus nec odio a, varius porttitor mi. Morbi venenatis, lorem eget accumsan finibus, purus tellus mattis augue, nec pretium purus lacus nec erat. In vel dolor ullamcorper, varius ipsum eu, blandit eros. Nulla ac ante condimentum, consequat odio at, vulputate velit. Proin vitae libero ac risus rutrum condimentum. Nunc congue libero eu vestibulum feugiat. Quisque sit amet tortor nibh. Integer eu aliquam diam.
</p>
<p>
    Morbi lobortis, eros in rhoncus finibus, nisi sem aliquam massa, ut viverra ex purus ut tortor. Cras mi odio, accumsan quis iaculis ac, porttitor eget eros. Mauris nec nunc nisl. Fusce a tempus felis. Curabitur ultricies suscipit magna, sit amet accumsan ligula lobortis non. Curabitur tincidunt dictum nisl at blandit. Proin consequat mi a ex dignissim accumsan. Ut felis urna, imperdiet sed orci sit amet, volutpat convallis dui. Ut efficitur nisl sit amet felis eleifend maximus. Aenean et odio ullamcorper, consectetur dui quis, varius massa. Sed scelerisque, purus pellentesque molestie bibendum, elit nunc accumsan augue, et lacinia metus nibh molestie mi.
</p>
<p>
    Pellentesque velit orci, scelerisque non ipsum vitae, molestie pretium sapien. Phasellus scelerisque in sem id tempor. Phasellus sollicitudin sit amet sem nec fringilla. Ut odio diam, tincidunt nec ligula sed, pretium consectetur eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sed est justo. Maecenas at nisi nec enim consectetur blandit egestas ut erat. Vivamus tincidunt ipsum consectetur metus auctor, non aliquet felis tincidunt.
</p>
<p>
    Etiam a eros condimentum augue euismod porta. Curabitur neque justo, tincidunt ut elementum et, sodales id nulla. Etiam lacinia nibh libero, ultrices imperdiet metus maximus sollicitudin. Phasellus non lectus condimentum, dignissim tellus et, placerat turpis. Proin dapibus nisl purus, auctor mollis massa semper sed. Duis sed viverra ligula. Nunc cursus lectus non diam lobortis bibendum. Sed pretium rutrum nibh, ac pharetra augue tempus vitae. Suspendisse quis semper augue. In vehicula ante sed augue imperdiet mollis. Donec sit amet laoreet est. Quisque sit amet erat interdum, tincidunt odio non, egestas turpis. Duis vulputate fringilla lacus id euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
<p>
    Fusce a sodales augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nisl sapien. Aliquam erat volutpat. Donec auctor orci erat, vel pharetra est condimentum vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sapien tortor, lobortis a suscipit vitae, semper id nunc. Fusce eu accumsan tortor. Nullam scelerisque diam vel dolor mattis dignissim. Nam sapien metus, volutpat eget urna sit amet, ultrices dictum arcu. Etiam blandit odio vitae erat sollicitudin auctor. Fusce at velit urna. Sed feugiat elit id imperdiet dapibus. Sed lobortis, lacus id ullamcorper dapibus, odio metus laoreet metus, vitae gravida nisi eros in est. Proin nulla augue, interdum cursus erat in, dapibus iaculis ex. Proin felis metus, elementum vitae tortor in, molestie mollis dolor.
</p>`;

const SLOT = `
    <div class="flex-wrapper">
        <div class="flex-wrapper__left">
            <kul-button kul-icon="menu" kul-styling="icon"></kul-button>
        </div>
        <div class="flex-wrapper__title">Header bar</div>
    </div>
`;

export const HEADER_IFRAME_MOCK = `
<!DOCTYPE html>
<html dir="ltr" lang="en">
    ${HEAD}
    <body>
        <div id="ketchup-lite-showcase">
        <kul-header>
            ${SLOT}
        </kul-header>
        ${TEXT}
        </div>
    </body>
</html>
`;

export const HEADER_IFRAME_MOCK_STYLE = `
<!DOCTYPE html>
<html dir="ltr" lang="en">
    ${HEAD}
    <body>
        <div id="ketchup-lite-showcase">
        <kul-header kul-style="#kul-component { opacity: 0.5 }">
            ${SLOT}
        </kul-header>
        ${TEXT}
        </div>
    </body>
</html>
`;
