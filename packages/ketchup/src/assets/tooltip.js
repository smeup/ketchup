function setTooltip(id) {
    const tooltip = document.getElementById('globaltooltip');
    let elem;
    if (id) {
        elem = document.getElementById(id);
    }
    let related;
    if (elem) {
        related = {
            element: elem,
            object: 'Sono il quadrato ' + elem.id,
        };
    }
    tooltip.relatedObject = related;
}

function onMouseOver(ev) {
    if (ev.target.id) {
        setTooltip(ev.target.id);
    }
}

function onMouseLeave() {
    setTooltip();
}

function loadData(event) {
    var compIdRefered = event.detail.relatedObject.element.id;

    if (compIdRefered == 'free') {
        console.log("free loadData");
        event.detail.comp.layout = "5";
        event.detail.comp.data = getDataForLayout5();
        return;
    }
    event.detail.comp.layout = "1";
    this.labelText = '';
    let data = {
        title: event.detail.object,
        content: {
            info1: {
                label: 'Author',
                value: 'Lana del Rey',
            },
            info2: {
                label: 'Year',
                value: 2012,
            },
        },
    };

    event.detail.comp.data = data;
}

function getDataForLayout5() {
    return {"content":{"asBoxContent":{"config":{"className":"kup-left-aligned","dragEnabled":false,"dropEnabled":false,"dropOnSection":false,"globalFilter":false,"layout":"5","multiSelection":false,"pageSelected":1,"pageSize":0,"pagination":false,"rowsPerPage":0,"showSelection":false,"sortBy":"","sortEnabled":false,"swipeDisabled":false,"tooltipEnabled":false},"data":{"columns":[{"isKey":false,"name":"COL_0","obj":{"k":"","p":"","t":""},"title":"IT00165150343_DF_0000F.xml - Accettato da SdI con segnalazione","tooltip":false},{"isKey":false,"name":"COL_1","obj":{"k":"","p":"","t":""},"title":"Stato comunicazione SdI","tooltip":false},{"isKey":false,"name":"COL_2","obj":{"k":"","p":"","t":""},"title":"Id file","tooltip":false},{"isKey":false,"name":"COL_3","obj":{"k":"","p":"","t":""},"title":"Data ricezione file da SdI","tooltip":false},{"isKey":false,"name":"COL_4","obj":{"k":"","p":"","t":""},"title":"Data ultima comunicazione con SdI","tooltip":false},{"isKey":false,"name":"COL_5","obj":{"k":"","p":"","t":""},"title":"Stato elaborazione SdI","tooltip":false},{"isKey":false,"name":"COL_6","obj":{"k":"","p":"","t":""},"title":"Esito elaborazione SdI","tooltip":false},{"isKey":false,"name":"COL_7","obj":{"k":"","p":"","t":""},"title":"Trasmesso ad SdI","tooltip":false},{"isKey":false,"name":"COL_8","obj":{"k":"","p":"","t":""},"title":"69601506","tooltip":false},{"isKey":false,"name":"COL_9","obj":{"k":"","p":"","t":""},"title":"11/09/17 15:34:19 ","tooltip":false},{"isKey":false,"name":"COL_10","obj":{"k":"","p":"","t":""},"title":"11/09/17 15:41:44 ","tooltip":false},{"isKey":false,"name":"COL_11","obj":{"k":"","p":"","t":""},"title":"Elaborato","tooltip":false},{"isKey":false,"name":"COL_12","obj":{"k":"","p":"","t":""},"title":"File validato con segnalazione","tooltip":false},{"isKey":false,"name":"COL_13","obj":{"k":"","p":"","t":""},"title":" ","tooltip":false},{"isKey":false,"name":"Layout","obj":{"k":"","p":"","t":""},"title":"Layout","tooltip":false}],"rows":[{"cells":{"COL_4":{"isEditable":false,"obj":{"k":"Data ultima comunicazione con SdI","p":"","t":""},"value":"Data ultima comunicazione con SdI"},"COL_3":{"isEditable":false,"obj":{"k":"Data ricezione file da SdI","p":"","t":""},"value":"Data ricezione file da SdI"},"COL_6":{"isEditable":false,"obj":{"k":"Esito elaborazione SdI","p":"","t":""},"value":"Esito elaborazione SdI"},"COL_5":{"isEditable":false,"obj":{"k":"Stato elaborazione SdI","p":"","t":""},"value":"Stato elaborazione SdI"},"COL_0":{"isEditable":false,"obj":{"k":"IT00165150343_DF_0000F.xml - Accettato da SdI con segnalazione","p":"","t":""},"value":"IT00165150343_DF_0000F.xml - Accettato da SdI con segnalazione"},"COL_2":{"isEditable":false,"obj":{"k":"Id file","p":"","t":""},"value":"Id file"},"COL_1":{"isEditable":false,"obj":{"k":"Stato comunicazione SdI","p":"","t":""},"value":"Stato comunicazione SdI"},"COL_8":{"isEditable":false,"obj":{"k":"69601506","p":"","t":""},"value":"69601506"},"COL_7":{"isEditable":false,"obj":{"k":"Trasmesso ad SdI","p":"","t":""},"value":"Trasmesso ad SdI"},"COL_11":{"isEditable":false,"obj":{"k":"Elaborato","p":"","t":""},"value":"Elaborato"},"COL_9":{"isEditable":false,"obj":{"k":"11/09/17 15:34:19 ","p":"","t":""},"value":"11/09/17 15:34:19 "},"COL_10":{"isEditable":false,"obj":{"k":"11/09/17 15:41:44 ","p":"","t":""},"value":"11/09/17 15:41:44 "},"COL_13":{"isEditable":false,"obj":{"k":" ","p":"","t":""},"value":""},"COL_12":{"isEditable":false,"obj":{"k":"File validato con segnalazione","p":"","t":""},"value":"File validato con segnalazione"},"Layout":{"isEditable":false,"obj":{"k":"5","p":"","t":""},"value":"5"}},"id":"1","object":"","readOnly":true}]},"key":"null_asbox"}},"layout":"5","obj":{"k":"000","p":"","t":"","url":"webup.jsf?fun=F%28EXD%3B*SCO%3B%29+1%28%3B%3B000%29+SS%28CONAP%28%29%29"}};
}

const rosso = document.getElementById('rosso');
const verde = document.getElementById('verde');
const blu = document.getElementById('blu');
const black = document.getElementById('free');
const t = document.getElementById('globaltooltip');

rosso.addEventListener('mouseover', onMouseOver);
verde.addEventListener('mouseover', onMouseOver);
blu.addEventListener('mouseover', onMouseOver);
black.addEventListener('mouseover', onMouseOver);
rosso.addEventListener('mouseleave', onMouseLeave);
verde.addEventListener('mouseleave', onMouseLeave);
blu.addEventListener('mouseleave', onMouseLeave);
black.addEventListener('mouseleave', onMouseLeave);
t.addEventListener('kup-tooltip-loaddata', loadData);
