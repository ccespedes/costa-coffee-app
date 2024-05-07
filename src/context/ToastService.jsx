import { createContext, useContext, useState } from "react"

const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null)
  const [show, setShow] = useState(false)
  const [isBusy, setIsBusy] = useState(false)
  let timer

  const open = (title, desc, icon, timeout = 2000) => {
    const component = (
      <div className="flex items-center gap-3 bg-foreground p-4 pr-12 rounded-lg shadow-lg">
        <i className={`fa-solid ${icon} text-2xl text-card/50`}></i>
        <div>
          <h5 className="font-semibold text-card leading-4">{title}</h5>
          <p className="text-sm font-light text-card/80 leading-4">{desc}</p>
        </div>
      </div>
    )
    console.log("open toast")
    console.log(timeout)
    setToast(null)
    setShow(false)
    setIsBusy(false)
    clearTimeout(timer)

    setShow(true)
    setIsBusy(true)
    setToast(component)
    timer = setTimeout(() => {
      console.log("isBusy", isBusy)
      if (isBusy) {
        return
      }
      close()
    }, timeout)
  }

  const close = () => {
    console.log("close toast")
    setShow(false)
    setTimeout(() => {
      setToast(null)
      setIsBusy(false)
    }, 300)
  }

  return (
    <ToastContext.Provider value={{ open, close }}>
      {children}
      <div className="space-y-2 fixed bottom-4 left-4">
        <div
          className={`relative duration-300 transition-all ${
            show ? "bottom-0" : "bottom-[-110px]"
          }`}
        >
          <button
            onClick={close}
            className="absolute top-0 right-1 p-1 rounded-lg text-card/30"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          {toast}
        </div>
      </div>
    </ToastContext.Provider>
  )
}

export const UseToast = () => useContext(ToastContext)

// import { createContext, useContext, useState } from "react"

// const ToastContext = createContext()

// export const ToastProvider = ({ children }) => {
//   const [toasts, setToasts] = useState([])

//   const open = (component, timeout = 2000) => {
//     const id = Date.now()
//     setToasts((toasts) => [...toasts, { id, component }])

//     setTimeout(() => close(id), timeout)
//   }

//   const close = (id) => {
//     console.log("run close toast")
//     setToasts((toasts) => toasts.filter((toast) => toast.id !== id))
//   }

//   console.log(toasts)
//   return (
//     <ToastContext.Provider value={{ open, close }}>
//       {children}
//       <div className="space-y-2 fixed bottom-4 right-4">
//         {toasts.map(({ id, component }) => (
//           <div
//             key={id}
//             className={`relative transition-all ${
//               id ? "bottom-0" : "bottom-[-110px]"
//             }`}
//           >
//             <button
//               onClick={() => close(id)}
//               className="absolute top-2 right-2 p-1 rounded-lg bg-gray-200/20 text-gray-800/60"
//             >
//               <i className="fa-regular fa-circle-xmark"></i>
//             </button>
//             {component}
//           </div>
//         ))}
//       </div>
//     </ToastContext.Provider>
//   )
// }

// export const UseToast = () => useContext(ToastContext)
