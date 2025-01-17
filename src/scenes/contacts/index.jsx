import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {mockDataContacts} from "../../data/mockData";
import Header from "../../components/Header";
const Contacts = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns =[
        {field:"id", headerName:"ID", flex:0.5},
        {field:"registrarId", headerName:"RegistrarID", flex:1},
        {field:"name", headerName:"Name", cellClassName:"name-column--cell", flex:1.5},
        {field:"age", headerName:"Age", type:"number", headerAlign:"left", align:"left", flex:0.5},
        {field:"phone", headerName:"Phone", flex:1},
        {field:"email", headerName:"Email", flex:2},
        {field:"address", headerName:"Address", flex:2},
        {field:"city", headerName:"City", flex:1},
        {field:"zipCode", headerName:"ZipCode", flex:1},
    
    ]
 return <Box m="20px">
    <Box display="flex" alignItems="center" justifyContent="space-between">
<Header title="CONTACTS" subtitle="Manage Your Contacts!" />
</Box>
<Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
            "& .MuiDataGrid-root":{
                border:"none",
            },
            "& .MuiDataGrid-cell":{
                borderBottom:"none",
            },
            
            "& .name-column--cell":{
                color: colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders":{
                backgroundColor: colors.blueAccent[700],
                borderbottom:"none"
            },
           
            "& .MuiDataGrid-footerContainer":{
                borderTop:"none",
                backgroundColor: colors.blueAccent[700]
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                color: `${colors.grey[100]} !important`
            }
            
        }}
        >
            <DataGrid 
            rows = {mockDataContacts} 
            columns = {columns} 
            components={{Toolbar: GridToolbar}}

            />
        </Box>
    </Box>
}
export default Contacts; 