import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  styled,
  Typography,
} from "@mui/material";
import { Favorite, MoreVert } from "@mui/icons-material";
import { GET_ALL_RESSOURCES } from "../../graphql/queries/ressource/ressource";
import { GetRessourcesType, RessourceType } from "../../types/ressources";
import { useQuery } from "@apollo/client";
import { Box } from "@mui/system";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RessourcesListing(): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);
  const {
    loading,
    error,
    data: ressources,
    refetch,
  } = useQuery<GetRessourcesType>(GET_ALL_RESSOURCES);

  const updateListing = () => {
    refetch();
  };

  if (error) {
    return <Typography>ERROR</Typography>;
  }

  const formatTimestamp = (date: Date): any => {
    return new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date);
  }
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(ressources);
  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
      {ressources?.getAllRessources.map((ressource: RessourceType) => (
        <Grid item xs={12} sm={4} md={4}>
          <Card sx={{ maxWidth: 345 }} key={ressource.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#23354" }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={ressource.author}
              subheader={formatTimestamp(ressource.updatedAt)}
            />
            <CardMedia
              component="img"
              height="194"
              image=""
              alt={ressource.title}
            />
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                {ressource.tags?.map((tag: string) => (
                  <Typography>{tag}</Typography>
                ))}
              </Box>
              <Typography>{ressource.title}</Typography>
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
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
              <IconButton aria-label="share"></IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMore expand={expanded} sx={{ color: "#23354" }} />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{ressource.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default RessourcesListing;
