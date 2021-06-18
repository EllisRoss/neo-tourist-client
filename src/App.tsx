import React from 'react';
import { Layout } from 'antd';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";

import {SearchPage} from "./components/SearchPage/SearchPage";

const { Content, Footer } = Layout;
const App = () => {
  return (
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
              <Route path='/' render={() => <SearchPage />}/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Neo Tourist</Footer>
      </Layout>
  );
}

export const NeoTouristApp: React.FC = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}


