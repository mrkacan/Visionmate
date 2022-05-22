import { Provider } from 'react-redux';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/store';
import Navigation from './navigation';

const { persistor, store } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
