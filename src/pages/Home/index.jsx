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
import { useEffect, useState, useMemo } from "react";
import formatPhone from "../../utils/formatPhone";
import Loader from "../../components/Loader";
import ContactsService from "../../services/ContactsService";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      ),
    [contacts, searchTerm]
  );

  useEffect(() => {
    async function LoadContacts() {
      try {
        setIsLoading(true);
        const contactList = await ContactsService.listContacts(orderBy);
        setContacts(contactList);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        console.log("caiu aq")
      } finally {
        setIsLoading(false);
      }
    }
    LoadContacts();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          onChange={handleChangeSearchTerm}
          value={searchTerm}
          type="text"
          placeholder="Pesquisar pelo nome.."
        />
      </InputSearchContainer>
      <Header>
        <strong>
          {filteredContacts.length}{" "}
          {filteredContacts.length > 1 ? "Contatos" : "Contato"}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader orderby={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
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
