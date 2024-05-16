// ContactForm.jsx

// Importowanie funkcji 'nanoid' z biblioteki 'nanoid', która generuje unikalne identyfikatory.
import { nanoid } from 'nanoid';
// Importowanie hooków 'useDispatch' i 'useSelector' z 'react-redux', które pozwalają na korzystanie z Redux w komponencie funkcyjnym.
import { useDispatch, useSelector } from 'react-redux';
// Importowanie funkcji 'toast' z biblioteki 'react-toastify', która służy do wyświetlania powiadomień.
import { toast } from 'react-toastify';
// Importowanie akcji 'addContact' z pliku 'contactsSlice' w celu dodania kontaktu do stanu aplikacji.
import { addContact } from 'redux/contactsSlice';
// Importowanie selektora 'getContacts' z pliku 'selectors' w celu pobrania listy kontaktów ze stanu aplikacji.
import { getContacts } from 'redux/selectors';
// Importowanie stylizowanych komponentów 'Form', 'Input', 'Label', 'SubmitButton' z pliku 'ContactForm.styled'.
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';

// Deklaracja komponentu `ContactForm`.
export const ContactForm = () => {
  // Pobranie funkcji dispatch z hooka useDispatch.
  const dispatch = useDispatch();
  // Pobranie listy kontaktów ze stanu aplikacji za pomocą hooka useSelector i selektora getContacts.
  const contacts = useSelector(getContacts);

  // Funkcja obsługująca zdarzenie submit formularza.
  const handleSubmit = event => {
    event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki.

    // Utworzenie obiektu reprezentującego kontakt na podstawie danych z formularza.
    const contact = {
      id: nanoid(), // Generowanie unikalnego identyfikatora za pomocą funkcji 'nanoid'.
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    // Sprawdzenie, czy kontakt już istnieje w liście kontaktów.
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    // Wyświetlenie komunikatu, jeśli kontakt już istnieje w liście.
    if (isExist) {
      return toast.warn(`${contact.name} is already in contacts.`);
    }

    // Wysłanie akcji 'addContact' z danymi kontaktu do reduktora za pomocą funkcji 'dispatch'.
    dispatch(addContact(contact));
    event.currentTarget.reset(); // Wyczyszczenie formularza.
  };

  // Zwrócenie JSX reprezentującego formularz dodawania kontaktu.
  return (
    <Form onSubmit={handleSubmit}>
      {/* Pole formularza do wprowadzania imienia */}
      <Label htmlFor={nanoid()}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nanoid()} // Generowanie unikalnego identyfikatora dla pola formularza.
          required // Pole wymagane.
        />
      </Label>
      {/* Pole formularza do wprowadzania numeru telefonu */}
      <Label htmlFor={nanoid()}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={nanoid()} // Generowanie unikalnego identyfikatora dla pola formularza.
          required // Pole wymagane.
        />
      </Label>
      {/* Przycisk do dodawania kontaktu */}
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
