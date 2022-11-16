import { useTable, useSortBy, usePagination } from 'react-table';
import SpinnerCustom from '../Spinner.js';
import React, { useEffect } from 'react';
import { Table, Button, Image } from 'react-bootstrap';
import classNames from 'classnames';

export default function BaselineTable({ baselineData, loading }) {
  const turnDecimalIntoPercentage = (x) =>
    typeof x === 'number' ? `${Math.round(x * 100)}%` : 'n/a';

  const data = React.useMemo(() => [...baselineData], [baselineData]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Player',
        accessor: 'player_name', // accessor is the "key" in the data
        Cell: (props) => (
          <>
            {props.cell.row.original.player_name.split(',').reverse().join(' ')}
          </>
        ),
      },
      {
        Header: 'Make Cut',
        accessor: 'make_cut',
        Cell: (props) =>
          turnDecimalIntoPercentage(props.cell.row.original.make_cut),
      },
      {
        Header: 'Top 20',
        accessor: 'top_20',
        Cell: (props) =>
          turnDecimalIntoPercentage(props.cell.row.original.top_20),
      },
      {
        Header: 'Top 10',
        accessor: 'top_10',
        Cell: (props) =>
          turnDecimalIntoPercentage(props.cell.row.original.top_20),
      },
      {
        Header: 'Top 5',
        accessor: 'top_5',
        Cell: (props) =>
          turnDecimalIntoPercentage(props.cell.row.original.top_20),
      },
      {
        Header: 'Win',
        accessor: 'win',
        Cell: (props) =>
          turnDecimalIntoPercentage(props.cell.row.original.top_20),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, useSortBy, usePagination);

  useEffect(() => {
    setPageSize(100);
  }, []);
  return loading ? (
    <SpinnerCustom />
  ) : (
    <>
      <Table id="leaderboardTable" responsive {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr
              key={i + 1}
              {...headerGroup.getHeaderGroupProps()}
              className="text-center"
            >
              {headerGroup.headers.map((column, y) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={y + 1}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            const rowClassName = classNames('tableRow text-center', {
              'table-dark': i % 2 === 1,
              'table-primary': i % 2 === 0,
            });
            prepareRow(row);

            return (
              <tr key={i + 1} {...row.getRowProps()} className={rowClassName}>
                {row.cells.map((cell, y) => {
                  return (
                    <td {...cell.getCellProps()} key={y + 1}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="pagination">
        <div className="center"></div>
        <Button
          variant="success"
          size="sm"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </Button>{' '}
        <Button
          variant="success"
          size="sm"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </Button>{' '}
        <Button
          variant="success"
          size="sm"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </Button>{' '}
        <Button
          variant="success"
          size="sm"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </Button>{' '}
        <div className="pageCounter">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </div>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[25, 50, 100, 500].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
