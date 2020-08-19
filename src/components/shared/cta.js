import React from "react"
import styles from "./button.module.css"

export function CallToAction({ type = "primary", children }) {
  return <button className={styles[type]}>{children}</button>
}
