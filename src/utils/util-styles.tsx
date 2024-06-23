import styled from "styled-components";
import { ButtonProps, InputProps, SongRowProps } from "./util-interfaces";

//Variables
const dark = "#212121";
const light = "#f4f4f0";
const primary = "#ffc107";

export const PageSection = styled.section`
  height: 100vh;
  background: ${light};
`;

export const PlaySection = styled.section`
  padding: 32px 64px;
`;

export const StatusBar = styled.div``;

export const SongsWrapper = styled.div`
  padding: 16px 0;
`;

export const SongRow = styled.div<SongRowProps>`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  border: 0.5px solid ${dark};
  border-bottom: none;
  background: ${(props) => (props.$header ? "white" : "auto")};

  &:hover {
    background: white;
  }

  &:last-child {
    border-bottom: 1px solid ${dark};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: ease-out 0.5s;
  span {
    font-family: Anybody;
    font-size: 32px;
    font-weight: 800;
  }
  &:hover {
    color: ${primary};
  }
`;

export const LogoImgStyles = {
  height: "48px",
};

//Navbar
export const NavbarWrapper = styled.div`
  padding: 32px 64px;
  border-bottom: 1px solid #212121;
  display: flex;
  flex-direction: column;
`;
export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const NavbarMenu = styled.div`
  padding-top: 24px;
  display: flex;
  gap: 16px;
  height: 40px;
`;
export const MenuItem = styled.div<ButtonProps>`
  padding: 8px 12px;
  height: fit-content;
  display: inline-flex;
  font-size: 12px;
  align-items: center;
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.$theme === "light" ? dark : light)};
  transition: transform ease 0.2s;
  color: ${(props) => (props.$theme === "light" ? dark : light)};
  background: ${(props) => (props.$theme === "light" ? light : dark)};

  &:hover {
    border-right: 4px solid ${dark};
    border-bottom: 4px solid ${dark};
    transform: translate(-3px, -2px);
    background: ${(props) => (props.$theme === "light" ? "white" : primary)};
    color: ${dark};
  }
`;

//Custom Input
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 8px 12px;
  border-radius: 4px;
  outline: 1px solid ${dark};
  &:focus-within {
    outline: 2px solid ${primary};
  }
`;
export const Input = styled.input<InputProps>`
  width: ${(props) => (props.$inputWidth ? props.$inputWidth : "auto")};
  outline: none;
  border: none;
  line-height: 24px;
`;

//Custom Button
export const Button = styled.div<ButtonProps>`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid ${dark};
  transition: ease 0.2s;
  color: ${(props) => (props.$theme === "light" ? dark : light)};
  background: ${(props) => (props.$theme === "light" ? light : dark)};

  &:hover {
    border-right: 4px solid ${dark};
    border-bottom: 4px solid ${dark};
    background: ${(props) => (props.$theme === "light" ? "white" : primary)};
    color: ${dark};
  }
`;
