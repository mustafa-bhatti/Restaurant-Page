console.log("Running")
import "./styles.css"
import { start } from "./initial-load"
import { menuLoad } from "./menu"


const content = document.querySelector("#content")
content.appendChild(menuLoad.menuGrid)

