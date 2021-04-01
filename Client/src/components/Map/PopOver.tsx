import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ReactComponent as ChefWhite } from "../../assets/icons/chef-white-pin.svg";
import { ReactComponent as ChessWhite } from "../../assets/icons/chess-white-pin.svg";
import { ReactComponent as LangugageWhite } from "../../assets/icons/language-white-pin.svg";
import { ReactComponent as StudyWhite } from "../../assets/icons/study-white-pin.svg";
import { ReactComponent as MusicWhite } from "../../assets/icons/music-white-pin.svg";
import MapCard from "./MapCard";

const Icons: any = {
  chess: <ChessWhite fill="white" style={{ height: "80px", cursor: "pointer", width: "80px" }} />,
  chef: <ChefWhite fill="white" style={{ height: "80px", cursor: "pointer", width: "80px" }} />,
  study: <StudyWhite fill="white" style={{ height: "80px", cursor: "pointer", width: "80px" }} />,
  music: <MusicWhite fill="white" style={{ height: "80px", cursor: "pointer", width: "80px" }} />,
  language: (
    <LangugageWhite fill="white" style={{ height: "80px", cursor: "pointer", width: "80px" }} />
  ),
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  })
);

export default function SimplePopover(props: any) {
  console.log(props);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div onClick={handleClick}>{Icons[props.interest]}</div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        style={{ borderRadius: "19px" }}
      >
        <MapCard hero={props.hero} interest={props.interest} />
      </Popover>
    </div>
  );
}
