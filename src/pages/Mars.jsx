import Planet from "../components/Planet"
import planets from "../data.json"

const Mars = () => {
  return <Planet planet={planets[3]} />
}
export default Mars
