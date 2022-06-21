export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
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
        }
        else {
            this.container.append(li);
        }
    }
}
