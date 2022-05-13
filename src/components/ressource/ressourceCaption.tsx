import React from "react";
import { Box, Typography } from "@mui/material";
import { formatTimestamp } from "../../utils/dateFormat";
import { CaptionRessourceCard } from "../../utils/types/ressource";

const RessourceCaption = ({
  author,
  updatedAt,
}: CaptionRessourceCard): JSX.Element => {
  return (
    <Box textAlign="end">
      {author ? (
        <Typography
          variant="caption"
          style={{ display: "inline-block", whiteSpace: "pre-line" }}
        >
          {author},
        </Typography>
      ) : (
        <></>
      )}
      <Typography
        variant="caption"
        style={{ display: "inline-block", whiteSpace: "pre-line" }}
      >
        {formatTimestamp(updatedAt)}
      </Typography>
    </Box>
  );
};

export default RessourceCaption;
