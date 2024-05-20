import Header from "../components/header/Header.tsx";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {mockDataContacts} from "../data/mockData.ts";
import {Box} from "@mui/material";
import {useColors} from "../common/theme/hooks/useMode.ts";
import ContactsData from "../services/ContactsData.ts";

function Contacts() {
    const colors = useColors()
    const [columns] = ContactsData()

    return <>
        <Header title={'Contacts'} subtitle={'Manage Your Contacts right here'}/>
        <Box height={'73vh'} mt={'2rem'} sx={{'& .MuiDataGrid-root': {border: 'none'},
            '& .MuiDataGrid-columnHeader': {backgroundColor: colors.blueAccent[700]}, '& .MuiDataGrid-footerContainer': {
                borderTop: 'none'}, '& .css-112ysrj-MuiButtonBase-root-MuiCheckbox-root.Mui-checked': {color: colors.blueAccent[300]},
            '& .MuiDataGrid-toolbarContainer .MuiButton-text': {color: colors.grey[100]}
        }}>
            <DataGrid
                rows={mockDataContacts}
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
                slots={{toolbar: GridToolbar}}
            />
        </Box>
    </>
}

export default Contacts;