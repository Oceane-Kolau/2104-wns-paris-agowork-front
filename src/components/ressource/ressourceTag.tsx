import React from "react";
import { Box, Typography } from "@mui/material";
import { Tags } from "../../utils/types/ressource";

const RessourceTag = ({ tags }: Tags): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",
        pb: 1,
      }}
    >
      {tags.map((tag: string) => (
        <Box
          key={tag}
          component="span"
          sx={{ p: 1, mr: 1, border: "1px dashed grey" }}
        >
          <Typography>{tag}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default RessourceTag;
