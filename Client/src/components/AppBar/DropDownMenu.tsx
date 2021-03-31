import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { DropDownMenuProps } from "./DropDownMenuContainer";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import Popup from "../Modal/Modal";
import Login from "../Login/Login";
import TeacherCardForm from "../Form/TeacherCardFormContainer";
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
  const { managerLoggedIn, managerSignedUp } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isLoginModalOpen, setOpenLoginModal] = React.useState(false);
  const [isRegisterTeacherModalOpen, setRegisterTeacherModalOpen] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (managerLoggedIn) setAnchorEl(event.currentTarget);
    else {
      setOpenLoginModal(true);
    }
  };
  React.useEffect(() => {
    if (managerSignedUp || managerLoggedIn) {
      setOpenLoginModal(false);
    }
  }, [managerSignedUp]);
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
        <StyledMenuItem
          onClick={() => {
            setRegisterTeacherModalOpen(true);
            handleClose();
          }}
        >
          <div>הוספת מורה</div>
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
      <Popup
        isModalOpen={isLoginModalOpen}
        closePopup={(isOpen: boolean) => setOpenLoginModal(isOpen)}
      >
        <>
          <div style= {{textAlign:"center", marginBottom:"10px", fontSize:"30px", fontWeight:"bold"}}>?איך מתחילים ללמד</div>
          <div style= {{textAlign:"center", marginBottom:"25px" }}>הצטרפו למיזם שלנו והוסיפו מורים גיבורי שואה</div>
          <Login></Login>
        </>
      </Popup>
      <Popup
        isModalOpen={isRegisterTeacherModalOpen}
        closePopup={(isOpen: boolean) => setRegisterTeacherModalOpen(isOpen)}
      >
        <TeacherCardForm />
      </Popup>
    </div>
  );
}