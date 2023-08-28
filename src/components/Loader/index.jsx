import { Overlay } from "./styles";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";


export default function Loader({ isLoading }) {
  if (!isLoading) return null;
  return createPortal(
    <Overlay>
      <div className="loader"></div>
    </Overlay>,
    document.getElementById("loader-root")
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
