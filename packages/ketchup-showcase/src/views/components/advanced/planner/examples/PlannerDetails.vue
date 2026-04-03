<template>
  <div>
    <div class="demo-wrapper">
      <div class="demo-container">
        <div class="kup-container" style="display: block">
          <kup-planner
            @kup-planner-click="onclick"
            :data.prop="plannerProps.data"
            :detailData.prop="plannerProps.detailData"
            :detailColorCol.prop="plannerProps.detailColorCol"
            :detailColumns.prop="plannerProps.detailColumns"
            :detailDates.prop="plannerProps.detailDates"
            :detailIdCol.prop="plannerProps.detailIdCol"
            :detailNameCol.prop="plannerProps.detailNameCol"
            :detailPrevDates.prop="plannerProps.detailPrevDates"
            :listCellWidth.prop="plannerProps.listCellWidth"
            :maxWidth.prop="plannerProps.maxWidth"
            :phaseColorCol.prop="plannerProps.phaseColorCol"
            :phaseColumns.prop="plannerProps.phaseColumns"
            :phaseColParDep.prop="plannerProps.phaseColParDep"
            :phaseDates.prop="plannerProps.phaseDates"
            :phaseIdCol.prop="plannerProps.phaseIdCol"
            :phaseNameCol.prop="plannerProps.phaseNameCol"
            :phasePrevDates.prop="plannerProps.phasePrevDates"
            :readOnly.prop="plannerProps.readOnly"
            :showSecondaryDates.prop="plannerProps.showSecondaryDates"
            :taskColumns.prop="plannerProps.taskColumns"
            :taskDates.prop="plannerProps.taskDates"
            :taskIdCol.prop="plannerProps.taskIdCol"
            :taskNameCol.prop="plannerProps.taskNameCol"
            :taskPrevDates.prop="plannerProps.taskPrevDates"
            :titleMess.prop="plannerProps.titleMess"
            :taskHeight.prop="plannerProps.taskHeight"
            :detailHeight.prop="plannerProps.detailHeight"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const phases = {
  columns: [
    {
      isEditable: false,
      isKey: false,
      name: 'CODFAS',
      obj: {
        p: '',
        t: 'OP',
      },
      title: 'Fase',
      tooltip: true,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'DESFAS',
      title: 'Des\nFase',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'GESNOT',
      obj: {
        p: 'ICO',
        t: 'J4',
      },
      title: 'Note',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'DATINI',
      obj: {
        p: '*YYMD',
        t: 'D8',
      },
      title: 'Data\nInizio',
      tooltip: true,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'DATINZ',
      obj: {
        p: '*YYMD',
        t: 'D8',
      },
      title: 'Data\nInizio P.O',
      tooltip: true,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'SPOINI',
      title: 'GG\nSpostamento',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'DATDIC',
      obj: {
        p: '*YYMD',
        t: 'D8',
      },
      title: 'Eff.\nInizio',
      tooltip: true,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'DATFIN',
      obj: {
        p: '*YYMD',
        t: 'D8',
      },
      title: 'Data\nFine',
      tooltip: true,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'DATFPO',
      obj: {
        p: '*YYMD',
        t: 'D8',
      },
      title: 'Data\nFine\nPrev.Ordine',
      tooltip: true,
    },
    {
      decimals: 0,
      isEditable: false,
      isKey: false,
      name: 'OREORD',
      obj: {
        p: '',
        t: 'NR',
      },
      title: 'Ore Prev.\nORDINE',
      tooltip: false,
    },
    {
      decimals: 0,
      isEditable: false,
      isKey: false,
      name: 'BDGORE',
      obj: {
        p: '',
        t: 'NR',
      },
      title: 'Ore\nPrev.Tot',
      tooltip: false,
    },
    {
      decimals: 0,
      isEditable: false,
      isKey: false,
      name: 'BDGAVOG',
      obj: {
        p: '',
        t: 'NR',
      },
      title: 'Ore\nPrev.Oggi',
      tooltip: false,
    },
    {
      decimals: 0,
      isEditable: false,
      isKey: false,
      name: 'DICORE',
      obj: {
        p: '',
        t: 'NR',
      },
      title: 'Ore\nFatte',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: '£BDGPERC',
      title: '%\nRisp. Prev.',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: '£DICPERC',
      title: '%\nFatte/Prev.Tot',
      tooltip: false,
    },
    {
      decimals: 2,
      isEditable: false,
      isKey: false,
      name: 'NUMRIS',
      obj: {
        p: '',
        t: 'NR',
      },
      title: 'Num.\nRis.',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'MODPIA',
      obj: {
        p: 'ICO',
        t: 'J4',
      },
      title: 'Mod.',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'ICOAVA',
      obj: {
        p: 'ICO',
        t: 'J4',
      },
      title: 'Sposta',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'COMPL',
      obj: {
        p: 'SI/NO',
        t: 'V2',
      },
      title: 'Compl.',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'DTARIL',
      obj: {
        p: '*YYMD',
        t: 'D8',
      },
      title: 'Data\nVincolo',
      tooltip: true,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'CDBASA',
      obj: {
        p: '',
        t: 'AR',
      },
      title: 'Basamento',
      tooltip: true,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'DATUFF',
      obj: {
        p: '*YYMD',
        t: 'D8',
      },
      title: 'Cons.\nDisegno',
      tooltip: true,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'TPDTUF',
      title: 'Des',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'DTAFAB',
      obj: {
        p: '*YYMD',
        t: 'D8',
      },
      title: 'Data\nBasamento',
      tooltip: true,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'CODDIP',
      title: 'Cod.Fase\nDa cui Dip.',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'FASDIP',
      title: 'Fase\nDa cui Dip.',
      tooltip: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'FASDDT',
      obj: {
        p: '*YYMD',
        t: 'D8',
      },
      title: 'Data\nFine Fase Dip',
      tooltip: true,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'CODCOM',
      obj: {
        p: 'MVE',
        t: 'DO',
      },
      title: 'Commessa',
      tooltip: true,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'COLFAS',
      title: 'Sty\nColore',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: '§§AUTN',
      title: 'Aut.Note',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'N§TEVE',
      obj: {
        p: 'P5D',
        t: 'TA',
      },
      title: 'Tipo evento',
      tooltip: true,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'N§NREV',
      objs: [
        {
          p: '',
          t: 'E3',
        },
      ],
      title: 'Numero reg. evento',
      tooltip: true,
      visible: false,
    },
    {
      decimals: 0,
      isEditable: false,
      isKey: false,
      name: 'DLTINI',
      obj: {
        p: '',
        t: 'NR',
      },
      title: 'Dif\nGio',
      tooltip: false,
      visible: false,
    },
    {
      decimals: 0,
      isEditable: false,
      isKey: false,
      name: 'DIFGIO',
      obj: {
        p: '',
        t: 'NR',
      },
      title: 'Giorni',
      tooltip: false,
      visible: false,
    },
    {
      decimals: 0,
      isEditable: false,
      isKey: false,
      name: 'ORERES',
      obj: {
        p: '',
        t: 'NR',
      },
      title: 'Ore ancora\nDa fare',
      tooltip: false,
      visible: false,
    },
    {
      decimals: 0,
      isEditable: false,
      isKey: false,
      name: 'BDGPERC',
      obj: {
        p: '',
        t: 'NR',
      },
      title: '%\nRisp. Prev.',
      tooltip: false,
      visible: false,
    },
    {
      decimals: 0,
      isEditable: false,
      isKey: false,
      name: 'DICPERC',
      obj: {
        p: '',
        t: 'NR',
      },
      title: '%\nFatte/Prev.Tot',
      tooltip: false,
      visible: false,
    },
    {
      decimals: 0,
      isEditable: false,
      isKey: false,
      name: 'DIFPER',
      obj: {
        p: '',
        t: 'NR',
      },
      title: '%\nRitardo',
      tooltip: false,
      visible: false,
    },
    {
      decimals: 0,
      isEditable: false,
      isKey: false,
      name: 'STIPER',
      obj: {
        p: '',
        t: 'NR',
      },
      title: 'Stima\nAvanz. %',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'AGGSTI',
      obj: {
        p: '*YYMD',
        t: 'D8',
      },
      title: 'Data\nAgg. Stima',
      tooltip: true,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'STYAVA',
      title: 'Sty\nSposta',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'CODPMA',
      obj: {
        p: 'XDP',
        t: 'TA',
      },
      title: 'PM\nAssociato',
      tooltip: true,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'DESPMA',
      title: 'PM\nAssociato',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'MESAUT',
      obj: {
        p: '',
        t: '**',
      },
      title: 'Aut.',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'STILE',
      obj: {
        p: '',
        t: '**',
      },
      title: 'Stile\nriga',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: 'EDTDDT',
      obj: {
        p: '',
        t: '**',
      },
      title: 'Data\nDecodificata',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: '§§KNO1',
      title: 'Chiave nota 1',
      tooltip: false,
      visible: false,
    },
    {
      isEditable: false,
      isKey: false,
      name: '§§KNO2',
      title: 'Chiave nota 2',
      tooltip: false,
      visible: false,
    },
  ],
  rows: [
    {
      cells: {
        CODPMA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'XDP',
            t: 'TA',
          },
          value: '',
        },
        DATDIC: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFGIO: {
          data: {
            helperEnabled: false,
            maxLength: 7,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '61',
        },
        TPDTUF: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CODCOM: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: 'MVE',
            t: 'DO',
          },
          value: 'G503',
        },
        GESNOT: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        '§§AUTN': {
          data: {
            helperEnabled: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        COMPL: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            checked: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'SI/NO',
            t: 'V2',
          },
          value: '',
        },
        '§§KNO1': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#ED7D31',
        },
        COLFAS: {
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#ED7D31',
        },
        DICORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        'N§TEVE': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'P5D',
            t: 'TA',
          },
          value: '',
        },
        DICPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '0',
        },
        '§§KNO2': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'G503      0001',
        },
        ORERES: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '1440',
        },
        OREORD: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '1440',
        },
        DESPMA: {
          data: {
            helperEnabled: false,
            maxLength: 30,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        DATFIN: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2023-01-09',
        },
        STIPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        DTAFAB: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        MODPIA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        BDGPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        SPOINI: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        MESAUT: {
          data: {
            helperEnabled: false,
            maxLength: 50,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        CODDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        FASDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CDBASA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'AR',
          },
          value: '',
        },
        BDGORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '1440',
        },
        DLTINI: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '-108',
        },
        DATINI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-17',
        },
        DATFPO: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2023-01-09',
        },
        DTARIL: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        CODFAS: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OP',
          },
          value: 'P410           ',
        },
        '£DICPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '0%',
        },
        ICOAVA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        FASDDT: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        AGGSTI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        STILE: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        DESFAS: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'MONTAGGIO MECCANICO                ',
          displayedValue: 'MONTAGGIO MECCANICO                ',
        },
        DATINZ: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-17',
        },
        '£BDGPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '100%',
        },
        NUMRIS: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '3.75',
        },
        DATUFF: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        EDTDDT: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        'N§NREV': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 9,
          },
          isEditable: false,
          obj: {
            p: '   ',
            t: 'E3',
          },
          value: '000000000',
        },
        BDGAVOG: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '1440',
        },
        STYAVA: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'RED',
        },
      },
      id: '1',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        CODPMA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'XDP',
            t: 'TA',
          },
          value: '',
        },
        DATDIC: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFGIO: {
          data: {
            helperEnabled: false,
            maxLength: 7,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '46',
        },
        TPDTUF: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CODCOM: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: 'MVE',
            t: 'DO',
          },
          value: 'G503',
        },
        GESNOT: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        '§§AUTN': {
          data: {
            helperEnabled: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        COMPL: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            checked: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'SI/NO',
            t: 'V2',
          },
          value: '',
        },
        '§§KNO1': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#FF0000',
        },
        COLFAS: {
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#FF0000',
        },
        DICORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        'N§TEVE': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'P5D',
            t: 'TA',
          },
          value: '',
        },
        DICPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '0',
        },
        '§§KNO2': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'G503      0001',
        },
        ORERES: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '720',
        },
        OREORD: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '720',
        },
        DESPMA: {
          data: {
            helperEnabled: false,
            maxLength: 30,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        DATFIN: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2023-01-09',
        },
        STIPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        DTAFAB: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        MODPIA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        BDGPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        SPOINI: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '15',
        },
        MESAUT: {
          data: {
            helperEnabled: false,
            maxLength: 50,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        CODDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        FASDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CDBASA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'AR',
          },
          value: '',
        },
        BDGORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '720',
        },
        DLTINI: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '-93',
        },
        DATINI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-11-07',
        },
        DATFPO: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2023-01-09',
        },
        DTARIL: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        CODFAS: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OP',
          },
          value: 'P420           ',
        },
        '£DICPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '0%',
        },
        ICOAVA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        FASDDT: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        AGGSTI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        STILE: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        DESFAS: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'MONTAGGIO ELETTRICO                ',
          displayedValue: 'MONTAGGIO ELETTRICO                ',
        },
        DATINZ: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-11-07',
        },
        '£BDGPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '100%',
        },
        NUMRIS: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '1.87',
        },
        DATUFF: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        EDTDDT: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        'N§NREV': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 9,
          },
          isEditable: false,
          obj: {
            p: '   ',
            t: 'E3',
          },
          value: '000000000',
        },
        BDGAVOG: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '720',
        },
        STYAVA: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'RED',
        },
      },
      id: '2',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        CODPMA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'XDP',
            t: 'TA',
          },
          value: '',
        },
        DATDIC: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFGIO: {
          data: {
            helperEnabled: false,
            maxLength: 7,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '30',
        },
        TPDTUF: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CODCOM: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: 'MVE',
            t: 'DO',
          },
          value: 'G503',
        },
        GESNOT: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        '§§AUTN': {
          data: {
            helperEnabled: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        COMPL: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            checked: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'SI/NO',
            t: 'V2',
          },
          value: '',
        },
        '§§KNO1': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#BDD7EE',
        },
        COLFAS: {
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#BDD7EE',
        },
        DICORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        'N§TEVE': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'P5D',
            t: 'TA',
          },
          value: '',
        },
        DICPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '0',
        },
        '§§KNO2': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'G503      0001',
        },
        ORERES: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '40',
        },
        OREORD: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '120',
        },
        DESPMA: {
          data: {
            helperEnabled: false,
            maxLength: 30,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        DATFIN: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-11-25',
        },
        STIPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        DTAFAB: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        MODPIA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        BDGPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        SPOINI: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        MESAUT: {
          data: {
            helperEnabled: false,
            maxLength: 50,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        CODDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        FASDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CDBASA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'AR',
          },
          value: '',
        },
        BDGORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '40',
        },
        DLTINI: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '-108',
        },
        DATINI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-17',
        },
        DATFPO: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-11-25',
        },
        DTARIL: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        CODFAS: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OP',
          },
          value: 'P630           ',
        },
        '£DICPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '0%',
        },
        ICOAVA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        FASDDT: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        AGGSTI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        STILE: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        DESFAS: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'MESSA IN SERV. SW 2                ',
          displayedValue: 'MESSA IN SERV. SW 2                ',
        },
        DATINZ: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-17',
        },
        '£BDGPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '100%',
        },
        NUMRIS: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '0.06',
        },
        DATUFF: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        EDTDDT: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        'N§NREV': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 9,
          },
          isEditable: false,
          obj: {
            p: '   ',
            t: 'E3',
          },
          value: '000000000',
        },
        BDGAVOG: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '120',
        },
        STYAVA: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'RED',
        },
      },
      id: '3',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        CODPMA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'XDP',
            t: 'TA',
          },
          value: '',
        },
        DATDIC: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFGIO: {
          data: {
            helperEnabled: false,
            maxLength: 7,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '10',
        },
        TPDTUF: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CODCOM: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: 'MVE',
            t: 'DO',
          },
          value: 'G503',
        },
        GESNOT: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        '§§AUTN': {
          data: {
            helperEnabled: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        COMPL: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            checked: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'SI/NO',
            t: 'V2',
          },
          value: '',
        },
        '§§KNO1': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#FFFF00',
        },
        COLFAS: {
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#FFFF00',
        },
        DICORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        'N§TEVE': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'P5D',
            t: 'TA',
          },
          value: '',
        },
        DICPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '0',
        },
        '§§KNO2': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'G503      0001',
        },
        ORERES: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '160',
        },
        OREORD: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '80',
        },
        DESPMA: {
          data: {
            helperEnabled: false,
            maxLength: 30,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        DATFIN: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-28',
        },
        STIPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        DTAFAB: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        MODPIA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        BDGPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        SPOINI: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        MESAUT: {
          data: {
            helperEnabled: false,
            maxLength: 50,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        CODDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        FASDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CDBASA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'AR',
          },
          value: '',
        },
        BDGORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '160',
        },
        DLTINI: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '-108',
        },
        DATINI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-17',
        },
        DATFPO: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-28',
        },
        DTARIL: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        CODFAS: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OP',
          },
          value: 'P710           ',
        },
        '£DICPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '0%',
        },
        ICOAVA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        FASDDT: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        AGGSTI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        STILE: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        DESFAS: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'PROVA DI LAVORAZIONE               ',
          displayedValue: 'PROVA DI LAVORAZIONE               ',
        },
        DATINZ: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-17',
        },
        '£BDGPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '100%',
        },
        NUMRIS: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '0.20',
        },
        DATUFF: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        EDTDDT: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        'N§NREV': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 9,
          },
          isEditable: false,
          obj: {
            p: '   ',
            t: 'E3',
          },
          value: '000000000',
        },
        BDGAVOG: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '80',
        },
        STYAVA: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'RED',
        },
      },
      id: '4',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        CODPMA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'XDP',
            t: 'TA',
          },
          value: '',
        },
        DATDIC: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFGIO: {
          data: {
            helperEnabled: false,
            maxLength: 7,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '5',
        },
        TPDTUF: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CODCOM: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: 'MVE',
            t: 'DO',
          },
          value: 'G503',
        },
        GESNOT: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        '§§AUTN': {
          data: {
            helperEnabled: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        COMPL: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            checked: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'SI/NO',
            t: 'V2',
          },
          value: '',
        },
        '§§KNO1': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#BDD7EE',
        },
        COLFAS: {
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#BDD7EE',
        },
        DICORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        'N§TEVE': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'P5D',
            t: 'TA',
          },
          value: '',
        },
        DICPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '0',
        },
        '§§KNO2': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'G503      0001',
        },
        ORERES: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '40',
        },
        OREORD: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '40',
        },
        DESPMA: {
          data: {
            helperEnabled: false,
            maxLength: 30,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        DATFIN: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-21',
        },
        STIPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        DTAFAB: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        MODPIA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        BDGPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        SPOINI: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        MESAUT: {
          data: {
            helperEnabled: false,
            maxLength: 50,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        CODDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        FASDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CDBASA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'AR',
          },
          value: '',
        },
        BDGORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '40',
        },
        DLTINI: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '-108',
        },
        DATINI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-17',
        },
        DATFPO: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-21',
        },
        DTARIL: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        CODFAS: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OP',
          },
          value: 'P720           ',
        },
        '£DICPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '0%',
        },
        ICOAVA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        FASDDT: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        AGGSTI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        STILE: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        DESFAS: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'COLLAUDO CLIENTE                   ',
          displayedValue: 'COLLAUDO CLIENTE                   ',
        },
        DATINZ: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-17',
        },
        '£BDGPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '100%',
        },
        NUMRIS: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '0.04',
        },
        DATUFF: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        EDTDDT: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        'N§NREV': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 9,
          },
          isEditable: false,
          obj: {
            p: '   ',
            t: 'E3',
          },
          value: '000000000',
        },
        BDGAVOG: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '40',
        },
        STYAVA: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'RED',
        },
      },
      id: '5',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        CODPMA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'XDP',
            t: 'TA',
          },
          value: '',
        },
        DATDIC: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFGIO: {
          data: {
            helperEnabled: false,
            maxLength: 7,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '6',
        },
        TPDTUF: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CODCOM: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: 'MVE',
            t: 'DO',
          },
          value: 'G503',
        },
        GESNOT: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        '§§AUTN': {
          data: {
            helperEnabled: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        COMPL: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            checked: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'SI/NO',
            t: 'V2',
          },
          value: '',
        },
        '§§KNO1': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#F8CBAD',
        },
        COLFAS: {
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#F8CBAD',
        },
        DICORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        'N§TEVE': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'P5D',
            t: 'TA',
          },
          value: '',
        },
        DICPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '0',
        },
        '§§KNO2': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'G503      0001',
        },
        ORERES: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '200',
        },
        OREORD: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '160',
        },
        DESPMA: {
          data: {
            helperEnabled: false,
            maxLength: 30,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        DATFIN: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-27',
        },
        STIPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        DTAFAB: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        MODPIA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        BDGPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        SPOINI: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '3',
        },
        MESAUT: {
          data: {
            helperEnabled: false,
            maxLength: 50,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        CODDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        FASDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CDBASA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'AR',
          },
          value: '',
        },
        BDGORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '200',
        },
        DLTINI: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '-105',
        },
        DATINI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-20',
        },
        DATFPO: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-27',
        },
        DTARIL: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        CODFAS: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OP',
          },
          value: 'P730           ',
        },
        '£DICPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '0%',
        },
        ICOAVA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        FASDDT: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        AGGSTI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        STILE: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        DESFAS: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'SPEDIZIONE                         ',
          displayedValue: 'SPEDIZIONE                         ',
        },
        DATINZ: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-20',
        },
        '£BDGPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '100%',
        },
        NUMRIS: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '0.25',
        },
        DATUFF: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        EDTDDT: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        'N§NREV': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 9,
          },
          isEditable: false,
          obj: {
            p: '   ',
            t: 'E3',
          },
          value: '000000000',
        },
        BDGAVOG: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '160',
        },
        STYAVA: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'RED',
        },
      },
      id: '6',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        CODPMA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: 'XDP',
            t: 'TA',
          },
          value: '',
        },
        DATDIC: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFGIO: {
          data: {
            helperEnabled: false,
            maxLength: 7,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '16',
        },
        TPDTUF: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CODCOM: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: 'MVE',
            t: 'DO',
          },
          value: 'G503',
        },
        GESNOT: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        '§§AUTN': {
          data: {
            helperEnabled: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        COMPL: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            checked: false,
            maxLength: 1,
          },
          isEditable: false,
          obj: {
            p: 'SI/NO',
            t: 'V2',
          },
          value: '',
        },
        '§§KNO1': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#7030A0',
        },
        COLFAS: {
          data: {
            helperEnabled: false,
            maxLength: 10,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '#7030A0',
        },
        DICORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        'N§TEVE': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'P5D',
            t: 'TA',
          },
          value: '',
        },
        DICPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '0',
        },
        '§§KNO2': {
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'G503      0001',
        },
        ORERES: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '320',
        },
        OREORD: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '320',
        },
        DESPMA: {
          data: {
            helperEnabled: false,
            maxLength: 30,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        DATFIN: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-11-07',
        },
        STIPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '',
        },
        DTAFAB: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        DIFPER: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        MODPIA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        BDGPERC: {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '100',
        },
        SPOINI: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        MESAUT: {
          data: {
            helperEnabled: false,
            maxLength: 50,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        CODDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        FASDIP: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '',
        },
        CDBASA: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'AR',
          },
          value: '',
        },
        BDGORE: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '320',
        },
        DLTINI: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '-108',
        },
        DATINI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-17',
        },
        DATFPO: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-11-07',
        },
        DTARIL: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        CODFAS: {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 15,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'OP',
          },
          value: 'P750           ',
        },
        '£DICPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '0%',
        },
        ICOAVA: {
          cssClass: 'strong-text',
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: 'ICO',
            t: 'J4',
          },
        },
        FASDDT: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        AGGSTI: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        STILE: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        DESFAS: {
          data: {
            helperEnabled: false,
            maxLength: 35,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'INSTALLAZIONE                      ',
          displayedValue: 'INSTALLAZIONE                      ',
        },
        DATINZ: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '2022-10-17',
        },
        '£BDGPERC': {
          data: {
            helperEnabled: false,
            maxLength: 6,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: '100%',
        },
        NUMRIS: {
          data: {
            helperEnabled: false,
            maxLength: 5,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '0.43',
        },
        DATUFF: {
          cssClass: ' top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '*YYMD',
            t: 'D8',
          },
          value: '',
        },
        EDTDDT: {
          data: {
            helperEnabled: false,
            maxLength: 8,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '**',
          },
          value: '',
        },
        'N§NREV': {
          cssClass: 'strong-text top-right-indicator',
          data: {
            helperEnabled: false,
            maxLength: 9,
          },
          isEditable: false,
          obj: {
            p: '   ',
            t: 'E3',
          },
          value: '000000000',
        },
        BDGAVOG: {
          data: {
            helperEnabled: false,
            maxLength: 13,
          },
          isEditable: false,
          obj: {
            p: '',
            t: 'NR',
          },
          value: '320',
        },
        STYAVA: {
          data: {
            helperEnabled: false,
            maxLength: 3,
          },
          isEditable: false,
          obj: {
            p: '',
            t: '',
          },
          value: 'RED',
        },
      },
      id: '7',
      object: '',
      readOnly: true,
    },
  ],
};
export default {
  name: 'PlannerDetails',
  data() {
    return {
      onclick: (e) => {
        if (e.detail.taskAction == 'onTaskOpening') {
          e.detail.comp.addPhases(e.detail.value.id, phases);
        }
      },
      plannerProps: {
        customStyle: '',
        data: {
          columns: [
            {
              isEditable: false,
              isKey: false,
              name: 'R§COMM',
              obj: {
                p: '',
                t: 'CM',
              },
              title: 'Commessa',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'DATPRE',
              obj: {
                p: '*YYMD',
                t: 'D8',
              },
              title: 'Data Cons.\nAttualizz.',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'DATORD',
              obj: {
                p: '*YYMD',
                t: 'D8',
              },
              title: 'Data Cons.\nP.Ordine',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'DATOPE',
              obj: {
                p: '*YYMD',
                t: 'D8',
              },
              title: 'Data Fase\nINSTALLAZIONE',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'R£COMM',
              title: 'Des.',
              tooltip: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'R§CDCL',
              objs: [
                {
                  p: 'CLP',
                  t: 'CN',
                },
              ],
              title: 'Ente',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'R£CDCL',
              title: 'Ente',
              tooltip: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'CODDOC',
              objs: [
                {
                  p: 'MVE',
                  t: 'DO',
                },
              ],
              title: 'Doc.',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'XXSEMA',
              obj: {
                p: 'IMG',
                t: 'J4',
              },
              title: 'KPI\nRitardo',
              tooltip: false,
            },
            {
              decimals: 0,
              isEditable: false,
              isKey: false,
              name: 'GIODIF',
              obj: {
                p: '',
                t: 'NR',
              },
              title: 'Diff\nGio',
              tooltip: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'TIPRIT',
              obj: {
                p: '',
                t: '**',
              },
              title: 'Tipo\nRitardo',
              tooltip: false,
            },
            {
              decimals: 0,
              isEditable: false,
              isKey: false,
              name: 'DIFFGG',
              obj: {
                p: '',
                t: 'NR',
              },
              title: 'Delta GG',
              tooltip: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'DATINZ',
              obj: {
                p: '*YYMD',
                t: 'D8',
              },
              title: 'Data inizio\nAttualizz.',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'INZORD',
              obj: {
                p: '*YYMD',
                t: 'D8',
              },
              title: 'Data inizio\nP.Ordine',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'R£TDOC',
              obj: {
                p: 'V5D',
                t: 'TA',
              },
              title: 'Tp\nDo',
              tooltip: true,
              visible: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'R£NDOC',
              objs: [
                {
                  p: 'MVE',
                  t: 'DO',
                },
              ],
              title: 'Nr\nDo',
              tooltip: true,
              visible: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'R£TCCL',
              obj: {
                p: 'BRE',
                t: 'TA',
              },
              title: 'Tp\nEn',
              tooltip: true,
              visible: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'R£TRIG',
              obj: {
                p: 'V5B',
                t: 'TA',
              },
              title: 'Tp\nRi',
              tooltip: true,
              visible: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'CODRIG',
              objs: [
                {
                  p: 'MVE',
                  t: 'DR',
                },
              ],
              title: 'Riga',
              tooltip: true,
              visible: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'PREPLA',
              obj: {
                p: 'SI/NO',
                t: 'V2',
              },
              title: 'Presenza Planning',
              tooltip: false,
              visible: false,
            },
          ],
          rows: [
            {
              cells: {
                'R£TRIG': {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'V5B',
                    t: 'TA',
                  },
                  value: 'ACN',
                },
                'R§CDCL': {
                  data: {
                    size: 15,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 15,
                  },
                  isEditable: false,
                  obj: {
                    p: 'CLP',
                    t: 'CN',
                  },
                  value: 'ISVAL',
                },
                TIPRIT: {
                  data: {
                    size: 1,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 1,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                  },
                  value: '',
                },
                'R£TCCL': {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'BRE',
                    t: 'TA',
                  },
                  value: 'CLP',
                },
                PREPLA: {
                  data: {
                    size: 2,
                    helperEnabled: false,
                    checked: true,
                    hiddenCounter: true,
                    maxLength: 2,
                  },
                  isEditable: false,
                  obj: {
                    p: 'SI/NO',
                    t: 'V2',
                  },
                  value: '1',
                },
                GIODIF: {
                  data: {
                    size: 5,
                    helperEnabled: false,
                    maxLength: 5,
                    integers: 5,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'NR',
                  },
                  value: '',
                },
                DATPRE: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-11-20',
                },
                DATOPE: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-03-07',
                },
                DIFFGG: {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    maxLength: 3,
                    integers: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'NR',
                  },
                  value: '178',
                },
                INZORD: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2021-10-25',
                },
                CODDOC: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: 'MVE',
                    t: 'DO',
                  },
                  value: 'G456      ',
                },
                DATORD: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-03-07',
                },
                XXSEMA: {
                  data: {
                    size: 4,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 4,
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                  },
                  value: '',
                },
                'R£NDOC': {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: 'MVE',
                    t: 'DO',
                  },
                  value: 'G456',
                },
                CODRIG: {
                  data: {
                    size: 15,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 15,
                  },
                  isEditable: false,
                  obj: {
                    p: 'MVE',
                    t: 'DR',
                  },
                  value: 'G456      0001',
                },
                'R£TDOC': {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'V5D',
                    t: 'TA',
                  },
                  value: 'MVE',
                },
                DATINZ: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2021-10-25',
                },
                'R£COMM': {
                  data: {
                    size: 35,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 35,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'MAC.FMRSI-31-150-CNC',
                  displayedValue: 'MAC.FMRSI-31-150-CNC',
                },
                'R£CDCL': {
                  data: {
                    size: 35,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 35,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'ISVAL S.P.A',
                },
                'R§COMM': {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'CM',
                  },
                  value: 'G456',
                  displayedValue: 'G456',
                },
              },
              id: '1',
              object: '',
              readOnly: true,
            },
            {
              cells: {
                'R£TRIG': {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'V5B',
                    t: 'TA',
                  },
                  value: 'ACN',
                },
                'R§CDCL': {
                  data: {
                    size: 15,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 15,
                  },
                  isEditable: false,
                  obj: {
                    p: 'CLP',
                    t: 'CN',
                  },
                  value: 'ALBAN',
                },
                TIPRIT: {
                  data: {
                    size: 1,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 1,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                  },
                  value: '',
                },
                'R£TCCL': {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'BRE',
                    t: 'TA',
                  },
                  value: 'CLP',
                },
                PREPLA: {
                  data: {
                    size: 2,
                    helperEnabled: false,
                    checked: true,
                    hiddenCounter: true,
                    maxLength: 2,
                  },
                  isEditable: false,
                  obj: {
                    p: 'SI/NO',
                    t: 'V2',
                  },
                  value: '1',
                },
                GIODIF: {
                  data: {
                    size: 5,
                    helperEnabled: false,
                    maxLength: 5,
                    integers: 5,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'NR',
                  },
                  value: '',
                },
                DATPRE: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-04-07',
                },
                DATOPE: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2022-12-16',
                },
                DIFFGG: {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    maxLength: 3,
                    integers: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'NR',
                  },
                  value: '21',
                },
                INZORD: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2021-10-20',
                },
                CODDOC: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: 'MVE',
                    t: 'DO',
                  },
                  value: 'G460      ',
                },
                DATORD: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2022-12-16',
                },
                XXSEMA: {
                  data: {
                    size: 4,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 4,
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                  },
                  value: '',
                },
                'R£NDOC': {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: 'MVE',
                    t: 'DO',
                  },
                  value: 'G460',
                },
                CODRIG: {
                  data: {
                    size: 15,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 15,
                  },
                  isEditable: false,
                  obj: {
                    p: 'MVE',
                    t: 'DR',
                  },
                  value: 'G460      0001',
                },
                'R£TDOC': {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'V5D',
                    t: 'TA',
                  },
                  value: 'MVE',
                },
                DATINZ: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2021-10-20',
                },
                'R£COMM': {
                  data: {
                    size: 35,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 35,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'MAC.FMF-7-120HS-CNC',
                  displayedValue: 'MAC.FMF-7-120HS-CNC',
                },
                'R£CDCL': {
                  data: {
                    size: 35,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 35,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'ALBAN GIACOMO SPA',
                },
                'R§COMM': {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'CM',
                  },
                  value: 'G460',
                  displayedValue: 'G460',
                },
              },
              id: '2',
              object: '',
              readOnly: true,
            },
            {
              cells: {
                'R£TRIG': {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'V5B',
                    t: 'TA',
                  },
                  value: 'ACN',
                },
                'R§CDCL': {
                  data: {
                    size: 15,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 15,
                  },
                  isEditable: false,
                  obj: {
                    p: 'CLP',
                    t: 'CN',
                  },
                  value: 'RACCPE',
                },
                TIPRIT: {
                  data: {
                    size: 1,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 1,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '**',
                  },
                  value: '',
                },
                'R£TCCL': {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'BRE',
                    t: 'TA',
                  },
                  value: 'CLP',
                },
                PREPLA: {
                  data: {
                    size: 2,
                    helperEnabled: false,
                    checked: true,
                    hiddenCounter: true,
                    maxLength: 2,
                  },
                  isEditable: false,
                  obj: {
                    p: 'SI/NO',
                    t: 'V2',
                  },
                  value: '1',
                },
                GIODIF: {
                  data: {
                    size: 5,
                    helperEnabled: false,
                    maxLength: 5,
                    integers: 5,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'NR',
                  },
                  value: '',
                },
                DATPRE: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-06-30',
                },
                DATOPE: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-03-06',
                },
                DIFFGG: {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    maxLength: 3,
                    integers: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'NR',
                  },
                  value: '21',
                },
                INZORD: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2022-01-03',
                },
                CODDOC: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: 'MVE',
                    t: 'DO',
                  },
                  value: 'G452      ',
                },
                DATORD: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-03-06',
                },
                XXSEMA: {
                  data: {
                    size: 4,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 4,
                  },
                  isEditable: false,
                  obj: {
                    p: 'IMG',
                    t: 'J4',
                  },
                  value: '',
                },
                'R£NDOC': {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: 'MVE',
                    t: 'DO',
                  },
                  value: 'G452',
                },
                CODRIG: {
                  data: {
                    size: 15,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 15,
                  },
                  isEditable: false,
                  obj: {
                    p: 'MVE',
                    t: 'DR',
                  },
                  value: 'G452      0001',
                },
                'R£TDOC': {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'V5D',
                    t: 'TA',
                  },
                  value: 'MVE',
                },
                DATINZ: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2022-01-03',
                },
                'R£COMM': {
                  data: {
                    size: 35,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 35,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'MAC.FMF-12-125-150-CNC',
                  displayedValue: 'MAC.FMF-12-125-150-CNC',
                },
                'R£CDCL': {
                  data: {
                    size: 35,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 35,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'RACCORPE DI PE ANGELO & C SNC',
                },
                'R§COMM': {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'CM',
                  },
                  value: 'G452',
                  displayedValue: 'G452',
                },
              },
              id: '3',
              object: '',
              readOnly: true,
            },
          ],
        },
        detailData: {
          columns: [
            {
              isEditable: false,
              isKey: false,
              name: 'COD001',
              title: 'Codice ricerca 1',
              tooltip: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'DES001',
              title: 'Descrizione ricerca 1',
              tooltip: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'COD002',
              title: 'Codice ricerca 2',
              tooltip: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'DES002',
              title: 'Descrizione ricerca 2',
              tooltip: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'COD003',
              title: 'Codice ricerca 3',
              tooltip: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'DES003',
              title: 'Descrizione ricerca 3',
              tooltip: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'XXBACI',
              obj: {
                p: 'XBA',
                t: 'TA',
              },
              title: 'Bacino',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'XXSKIL',
              obj: {
                p: 'X02SKI',
                t: 'V4',
              },
              title: 'Skill',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'CODFAS',
              obj: {
                p: 'XDP',
                t: 'TA',
              },
              title: 'Dipendente',
              tooltip: true,
            },
            {
              decimals: 0,
              isEditable: false,
              isKey: false,
              name: 'XXPRIO',
              obj: {
                p: '',
                t: 'NR',
              },
              title: 'Priorità ',
              tooltip: false,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'DATINI',
              obj: {
                p: '*YYMD',
                t: 'D8',
              },
              title: 'Data\nInizio',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'DATFIN',
              obj: {
                p: '*YYMD',
                t: 'D8',
              },
              title: 'Data\nFine',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'DATPREI',
              obj: {
                p: '*YYMD',
                t: 'D8',
              },
              title: 'Data Inizio\nPrevisione',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'DATPREF',
              obj: {
                p: '*YYMD',
                t: 'D8',
              },
              title: 'Data Fnizio\nPrevisione',
              tooltip: true,
            },
            {
              isEditable: false,
              isKey: false,
              name: 'COLDET',
              title: 'Colore dettaglio',
              tooltip: false,
              visible: false,
            },
          ],
          rows: [
            {
              cells: {
                XXPRIO: {
                  data: {
                    size: 1,
                    helperEnabled: false,
                    maxLength: 1,
                    integers: 1,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'NR',
                  },
                  value: '1',
                },
                DATPREF: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-04-20',
                },
                COLDET: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: '#ED7D31',
                },
                DES001: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Elettricista',
                },
                XXBACI: {
                  data: {
                    size: 5,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 5,
                  },
                  isEditable: false,
                  obj: {
                    p: 'XBA',
                    t: 'TA',
                  },
                  value: 'COLEL',
                },
                DATPREI: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-03-10',
                },
                DATINI: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-03-12',
                  displayedValue: '12/03/2023',
                },
                CODFAS: {
                  data: {
                    size: 15,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 15,
                  },
                  isEditable: false,
                  obj: {
                    p: 'XDP',
                    t: 'TA',
                  },
                  value: '01040',
                  displayedValue: '01040',
                },
                DATFIN: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-04-15',
                  displayedValue: '15/04/2023',
                },
                XXSKIL: {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'X02SKI',
                    t: 'V4',
                  },
                  value: 'IEC',
                },
                COD001: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'ET01',
                },
                COD003: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'ID01',
                },
                COD002: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'SA01',
                },
                DES002: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Saldatore',
                },
                DES003: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Idraulico',
                },
              },
              id: '1',
              object: '',
              readOnly: true,
            },
            {
              cells: {
                XXPRIO: {
                  data: {
                    size: 1,
                    helperEnabled: false,
                    maxLength: 1,
                    integers: 1,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'NR',
                  },
                  value: '1',
                },
                DATPREF: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-04-20',
                },
                COLDET: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: '#FF0000',
                },
                DES001: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Idraulico',
                },
                XXBACI: {
                  data: {
                    size: 5,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 5,
                  },
                  isEditable: false,
                  obj: {
                    p: 'XBA',
                    t: 'TA',
                  },
                  value: 'COLEL',
                },
                DATPREI: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-03-10',
                },
                DATINI: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-03-12',
                  displayedValue: '12/03/2023',
                },
                CODFAS: {
                  data: {
                    size: 15,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 15,
                  },
                  isEditable: false,
                  obj: {
                    p: 'XDP',
                    t: 'TA',
                  },
                  value: '01875',
                  displayedValue: '01875',
                },
                DATFIN: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-04-15',
                  displayedValue: '15/04/2023',
                },
                XXSKIL: {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'X02SKI',
                    t: 'V4',
                  },
                  value: 'IEC',
                },
                COD001: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'ID01',
                },
                COD003: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'SA01',
                },
                COD002: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'ET01',
                },
                DES002: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Elettricista',
                },
                DES003: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Saldatore',
                },
              },
              id: '2',
              object: '',
              readOnly: true,
            },
            {
              cells: {
                XXPRIO: {
                  data: {
                    size: 1,
                    helperEnabled: false,
                    maxLength: 1,
                    integers: 1,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'NR',
                  },
                  value: '1',
                },
                DATPREF: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-06-20',
                },
                COLDET: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: '#ED7D31',
                },
                DES001: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Saldatore',
                },
                XXBACI: {
                  data: {
                    size: 5,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 5,
                  },
                  isEditable: false,
                  obj: {
                    p: 'XBA',
                    t: 'TA',
                  },
                  value: 'COLEL',
                },
                DATPREI: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-05-10',
                },
                DATINI: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-03-12',
                  displayedValue: '12/03/2023',
                },
                CODFAS: {
                  data: {
                    size: 15,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 15,
                  },
                  isEditable: false,
                  obj: {
                    p: 'XDP',
                    t: 'TA',
                  },
                  value: '02241',
                  displayedValue: '02241',
                },
                DATFIN: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-04-15',
                  displayedValue: '15/04/2023',
                },
                XXSKIL: {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'X02SKI',
                    t: 'V4',
                  },
                  value: 'IEC',
                },
                COD001: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'SA01',
                },
                COD003: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'ET01',
                },
                COD002: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'ID01',
                },
                DES002: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Idraulico',
                },
                DES003: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Elettricista',
                },
              },
              id: '3',
              object: '',
              readOnly: true,
            },
            {
              cells: {
                XXPRIO: {
                  data: {
                    size: 1,
                    helperEnabled: false,
                    maxLength: 1,
                    integers: 1,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'NR',
                  },
                  value: '2',
                },
                DATPREF: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-06-20',
                },
                COLDET: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: '#70AD47',
                },
                DES001: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Attrezzista',
                },
                XXBACI: {
                  data: {
                    size: 5,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 5,
                  },
                  isEditable: false,
                  obj: {
                    p: 'XBA',
                    t: 'TA',
                  },
                  value: 'COLEL',
                },
                DATPREI: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-05-10',
                },
                DATINI: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-05-12',
                  displayedValue: '12/05/2023',
                },
                CODFAS: {
                  data: {
                    size: 15,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 15,
                  },
                  isEditable: false,
                  obj: {
                    p: 'XDP',
                    t: 'TA',
                  },
                  value: '01040',
                  displayedValue: '01040',
                },
                DATFIN: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-06-15',
                  displayedValue: '15/06/2023',
                },
                XXSKIL: {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'X02SKI',
                    t: 'V4',
                  },
                  value: 'MEC',
                },
                COD001: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'AT01',
                },
                COD003: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'ME01',
                },
                COD002: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'ID01',
                },
                DES002: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Idraulico',
                },
                DES003: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Meccanico',
                },
              },
              id: '4',
              object: '',
              readOnly: true,
            },
            {
              cells: {
                XXPRIO: {
                  data: {
                    size: 1,
                    helperEnabled: false,
                    maxLength: 1,
                    integers: 1,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'NR',
                  },
                  value: '2',
                },
                DATPREF: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-06-20',
                },
                COLDET: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: '#ED7D31',
                },
                DES001: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Meccanico',
                },
                XXBACI: {
                  data: {
                    size: 5,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 5,
                  },
                  isEditable: false,
                  obj: {
                    p: 'XBA',
                    t: 'TA',
                  },
                  value: 'COLEL',
                },
                DATPREI: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-05-10',
                },
                DATINI: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-05-12',
                  displayedValue: '12/05/2023',
                },
                CODFAS: {
                  data: {
                    size: 15,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 15,
                  },
                  isEditable: false,
                  obj: {
                    p: 'XDP',
                    t: 'TA',
                  },
                  value: '01875',
                  displayedValue: '01875',
                },
                DATFIN: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-06-15',
                  displayedValue: '15/06/2023',
                },
                XXSKIL: {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'X02SKI',
                    t: 'V4',
                  },
                  value: 'MEC',
                },
                COD001: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'ME01',
                },
                COD003: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'SA01',
                },
                COD002: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'AT01',
                },
                DES002: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Attrezzista',
                },
                DES003: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Saldatore',
                },
              },
              id: '5',
              object: '',
              readOnly: true,
            },
            {
              cells: {
                XXPRIO: {
                  data: {
                    size: 1,
                    helperEnabled: false,
                    maxLength: 1,
                    integers: 1,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: 'NR',
                  },
                  value: '2',
                },
                DATPREF: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-07-20',
                },
                COLDET: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: '#FF0000',
                },
                DES001: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Manutentore',
                },
                XXBACI: {
                  data: {
                    size: 5,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 5,
                  },
                  isEditable: false,
                  obj: {
                    p: 'XBA',
                    t: 'TA',
                  },
                  value: 'COLEL',
                },
                DATPREI: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-05-10',
                },
                DATINI: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-06-12',
                  displayedValue: '12/06/2023',
                },
                CODFAS: {
                  data: {
                    size: 15,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 15,
                  },
                  isEditable: false,
                  obj: {
                    p: 'XDP',
                    t: 'TA',
                  },
                  value: '02241',
                  displayedValue: '02241',
                },
                DATFIN: {
                  data: {
                    size: 8,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 8,
                  },
                  isEditable: false,
                  obj: {
                    p: '*YYMD',
                    t: 'D8',
                  },
                  value: '2023-07-15',
                  displayedValue: '15/07/2023',
                },
                XXSKIL: {
                  data: {
                    size: 3,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 3,
                  },
                  isEditable: false,
                  obj: {
                    p: 'X02SKI',
                    t: 'V4',
                  },
                  value: 'MEC',
                },
                COD001: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'MA01',
                },
                COD003: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'AT01',
                },
                COD002: {
                  data: {
                    size: 10,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 10,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'ME01',
                },
                DES002: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Meccanico',
                },
                DES003: {
                  data: {
                    size: 30,
                    helperEnabled: false,
                    hiddenCounter: true,
                    maxLength: 30,
                  },
                  isEditable: false,
                  obj: {
                    p: '',
                    t: '',
                  },
                  value: 'Attrezzista',
                },
              },
              id: '6',
              object: '',
              readOnly: true,
            },
          ],
        },
        detailColorCol: 'COLDET',
        detailColumns: ['CODFAS', 'DATINI', 'DATFIN'],
        detailDates: ['DATINI', 'DATFIN'],
        detailIdCol: 'CODFAS',
        detailNameCol: 'CODFAS',
        detailPrevDates: [],
        listCellWidth: '300px',
        maxWidth: '100%',
        phaseColorCol: 'COLFAS',
        phaseColumns: ['DATINI', 'DATFIN'],
        phaseColParDep: 'FASDIP',
        phaseDates: ['DATINI', 'DATFIN'],
        phaseIdCol: 'CODFAS',
        phaseNameCol: 'DESFAS',
        phasePrevDates: [],
        readOnly: false,
        showSecondaryDates: false,
        taskColumns: ['R§COMM', 'R£COMM'],
        taskDates: ['DATINZ', 'DATPRE'],
        taskIdCol: 'R§COMM',
        taskNameCol: 'R£COMM',
        taskPrevDates: [],
        titleMess: '',
        taskHeight: 100,
        detailHeight: 70,
      },
    };
  },
};
</script>
