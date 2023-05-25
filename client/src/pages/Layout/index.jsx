import { Link, Outlet } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import './style.css'

const pages = ["Home", "Add", "About", "services", "portfolio", "Team", "skill", "clients", "Pricing", "blog", "contact"];

function Layout() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    React.useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(".navbar");
            const scrollY = window.scrollY;

            if (scrollY > 100) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar sx={{ "boxShadow": "none" }} position="fixed" className="navbar">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            <img
                                src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png"
                                alt="logo"
                            />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                            }}
                        >
                            <img
                                src="https://preview.colorlib.com/theme/security/img/logo.png"
                                alt="logo"
                            />
                        </Typography>

                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ flexGrow: 0 }}>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'flex-end' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    component={Link}
                                    to={`/${page.toLowerCase()}`}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: "white", display: "block" }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* <div className="image-hero"></div> */}
            <Outlet />

            <footer>
                <div className="container">
                    <a href="index.html" className="logo"><img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png" alt="Logo"/></a>
                    <ul>
                        <li><a href="#" className="tran3s round-border"><i className="fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="tran3s round-border"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="tran3s round-border"><i className="fa-brands fa-pinterest" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="tran3s round-border"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="tran3s round-border"><i className="fa-brands fa-skype" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="tran3s round-border"><i className="fa-brands fa-flickr" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="tran3s round-border"><i className="fa-brands fa-dribbble" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="tran3s round-border"><i className="fa-solid fa-rss" aria-hidden="true"></i></a></li>
                    </ul>
                    <p>Copyright @2018 All rights reserved | This template is made with <i className="fa-regular fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                </div>
            </footer>
        </>

    );
}

export default Layout;