import { PageHeader } from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import ContactsService from "../../services/ContactsService";

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };




      const response = await ContactsService.createContacts(contact);
      return response;
    } catch {
      alert("Ocorreu um erro");
    }
  }

  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm onSubmit={handleSubmit} buttonLabel="Cadastrar" />
    </>
  );
}
