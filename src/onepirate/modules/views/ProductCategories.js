import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import ScrollAnimation from "react-animate-on-scroll";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "33.3% !important",
    height: 200,
  },
  [theme.breakpoints.down("sm")]: {
    width: "50% !important",
    height: 200,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    title: "Men's fashion",
    width: "40%",
  },
  {
    url: "https://images.unsplash.com/photo-1574763788197-1808b6ac8142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=80",
    title: "IOS phones",
    width: "20%",
  },
  {
    url: "https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGhvbWUlMjAlMjYlMjBvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Home & Office",
    width: "40%",
  },
  {
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMCUyNiUyMG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Home & kitchen",
    width: "38%",
  },
  {
    url: "https://images.unsplash.com/photo-1610595426075-eed5a3f521ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGJlYXV0eSUyMGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Health & Personal Care",
    width: "38%",
  },
  {
    url: "https://images.unsplash.com/photo-1647982841798-96fd25019e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNhbXN1bmclMjBwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Andriod phones",
    width: "24%",
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 6 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Shop by category
      </Typography>
      <ScrollAnimation animateIn='animate__zoomInUp' animateOnce={true}>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
            <ImageIconButton
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <Link
                to={`/category/?category=${encodeURIComponent(image.title)}`}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundSize: "cover",
                    backgroundImage: `url(${image.url})`,
                  }}
                />
                <ImageBackdrop className="imageBackdrop" />
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "common.white",
                  }}
                >
                  <Typography
                    component="h3"
                    variant="h6"
                    color="inherit"
                    className="imageTitle"
                  >
                    {image.title}

                    <div className="imageMarked" />
                  </Typography>
                </Box>
              </Link>
            </ImageIconButton>
        ))}
      </Box>
      </ScrollAnimation>
    </Container>
  );
}
