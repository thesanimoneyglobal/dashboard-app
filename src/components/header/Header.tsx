import {Box, Typography} from "@mui/material";
import {useColorMode} from "../../common/theme/hooks/useMode.ts";
import {tokens} from "../../common/theme/getPalette.ts";
import styles from '././header.module.scss'

interface Props {
    title: string,
    subtitle: string
}

function Header({title, subtitle}: Props) {
    const {mode} = useColorMode()
    const colors = tokens(mode)

    return <>
        <Box className={styles.container}>
            <Typography className={styles.MuiTypographyH2} color={colors.grey[100]} variant={'h2'}>
            {title}
        </Typography>
            <Typography color={colors.greenAccent[300]} variant={'body1'}>
                {subtitle}
            </Typography>
        </Box>
    </>
}

export default Header;