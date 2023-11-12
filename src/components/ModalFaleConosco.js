const ModalFaleConosco = ({ onClose }) => {
    return (
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Mensagem Enviada com Sucesso!</h5>
              <button type="button" className="close" onClick={onClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Sua mensagem foi enviada com sucesso.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalFaleConosco;
  