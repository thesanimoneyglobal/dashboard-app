import Topbar from "./Topbar.tsx";
import Sidebard from "./Sidebar.tsx";
import {Outlet} from "react-router-dom";
import {Grid} from "@mui/material";

function Layout() {
    return <>
        <Grid container spacing={2}>
            <Grid item sm={3.5} md={3} lg={2}>
                <Sidebard/>
            </Grid>
            <Grid item sm={8.5} md={9} lg={10}>
                <Topbar/>
                <Outlet/>
            </Grid>
        </Grid>

    </>
}

export default Layout;