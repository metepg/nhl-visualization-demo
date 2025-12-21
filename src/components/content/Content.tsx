import React, { useState } from "react";
import {
  Table,
  TableBody,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from "@mui/material";
import TableBodyContent from "./table-body-content/TableBodyContent.tsx";
import TableHeaders from "./table-headers/TableHeaders.tsx";
import { Player } from "../../models/Player.ts";
import { Game } from "../../models/GameData.ts";
import { Filters } from "../../models/Filters.ts";


interface Props {
  games: Game[];
  filters: Filters;
  playersById?: Map<number, Player>;
}

const Content: React.FC<Props> = ({ games, filters, playersById }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const visibleGames =
    rowsPerPage > 0
      ? games.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : games;

  const tableHeaderStyles = {
    [`& .${tableCellClasses.root}`]: {
      borderBottom: '1px solid var(--black)',
      padding: '5px 0',
      fontSize: 'var(--font-size-normal)',
    },
  };

  const tableBodyStyles = {
    [`& .${tableCellClasses.root}`]: {
      borderBottom: 'none',
      padding: '0 5px',
      cursor: 'pointer',
    },
  };

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ): void => {
    if (!event) return;
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={games.length}
        labelRowsPerPage="Games per page"
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />

      <TableContainer sx={{ overflowX: 'unset' }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow sx={tableHeaderStyles}>
              <TableHeaders />
            </TableRow>
          </TableHead>
          <TableBody sx={tableBodyStyles}>
            {visibleGames.map(game => (
              <TableBodyContent
                key={game.start}
                filteredGame={game}
                filters={filters}
                playersById={playersById}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Content;
