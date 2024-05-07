const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${
        open ? "bg-black/80 dark:bg-secondary/75" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-card max-w-96 rounded-3xl shadow-3xl p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
