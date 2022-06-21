import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}
  render(item: HasFormatter, heading: string, pos: "start" | "end") {
    const date = new Date().toLocaleString("en-GB");

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = date;

    const h4 = document.createElement("h4");
    h4.innerText = heading;
    h4.appendChild(span);
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);

    if (pos === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
