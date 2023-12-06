## Deployment bug

- deploy.yml: npm i >> npm ci
- package.json has "@rollup/rollup-linux-x64-gnu": "latest"
- package-lock.json has "@rollup/rollup-linux-x64-gnu": "latest" from npm i --force
- TODO: swap the base on config.mts: base: "/publishidea/", // repo name

## other stuff

- Update announcement card to use nice pathing to speedybot.js.org/speedycard?card=ah-rth
- Update annoucnemen card to say
- SERVERLESS: Finally, WebEx bots w/o a running serve (but you can definitely put it on a traditional server)

# SpeedyBot 2.0

<p align="center">
  <a href="https://www.npmjs.org/package/element-plus">
    <img src="https://img.shields.io/npm/v/speedybot.svg" />
  </a>
  <a href="https://github.com/element-plus/element-plus">
    <img src="https://img.shields.io/badge/node-%20%3E%3D%2016-47c219" />
  </a>
  <a href="https://npmcharts.com/compare/element-plus?minimal=true">
    <img src="https://img.shields.io/npm/dm/speedybot.svg" />
  </a>
</p>

<img src="https://raw.githubusercontent.com/valgaze/speedybot-utils/main/assets/memes/logo4.jpeg?raw=true" />

## Setup

```
npm install speedybot
```

## Speedy & Easy

SpeedyBot offers a buttery-smooth developer experience to keep you building bots rather than scouring docs. There's zero external , support for ESM + CommonJS, built-in type hints with autocomplete, + lots of other DX goodness like local development with live-reload (see **[here for details](https://github.com/valgaze/speedybot/tree/deploy/examples/speedybot-starter)**). SpeedyBot makes it a breeze to handle user input regardless of the source/modality-- text, file uploads, form submission from SpeedyCards/, etc

## Portable & Deployable

SpeedyBot can run anywhere-- serverless environments, Bun/Deno/Vercel/friends, fixed server, CI/CD script-- if there's power and internet SpeedyBot should run happily without incident

## LLM Token Streaming

SpeedyBot makes it speedy & easy to build serverless bots for the LLM era. See the **[LLM steam example](https://github.com/valgaze/speedybot/tree/deploy/examples)**

<img src="https://github.com/valgaze/speedybot-utils/blob/main/assets/memes/demos/llm_stream.gif?raw=true" />

## SpeedyCards

SpeedyCards make it (yep) speedy and easy to build **[Adaptive Cards](https://adaptivecards.io)** where its to add colors, formatting and other visual embellishments.

## SpeedyBot "listener"

You can use SpeedyBot to only send messages + cards and nothing more. But if you have data on those cards you want to capture or if you want to provide an automated conversation experience SpeedyBot takes of all the hassle.

Ex. Here is a minimal handler that will echo back information if a user transmits data via text, file, and adaptive card. Write "show card" to display a card. You can chain multiple addSteps if you need to, but in this era you probably don't need/want to be doing much logic in code.

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();
Bot.addStep(async ($) => {
  // handle text
  if ($.text) {
    await $.send(`You said "${$.text}`);

    if ($.text.toLowerCase() === "showcard") {
      const card = $.card()
        .addTitle("Capture data")
        .addTextarea("Submit data")
        .addPickerDropdown(["option 1", "option 2", "option 3", "option 4"]);
      await $.send(card);
    }
  }

  // file handler
  if ($.file) {
    const { name, extension, contentType } = $.file;
    await $.send(
      `You uploaded "${name}", a *.${extension} file [${contentType}]`
    );
    // Fetch raw bytes (which you can pass onto other systems)
    // const TheData = await $.file.getData(); // do something w/ the contents/bytes
  }

  // form/card submissions
  if ($.data) {
    const dataSnippet = $.buildDataSnippet($.data);
    await $.send(`This data was submitted:`);
    await $.send(dataSnippet);
  }

  return $.next;
});

export default Bot;
```

## 🐍 Speedybot-Python

If you want to build bots with Python rather than Typescript, you can access [🐍Speedybot-Python🐍](https://pypi.org/project/speedybot) here
