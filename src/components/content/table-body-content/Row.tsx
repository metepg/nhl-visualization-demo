import {Box, Collapse, IconButton, TableCell, TableRow} from "@mui/material";
import React, {ReactElement, useState} from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface TableRowValues {
    date: string;
    game: string;
    period1: ReactElement,
    period2: ReactElement,
    period3: ReactElement,
    OT: ReactElement,
    SO: ReactElement,
    result: ReactElement,
    expandedContent: ReactElement
}
interface Props {
    game: TableRowValues;
}
const Row: React.FC<Props> = ({game}) => {
    const [open, setOpen] = useState(false);
    const tableRowStyles = {
        '&:hover': {
            backgroundColor: 'var(--light-grey)'
        }



        
    };

    return(
    <React.Fragment key={game.date}>
        <TableRow onClick={() => setOpen(!open)} sx={tableRowStyles}>
            <TableCell align="center" width="60px" sx={{fontSize: 'var(--font-size-normal)'}}>{game.date}</TableCell>
            <TableCell align="center" width="75px" sx={{fontSize: 'var(--font-size-normal)'}}>{game.game}</TableCell>
            <TableCell align="center" width="223px" sx={{fontSize: 'var(--font-size-normal)'}}>{game.period1}</TableCell>
            <TableCell align="center" width="223px" sx={{fontSize: 'var(--font-size-normal)'}}>{game.period2}</TableCell>
            <TableCell align="center" width="223px" sx={{fontSize: 'var(--font-size-normal)'}}>{game.period3}</TableCell>
            <TableCell align="center" width="58px" sx={{fontSize: 'var(--font-size-normal)'}}>{game.OT}</TableCell>
            <TableCell align="center" width="25px" sx={{fontSize: 'var(--font-size-normal)'}}>{game.SO}</TableCell>
            <TableCell align="center" width="62px" sx={{fontSize: 'var(--font-size-normal)'}}>{game.result}</TableCell>

            {/*This is the last column expand button*/}
            <TableCell align="center" width="30px">
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                    sx={{borderRadius: '0', border: '1px solid var(--black)', padding: 0}}
                >
                    {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                </IconButton>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{margin: 1}}>
                        {game.expandedContent}
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </React.Fragment>
    )
}

export default Row;
