import { useState } from 'react';
import api from '../api';
const MensagemForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        titulo: '',
        conteudo: '',
        publicada: true,
    });
    const handleInputChange = (event) => {
        const value =
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;
        setFormData({
            ...formData,
            [event.target.name]: value,
        });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await api.post('/mensagens', formData); // ajuste se sua rota for outra
        onSuccess();
        setFormData({
            titulo: '',
            conteudo: '',
            publicada: true,
        });
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="titulo" className="form-label">
                    Título
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="conteudo" className="form-label">
                    Conteúdo
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="conteudo"
                    name="conteudo"
                    value={formData.conteudo}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="publicada"
                    name="publicada"
                    checked={formData.publicada}
                    onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="publicada">
                    Publicada
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                Salvar
            </button>
        </form>
    );
};

export default MensagemForm;
