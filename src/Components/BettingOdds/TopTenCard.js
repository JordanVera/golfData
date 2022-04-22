import React from 'react';
import { Card, Table, Row, Col, Button } from 'react-bootstrap';
import SpinnerCustom from '../Spinner.js';
import classNames from 'classnames';
import { useTable, useSortBy, usePagination } from 'react-table';

export default function TopTenCard({ event, loading }) {
  // console.log(event, 'event');
  const data = React.useMemo(() => {
    if (!event.odds) return [];

    const ary = [];
    event.odds.forEach((odd) => {
      if (odd.draftkings)
        ary.push({ odds: odd.draftkings, player_name: odd.player_name });
    });
    return ary;
  }, [event.odds]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'player_name', // accessor is the "key" in the data
      },
      {
        Header: 'Odds',
        accessor: 'odds',
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

  return loading ? (
    <SpinnerCustom />
  ) : (
    <Card className="my-4">
      <Card.Header>
        <Row>
          <Col sm={3}>
            <img
              alt="dk logo"
              src="/images/dk_white.png"
              className="draftKingsLogo"
            />
          </Col>
          <Col sm={9} className="text-center">
            <Card.Title className="text-danger">
              <h4>{event.event_name}</h4>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-success">
              Last Updated: {event.last_updated}
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-center pb-2">
          TOP TEN PLACEMENT
        </Card.Subtitle>
        <Table
          striped
          bordered
          variant="dark"
          {...getTableProps()}
          style={{ border: 'solid 1px blue' }}
        >
          <thead className="tableHead">
            {headerGroups.map((headerGroup) => (
              <tr
                className="text-center"
                {...headerGroup.getHeaderGroupProps()}
              >
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
            {[5, 10, 25].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <Card.Text className="text-center">
          Draft Kings odds to win {event.event_name}
        </Card.Text>
        <Card.Link className="text-center">Bet on Odds</Card.Link>
      </Card.Body>
    </Card>
  );
}
