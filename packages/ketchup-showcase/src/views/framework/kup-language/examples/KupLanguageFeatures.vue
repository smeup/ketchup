<template>
  <div>
    <div class="demo-wrapper">
      <kup-accordion id="accordion">
        <div class="accordion-slot" slot="1">
          <p>
            <span class="code-word">register(component): void</span><br />
            Registers a KupComponent in KupLanguage, in order to be
            automatically refreshed whenever the language changes.<br /><br />
            - <strong>component (any)</strong> - The Ketchup component to be
            registered.<br /> </p
        ></div>
        <div class="accordion-slot" slot="2">
          <p>
            <span class="code-word">getLanguages(): string[]</span><br />
            Gets the name of all available languages and variants.<br />
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-chip id="languages"></kup-chip>
            </div> </div
        ></div>
        <div class="accordion-slot" slot="3">
          <p>
            <span class="code-word">set(language): void</span><br />
            Changes the current Ketchup language to the one provided.<br />
            If the language argument contains a "_", a combo of language and
            variant will be assumed.<br /><br />
            - <strong>language (string)</strong> - The new language. If not
            present in the languages JSON, this function will keep the previous
            language.<br />
          </p>
          <div class="demo-container">
            <div class="kup-container">
              <kup-combobox
                id="language-selector"
                is-select
                @kup-combobox-change="updateLanguage"
              ></kup-combobox>
            </div> </div
        ></div>
        <div class="accordion-slot" slot="4">
          <p>
            <span class="code-word"
              >decodeLanguage(language): KupLanguageDecode</span
            ><br />
            Checks whether the language is a combination of main language and
            variant (separated by "_"), returning them splitted in an object.<br /><br />
            - <strong>language (string)</strong> - Language to check.<br /> </p
        ></div>
        <div class="accordion-slot" slot="5">
          <p>
            <span class="code-word">translate(key, language?): string</span
            ><br />
            Translates the string to the given language. When translation fails,
            the key will be displayed in place of the string - this way it will
            be easier to correct missing string-key bounds.<br /><br />
            - <strong>key (KupLanguageKey)</strong> - Key of a string to be
            translated.<br />
            - <strong>language (string)</strong> - Language to translate the
            string to. When not provided, KupLanguage current language will be
            used.<br /><br />Below a table with every possible key-language
            combination available.<br />Note that only italian and english
            translations are accurate and not machine-made.<br />
            You're welcome to send us a pull request with your own corrections
            on GitHub!
          </p>
          <div class="demo-container">
            <div class="kup-container" style="padding: 0">
              <kup-data-table id="translations"></kup-data-table>
            </div> </div
        ></div>
        <div class="accordion-slot" slot="6">
          <p>
            <span class="code-word">unregister(component): void</span><br />
            Unregisters a KupComponent, so it won't be refreshed when the
            language changes.<br /><br />
            - <strong>component (any)</strong> - The Ketchup component to be
            unregistered.<br /> </p></div
      ></kup-accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { KupDom } from '@sme.up/ketchup/dist/types/managers/kup-manager/kup-manager-declarations';
import { KupListNode } from '@sme.up/ketchup/dist/types/components/kup-list/kup-list-declarations';
import { KupComboboxEventPayload } from '@sme.up/ketchup/dist/types/components/kup-combobox/kup-combobox-declarations';
import {
  KupDataColumn,
  KupDataRow,
} from '@sme.up/ketchup/src/managers/kup-data/kup-data-declarations';
import { KupDataCell } from '@sme.up/ketchup/dist/types/managers/kup-data/kup-data-declarations';
import { KupChipNode } from '@sme.up/ketchup/dist/types/components/kup-chip/kup-chip-declarations';

var accordion: HTMLKupAccordionElement = null;
var combobox: HTMLKupComboboxElement = null;
var languagesChip: HTMLKupChipElement = null;
var translations: HTMLKupDataTableElement = null;

const dom: KupDom = document.documentElement as KupDom;

