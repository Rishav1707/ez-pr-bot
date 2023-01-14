import { z } from "zod";

// <!subteam^S04HKF5MKRP|@ez-pr-devs>

export declare type UserID = string;

const NewUserIDSchema = z.string().trim().startsWith("U");
const LegacyUserIDSchema = z.string().startsWith("W");

export const UserIDSchema = NewUserIDSchema.or(LegacyUserIDSchema);

export declare type Mention = string;

export declare type Mentions = Mention[];

export function toMentions(usernames: string[]): Mentions {
  var mentions: Mentions = [];
  usernames.forEach((username) => mentions.push(toMention(username)));
  return mentions;
}

export function toMention(username: string): Mention {
  if (!username.startsWith("@")) {
    username = "@" + username;
  }
  MentionSchema.parse(username);
  return username;
}

export const MentionSchema = z.string().startsWith("@");

export const MentionsSchema = z.array(MentionSchema);

export declare type Channel = string;

// payload.channel_name provides the channel name without the # at front, so we don't validate #'s
export const ChannelSchema = z.string().trim();

export declare type PRLink = string;

export const PRLinkSchema = z.string().trim().url();

export declare type EstimatedReviewTime = string;

const ertRegex = new RegExp(/^(\d){1,2}( )?(hour|minute|min|hr|m|h)(s)?$/);

export const EstimatedReviewTimeSchema = z.string().trim().regex(ertRegex, {
  message:
    "Invalid input: must start with 1 or 2 digits and end with a support time unit",
});

export declare type PRDescription = string;

export const PRDescriptionSchema = z.string().trim().min(0).max(200);