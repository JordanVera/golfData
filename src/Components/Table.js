import React, { useEffect } from 'react';
import { Table, Button, Image } from 'react-bootstrap';
import { useTable, useSortBy, usePagination } from 'react-table';
import classNames from 'classnames';
import SpinnerCustom from './Spinner.js';

export default function TableMain({ players, setSelectedPlayer, loading }) {
  const checkIfValueIsNumberAndRound = (x) =>
    typeof x === 'number' ? x.toFixed(2) : 'n/a';

  const data = React.useMemo(() => [...players], [players]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Rank',
        accessor: 'owgr_rank', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        accessor: 'player_name',
        Cell: (props) => (
          <>
            <Image
              src={`/images/flags/${props.cell.row.original.country}.png`}
              className="countryFlag"
            />{' '}
            {props.cell.row.original.player_name.split(',').reverse().join(' ')}
          </>
        ),
      },
      {
        Header: 'SG APP',
        accessor: 'stats.sg_app',
        Cell: (props) =>
          checkIfValueIsNumberAndRound(props.cell.row.original.stats.sg_app),
      },
      {
        Header: 'SG ARG',
        accessor: 'stats.sg_arg',
        Cell: (props) =>
          checkIfValueIsNumberAndRound(props.cell.row.original.stats.sg_arg),
      },
      {
        Header: 'SG OTT',
        accessor: 'stats.sg_ott',
        Cell: (props) =>
          checkIfValueIsNumberAndRound(props.cell.row.original.stats.sg_ott),
      },
      {
        Header: 'SG PUTT',
        accessor: 'stats.sg_putt',
        Cell: (props) =>
          checkIfValueIsNumberAndRound(props.cell.row.original.stats.sg_putt),
      },
      {
        Header: 'SG TOTAL',
        accessor: 'stats.sg_total',
        Cell: (props) =>
          checkIfValueIsNumberAndRound(props.cell.row.original.stats.sg_total),
      },
      {
        Header: 'Skill Estimate',
        accessor: 'dg_skill_estimate',
        Cell: (props) =>
          typeof props.cell.row.original.dg_skill_estimate === 'number'
            ? props.cell.row.original.dg_skill_estimate.toFixed(2)
            : props.cell.row.original.dg_skill_estimate,
      },
      {
        Header: 'Stats',
        accessor: 'stats_button',
        Cell: (props) => (
          <Button
            size="sm"
            variant="success"
            onClick={() => setSelectedPlayer(props.cell.row.original)}
          >
            Stats
          </Button>
        ),
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
    setPageSize(50);
  }, []);
  return loading ? (
    <SpinnerCustom />
  ) : (
    <>
      <Table id="leaderboardTable" responsive {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr className="text-center" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
          {page.map((row, index) => {
            const rowClassName = classNames('tableRow text-center', {
              'table-dark': index % 2 === 1,
              'table-primary': index % 2 === 0,
            });

            prepareRow(row);

            return (
              <tr {...row.getRowProps()} className={rowClassName}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
