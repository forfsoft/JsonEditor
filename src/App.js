import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import JsonEditor from './components/JsonEditor'

const jsonData = [
  {"data1":"a","data2":"b"},
  {"data1":"a1","data2":"b2"}
]

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
  <div className="App">
    <ThemeProvider theme={darkTheme}>
      <JsonEditor data={jsonData}/>
    </ThemeProvider>
  </div>
  );
}

export default App;
