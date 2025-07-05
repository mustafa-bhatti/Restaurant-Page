console.log("Running")
import "./styles.css"
import { start } from "./initial-load"

const content = document.querySelector("#content")
content.appendChild(start.homeDiv)

