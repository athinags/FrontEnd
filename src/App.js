import { useEffect, useState } from 'react';
import { getMensagens } from './services/mensagens';
import MensagemForm from './components/MensagemForm';
import MensagemTable from './components/MensagemTable';
const App = () => {
  const [mensagens, setMensagens] = useState([]);
  const fetchMensagens = async () => {
    const response = await getMensagens();
    setMensagens(response.data);
  };
  useEffect(() => {
    fetchMensagens();
  }, []);
  return (
    <>
      <div className="container">
        <MensagemForm onSuccess={fetchMensagens} />
        <div className="mt-4">
          <MensagemTable mensagens={mensagens} />
        </div>
      </div>
    </>
  );
};
export default App;