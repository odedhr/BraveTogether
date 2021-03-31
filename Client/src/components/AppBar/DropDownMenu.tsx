import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { DropDownMenuProps } from "./DropDownMenuContainer";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import Popup from "../Modal/Modal";
import Login from "../Login/Login";
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

export default function DropDownMenu(props: DropDownMenuProps) {
  const { isLoggedIn } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isModalOpen, setOpenModal] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isLoggedIn) setAnchorEl(event.currentTarget);
    else {
      setOpenModal(true);
    }
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
      <Popup isModalOpen={isModalOpen} closePopup={(isOpen: boolean) => setOpenModal(isOpen)}>
        <>
          <div>?איך מתחילים ללמד</div>
          <div>הצטרפו למיזם שלנו והוסיפו מורים גיבורי שואה</div>
          <Login></Login>
        </>
      </Popup>
    </div>
  );
}
