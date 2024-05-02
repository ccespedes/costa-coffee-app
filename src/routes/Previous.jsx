import Card from "../components/Card"
import Container from "../components/Container"

const Previous = () => {
  return (
    <Container>
      <section className="mb-32">
        <h1 className="mb-2">Previous</h1>
        <Card className="relative border-border bg-gradient-to-tl from-foreground/0 to-foreground/10 p-4 rounded-3xl min-w-64 mb-5 md:mb-0">
          <div className="favorite relative aspect-square rounded-2xl bg-[url('/src/assets/previous-photo.jpg')] bg-no-repeat bg-cover bg-center md:aspect-video mb-5"></div>
          <p className="font-thin text-center mb-5">
            Previously ordered items will be displayed here.
          </p>
        </Card>
      </section>
    </Container>
  )
}

export default Previous
