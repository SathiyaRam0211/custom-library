import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  NavbarWrapper,
  Navbar,
  Logo,
  NavbarMenu,
  MenuItem,
  Actions,
  LogoImgStyles,
} from "../utils/util-styles";
import CustomButton from "./library/CustomButton";
import CustomInput from "./library/CustomInput";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { labels, navbarMenuItems } from "./constants/constants";
import Brand from "../assets/images/logo.png";

const RefreshIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faArrowsRotate}
      fontSize="14px"
      style={{ marginLeft: "8px" }}
    />
  );
};

const Toolbar = () => {
  return (
    <NavbarWrapper>
      <Navbar>
        <Logo>
          <span>{labels.BRAND}</span> <img style={LogoImgStyles} src={Brand} />
        </Logo>
        <Actions>
          <CustomInput width="25vw" />
          <CustomButton text="Sync" theme="dark" child={<RefreshIcon />} />
          <CustomButton text="Contact" theme="light" />
        </Actions>
      </Navbar>
      <NavbarMenu>
        {navbarMenuItems.map((eachItem) => (
          <MenuItem
            key={eachItem.id}
            $theme={eachItem.selected ? "dark" : "light"}
            $disabled={eachItem.selected}
          >
            {eachItem.name}
          </MenuItem>
        ))}
      </NavbarMenu>
    </NavbarWrapper>
  );
};

export default Toolbar;
