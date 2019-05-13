import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'ketchup-data-table',
    styleUrl: 'ketchup-data-table.scss',
    shadow: true,
})
export class KetchupDataTable {
    @Prop() data: { data?: { columns?: Array<any>; rows?: Array<any> } };

    private _getColumns(): Array<any> {
        return this.data && this.data.data && this.data.data.columns
            ? this.data.data.columns
            : [
                  {
                      title: '',
                  },
              ];
    }

    private _getRows() {
        return this.data && this.data.data && this.data.data.rows
            ? this.data.data.rows
            : [];
    }

    render() {
        // preparing header
        const header = this._getColumns().map((column) => {
            return <th>{column.title}</th>;
        });

        let rows;
        if (this._getRows().length === 0) {
            rows = (
                <tr>
                    <td colSpan={this._getColumns().length}>Empty data</td>
                </tr>
            );
        } else {
            rows = this._getRows().map((row) => {
                const cells = this._getColumns().map(({ name }) => {
                    return <td>{row.cells[name].value}</td>;
                });

                return <tr>{cells}</tr>;
            });
        }

        return (
            <div>
                <table>
                    <thead>
                        <tr>{header}</tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}
