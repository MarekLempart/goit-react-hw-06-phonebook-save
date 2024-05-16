// index.js

import { App } from 'components/App'; // Importuje główny komponent aplikacji, który będzie renderowany w elemencie root.
import React from 'react'; // Importuje główny pakiet React, potrzebny do pracy z React.
import ReactDOM from 'react-dom/client'; // Importuje pakiet ReactDOM, używany do renderowania elementów React na stronie internetowej.
import { Provider } from 'react-redux'; // Importuje Provider z biblioteki react-redux, używany do dostarczania składowych do wszystkich komponentów w drzewie komponentów.
import { PersistGate } from 'redux-persist/integration/react'; // Importuje PersistGate z biblioteki redux-persist/integration/react. PersistGate jest używany do opóźniania renderowania drzewa komponentów do momentu, gdy stan magazynu zostanie przywrócony z trwałego magazynu.
import './index.css'; // Importuje arkusz stylów CSS, który zawiera stylizację dla całej aplikacji.
import { persistor, store } from './redux/store'; // Importuje magazyn i persistor z pliku store w katalogu redux. Store przechowuje cały stan aplikacji, a persistor jest używany do trwałego przechowywania stanu.

// Używa metody createRoot z ReactDOM, aby utworzyć korzeń dla aplikacji React, który będzie renderowany w elemencie o identyfikatorze 'root'.
ReactDOM.createRoot(document.getElementById('root')).render(
  // Komponent React.StrictMode, który sprawdza i ostrzega o potencjalnych problemach w aplikacji w czasie wykonywania.
  <React.StrictMode>
    {/* Otacza całą aplikację komponentem Provider z react-redux, dostarczając składowe Redux do wszystkich komponentów w aplikacji. */}
    <Provider store={store}>
      {/* Otacza komponent App komponentem PersistGate. PersistGate opóźnia renderowanie aplikacji, dopóki stan magazynu nie zostanie przywrócony z trwałego magazynu, wyświetlając jednocześnie komunikat ładowania. */}
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        {/* Renderuje główny komponent aplikacji. */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
