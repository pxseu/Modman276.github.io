export const HOSTNAME = process.env.HOSTNAME ?? "no_docker_hostname";
export const API_HOSTNAME = process.env.API_HOSTNAME?.toLowerCase() ?? "api.pxseu.com";
export const DEV = process.env.NODE_ENV !== "production";
export const PORT = parseInt(process.env.PORT ?? "80", 10);
export const ANILIST_ENDPOINT = "https://graphql.anilist.co";
export const GITHUB_ENDPOINT = "https://api.github.com/graphql";
export const ANILIST_ID = parseInt(process.env.ANILIST_ID ?? "0", 10);
export const REDIS_URL = process.env.REDIS_URL ?? "redis://127.0.0.1:6379";
export const WEBHOOK_MESSAGE_ID = process.env.WEBHOOK_MESSAGE_ID ?? "";
export const WEBHOOK_MESSAGE_TOKEN = process.env.WEBHOOK_MESSAGE_TOKEN ?? "";
export const WEBHOOK_AVATAR = process.env.WEBHOOK_AVATAR ?? "";
export const ALLOW_SEND_MESSAGE: boolean = JSON.parse(process.env.ALLOW_SEND_MESSAGE ?? "false");
export const GITHUB_AUTHORIZATION = `bearer ${process.env.GITHUB_AUTHORIZATION ?? ""}`;
