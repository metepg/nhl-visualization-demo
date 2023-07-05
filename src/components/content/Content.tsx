import React from "react";
import {Filters} from "../../interfaces/CustomData.ts";
import {FilteredGame} from "../../interfaces/GameData.ts";
import {Table, TableBody, tableCellClasses, TableContainer, TableHead, TableRow} from "@mui/material";
import TableBodyContent from "./table-body-content/TableBodyContent.tsx";
import TableHeaders from "./table-headers/TableHeaders.tsx";


interface ContentProps {
    games: FilteredGame[];
    filters: Filters;
}


const Content: React.FC<ContentProps> = ({games, filters}) => {
    const tableHeaderStyles = {
        [`& .${tableCellClasses.root}`]: {
            borderBottom: "1px solid var(--black)",
                padding: '5px 0',
                fontSize: '14px'
        }};

    const tableBodyStyles = {
        [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
            padding: '0 5px',
            cursor: 'pointer',
        }
    };

    return (
        <TableContainer sx={{overflowX: 'unset'}}>
            <Table aria-label="collapsible table" >
                <TableHead>
                    <TableRow sx={tableHeaderStyles}>
                        <TableHeaders />
                    </TableRow>
                </TableHead>
                <TableBody sx={tableBodyStyles}>
                    <TableBodyContent games={games} filters={filters}/>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Content
