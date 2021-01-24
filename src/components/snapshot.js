import React from "react"
import Img from "gatsby-image"

const Snapshot = ({ image }) => (
  <>
    <div id="project-snapshot">
      <div className="snapshot-container">
        <img src={image} alt="GIF-Finder-snapshot" />
      </div>

      {/* <Img fluid={image} /> */}
    </div>
  </>
)

export default Snapshot
