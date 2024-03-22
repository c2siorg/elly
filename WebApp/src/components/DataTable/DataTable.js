import React from "react";
import MaterialTable from "material-table";

/**
 * DataTable component renders a MaterialTable with specified props.
 * @param {Object} props - Component properties.
 * @param {Array} props.columns - Table columns configuration.
 * @param {Array} props.data - Table data.
 * @param {string} props.title - Table title.
 * @param {function} props.onRowAdd - Callback for adding a row.
 * @param {function} props.onRowUpdate - Callback for updating a row.
 * @param {function} props.onRowDelete - Callback for deleting a row.
 * @param {boolean} props.search - Enable or disable search functionality.
 * @param {boolean} props.grouping - Enable or disable grouping functionality.
 * @param {boolean} props.exportButton - Enable or disable export button.
 * @param {boolean} props.paging - Enable or disable paging.
 * @param {boolean} props.selection - Enable or disable row selection.
 * @param {boolean} props.sorting - Enable or disable sorting.
 * @param {Array} props.actions - Custom actions for the table.
 * @returns {JSX.Element} - MaterialTable component.
 */
export default function DataTable(props) {
  const {
    columns,
    data,
    title,
    onRowAdd,
    onRowUpdate,
    onRowDelete,
    search,
    grouping,
    exportButton,
    paging,
    selection,
    sorting,
    actions,
  } = props;

  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      options={{
        search: search,
        grouping: grouping,
        exportButton: exportButton,
        actionsColumnIndex: -1,
        paging: paging,
        selection: selection,
        sorting: sorting,
      }}
      editable={{
        onRowAdd: onRowAdd,
        onRowUpdate: onRowUpdate,
        onRowDelete: onRowDelete,
      }}
      actions={actions}
    />
  );
}
