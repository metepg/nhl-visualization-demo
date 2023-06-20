import React from 'react';
import {Autocomplete, Stack, TextField} from "@mui/material";

interface CustomSelectProps {
   content: string[];
   label: string;
   header: string;
   width: number;
   filterEvents: FilterFunction;
   filterKey: string;
}

type FilterFunction = (key: string, value: string) => void;

const CustomSelect: React.FC<CustomSelectProps> = ({content, label, header , width, filterEvents, filterKey}) => {

    return (
        <Stack sx={{width: 1060}} direction="column">
            <p style={{textAlign: 'center', fontWeight: 'bold'}}>{header}</p>
            <Autocomplete
                disablePortal
                disableClearable
                defaultValue={content[0]}
                options={content}
                onChange={(_, value) => filterEvents(filterKey, value)}
                sx={{width}}
                renderInput={(params) => <TextField {...params} label={label} />}
            />
        </Stack>
    );
};

export default CustomSelect;
