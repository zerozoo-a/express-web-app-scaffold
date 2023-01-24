import { Service } from "../../lib/classes/Service";

import type { RequestHandler } from "express";

export class HomeService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
  }

  render: RequestHandler = (req, res) => {
    res.render(this.path, {
      title: "Home TITLE",
    });
  };
}
