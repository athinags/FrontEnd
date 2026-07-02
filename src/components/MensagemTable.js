import '../App.css';
const MensagemTable = ({ mensagens }) => (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Título</th>
                <th>Conteúdo</th>
                <th>Publicada?</th>
            </tr>
        </thead>
        <tbody>
            {mensagens.map((m) => (
                <tr key={m.id}>
                    <td>{m.titulo}</td>
                    <td>{m.conteudo}</td>
                    <td>{m.publicada ? 'sim' : 'não'}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
export default MensagemTable;
