## Patterns

A SpeedyBot Listener is made up a sequence of steps, so if you want to add functionality to your Bot, you can just "snap-in" on a new step and then do whatever you want.

Below are snippets which should get you up and running-- you just grab them and drop into your bot.ts and get going

Tip: you can copy/paste this document into a large language model to get better code suggestions

[[toc]]

## Installation + Setup

### Prerequisites ​

- NodeJS 18+ or equivalent runtime like Bun/Deno/Worker/friends w/ **[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)** available/polyfill
- Text editor
- Terminal for accessing speedybot-cli

```
npm install speedybot
```

See **[/new](./new.md)** for easy to follow instructions to go from zero to a bot you can extend and customize however you want

## Send a message, card (static file)

```ts
import { SpeedyBot } from "speedybot";

async function main(token) {
  const Bot = new SpeedyBot(token);

  const msg = await Bot.sendTo("targetEmail@account.com", "Hi there");
  await Bot.reply(
    msg,
    "Also meant to remind you, you need to call back the ABC team!"
  );

  const card = Bot.card().setTitle("My Card");

  await Bot.sendTo(card);
}

main("__REPLACE__ME__");
```

## Handle submission from a card

```ts
import { SpeedyBot } from "speedybot";

async function main(token) {
  const Bot = new SpeedyBot(token);

  const msg = await Bot.sendTo("targetEmail@account.com", "Hi there");
  await Bot.reply(
    msg,
    "Also meant to remind you, you need to call back the ABC team!"
  );

  const card = Bot.card().setTitle("My Card");
  await Bot.sendTo("targetEmail@account.com", card);
}

main("__REPLACE__ME__");
```

Note: here we are not responding to user data, but rather self-contained sending mesages

## Restrict Access Pattern

Below you can see how to restrict for specific swatchs of email domains, could target specific individuals or call out to another system for additional authentication/authorization checks, etc

Tip: To make sure this triggers at the front front of your middleware stack, try swapping `Bot.addStep` with `Bot.insertStepToFront`

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(async ($) => {
  const allowedDomains = ["joe.com"];
  if (!allowedDomains.includes($.author.domain) && !$.data) {
    await $.send("You are not allowed sorry :( ");
    await $.send(
      $.card()
        .addTitle("Request Access")
        .addTextarea("Reason for access", "access_request")
    );
    return $.end;
  } else {
    // email valid, proceeding
    return $.next;
  }
});

Bot.addStep(async ($) => {
  if ($.data && $.data.access_request) {
    await $.send(
      `Thank you, your request has been received. You will be contacted when you are granted access`
    );
    const payload = {
      requesterName: $.author.name,
      reason: $.data.access_request,
    };
    // dispatch payload to ingestion or ticketing system
    console.log(`Access Request: ${JSON.stringify(payload)}`);
    return $.end;
  }
  return $.next;
});

Bot.addStep(async ($) => {
  await $.send("You're in!");
  return $.next;
});
```

## "Context"

You can scribble data on $.ctx that will persist only during the "run" of all the triggered flows

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(async ($) => {
  $.ctx.myValue = `${Bot.rando()}_${Bot.rando()}`;
  return $.next;
});

Bot.addStep(async ($) => {
  await $.send(`You said ${$.ctx.myValue}`);
  return $.next;
});
```

## Support Multiple Environments

You can use `$.ctx` to set flags

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(($) => {
  $.ctx.isDev = true; // set to true on debug mode to trace incoming messages
  return $.next;
});

// read flags
Bot.addStep(async ($) => {
  if ($.ctx.isDev) {
    await $.send($.buildDataSnippet($.debug()));
  }

  const card = $.card()
    .addTitle("Your link")
    .addLink(
      $.ctx.isDev
        ? `https://localhost:5173/docs/patterns`
        : "https://speedybot.js.org/docs/patterns"
    );
  return $.next;
});
```

## Debug and display snippets

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(($) => {
  $.ctx.debug = true; // set flag
  return $.next;
});

Bot.addStep(async ($) => {
  if ($.ctx.debug) {
    // read flag
    await $.send($.buildDataSnippet($.debug()));
  }
  return $.next;
});
```

## Mentioned people

Get a list of users @-mentioned in a post or message-- in a group room the 1st value will be removed

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(async ($) => {
  $.msg.mentionedPeople.forEach(async (personId) => {
    const deets = await Bot.getPerson(personId);
    await await $.send(Bot.stashCard(JSON.stringify(deets)));
  });
  return $.next;
});
```

## Handle File Uploads

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(async ($) => {
  const allowedDomains = ["allaboutfrogs.org", "geocities.com"];
  const proceed = allowedDomains.include($.author.domain);
  if (!proceed) {
    await $.send("sorry, your email is not part of this agent");
    return $.end;
  }

  return $.next;
});
```

## Handle "chips"

Chips are a special feature of **[SpeedyCards](./speedycard.md)** where button taps will be interpreted

````ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();


Bot.addStep(async ($) => {
  if ($.text) {
      const lower = $.text.toLowerCase()
      if (lower === 'pong') {
        await $.send('ping')
      }
  }

});

**Note:** The getData method can error out if the file is large. See the **[repeat pattern here in the Speedybot-voiceflow repo](#)**

### Bare minimum card handler

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
````

```ts
Bot.addStep(async ($) => {
  if ($.data) {
    await Bot.sendTo("bongo", `Yay ${JSON.stringify($.data)}`); // [!code  --]
    await $.send("yay${JSON}"); // [!code  ++]

    await $.send(`Yay ${JSON.stringify($.data)}`);
    /**
         {
            "myPickerDropdown": "xx",
            "myCheckboxes": "b,c",
            "addTextarea_result": "free response data"
         }
      */
  } else {
    await $.send(
      $.card()
        .addTitle("My Card")
        .addSubtitle("Add some data below")
        .addText("Free response")
        .addTextarea("Please enter data")
        .addText("Multi Select")
        .addMultiSelect(["a", "b", "c", "d"], "myCheckboxes")
        .addText("Single Select")
        .addPickerDropdown(["zz", "yy", "xx", "ww"], "myPickerDropdown")
    );
  }
  return $.next;
});
```

### Restrict emails

```ts
import { SpeedyBot } from "speedybot";

const Bot = new SpeedyBot();

Bot.addStep(async ($) => {
  const allowedDomains = ["allaboutfrogs.org", "geocities.com"];
  const proceed = allowedDomains.include($.author.domain);
  if (!proceed) {
    await $.send("sorry, your email is not part of this agent");
    return $.end;
  }

  return $.next;
});
```
