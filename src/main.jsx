import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./components/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import './firebase';
import { store, persistor } from "./redux/store";


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <ThemeProvider theme={theme}>
//                 <BrowserRouter basename="/dual">
//                 <App/>
//                 <Toaster
//                 toastOptions={{
//                     success : {
//                         iconTheme: { primary: 'green', secondary: 'white' },
//                         style: { color: 'white', background: 'green' },
//                     },
//                     error :{
//                         iconTheme: { primary: 'red', secondary: 'white' },
//                         style: { color: 'white', background: 'red' },
//                     },
//                 }}
//                 />
//                 <GlobalStyle/>
//                 </BrowserRouter>
//             </ThemeProvider>
//         </PersistGate>
//     </Provider>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/dual">
            <App />
            <Toaster
              toastOptions={{
                success: {
                  iconTheme: { primary: 'green', secondary: 'white' },
                  style: { color: 'white', background: '#38CD3E' },
                },
                error: {
                  iconTheme: { primary: 'red', secondary: 'white' },
                  style: { color: 'white', background: 'red' },
                },
              }}
            />
            <GlobalStyle />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );