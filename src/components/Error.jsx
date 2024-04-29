import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className="text-center flex flex-col align-center justify-center h-[66vh]">
      <Container>
        <div className="flex flex-col">
          <h2 className="text-center font-semibold text-2xl">
            Error: {error.status || error.message}
          </h2>
          <pre className="text-center">{error.statusText}</pre>
        </div>
      </Container>
    </div>
  )
}

export default Error
