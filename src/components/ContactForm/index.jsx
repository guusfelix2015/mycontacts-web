import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import { Form, ButtonContainer } from "./styles";
import FormGroup from "../FormGroup";
import PropTypes from "prop-types";
import { useState } from "react";
import isEmailValid from "../../utils/isEmailValid";
import useErros from "../../hooks/useErros";
import formatPhone from "../../utils/formatPhone";

export default function ContactForm({ buttonLabel }) {
  const { getErrorMessageByFieldName, removeError, setError, errors } =
    useErros();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const isFormValid = name && errors.length === 0;

  function handleChangeName(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "O campo nome é obrigatório" });
    } else {
      removeError("name");
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "O campo email é inválido" });
    } else {
      removeError("email");
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    /*     console.log({
      name,
      email,
      phone,
      category,
    }); */
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Input
          error={getErrorMessageByFieldName("name")}
          placeholder="Nome *"
          value={name}
          onChange={handleChangeName}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName("email")}>
        <Input
          error={getErrorMessageByFieldName("email")}
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button disabled={!isFormValid} type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
