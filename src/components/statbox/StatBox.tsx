import {Box, Stack, Typography} from "@mui/material";
import Circle from "../Circle.tsx";
import {useColors} from "../../common/theme/hooks/useMode.ts";
import AddCommas from "../../services/AddCommas.ts";
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsIcon from '@mui/icons-material/Directions';
import React from "react";
import styles from '../statbox/statbox.module.scss'
type Icon = 'emails' | 'sales' | 'clients' | 'traffic'

interface Props {
    progress: number,
    increase: number,
    icon: Icon,
    total: number,
    subtitle: string
}

interface Icons {
    [key: string]: React.ReactElement
}

function StatBox({progress, increase, total, icon, subtitle}: Props) {
    const icons: Icons = { // Use an object instead of an array
        'emails': <EmailIcon />,
        'sales': <PointOfSaleIcon/>,
        'clients': <PersonIcon />,
        'traffic': <DirectionsIcon/>,
    };

    const colors = useColors()
    return <>
        <Box className={styles.container} bgcolor={colors.primary[400]}>
            <Stack className={styles.stats}>
                {React.cloneElement(icons[icon], {style: {color: colors.greenAccent[300]} })}
                <Typography className={styles.heading} color={colors.grey[200]} variant={'h3'}>{AddCommas(total)}</Typography>
                <Typography color={colors.greenAccent[300]} variant={'body1'}>{subtitle}</Typography>
            </Stack>
            <Stack className={styles.progress}>
                <Circle size={40} progress={progress}/>
                <Typography className={styles.increaseText} color={colors.greenAccent[300]} variant={'body2'}>+{increase}%</Typography>
            </Stack>
        </Box>
    </>
}

export default StatBox;