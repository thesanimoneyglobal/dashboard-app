import Header from "../components/header/Header.tsx";
import Transactions from "../components/transactions/Transactions.tsx";
import {Box} from "@mui/material";

function TransactionsPage() {
    return <>
        <Header title={'Transactions'} subtitle={'Explore tecent transactions'}/>
        <Box mt={2} width={{lg: '80%'}}>
            <Transactions limit={20}/>
        </Box>
    </>
}

export default TransactionsPage;