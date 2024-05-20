import Header from "../components/header/Header.tsx";
import { DataGrid } from '@mui/x-data-grid';
import {Box} from "@mui/material";
import gridDataTransform from "../services/TeamData.tsx";
import {useColors} from "../common/theme/hooks/useMode.ts";
import useStoreUser from "../hooks/useTeamData.ts";


function Team() {
    const [columns] = gridDataTransform()
    const colors = useColors()
    const {teamMembers} = useStoreUser()

    return <>
        <Header title={'Team'} subtitle={'Managing the team members'}/>
        <Box height={'73vh'} mt={'2rem'} sx={{'& .MuiDataGrid-root': {border: 'none'},
            '& .MuiDataGrid-columnHeader': {backgroundColor: colors.blueAccent[700]}, '& .MuiDataGrid-footerContainer': {
        borderTop: 'none'}, '& .css-112ysrj-MuiButtonBase-root-MuiCheckbox-root.Mui-checked': {color: colors.blueAccent[300]}
        }}>
            <DataGrid
                rows={teamMembers}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
            />
        </Box>
    </>
}

export default Team;