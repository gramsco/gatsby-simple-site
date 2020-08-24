import React, { useState, useRef } from "react"

async function fakeLoader(value = 200, timeout = 2000) {
  return new Promise(resolve => {
    return setTimeout(() => {
      resolve(value)
    }, timeout)
  })
}

export default function SubHeader() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const formRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()

    // if the form is more complicated e.preventDefault can override
    // the HTML check, in that case we might want to use:
    // const allFieldsValid = formRef.current.reportValidity()
    // that returns a boolean.

    setLoading(true)

    fakeLoader(email, 1500).then(result => {
      setLoading(false)
      alert(`Your email address, ${result}, will receive our newsletter!`)
      setEmail("")
    })
  }

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        border: "solid 1px black",
        margin: "100px auto",
        padding: "2%",
      }}
    >
      <h1>Handcrafted, home-made masterpieces</h1>
      <form
        ref={formRef}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">
            Write down your email to get exciting news!
          </label>
          <input
            id="#email"
            type="email"
            name="email"
            style={{ textAlign: "center" }}
            placeholder="Receive our newsletter!"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          {loading && " loading..."}
        </div>

        <div>
          <input id="#submit" type="submit" value="Get Started" />
        </div>
      </form>
    </div>
  )
}
