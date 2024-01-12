import { useState } from "react"

const Planet = ({ planet }) => {
  const [content, setContent] = useState("overview")
  const [activeContent, setActiveContent] = useState("overview")

  const selectContent = (type) => {
    setContent(type)
    setActiveContent(type)
  }

  const getButtonClass = (type) => {
    return activeContent === type ? "activeBtn" : ""
  }

  return (
    <>
      <div className="planet-section">
        <div className="col">
          <img
            src={
              content === "overview"
                ? planet.images.planet
                : content === "structure"
                ? planet.images.internal
                : content === "geology"
                ? planet.images.geology
                : ""
            }
            alt={planet.name}
          />
        </div>
        <div className="col">
          <h1>{planet.name}</h1>
          <p>
            {content === "overview"
              ? planet.overview.content
              : content === "structure"
              ? planet.structure.content
              : content === "geology"
              ? planet.geology.content
              : null}{" "}
          </p>
          <p className="source">
            <span>Source</span>{" "}
            <strong>
              <a
                href={
                  content === "overview"
                    ? planet.overview.source
                    : content === "structure"
                    ? planet.structure.source
                    : content === "geology"
                    ? planet.geology.source
                    : "#"
                }
                target="_blank"
              >
                Wikipedia
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                  <path
                    fill="#FFF"
                    d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                    opacity=".5"
                  />
                </svg>
              </a>
            </strong>
          </p>
          <div className="button-container">
            <button
              className={`btn ${getButtonClass("overview")}`}
              onClick={() => selectContent("overview")}
            >
              <span>01</span>Overview
            </button>
            <button
              className={`btn ${getButtonClass("structure")}`}
              onClick={() => selectContent("structure")}
            >
              <span>02</span>Internal Structure
            </button>
            <button
              className={`btn ${getButtonClass("geology")}`}
              onClick={() => selectContent("geology")}
            >
              <span>03</span>Surface Geology
            </button>
          </div>
        </div>
      </div>

      <div className="planet-info">
        <div className="box">
          <p>Rotation Time</p>
          <h2>{planet.rotation}</h2>
        </div>
        <div className="box">
          <p>Revolution Time</p>
          <h2>{planet.revolution}</h2>
        </div>
        <div className="box">
          <p>Radius</p>
          <h2>{planet.radius}</h2>
        </div>
        <div className="box">
          <p>Average Temp.</p>
          <h2>{planet.temperature}</h2>
        </div>
      </div>
    </>
  )
}
export default Planet
