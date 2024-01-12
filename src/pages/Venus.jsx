import Planet from "../components/Planet"
import planets from "../data.json"

const Venus = () => {
  return <Planet planet={planets[1]} />
}
export default Venus
