import React, { useState, useEffect } from "react"
import "./video.css"
import thumbnail from "../../assets/thumbnail.png"
import video from "../../assets/video.mp4"

const words = ["Digital", "Trombone", "The One", "for you", "", "", ""]
export default function VideoWrapper() {
  const [isplayed, setIsPlayed] = useState(false)
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)

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
        margin: "5% auto",
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
        onLoad={() => setLoaded(true)}
        id="video"
        onPlay={() => {
          setLoaded(true)
          setIsPlayed(true)
        }}
        loop
        muted
        style={{ position: "relative", zIndex: "-1" }}
        autoPlay={true}
        src={video}
      />
      {!loaded && (
        <img
          src={thumbnail}
          style={{ position: "absolute", top: "0%", left: 0 }}
        />
      )}
    </div>
  )
}
