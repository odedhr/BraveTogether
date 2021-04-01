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
  chess: <ChessWhite style={{ height: "50px", width: "50px" }} />,
  chef: <ChefWhite style={{ height: "50px", width: "50px" }} />,
  study: <StudyWhite style={{ height: "50px", width: "50px" }} />,
  music: <MusicWhite style={{ height: "50px", width: "50px" }} />,
  language: <LangugageWhite style={{ height: "50px", width: "50px" }} />,
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
      >
        <MapCard hero={props.hero} interest={props.interest} />
      </Popover>
    </div>
  );
}
