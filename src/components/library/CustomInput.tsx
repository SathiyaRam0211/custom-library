import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputWrapper, Input } from "../../utils/util-styles";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const CustomInput = ({ width }: { width: string }) => {
  return (
    <InputWrapper>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        color="gray"
        fontSize="12px"
        style={{ paddingRight: "8px" }}
      />
      <Input placeholder="Search" name="search-bar" $inputWidth={width} />
    </InputWrapper>
  );
};

export default CustomInput;
