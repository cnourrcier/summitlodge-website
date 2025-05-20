import { useEffect } from "react"
import "./Modal.css";

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    showHeader = true,
    size = 'medium'
}) => {
    // Close on ESC key press
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
            // Prevent scrolling on body when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    // Don't render if not open
    if (!isOpen) return null;

    // Close modal when clicking outside the content
    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal')) {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleBackdropClick}>
            <div className={`modal-content modal-${size}`}>
                {showHeader && (
                    <div className="modal-header">
                        <h2>{title}</h2>
                        <button className="modal-close" onClick={onClose}>x</button>
                    </div>
                )}
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;