import {Box, IconButton, InputAdornment, Stack, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIconOutlined from '@mui/icons-material/NotificationsOutlined';
import SettingsIconOutlined from '@mui/icons-material/SettingsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import {useColorMode} from "../../common/theme/hooks/useMode.ts";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {tokens} from "../../common/theme/getPalette.ts";
function Topbar() {
    const {mode, toggleMode} = useColorMode()
    const colors = tokens(mode)

    return <>
       <Stack justifyContent={'space-between'} direction={'row'} alignItems={'center'} mb={'2rem'}>
           <Box borderRadius={'3px'} bgcolor={colors.primary['400']}>
               <TextField size={"small"} variant={'outlined'} id="outlined-basic" label="Search" InputProps={{endAdornment: (<InputAdornment position="end">
                       <IconButton><SearchIcon/></IconButton>
                       </InputAdornment>)}}/>
           </Box>
           <Box width={"130px"} display={"flex"} justifyContent={'space-between'}>
               <IconButton onClick={toggleMode}>
               {mode === 'light' ? <DarkModeOutlinedIcon  sx={{cursor: 'pointer'}}/> :
                   <LightModeOutlinedIcon sx={{cursor: 'pointer'}}/>}
           </IconButton>
               <IconButton><NotificationsIconOutlined sx={{cursor: 'pointer'}}/></IconButton>
               <IconButton><SettingsIconOutlined sx={{cursor: 'pointer'}}/></IconButton>
               <IconButton><PersonOutlineIcon sx={{cursor: 'pointer'}}/></IconButton>
           </Box>
       </Stack>
    </>
}
export default Topbar;