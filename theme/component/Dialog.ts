import styled from "@emotion/styled";
import { DialogTitle } from "@mui/material";

export const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  "&.MuiDialogTitle-root": {
    color: theme['indigo'].main,
    fontWeight:600
  },
}));
