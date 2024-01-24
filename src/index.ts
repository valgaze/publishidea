/**
 ╱╭━━━╮╱╭━━━╮╱╭━━━╮╱╭━━━╮╱╭━━━╮╱╭╮╱╱╭╮╱╭━━╮╱╱╭━━━╮╱╭━━━━╮╱
╱┃╭━╮┃╱┃╭━╮┃╱┃╭━━╯╱┃╭━━╯╱╰╮╭╮┃╱┃╰╮╭╯┃╱┃╭╮┃╱╱┃╭━╮┃╱┃╭╮╭╮┃╱
╱┃╰━━╮╱┃╰━╯┃╱┃╰━━╮╱┃╰━━╮╱╱┃┃┃┃╱╰╮╰╯╭╯╱┃╰╯╰╮╱┃┃╱┃┃╱╰╯┃┃╰╯╱
╱╰━━╮┃╱┃╭━━╯╱┃╭━━╯╱┃╭━━╯╱╱┃┃┃┃╱╱╰╮╭╯╱╱┃╭━╮┃╱┃┃╱┃┃╱╱╱┃┃╱╱╱
╱┃╰━╯┃╱┃┃╱╱╱╱┃╰━━╮╱┃╰━━╮╱╭╯╰╯┃╱╱╱┃┃╱╱╱┃╰━╯┃╱┃╰━╯┃╱╱╱┃┃╱╱╱
╱╰━━━╯╱╰╯╱╱╱╱╰━━━╯╱╰━━━╯╱╰━━━╯╱╱╱╰╯╱╱╱╰━━━╯╱╰━━━╯╱╱╱╰╯╱╱╱
 */

export * from "./types";
export { SpeedyBot } from "./speedybot";
export { SpeedyCard } from "./cards";
export const CONSTANTS = {
  submitToken: "_private_speedybot_",
  CHIP_LABEL: "speedybot_CHIP_CLICK",
  invalidMessage: "Invalid message passed to sendTo",
  unwrapLabel: "🎁 Unwrap",
  destroyLabel: "🔥 Destroy",
  action_delete: "delete",
};
export type { SurveyQuestion, SurveyQuestionType } from "./cards";

export const botTokenKey = "BOT_TOKEN";
export const botPlaceholder = "__REPLACE__ME__";

import { RequestOps } from "./types";

// Workhorse makeRequest w/ fetch, can be stubbed for testing

class RequestError extends Error {
  statusCode: number;
  url: string;

  constructor(message: string, statusCode: number, url: string) {
    super(message);
    this.statusCode = statusCode;
    this.url = url;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequestError);
    }
  }
}

