import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomFab } from "../theme/component/Fab";

const DeleteUser = ({ id }) => {
  const handleDeleteUser = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/delete/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CustomFab size="small" onClick={handleDeleteUser}>
      <DeleteIcon fontSize="small" />
    </CustomFab>
  );
};

export default DeleteUser;
