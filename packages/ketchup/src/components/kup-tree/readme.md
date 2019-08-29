# kup-tree


## Status

Work in progress

#### TODO / Clarify

1. Aggiornare il JSON del componente albero nella wiki di progettazione.
2. Controllare che i dati ed ogetti visibili nelle celle di un albero siano gli stessi che possono essere presenti all'interno di una matrice. In caso affermativo: 
   1. estrarre funzione renderCell da kup-data-table e da kup-tree;
   2. mettere quella funzione in un file esterno per il parsing delle celle;
   3. richiamare la funzione e bindarla con il this nel caso serva utilizzare il this all'interno. (eviterei il binding, può generare incomprensione)
3. La dimensione delle colonne quando il formato tabella è attivo può essere customizzata come per la matrice?  
4. Cosa succede quando la configurazione di un albero rimane la stessa ma vengono completamente cambiati i dati che ci stanno sotto (data).?
   * Mi viene da dire che se presente il flag `expanded` allora al cambiamento deve essere rianalizzato l'albero e i nodi devono essere aperti nuovamente.
5. Decidere assieme se il parametro `data` deve essere una specie di root dell'albero con alcune informazioni aggiuntive o se è sufficiente mettere i primi figli dell'albero.
   * A seconda di come viene impostato cambia come le funzioni di rendering devono essere eseguite.
6. Siccome script di mocking dei dati per i componenti sono usati sia all'interno del progetto Stencil sia all'interno dello showcase,
    può avere senso migrare questi script in un package a se stante all'interno del monorepo? Qualcosa tipo `ketchup-data-factory` che poi può essere importato da ambo i package.
7. Quando un TreeNode è disabilitato può essere aperto o chiuso dall'utente?
   * Se un nodo è disabilitato e NON può essere aperto dall'utente, può essere aperto programmaticamente dall'albero invece.
8. Nel caso in cui un nodo sia espandibile dinamicamente e debba essere espanso, sicuramente avviene lanciato un evento.
    Per il momento questo evento è il kupTreeNodeExpand, che può essere rinominato per avere un nome più affine al dynamic.
   * La vera domanda è: serve / è utile / è necessario che anche quando un nodo non abbia l'espansione dinamica
        debba essere lanciato un evento quando il TreeNode viene espanso o chiuso?
9. Ha senso oppure no uniformare il nome degli eventi lanciati quando si clicca sulle opzioni (esempio: in kup-table è kupOptionClicked, in  kup-tree è kupTreeNodeOptionClicked)?
10. Può avere senso prevedere una prop che permetta al componente di sovrascrivere le prop?\
    (La risposta a questa domanda deve essere documentata sopra al readme del componente.)\
    Questo serve per permettere il funzionamento in due modalità:
    1. Modalità compatibile con la maggior parte dei framework js attuali dove un componente non ha potere di editing su di una prop a lui passata.
    2. Modalità 'ricca', dove non è necessario aggiungere (ad esempio):
       * un proprio handler all'evento che avverte del cambio di elemento selezionato: l'elemento viene selezionato dal webcomponent e l'evento è una mera notifica.  

## Possible future development

### Keyboard support
Currently browsing, opening or closing items by using the keyboard controls is not supported.

Ideally it can be achieved by using `tabindex` for navigation and a check on the `spacebar` and `enter` keys to
open or close the TreeNodes. 

