import Planet from "../components/Planet"
import planets from "../data.json"

const Mercury = () => {
  return <Planet planet={planets[0]} />
}
export default Mercury
