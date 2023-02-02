import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { CustomFab } from "../theme/component/Fab";
import UsreFormDialog from "./UsreFormDialog";

const EditUser = ({ data }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <CustomFab size="small" onClick={handleClickOpenDialog}>
        <EditIcon fontSize="small" />
      </CustomFab>
      <UsreFormDialog openDialog={openDialog} handleCloseDialog={handleCloseDialog} isEdit={true} data={data}/>
    </div>
  );
};

export default EditUser;
