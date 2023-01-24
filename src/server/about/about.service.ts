import { Service } from "../../lib/classes/Service";

import type { RequestHandler } from "express";

export class AboutService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
  }

  render: RequestHandler = (req, res) => {
    res.render(this.path, {
      title: "ABOUT TITLE",
    });
  };
}
