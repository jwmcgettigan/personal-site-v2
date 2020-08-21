/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { useTable, useRowSelect } from 'react-table';
import moment from 'moment';

// Import components
import Main from 'modules/common/Main';

// Import helpers
import { elevate, mq, color } from 'helpers';
import { useRef, useEffect, forwardRef } from 'react';

const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate]);

    return <input type="checkbox" ref={resolvedRef} {...rest} />;
  }
);

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
}

const PageTable = ({ columns, data, setSelectedPage }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds },
  } = useTable({
    columns,
    data,
  },
  useRowSelect,
  hooks => {
    hooks.visibleColumns.push(columns => [
      // Let's make a column for selection
      {
        id: 'selection',
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            {/* <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} /> */}
          </div>
        ),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => {
          if(rows.filter(row => row.isSelected).length < 1 || row.isSelected) {
            return (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            )
          } else {
            return (
              <div>
                <IndeterminateCheckbox checked={false} readOnly style={row.getToggleRowSelectedProps().style} />
              </div>
            )
          }
        },
      },
      ...columns,
    ])
  });


  const selectedRow = rows.filter(row => row.isSelected)[0];
  if(selectedRow != null) {
    setSelectedPage(data[selectedRow.index]);
  }

  const style = theme => css`
    border-spacing: 0;
    border: 1px solid black;
    color: black;
    background: white;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  `;

  return (
    <table css={style} {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default PageTable;