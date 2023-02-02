import styled from "@emotion/styled";
import { Fab } from "@mui/material";

export const CustomFab = styled(Fab)(({ theme  }) => ({
    "&.MuiFab-root": {
      backgroundColor: theme['indigo'].main,
      color: theme['indigo'].light,
    },
    "&.MuiFab-root:hover": {
      backgroundColor: theme['indigo'].light,
      color: theme['indigo'].main,
    }
  }));
  