<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Type       | Default     |
| -------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| `columns`                  | --                       | The columns of the tree when tree visualization is active                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `Column[]` | `undefined` |
| `data`                     | --                       | The json data used to populate the tree view.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `TreeNode` | `undefined` |
| `dynamicExpansionCallback` | --                       | Function that gets invoked when a new set of nodes must be loaded as children of a node. Used in combination with showObjectNavigation.  When useDynamicExpansion is set, the tree component will have two different behaviors depending on the value of this prop. 1 - If this prop is set to null, no callback to download data is available:     the component will emit an event requiring the parent to load the children of the given node. 2 - If this prop is set to have a callback, then the component will automatically make requests to load children of     a given node. After the load has been completed, a different event will be fired to alert the parent of the change. | `Function` | `null`      |
| `expanded`                 | `expanded`               | Flag: the nodes of the whole tree must be already expanded upon loading.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `boolean`  | `false`     |
| `selectedNode`             | --                       | An array of integers containing the path to a selected child.\ Groups up the properties SelFirst, SelItem, SelName.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `Number[]` | `[]`        |
| `showColumns`              | `show-columns`           | Shows the tree data as a table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `boolean`  | `false`     |
| `showHeader`               | `show-header`            | Flag: shows the header of the tree when the tree is displayed as a table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `boolean`  | `false`     |
| `showIcons`                | `show-icons`             | Show the icons of the various nodes of the tree.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `boolean`  | `true`      |
| `showObjectNavigation`     | `show-object-navigation` | When a node has options in its data and is on mouse over state while this prop is true, the node must shows the cog wheel to trigger object navigation upon click.  This will generate an event to inform the navigation object has been activated.                                                                                                                                                                                                                                                                                                                                                                                                                                           | `boolean`  | `false`     |
| `useDynamicExpansion`      | `use-dynamic-expansion`  | When the component must use the dynamic expansion feature to open its nodes, it means that not all the nodes of the tree have been passed inside the data property.  Therefore, when expanding a node, the tree must emit an event (or run a given callback) and wait for the child nodes to be downloaded from the server.  For more information:                                                                                                                                                                                                                                                                                                                                            | `boolean`  | `false`     |


## Events

| Event                      | Description                                       | Type                                                               |
| -------------------------- | ------------------------------------------------- | ------------------------------------------------------------------ |
| `kupTreeNodeExpand`        | Fired when a dynamicExpansion has been triggered. | `CustomEvent<{ column: string; }>`                                 |
| `kupTreeNodeOptionClicked` | When a cell option is clicked                     | `CustomEvent<{ cell: Cell; column: Column; treeNode: TreeNode; }>` |
| `kupTreeNodeSelected`      | Fired when a node of the tree has been selected   | `CustomEvent<{ treeNodePath: Number[]; treeNode: TreeNode; }>`     |


## CSS Custom Properties

| Name                                                                           | Description                                                               |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `--tre_node--disabled_opacity, --kup-tre_node--disabled_opacity`               | The opacity of a TreeNode when disabled.                                  |
| `--tre_node-expander_color, --kup-tre_node-expander_color`                     | The TreeNode expander icon color.                                         |
| `--tre_node-icon_color, --kup-tre_node-icon_color`                             | TreeNode icon color. Applied to all TreeNodes.                            |
| `--tre_node-icon_size, --kup-tre_node-icon_size`                               | The TreeNode icon size (includes expand icon).                            |
| `--tre_node-indent_width, --kup-tre_node-indent_width`                         | Width of each single indentation of the tree.                             |
| `--tre_node_background-color--hover, --kup-tre_node_background-color--hover`   | TreeNode background color when TreeNode is hovered.                       |
| `--tre_table-header_background-color, --kup-tre_table-header_background-color` | Table header common background color.                                     |
| `--tre_table-header_color, --kup-tre_table-header_color`                       | Table header common text color.                                           |
| `--tre_table_border-bottom-color, --kup-tre_table_border-bottom-color`         | When showColumns is active, specify the border bottom color of the table. |


## Dependencies

### Depends on

- [kup-checkbox](..\kup-checkbox)
- [kup-button](..\kup-button)
- [kup-graphic-cell](..\kup-graphic-cell)

### Graph
```mermaid
graph TD;
  kup-tree --> kup-checkbox
  kup-tree --> kup-button
  kup-tree --> kup-graphic-cell
  style kup-tree fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
