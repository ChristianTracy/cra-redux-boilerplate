import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store/Store';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import ViewsContainer from './modules/commons/ViewsContainer';

const App = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ConnectedRouter history={history}>
        <ViewsContainer />
      </ConnectedRouter>
    </I18nextProvider>
  </Provider>
);

export default App;
