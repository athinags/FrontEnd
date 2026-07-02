import api from '../api';
export const getMensagens = () => api.get('/mensagens');
export const criarMensagem = (data) => api.post('/mensagens', data);