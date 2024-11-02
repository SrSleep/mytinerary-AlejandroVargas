const Modal = ({ isOpen, onToggle }) => {
    if (!isOpen) return null;
    const handleOverlayClick = (e) => {
        // Verifica si el clic fue en el fondo y no en el contenido del modal
        if (e.target === e.currentTarget) {
            onToggle(); // Cierra el modal
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleOverlayClick}>
            <div className="bg-brand-dark rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">                
                <div>
                    <img className="w-32 h-32 rounded-full object-cover bg-white mx-auto" src={`https://robohash.org/modal`} alt="" />
                </div>
                <h2 className="text-xl font-semibold text-green-400">Este es un Modal</h2>
                <p className="mt-2 text-green-400">¡Puedes poner cualquier contenido aquí!</p>
                <button
                    onClick={onToggle}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Modal;