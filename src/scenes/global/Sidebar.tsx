import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useColorMode} from "../../common/theme/hooks/useMode.ts";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactsIcon from '@mui/icons-material/Contacts';
import {Avatar, Typography} from "@mui/material";
import Person2Icon from '@mui/icons-material/Person2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MapIcon from '@mui/icons-material/Map';
import {Link,} from "react-router-dom";
import Pathname from "../../services/Pathname.ts";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {tokens} from "../../common/theme/getPalette.ts";

export default function SelectedListItem() {

    const {mode} = useColorMode()
    const colors = tokens(mode)

    const {pathname} = Pathname()


    const listItemsData = [
        {icon: <GroupsIcon/>, text: 'Team', id: 1, link: 'team'},
        {icon: <ContactsIcon/>, text: 'Contacts', id: 2, link: 'contacts'},
    ]

    const listItemsPages = [
        {icon: <Person2Icon/>, text: 'Profile Form', id: 4, link: 'profile'},
        {icon: <CalendarMonthIcon/>, text: 'Calendar', id: 5, link: 'calendar'},
        {icon: <LiveHelpIcon/>, text: 'FAQ Page', id: 6, link: 'faq'},
        {icon: <AttachMoneyIcon/>, text: 'Transactions', id: 6, link: 'transactions'},
    ]

    const listItemsCharts = [
        {icon: <BarChartIcon/>, text: 'Bar Chart', id: 7, link: 'bar-chart'},
        {icon: <PieChartIcon/>, text: 'Pie Chart', id: 8, link: 'pie-chart'},
        {icon: <ShowChartIcon/>, text: 'Line Chart', id: 9, link: 'line-chart'},
        {icon: <MapIcon/>, text: 'Geo Chart', id: 10, link: 'geo-chart'},
    ]

    return (
        <Box sx={{display: {xs: 'none', sm: 'block'}, width: '100%', bgcolor: colors.primary[400], borderRadius: '3px', textAlign: 'left', paddingBottom: '0.5rem', paddingTop: '1rem'}}>
            <Typography sx={{md: {fontSize: '12px'}}} mb={'2rem'} pl={'0.5rem'} variant={'h2'} color={colors.grey[300]}>Data Warden</Typography>
            <Box padding={'0 0.5rem 0 0.5rem'} display={'flex'} flexDirection={'column'} alignItems={{xs: 'start', sm: 'start', md: 'start', lg: 'center'}}>
                <Avatar sx={{ bgcolor: colors.primary[700], color: colors.grey[300], width: '75px', height: '75px', fontSize: '1.5rem', mb: '0.5rem'}}>DV</Avatar>
                <Typography fontWeight={'bold'} variant={'h3'}>Darth Vader</Typography>
                <Typography color={colors.greenAccent[300]} variant={'body1'}>Associate Director</Typography>
            </Box>
            <Box>
                <List sx={{mb: '1rem'}}>
                    <Link to={''} style={{color: 'inherit', textDecoration: 'none'}}>
                        <ListItemButton selected={pathname === ''}>
                            <ListItemIcon style={{maxWidth: '25px'}}>
                                <SpaceDashboardIcon sx={{color: pathname === '' ? colors.blueAccent[300] : ''}}/>
                            </ListItemIcon>
                            <ListItemText sx={{color: pathname === '' ? colors.blueAccent[300] : ''}} primary='Dashboard'/>
                        </ListItemButton>
                    </Link>

            </List>
                <Typography color={colors.grey[200]} ml={'1rem'} variant={'body1'}>Data</Typography>
                <List sx={{mb: '1rem'}} component="nav" aria-label="main data">
                    {listItemsData.map((item, index) => <Link key={index}
                        style={{color: 'inherit', textDecoration: 'none'}} to={item.link}><ListItemButton
                        selected={pathname === item.link}
                    >
                        <ListItemIcon>
                            {React.cloneElement(item.icon, {
                                style: {
                                    color: pathname === item.link ? colors.blueAccent[300] : '',
                                }
                            })}
                        </ListItemIcon>
                        <ListItemText sx={{color: pathname === item.link ? colors.blueAccent[300] : ''}}
                                      primary={item.text}/>
                    </ListItemButton></Link>)}
                </List>
                <Typography color={colors.grey[200]} ml={'1rem'} variant={'body1'}>Pages</Typography>
                <List component="nav" aria-label="main pages">
                    {listItemsPages.map((item, index) => <Link
                        key={index}
                        style={{textDecoration: 'none', color: 'inherit'}} to={item.link}>
                        <ListItemButton
                        selected={pathname === item.link}

                    >
                        <ListItemIcon>
                            {React.cloneElement(item.icon, {
                                style: {
                                    color: pathname === item.link ? colors.blueAccent[300] : '',
                                }
                            })}
                        </ListItemIcon>
                        <ListItemText sx={{color: pathname === item.link ? colors.blueAccent[300] : ''}}
                                      primary={item.text}/>
                    </ListItemButton>
                    </Link>)}
                </List>
                <Typography color={colors.grey[200]} ml={'1rem'} variant={'body1'}>Charts</Typography>
                <List component="nav" aria-label="main pages">
                    {listItemsCharts.map((item, index) => <Link
                        key={index}
                        style={{color: 'inherit', textDecoration: 'none'}} to={item.link}>
                        <ListItemButton
                        selected={pathname === item.link}

                    >
                        <ListItemIcon>
                            {React.cloneElement(item.icon, {
                                style: {
                                    color: pathname === item.link ? colors.blueAccent[300] : '',
                                }
                            })}
                        </ListItemIcon>
                        <ListItemText sx={{color: pathname === item.link ? colors.blueAccent[300] : ''}}
                                      primary={item.text}/>
                    </ListItemButton>
                    </Link>)}
                </List>
            </Box>
        </Box>
    );
}
