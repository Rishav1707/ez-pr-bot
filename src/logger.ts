import { createLogger, format, transports } from "winston";

export const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.simple(),
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message, service }) => {
      return `[${timestamp}] ${service} ${level}: ${message}`;
    })
  ),
  defaultMeta: {
    service: "ez-pr-bot",
  },
});
