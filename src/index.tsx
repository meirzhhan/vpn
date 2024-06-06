import ReactDOM from 'react-dom/client';

import App from './App';
import personsDb from './db/db.json';
import { BrowserRouter } from 'react-router-dom';

if (!localStorage.getItem('db')) {
  localStorage.setItem('db', JSON.stringify(personsDb));
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
