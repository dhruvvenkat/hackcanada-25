// //import { useQueryCall, useUpdateCall } from '@ic-reactor/react';
// import './App.css';
// // import motokoLogo from './assets/motoko_moving.png';
// // import motokoShadowLogo from './assets/motoko_shadow.png';
// // import reactLogo from './assets/react.svg';
// // import viteLogo from './assets/vite.svg';

// function App() {
// //   const { data: count, refetch } = useQueryCall({
// //     functionName: 'get',
// //   });

// //   const { call: increment, loading } = useUpdateCall({
// //     functionName: 'inc',
// //     onSuccess: refetch,
// //   });

//   return (
//     <div className="App">
//       {/* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo vite" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//         <a
//           href="https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/"
//           target="_blank"
//         >
//           <span className="logo-stack">
//             <img
//               src={motokoShadowLogo}
//               className="logo motoko-shadow"
//               alt="Motoko logo"
//             />
//             <img src={motokoLogo} className="logo motoko" alt="Motoko logo" />
//           </span>
//         </a>
//       </div> */}
//       <h1>Vite + React + Motoko</h1>
//       <div className="card">
//         <button > 
//             {/* onClick={increment} disabled={loading} */}
//           count is {1}
//         </button>
//         <p>
//           Edit <code>backend/Backend.mo</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite, React, and Motoko logos to learn more
//       </p>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ContractCreation from "./pages/ContractCreation";
import TradeConfirmation from "./pages/TradeConfirmation";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/contract">Create Contract</Link></li>
          <li><Link to="/confirmation">Trade Confirmation</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contract" element={<ContractCreation />} />
        <Route path="/confirmation" element={<TradeConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;

