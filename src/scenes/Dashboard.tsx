import Header from "../components/header/Header.tsx";
import StatBox from "../components/statbox/StatBox.tsx";
import {Box, Grid, Typography} from "@mui/material";
import LineChart from "../components/LineChart.tsx";
import {useColors} from "../common/theme/hooks/useMode.ts";
import AddCommas from "../services/AddCommas.ts";
import GeoChart from "../components/GeoChart.tsx";
import BarChart from "../components/BarChart.tsx";
import PieChart from "../components/PieChart.tsx";
import Transactions from "../components/transactions/Transactions.tsx";

function Dashboard() {
    const colors = useColors()
    return <>
        <Box mb={2}>
            <Header title={'Dashboard'} subtitle={'Controlling of all statistics'}/>
        </Box>
        <Grid container mb={10}>
            <Grid container spacing={2} padding={0}>
                <Grid item flexGrow={1}>
                    <StatBox progress={30} increase={11} icon={'emails'} total={12021}
                             subtitle={'Emails Sent'}></StatBox>
                </Grid>
                <Grid flexGrow={1} item>
                    <StatBox progress={90} increase={33} icon={'sales'} total={26063}
                             subtitle={'Sales Closed'}></StatBox>
                </Grid>
                <Grid flexGrow={1} item>
                    <StatBox progress={80} increase={64} icon={'traffic'} total={312021}
                             subtitle={'Traffic Engaged'}></StatBox>
                </Grid>
                <Grid flexGrow={1} item>
                    <StatBox progress={25} increase={8} icon={'clients'} total={537} subtitle={'New Clients'}></StatBox>
                </Grid>
                <Grid spacing={2} container mt={2}>
                    <Grid lg={8} xs={12} item>
                        <Box textAlign={'start'} ml={2}>
                            <Typography variant={'h5'} color={colors.grey[300]}>Revenue Generated</Typography>
                            <Typography variant={'h3'} fontWeight={'bold'}
                                        color={colors.greenAccent[300]}>{AddCommas(52311154)}</Typography>
                        </Box>
                        <LineChart isDashboard={true} height={30}/>
                    </Grid>
                    <Grid item lg={4} xs={12} ml={{xs: 2, lg: 0}}>
                        <Box overflow={"scroll"} height={'35vh'}>
                            <Transactions limit={10}/>
                        </Box>
                    </Grid>
                </Grid>
                <Grid ml={0.5} container spacing={2} mt={2}>
                    <Grid sm={12} md={4} flexGrow={1} flexShrink={1} item>
                        <Box borderRadius={1} bgcolor={colors.primary[400]}>
                            <GeoChart size={23} isDashboard={true}></GeoChart>
                        </Box>
                    </Grid>
                    <Grid sm={12} md={4} flexGrow={1} flexShrink={1} item>
                        <Box borderRadius={1} bgcolor={colors.primary[400]}>
                            <PieChart isDashboard={true} size={23}></PieChart>
                        </Box>
                    </Grid>
                    <Grid sm={12} md={4} flexGrow={1} item>
                        <Box borderRadius={1} bgcolor={colors.primary[400]}>
                            <BarChart height={23}></BarChart>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default Dashboard;