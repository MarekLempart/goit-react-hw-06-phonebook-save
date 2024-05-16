// Filter.jsx

// Importowanie hooków 'useDispatch' i 'useSelector' z 'react-redux', które pozwalają na korzystanie z Redux w komponencie funkcyjnym.
import { useDispatch, useSelector } from 'react-redux';
// Importowanie akcji 'setFilter' z pliku 'filterSlice' w celu ustawiania wartości filtru.
import { setFilter } from 'redux/filterSlice';
// Importowanie selektora 'getFilter' z pliku 'selectors' w celu pobrania wartości filtru ze stanu aplikacji.
import { getFilter } from 'redux/selectors';
// Importowanie stylizowanych komponentów 'Input' i 'Label' z pliku 'Filter.styled'.
import { Input, Label } from './Filter.styled';

// Deklaracja komponentu `Filter`.
export const Filter = () => {
  // Pobranie funkcji dispatch z hooka useDispatch.
  const dispatch = useDispatch();
  // Pobranie wartości filtru ze stanu aplikacji za pomocą hooka useSelector i selektora getFilter.
  const filter = useSelector(getFilter);

  // Zwrócenie JSX reprezentującego filtr do wyszukiwania kontaktów po imieniu.
  return (
    <Label>
      {/* Tekst etykiety */}
      Find contacts by name
      {/* Pole tekstowe do wprowadzania wartości filtru */}
      <Input
        type="text"
        value={filter} // Przypisanie wartości filtru do atrybutu 'value' pola tekstowego.
        // Obsługa zmiany wartości pola tekstowego, która wywołuje akcję 'setFilter' i ustawia nową wartość filtru.
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
      />
    </Label>
  );
};
