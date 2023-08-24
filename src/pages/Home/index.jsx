import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListHeader,
} from "./styles";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/icons/arrow.svg";
import trash from "../../assets/images/icons/delete.svg";
import edit from "../../assets/images/icons/edit.svg";
import { useEffect, useState } from "react";
import formatPhone from "../../utils/formatPhone";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const data = await response.json();
        setContacts(data);
      })
      .catch((error) => {
        console.debug("error", error);
      });
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
  }

  console.log(orderBy);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar pelo nome.." />
      </InputSearchContainer>
      <Header>
        <strong>
          {contacts.length} {contacts.length > 1 ? "Contatos" : "Contato"}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={handleToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arrow" />
        </button>
      </ListHeader>

      {contacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{formatPhone(contact.phone)}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button>
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
