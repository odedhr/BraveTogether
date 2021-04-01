import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SignUpForm from "../Form/SignUpFormContainer";
import SignInForm from "../Form/SignInFormContainer";
import styled from "styled-components";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
const StyledAppBar = styled(AppBar)`
  background: white;
  color: black;
  align-items: center;
  width: 50%;
  align-self: "center";
`;
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const SignUpLabel = (
  <div>
    <div>?חדשים פה</div>
    <div>הצטרפו</div>
  </div>
);
const SignInLabel = (
  <div>
    <div>!חזרתם אלינו? איזה כיף</div>
    <div>הכנסו</div>
  </div>
);

export default function Login() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <StyledAppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab icon={SignInLabel} />
          <Tab icon={SignUpLabel} />
        </Tabs>
      </StyledAppBar>
      <TabPanel value={value} index={0}>
        <SignInForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUpForm />
      </TabPanel>
    </div>
  );
}
