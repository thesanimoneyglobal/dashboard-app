import {Box, Typography} from "@mui/material";
import { useColorMode } from "../common/theme/hooks/useMode.ts";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import {mockDataTeam} from "../data/mockData.ts";
import React from "react";
import {tokens} from "../common/theme/getPalette.ts";

interface Props {
    row: {
        access: string
    }
}

const accessIcons = [
    {key: 'user', icon: <LockOpenOutlinedIcon/>},
    {key: 'admin', icon: <AdminPanelSettingsOutlinedIcon/>},
    {key: 'manager', icon: <SecurityOutlinedIcon/>},
]

const TeamData = () => {
    const { mode } = useColorMode();
    const colors = tokens(mode);

    const transformedData = Object.keys(mockDataTeam[0]).map(key => ({
        field: key,
        headerName: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim(),
        flex: key === 'id' ? 0 : 1,
        headerClassName: 'super-header'
    }));


    const dataTransformedAccess = transformedData.map((field, index) => {
        if (field.field === 'access') {
            // noinspection JSUnusedGlobalSymbols
            return {
                ...field,
                renderCell: ({ row }: Props) => (
                    <Box key={index} alignSelf={'center'} borderRadius={'3px'} width={'100%'}
                         mr={{lg: '1.8rem', md: '0rem', sm: '1rem'}} p={'5px'} display={'flex'} justifyContent={'center'}
                         bgcolor={row.access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]}>
                            {accessIcons.map(el => el.key === row.access && React.cloneElement(el.icon, {key: index}))}
                            <Typography ml={'0.5rem'}>{row.access}</Typography>
                    </Box>
                )
            };
        }
        return field;
    });

    return [dataTransformedAccess];
}

export default TeamData;
