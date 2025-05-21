import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContextoRegional from './pages/ContextoRegional';
import AnaliseConcorrentes from './pages/AnaliseConcorrentes';
import ComportamentoLocal from './pages/ComportamentoLocal';
import PlanoGoToMarket from './pages/PlanoGoToMarket';
import PlanoValor from './pages/PlanoValor';
import './design-system.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contexto-regional" element={<ContextoRegional />} />
          <Route path="/analise-concorrentes" element={<AnaliseConcorrentes />} />
          <Route path="/comportamento-local" element={<ComportamentoLocal />} />
          <Route path="/plano-go-to-market" element={<PlanoGoToMarket />} />
          <Route path="/plano-valor" element={<PlanoValor />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
