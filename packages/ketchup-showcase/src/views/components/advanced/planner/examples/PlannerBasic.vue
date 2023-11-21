<template>
  <div>
    <div class="demo-wrapper">
      <p
        >The Planner component is a powerful tools derived by a gantt component,
        used to help users to analize and display the planning of each
        activities</p
      >
      <div class="demo-container">
        <div class="kup-container" style="display: block">
          <kup-planner
            :data.prop="plannerProps.data"
            :listCellWidth.prop="plannerProps.listCellWidth"
            :maxWidth.prop="plannerProps.maxWidth"
            :readOnly.prop="plannerProps.readOnly"
            :showSecondaryDates.prop="plannerProps.showSecondaryDates"
            :taskColumns.prop="plannerProps.taskColumns"
            :taskDates.prop="plannerProps.taskDates"
            :taskIdCol.prop="plannerProps.taskIdCol"
            :taskNameCol.prop="plannerProps.taskNameCol"
            :taskPrevDates.prop="plannerProps.taskPrevDates"
            :titleMess.prop="plannerProps.titleMess"
          />
        </div>
      </div>
      <div class="demo-container">
        <p class="centered">Sample markup</p>
        <code class="flat">{{ markupBasic }}</code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlannerBasic',
  data() {
    return {
      markupBasic: '<kup-planner></kup-planner>',
      plannerProps: {
        customStyle: '',
        data: {
          columns: [
            {
              isEditable: false,
              isKey: false,
              name: 'R§COMM',
              obj: {
                k: '',
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
                k: '',
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
                k: '',
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
                k: '',
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
                  k: '',
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
                  k: '',
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
                k: '',
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
                k: '',
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
                k: '',
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
                k: '',
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
                k: '',
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
                k: '',
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
                k: '',
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
                  k: '',
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
                k: '',
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
                k: '',
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
                  k: '',
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
                k: '',
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
                    k: 'ACN',
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
                    k: 'ISVAL',
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
                    k: '',
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
                    k: 'CLP',
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
                    k: '1',
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
                    k: '',
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
                    k: '20231120',
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
                    k: '20230307',
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
                    k: '   178 ',
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
                    k: '20211025',
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
                    k: 'G456      ',
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
                    k: '20230307',
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
                    k: '',
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
                    k: 'G456',
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
                    k: 'G456      0001',
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
                    k: 'MVE',
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
                    k: '20211025',
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
                    k: 'MAC.FMRSI-31-150-CNC',
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
                    k: 'ISVAL S.P.A',
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
                    k: 'G456',
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
                    k: 'ACN',
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
                    k: 'ALBAN',
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
                    k: '',
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
                    k: 'CLP',
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
                    k: '1',
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
                    k: '',
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
                    k: '20230407',
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
                    k: '20221216',
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
                    k: '    21 ',
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
                    k: '20211020',
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
                    k: 'G460      ',
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
                    k: '20221216',
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
                    k: '',
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
                    k: 'G460',
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
                    k: 'G460      0001',
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
                    k: 'MVE',
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
                    k: '20211020',
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
                    k: 'MAC.FMF-7-120HS-CNC',
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
                    k: 'ALBAN GIACOMO SPA',
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
                    k: 'G460',
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
                    k: 'ACN',
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
                    k: 'RACCPE',
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
                    k: '',
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
                    k: 'CLP',
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
                    k: '1',
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
                    k: '',
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
                    k: '20230630',
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
                    k: '20230306',
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
                    k: '    21 ',
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
                    k: '20220103',
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
                    k: 'G452      ',
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
                    k: '20230306',
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
                    k: '',
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
                    k: 'G452',
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
                    k: 'G452      0001',
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
                    k: 'MVE',
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
                    k: '20220103',
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
                    k: 'MAC.FMF-12-125-150-CNC',
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
                    k: 'RACCORPE DI PE ANGELO & C SNC',
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
                    k: 'G452',
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
        listCellWidth: '300px',
        maxWidth: '100%',
        readOnly: false,
        showSecondaryDates: false,
        taskColumns: ['R§COMM', 'R£COMM'],
        taskDates: ['DATINZ', 'DATPRE'],
        taskIdCol: 'R§COMM',
        taskNameCol: 'R£COMM',
        taskPrevDates: ['INZORD', 'DATORD'],
        titleMess: '',
      },
    };
  },
};
</script>
