import useTransactions from "../../hooks/useTransactions.ts";
import {useColors} from "../../common/theme/hooks/useMode.ts";
import {Box, ListItem, Typography} from "@mui/material";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import styles from '../transactions/transactions.module.scss'
interface Props {
    limit: number
}
function Transactions({limit = 20}:Props) {
    const colors = useColors()
    const {data} = useTransactions({limit: limit})
    const sx = {bgcolor: colors.blueAccent[700],
        color: colors.primary[100], maxWidth: '20%',
        borderRadius: 1,
        justifyContent: 'center',
        '&:hover': {backgroundColor: colors.blueAccent[600]}}

    return <>
        <Box>
            <Box className={styles.container}>
                <Typography variant={'h5'}>Recent Transactions</Typography>
            </Box>
           <List>
               {data?.map((el, index) => <ListItem className={styles['list-item']} key={index}>
                   <ListItemIcon>
                       <AttachMoneyIcon sx={{color: colors.greenAccent[300]}}/>
                   </ListItemIcon>
                   <ListItemText primary={`ID: ${el.id}`} secondary={el.title}/>
                   <ListItemButton sx={sx}>Details</ListItemButton>
               </ListItem>)}

           </List>
        </Box>
    </>
}

export default Transactions;