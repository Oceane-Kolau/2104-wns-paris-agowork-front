import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, MoreVert } from "@mui/icons-material";
import { formatTimestamp } from "../../utils/dateFormat";
import { CardTitle, Paragraph } from "../../assets/styles/list/list";

const RessourceCard = ({ ...ressource }: any): JSX.Element => {
  return (
    <Grid item xs={10} sm={6} md={4} lg={3} xl={3}>
        <Card sx={{ maxWidth: 400 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              {ressource.tags?.map((tag: string) => (
                <Box
                  key={tag}
                  component="span"
                  sx={{ p: 1, m: 1, border: "1px dashed grey" }}
                >
                  <Typography>{tag}</Typography>
                </Box>
              ))}
            </Box>
            <CardTitle>{ressource.title}</CardTitle>
            {ressource.link ? (
              <Typography variant="body2" color="text.secondary">
                <a
                  href={ressource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ressource.link}
                </a>
              </Typography>
            ) : (
              <></>
            )}
          </CardContent>
          <CardContent>
            <Paragraph>{ressource.description}</Paragraph>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <Box>
              <Typography variant="subtitle1">{ressource.author}</Typography>
              <Paragraph>{formatTimestamp(ressource.updatedAt)}</Paragraph>
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
