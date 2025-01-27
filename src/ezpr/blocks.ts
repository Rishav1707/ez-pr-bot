import { EZPRArguments, translateInputToHumanReadable } from "../types";

const ezprMarkdown = (args: EZPRArguments) => `
${args.reviewers?.join(" ")} :wave:

*From:* ${args.submitter}

*Estimated Review Time*: ${translateInputToHumanReadable(args.ert)}

Please review: ${args.description}

PR Link: ${args.link}
`;

export const ezprMessage = (args: EZPRArguments) => [
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: ezprMarkdown(args),
    },
  },
];