export const mainRequester = async (
  url: string,
  body: any,
  opts: RequestOps = {}
) => {
  // escape hatch to pass init directly to fetch
  if ("rawInit" in opts) {
    try {
      const response = await fetch(url, opts.rawInit);
      if (!response.ok) {
        throw new RequestError(
          `The request to ${url} failed with status ${response.status}${
            response.status === 401
              ? " (You may need to double-check your access token)"
              : ""
          }`,
          response.status,
          url
        );
      }
      return response;
    } catch (error) {
      throw error; // Re-throw custom error or new/exciting error
    }
  }

  const defaultConfig = {
    method: "POST",
    "content-type": "application/json;charset=UTF-8",
    raw: false,
  };

  const contentType = opts["content-type"] || defaultConfig["content-type"];
  const init: {
    method: string;
    headers: any;
    body?: any;
    [key: string]: any;
  } = {
    method: opts.method ? opts.method : defaultConfig.method,
    headers: {
      "content-type": contentType,
      Authorization: `Bearer ${opts.token}`,
      ...(opts.headers || {}),
    },
  };
  if (
    opts.method === "POST" ||
    opts.method === "PUT" ||
    opts.method === "PATCH"
  ) {
    init.body = opts.raw ? body : JSON.stringify(body);
  }
  try {
    const response = await fetch(url, init);
    if (!response.ok) {
      throw new RequestError(
        `The request to ${url} failed with status ${response.status}${
          response.status === 401
            ? " (You may need to double-check your access token)"
            : ""
        }`,
        response.status,
        url
      );
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const logoRoll = (idx?: number) => {
  const variants = [
    `
  ███████╗██████╗ ███████╗███████╗██████╗ ██╗   ██╗██████╗  ██████╗ ████████╗
  ██╔════╝██╔══██╗██╔════╝██╔════╝██╔══██╗╚██╗ ██╔╝██╔══██╗██╔═══██╗╚══██╔══╝
  ███████╗██████╔╝█████╗  █████╗  ██║  ██║ ╚████╔╝ ██████╔╝██║   ██║   ██║   
  ╚════██║██╔═══╝ ██╔══╝  ██╔══╝  ██║  ██║  ╚██╔╝  ██╔══██╗██║   ██║   ██║   
  ███████║██║     ███████╗███████╗██████╔╝   ██║   ██████╔╝╚██████╔╝   ██║   
  ╚══════╝╚═╝     ╚══════╝╚══════╝╚═════╝    ╚═╝   ╚═════╝  ╚═════╝    ╚═╝
  https://speedybot.js.org`,
    `
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░███░███░░████░████░███░░█░█░███░░░██░░███░
  ░█   ░█  █░█   ░█   ░█  █░███░█  █░█  █░ █ ░
  ░ ██░░███ ░███░░███░░█░░█░ █ ░███ ░█░░█░░█░░
  ░░  █░█  ░░█  ░░█  ░░█░░█░░█░░█  █░█░░█░░█░░
  ░███ ░█░░░░████░████░███ ░░█░░███ ░ ██ ░░█░░
  ░   ░░ ░░░░    ░    ░   ░░░ ░░   ░░░  ░░░ ░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  https://speedybot.js.org`,
    `
  ╱╭━━━╮╱╭━━━╮╱╭━━━╮╱╭━━━╮╱╭━━━╮╱╭╮╱╱╭╮╱╭━━╮╱╱╭━━━╮╱╭━━━━╮╱
  ╱┃╭━╮┃╱┃╭━╮┃╱┃╭━━╯╱┃╭━━╯╱╰╮╭╮┃╱┃╰╮╭╯┃╱┃╭╮┃╱╱┃╭━╮┃╱┃╭╮╭╮┃╱
  ╱┃╰━━╮╱┃╰━╯┃╱┃╰━━╮╱┃╰━━╮╱╱┃┃┃┃╱╰╮╰╯╭╯╱┃╰╯╰╮╱┃┃╱┃┃╱╰╯┃┃╰╯╱
  ╱╰━━╮┃╱┃╭━━╯╱┃╭━━╯╱┃╭━━╯╱╱┃┃┃┃╱╱╰╮╭╯╱╱┃╭━╮┃╱┃┃╱┃┃╱╱╱┃┃╱╱╱
  ╱┃╰━╯┃╱┃┃╱╱╱╱┃╰━━╮╱┃╰━━╮╱╭╯╰╯┃╱╱╱┃┃╱╱╱┃╰━╯┃╱┃╰━╯┃╱╱╱┃┃╱╱╱
  ╱╰━━━╯╱╰╯╱╱╱╱╰━━━╯╱╰━━━╯╱╰━━━╯╱╱╱╰╯╱╱╱╰━━━╯╱╰━━━╯╱╱╱    ╱`,
    `
  ─╔═══╗─╔═══╗─╔═══╗─╔═══╗─╔═══╗─╔╗──╔╗─╔══╗──╔═══╗─╔════╗─
  ─║╔═╗║─║╔═╗║─║╔══╝─║╔══╝─╚╗╔╗║─║╚╗╔╝║─║╔╗║──║╔═╗║─║╔╗╔╗║─
  ─║╚══╗─║╚═╝║─║╚══╗─║╚══╗──║║║║─╚╗╚╝╔╝─║╚╝╚╗─║║─║║─╚╝║║╚╝─
  ─╚══╗║─║╔══╝─║╔══╝─║╔══╝──║║║║──╚╗╔╝──║╔═╗║─║║─║║───║║───
  ─║╚═╝║─║║────║╚══╗─║╚══╗─╔╝╚╝║───║║───║╚═╝║─║╚═╝║───║║───
  ─╚═══╝─╚╝────╚═══╝─╚═══╝─╚═══╝───╚╝───╚═══╝─╚═══╝───╚╝───`,
    `
  ╔═╗ ╔═╗ ╔═╗ ╔═╗ ╔╦╗ ╦ ╦ ╔╗  ╔═╗ ╔╦╗ 
  ╚═╗ ╠═╝ ║╣  ║╣   ║║ ╚╦╝ ╠╩╗ ║ ║  ║  
  ╚═╝ ╩   ╚═╝ ╚═╝ ═╩╝  ╩  ╚═╝ ╚═╝  ╩ `,
  ];

  if (idx) {
    const logo =
      variants[idx] || variants[Math.floor(Math.random() * variants.length)];
    return logo;
  }
  const logo = variants[Math.floor(Math.random() * variants.length)];
  return logo;
};
