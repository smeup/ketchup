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
    }`)

document.querySelector('ketchup-btn').buttons = btnlist.data

document
    .querySelector('ketchup-btn')
    .addEventListener('ketchupButtonClicked', event => {
        console.log(event)

        const btnIndex = event.detail.id

        const jsonBtn = JSON.stringify(btnlist.data[btnIndex])

        document.getElementById(
            'btn-label'
        ).innerHTML = `Hai premuto sul pulsante: ${jsonBtn} ed il suo indice e' ${btnIndex}`
    })

function toggleBtnFillspace(event) {
    document.querySelector('ketchup-btn').fillspace = event.target.checked
}

function toggleBtnShowtext(event) {
    document.querySelector('ketchup-btn').showtext = event.target.checked
}

function toggleBtnHorizontal(event) {
    document.querySelector('ketchup-btn').horizontal = event.target.checked
}

function toggleBtnShowicon(event) {
    document.querySelector('ketchup-btn').showicon = event.target.checked
}

function toggleBtnRounded(event) {
    document.querySelector('ketchup-btn').rounded = event.target.checked
}

function toggleBtnTextModeHint(event) {
    document.querySelector('ketchup-btn').textmode = event.target.checked
        ? 'Hint'
        : ''
}

function toggleBtnTransparent(event) {
    document.querySelector('ketchup-btn').transparent = event.target.checked
}

function onBorderColorChange(event) {
    document.querySelector('ketchup-btn').borderColor = event.target.value
}

function onBorderButtonClassChange(event) {
    document.querySelector('ketchup-btn').buttonClass = event.target.value
}

function toggleBtnFlat(event) {
    document.querySelector('ketchup-btn').flat = event.target.checked
}

function toggleBtnShowSelection(event) {
    document.querySelector('ketchup-btn').showSelection = event.target.checked
}

function toggleBtnColumns(event) {
    document.querySelector('ketchup-btn').columns = event.target.value
}

function onBtnAlignChange(event) {
    document.querySelector('ketchup-btn').align = event.target.value
}

function toggleBtnStyle() {
    const bold = document.querySelector('#btn-fontbold').checked
    const fontColor = document.querySelector('#btn-fontcolor').value
    const font = document.querySelector('#btn-font').value

    let btnStyle = {
        bold
    }

    if (fontColor) {
        btnStyle.fontColor = fontColor
    }

    if (font) {
        btnStyle.fontName = font
    }

    document.querySelector('ketchup-btn').btnStyle = btnStyle
}