export default {
  name: 'KupLanguageFeatures',
  data() {
    return {};
  },
  methods: {
    /**
     * Initializes Vue component's variables.
     */
    initVariables(): void {
      accordion = document.querySelector('#accordion');
      combobox = document.querySelector('#language-selector');
      languagesChip = document.querySelector('#languages');
      translations = document.querySelector('#translations');
    },
    /**
     * Initializes the widgets by setting all the values to the related components.
     */
    initWidgets(): void {
      accordion.data = {
        columns: [
          {
            name: '1',
            title: 'register',
          },
          {
            name: '2',
            title: 'getLanguages',
          },
          {
            name: '3',
            title: 'set',
          },
          {
            name: '4',
            title: 'decodeLanguage',
          },
          {
            name: '5',
            title: 'translate',
          },
          {
            name: '6',
            title: 'unregister',
          },
        ],
      };
      const languages: string[] = dom.ketchup.language.getLanguages();
      const keys = Object.keys(dom.ketchup.language.list['english'].keys);
      const languagesChipData: KupChipNode[] = [];
      const languagesListData: KupListNode[] = [];
      for (let index = 0; index < languages.length; index++) {
        languagesChipData.push({
          id: languages[index],
          value: languages[index],
        });
        languagesListData.push({
          id: languages[index],
          selected:
            languages[index] === dom.ketchup.dates.locale ? true : false,
          value: languages[index],
        });
      }
      combobox.data = {
        'kup-list': { data: languagesListData },
        'kup-text-field': {
          label: dom.ketchup.language.translate('debugLanguageChanger' as any),
        },
      };
      combobox.initialValue = dom.ketchup.language.name;
      languagesChip.data = languagesChipData;
      const columns: KupDataColumn[] = [
        {
          cssClass: 'strong-text',
          name: 'KEYS',
          icon: 'key-variant',
          title: 'Keys',
        },
      ];
      const rows: KupDataRow[] = [];
      for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        const row: KupDataRow = {
          cells: {
            KEYS: {
              style: { borderRight: '1px solid var(--kup-border-color)' },
              value: key,
            },
          },
        };
        for (let j = 0; j < languages.length; j++) {
          const language = languages[j];
          if (index === 0) {
            const column: KupDataColumn = {
              name: language.toUpperCase(),
              title: language,
            };
            columns.push(column);
          }
          const decode = dom.ketchup.language.decodeLanguage(language);
          const isVariant = !!decode.variant;
          const value = dom.ketchup.language.translate(key as any, language);
          let emptyValue = false;
          if (
            isVariant &&
            value ===
              dom.ketchup.language.translate(key as any, decode.language)
          ) {
            emptyValue = true;
          }
          const cell: KupDataCell = {
            value: emptyValue ? '' : value,
          };
          row.cells[language.toUpperCase()] = cell;
        }
        rows.push(row);
      }
      translations.data = {
        columns: columns,
        rows: rows,
      };
      translations.enableColumnsFormula = false;
      translations.fixedColumns = 1;
      translations.globalFilter = true;
      translations.removableColumns = true;
      translations.rowsPerPage = 10000;
      translations.scrollOnHover = true;
      translations.selection = 'none' as any;
      translations.showFilters = true;
      translations.showFooter = true;
      translations.showGrid = 'None' as any;
      accordion.expandAll();
    },
    /**
     * Updates the library language.
     * @param {CustomEvent<KupComboboxEventPayload>} e - Event fired when a new language is set.
     */
    updateLanguage(e: CustomEvent<KupComboboxEventPayload>) {
      const comp = e.detail.comp;
      dom.ketchup.language.set(e.detail.value);
      comp.data['kup-text-field'].label = dom.ketchup.language.translate(
        'debugLanguageChanger' as any
      );
      comp.refresh();
    },
  },
  mounted() {
    this.initVariables();

    if (dom.ketchup) {
      this.initWidgets();
    } else {
      document.addEventListener('kup-manager-ready', this.initWidgets);
    }
  },
  destroyed() {
    document.removeEventListener('kup-manager-ready', this.initWidgets);
  },
};
</script>

<style lang="scss" scoped>
kup-data-table {
  width: 100%;
}
</style>
