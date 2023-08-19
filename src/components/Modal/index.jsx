import { Overlay, Container, Footer } from "./styles";
import Button from "../Button";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export default function Modal({ $danger }) {
  return createPortal(
    <Overlay>
      <Container $danger={$danger}>
        <h1>Título do modal</h1>
        <p>Corpo do modal</p>
        <Footer>
          <button className="cancel-button" type="button">
            Cancelar
          </button>
          <Button $danger={$danger} type="button">
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById("modal-root")
  );
}

Modal.propTypes = {
  $danger: PropTypes.bool,
};

Modal.defaultProps = {
  $danger: false,
};
