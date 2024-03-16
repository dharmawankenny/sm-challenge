import {Space, Typography} from 'antd';

import './App.css'
import Issues from "./components/Issues.tsx";
import AddIssue from "./components/AddIssue.tsx";

function App() {
  return (
    <Space className="App" direction="vertical">
      <Typography.Title level={1}>Issues</Typography.Title>
      <AddIssue />
      <Issues />
    </Space>
  )
}

export default App
