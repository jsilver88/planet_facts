import Planet from "../components/Planet"
import planets from "../data.json"

const Earth = () => {
  return <Planet planet={planets[2]} />
}
export default Earth
