// BTN
// button list
const btnlist = JSON.parse(`{
      "key": "i456",
      "options": {
        "BTN": {
          "": {
            "enableSort": true
          }
        }
      },
      "data": [{
        "value": "label bottone #1",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-account",
        "children": []
      },{
        "value": "label bottone #2",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-plus",
        "children": []
      },{
        "value": "label bottone #3",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-plus",
        "children": []
      },{
        "value": "label bottone #4",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-plus",
        "children": []
      },{
        "value": "label bottone #5",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-plus",
        "children": []
      },{
        "value": "label bottone #6",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-plus",
        "children": []
      },{
        "value": "label bottone #7",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-plus",
        "children": []
      }],
      "messages": [],
      "actions": {
        "row": [
          {
            "exec": "...",
            "icon": "mdi-clock",
            "text": "Scheda orologio"
          }
        ],
        "global": [],
        "auto (tag action attuale)": [
          "F() / CLOSE / ETC...",
          "F() / CLOSE / ETC...",
          "F() / CLOSE / ETC...",
          "F() / CLOSE / ETC..."
        ],
        "command": [
          {
            "exec": "...",
            "icon": "mdi-play",
            "text": "Spotify"
          }
        ]
      },
      "variables": [],
      "dynamisms": []
    }`);

document.querySelector('kup-btn').buttons = btnlist.data;

document
    .querySelector('kup-btn')
    .addEventListener('ketchupButtonClicked', (event) => {
        console.log(event);

        const btnIndex = event.detail.id;

        const jsonBtn = JSON.stringify(btnlist.data[btnIndex]);

        document.getElementById(
            'btn-label'
        ).innerHTML = `Hai premuto sul pulsante: ${jsonBtn} ed il suo indice e' ${btnIndex}`;
    });

function toggleBtnFillspace(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = { ...btn.config, fillspace: event.target.checked };
}

function toggleBtnShowtext(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        showtext: event.target.checked,
    };
}

function toggleBtnHorizontal(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        horizontal: event.target.checked,
    };
}

function toggleBtnShowicon(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        showicon: event.target.checked,
    };
}

function toggleBtnRounded(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        rounded: event.target.checked,
    };
}

function toggleBtnTextModeHint(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        textmode: event.target.checked ? 'Hint' : '',
    };
}

function toggleBtnTransparent(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        transparent: event.target.checked,
    };
}

function onBorderColorChange(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        borderColor: event.target.value,
    };
}

function onBorderButtonClassChange(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        buttonClass: event.target.value,
    };
}

function toggleBtnFlat(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        flat: event.target.checked,
    };
}

function toggleBtnShowSelection(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        showSelection: event.target.checked,
    };
}

function toggleBtnColumns(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        columns: event.target.value,
    };
}

function onBtnAlignChange(event) {
    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        align: event.target.value,
    };
}

function toggleBtnStyle() {
    const bold = document.querySelector('#btn-fontbold').checked;
    const italic = document.querySelector('#btn-fontitalic').checked;
    const underline = document.querySelector('#btn-fontunderline').checked;
    const fontColor = document.querySelector('#btn-fontcolor').value;
    const bckColor = document.querySelector('#btn-bckcolor').value;
    const font = document.querySelector('#btn-font').value;
    const fontsize = document.querySelector('#btn-fontsize').value;

    let btnStyle = {
        bold,
        italic,
        underline,
    };

    if (fontColor) {
        btnStyle.fontColor = fontColor;
    }

    if (bckColor) {
        btnStyle.bckColor = bckColor;
    }

    if (font) {
        btnStyle.fontName = font;
    }

    if (fontsize) {
        btnStyle.fontSize = '' + fontsize + 'px';
    }

    const btn = document.querySelector('kup-btn');
    btn.config = {
        ...btn.config,
        btnStyle,
    };
}
