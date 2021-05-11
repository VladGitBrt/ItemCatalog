export type { Types } from "./interface";
import cuid from "cuid";

export class Model {
  private types: Types[];
  constructor() {
    this.types = [
      {
        id: cuid(),
        name: "books",
        items: [
          {
            // typeName: "books",
            id: cuid(),
            name: "Java for child",
            details: [{ description: "about all", autor: "12334" }],
          },
          { id: cuid(), name: "Java for child 2" },
        ],
      },
      {
        id: cuid(),
        name: "movies",
        items: [
          {
            id: cuid(),
            name: "Alone home",
            details: [{ description: "about all", year: 2015 }],
          },
        ],
      },
      {
        id: cuid(),
        name: "tools",
        items: [
          {
            id: cuid(),
            name: "hammer",
            details: [{ long: "10cm", weight: "1kg" }],
          },
        ],
      },
    ];
  }
  getAllTypes(): Types[] {
    return this.types;
  }
  getItemByType(id) {
    let itemByType = null;
    this.types.forEach((item) => {
      if (item.id == id) {
        itemByType = item;
      }
    });
    return itemByType;
  }
  getDetailByItem(id) {
    let itemByType = null;
    this.types.forEach((item) => {
      if ((item.items.id = id)) {
        itemByType = item;
      }
    });
    return itemByType;
  }
}
