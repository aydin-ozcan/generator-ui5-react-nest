import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function onThemeChanged (sTheme) {  
  //Call central theme change function on App.jsx so it will serve standalone app and nested app
}

function onLocalizationChanged (sLocal) {  
  //Call central local change function on App.jsx so it will serve standalone app and nested app
 
}

export function loadReact(params) {
  ReactDOM.createRoot( document.getElementById(params.ReactDivName) ).render( <App /> )
  return  () => {
    ReactDOM.unmountComponentAtNode(document.getElementById(params.ReactDivName) );
  }
}

window['<%= reactappId %>'] = loadReact;
window['<%= reactappId %>_onThemeChanged'] = onThemeChanged ;
window['<%= reactappId %>_onLocalizationChanged'] = onLocalizationChanged ;
