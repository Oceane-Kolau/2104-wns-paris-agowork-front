import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, MoreVert } from "@mui/icons-material";
import { Box } from "@mui/system";
import { formatTimestamp } from "../../utils/dateFormat";

const RessourceCard = ({ ...ressource }: any): JSX.Element => {
  
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            {ressource.tags?.map((tag: string) => (
              <Box
                component="span"
                sx={{ p: 1, m: 1, border: "1px dashed grey" }}
              >
                <Typography>{tag}</Typography>
              </Box>
            ))}
          </Box>
          <Typography variant="h2">{ressource.title}</Typography>
          {ressource.link ? (
            <Typography variant="body2" color="text.secondary">
              <a href={ressource.link} target="_blank">
                {ressource.link}
              </a>
            </Typography>
          ) : (
            <></>
          )}
        </CardContent>
        <CardContent>
          <Typography paragraph>{ressource.description}</Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <Box>
            <Typography variant="subtitle1">{ressource.author}</Typography>
            <Typography variant="subtitle2">
              {formatTimestamp(ressource.updatedAt)}
            </Typography>
          </Box>
          <IconButton aria-label="share">
            <MoreVert />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RessourceCard;
