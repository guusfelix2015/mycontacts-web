import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
} from "./styles";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/icons/arrow.svg";
import trash from "../../assets/images/icons/delete.svg";
import edit from "../../assets/images/icons/edit.svg";
import { useEffect, useState } from "react";

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/contacts")
      .then(async (response) => {
        const data = await response.json();
        setContacts(data);
      })
      .catch((error) => {
        console.debug("error", error);
      });
  }, []);

  console.log(contacts)

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar pelo nome.." />
      </InputSearchContainer>
      <Header>
        <strong>Contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Gustavo Felix</strong>
              <small>Instagram</small>
            </div>
            <span>gusfelix2015@gmail.com</span>
            <span>(34) 99291-0356</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button>
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
