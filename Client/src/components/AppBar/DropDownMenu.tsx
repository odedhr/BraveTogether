import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import ListItemText from "@material-ui/core/ListItemText";

import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
const ListItemTextStyled = styled(ListItemText)`
  direction: rtl;
`;
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#048ba8",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
    direction: "rtl",
  },
}))(MenuItem);

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div onClick={handleClick}>
        <MenuIcon style={{ backgroundColor: " #d8d8d8", borderRadius: "50px" }} />
      </div>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <div>הפרופיל שלך</div>
        </StyledMenuItem>
        <hr></hr>
        <StyledMenuItem>
          <div>מורים שפנית אליהם</div>
        </StyledMenuItem>
        <StyledMenuItem>
          <div>מורים שפנית אליהם</div>
        </StyledMenuItem>
        <StyledMenuItem>
          <div>מורים שהוספת</div>
        </StyledMenuItem>
        <hr></hr>
        <StyledMenuItem>
          <div>יש שאלה? צור קשר</div>
        </StyledMenuItem>
        <StyledMenuItem>
          <div>התנתק</div>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
