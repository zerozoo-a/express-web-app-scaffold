import { Service } from "../../lib/classes/Service";

import type { RequestHandler } from "express";

export class HomeService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
    this.props = {
      title: "HOME~~TITLE",
      layout: this.layout("default"),
      components: [`hello`, `world`, `greet`, `name`],
    };
  }

  render: RequestHandler = (req, res) => {
    console.log("hello");
    res.render(this.path, this.props);
  };
}
