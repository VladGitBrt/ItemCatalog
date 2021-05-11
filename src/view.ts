export class View {
  type = document.createElement("div");
  item = document.createElement("div");
  details = document.createElement("div");
  constructor() {}
  createUI() {
    this.type.classList.add("type");
    this.item.classList.add("item");
    this.details.classList.add("details");
    document.body.append(this.type, this.item, this.details);
  }
}
