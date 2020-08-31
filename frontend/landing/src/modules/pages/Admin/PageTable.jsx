/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core';
import React, { useState, useMemo } from 'react';
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

const PageTable = ({ data, setSelectedPage }) => {
  const [selectedRow, setSelectedRow] = useState(0);
  setSelectedPage(data[selectedRow]);
  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: '_id',
      filterable: true,
    },
    {
      Header: 'Title',
      accessor: 'title',
      filterable: true,
    },
    {
      Header: 'Categories',
      accessor: 'categories',
      Cell: props => <span>{props.value.join(' , ')}</span>,
    },
    {
      Header: 'Tags',
      accessor: 'tags',
      Cell: props => <span>{props.value.join(' , ')}</span>,
    },
    {
      Header: 'Updated',
      accessor: 'updatedAt',
      filterable: true,
      Cell: props => <span>{moment(props.value).format('h:mm a, MMMM Do YYYY')}</span>,
    }
  ], []);
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    }
  );

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

    tbody > tr:hover {
      cursor: pointer;
      color: blue;

      td {
        //border-bottom: 3px solid red;
        //border-right: 3px solid red;
        ${elevate(-4)};
      }
    }
  `;

  const selectedRowStyle = css`
    background: pink;
    ${elevate(-4)};
  `;

  const selectRowAndPage = (i) => {
    setSelectedRow(i);
    setSelectedPage(data[i]);
  }

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
            <tr onClick={() => selectRowAndPage(i)} {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td css={selectedRow===i ? selectedRowStyle : ''} {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default PageTable;