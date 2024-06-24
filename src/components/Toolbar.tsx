import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  NavbarWrapper,
  Navbar,
  Logo,
  NavbarMenu,
  MenuItem,
  Actions,
  LogoImgStyle,
} from "../utils/util-styles";
import CustomButton from "./library/CustomButton";
import CustomInput from "./library/CustomInput";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { labels, navbarMenuItems } from "../constants/constants";
import Brand from "../assets/images/logo.png";
import * as musicMeta from "music-metadata-browser";
import { Buffer } from "buffer";
import process from "process";
import { generateMetaData } from "../utils/util-functions";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

//Polyfills
declare global {
  interface Window {
    Buffer: typeof Buffer;
    process: typeof process;
  }
}

window.Buffer = Buffer;
window.process = process;

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
  const { setSongsList } = useContext(PlayerContext);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const fileURL = URL.createObjectURL(files[i]);
        try {
          const { common, format } = await musicMeta.fetchFromUrl(fileURL);
          console.log(common);
          setSongsList((existingSongsList) => [
            ...existingSongsList,
            generateMetaData(common, format),
          ]);
        } catch (error) {
          console.log("error ", error);
        }
      }
    }
  };

  return (
    <NavbarWrapper>
      <Navbar>
        <Logo>
          <span>{labels.BRAND}</span> <img style={LogoImgStyle} src={Brand} />
        </Logo>
        <Actions>
          <CustomInput width="25vw" />
          <CustomButton text="Sync" theme="dark" child={<RefreshIcon />} />
          <input
            type="file"
            multiple
            accept="audio/*"
            onChange={handleFileChange}
          />
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
