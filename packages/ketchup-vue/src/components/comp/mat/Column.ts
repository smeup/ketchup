export default class Column {
  text: string;
  code: string;
  filterValue: string;
  sortMode: string;
  align: string;

  constructor(c: any) {
    this.text = c.text;
    this.code = c.code;
    this.filterValue = c.filterValue;
    this.sortMode = c.sortMode;
    this.align = "NR" === c.ogg ? "right" : "left";
  }

  get isAscending() {
    return "A" === this.sortMode;
  }
}
