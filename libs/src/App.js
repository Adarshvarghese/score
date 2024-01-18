import logo from './logo.svg';
import './App.css';
import Dash from './UtilComponents/Dashboard/Dash';
import Navbar from './UtilComponents/Navbar/Navbar';
import { Box } from '@mui/material';
// import Login from './UtilComponents/Login/Login';
import Scoring from './UtilComponents/Scoring/Scoring';
// import Login from './UtilComponents/Login/Login';

function App() {
  return (
    <div className="App">
      <Box><Navbar/>
</Box>
<Box sx={{ 
marginTop:10
}}><Dash/>
</Box>
{/* <Login/> */}
{/* <Scoring/> */}

    </div>
  );
}

export default App;
