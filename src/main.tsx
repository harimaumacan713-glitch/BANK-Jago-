import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { JagoProvider } from './context/JagoContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JagoProvider>
      <App />
    </JagoProvider>
  </StrictMode>,
);
