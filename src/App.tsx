import React from 'react';
import { Layout } from 'antd'
import Ticker from "./features/ticker/Ticker"

import './App.css';

function App() {
  const { Content } = Layout

  return (
    <Layout className="layout">
      <Content style={{ padding: '24px' }}>
        <h1>Ticker</h1>
        <Ticker />
    </Content>
    </Layout>
  );
}

export default App;
