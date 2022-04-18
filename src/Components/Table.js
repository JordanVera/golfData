import React from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import { useTable, useSortBy } from 'react-table';
import classNames from 'classnames';
import SpinnerCustom from './Spinner.js';

export default function TableMain({ players, setSelectedPlayer, loading }) {
  // const [selectedPlayer, setSelectedPlayer] = React.useState(null);
  // console.log({ selectedPlayer });
  const columns = React.useMemo(
    () => [
      {
        Header: 'Rank',
        accessor: 'owgr_rank', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        accessor: 'player_name',
      },
      {
        Header: 'SG APP',
        accessor: 'stats.sg_app',
      },
      {
        Header: 'SG ARG',
        accessor: 'stats.sg_arg',
      },
      {
        Header: 'SG OTT',
        accessor: 'stats.sg_ott',
      },
      {
        Header: 'SG PUTT',
        accessor: 'stats.sg_putt',
      },
      {
        Header: 'SG TOTAL',
        accessor: 'stats.sg_total',
      },
      {
        Header: 'Skill Estimate',
        accessor: 'dg_skill_estimate',
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

  const data = React.useMemo(() => [...players], [players]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr className="text-center" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {loading ? (
          <SpinnerCustom />
        ) : (
          rows.map((row, index) => {
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
          })
        )}
      </tbody>
    </Table>
  );
}
