import { View } from "@slack/bolt";
import { WebClient } from "@slack/web-api";

import { ICommand } from "../../types";

export class OpenModalCommand implements ICommand {
  client: WebClient;
  trigger_id: string;
  view: View;

  constructor(client: WebClient, trigger_id: string, view: View) {
    this.client = client;
    this.trigger_id = trigger_id;
    this.view = view;
  }

  async handle() {
    const result = await this.client.views.open({
      trigger_id: this.trigger_id,
      view: this.view,
    });
    return result;
  }
}
