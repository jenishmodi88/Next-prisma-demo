import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CustomButton = styled(Button)(({ theme  }) => ({
    "&.MuiButton-root": {
      backgroundColor: theme['indigo'].light,
      color: theme['indigo'].main,
    },
    "&.MuiButton-root:hover": {
      backgroundColor: theme['indigo'].main,
      color: theme['indigo'].light,
    },
  }));
  