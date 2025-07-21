import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MDXProviderWrapper from './mdxprovider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MDXProviderWrapper>
    <App />
    </MDXProviderWrapper>
  </React.StrictMode>,
)
