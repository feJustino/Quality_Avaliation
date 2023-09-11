
import { createRoot } from 'react-dom/client';
import Router from './routes/router';
import React from 'react';

const rootElement = window.document.getElementById("root");
if(rootElement == null){
  throw new Error('ROOT INEXISTENTE')
} 
const root = createRoot(rootElement);
root.render(
<React.StrictMode>
  <Router />
</React.StrictMode>
);