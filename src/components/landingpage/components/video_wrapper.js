import React, { useState, useEffect } from "react"
import "./video.css"

const words = ["Digital", "Trombone", "The One", "for you", "", "", ""]
export default function VideoWrapper() {
  const [isplayed, setIsPlayed] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isplayed) return
    let id = setInterval(() => {
      setCurrent(c => {
        console.log(c)
        return c < words.length - 1 ? c + 1 : 0
      })
    }, 2000)

    return () => clearInterval(id)
  }, [isplayed])
  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        width: "50vw",
        position: "relative",
      }}
    >
      <h2
        style={{
          position: "absolute",
          zIndex: "0",
          top: "50%",
          color: "white",
        }}
      >
        {words[current]}
      </h2>
      <video
        id="video"
        onPlay={() => setIsPlayed(true)}
        loop
        muted
        style={{ position: "relative", zIndex: "-1" }}
        autoPlay={true}
        src="/video.mp4"
      />
    </div>
  )
}
