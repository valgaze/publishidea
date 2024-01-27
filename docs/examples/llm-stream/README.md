## LLM-Stream

This was the major inspiration for SpeedyBot 2.0-- how to efficiently allocate the edits to "stream in" responses from an LLM eendpoint.

- You can make up to 10 edits on a WebEx message which can approximate the "stream-in" effect on some LLM applications (otherwise the latency involved with "just waiting" for a generation is an awful user experience)

- With unknown chunk-length & unknown number of chunks, need a reasonable way to "smoothly" stream in edits so the user isn't left hanging

- Streaming implemented using: https://github.com/axflow/axflow (from https://axflow.dev)

- This is a bare-bones example which can be easily extended-- To see a reference example (which requires a storage/state mechanism) which will manage conversational context + swap personas, handle file-uploads and inject into prompt, see here: https://github.com/valgaze/speedybot-gpt4

## Setup

## 1) Clone repo & install dependencies

```
git clone https://github.com/valgaze/speedybot
cd examples/speedybot-starter
npm install
```

## 2) Set your bot access token

- Make a new bot and note its access token from here: **[https://developer.webex.com/my-apps/new/bot](https://developer.webex.com/my-apps/new/bot)**

You can set your `BOT_TOKEN` by running this script in the project directory:

`npm run bot:setup <your_token_here>`

<details><summary>Set token by hand</summary>
Copy the file **[.env.example](.env.example)** as `.env` in the root of your project and save your access token under the `BOT_TOKEN` field, ex

```
BOT_TOKEN=__REPLACE__ME__
```

</details>

## 1) Get your bot access token

- If you have an existing bot, get its token here: **[https://developer.webex.com/my-apps](https://developer.webex.com/my-apps)**

- If you don't have a bot, create one and save the token from here: **[https://developer.webex.com/my-apps/new/bot](https://developer.webex.com/my-apps/new/bot)**

- Write down your bot's access token, you'll need it in a minute

- Create a `.env` file that looks like **[.env.example](./.env.example)**

```
OPEN_AI_KEY=__REPLACE__ME__
BOT_TOKEN=__REPLACE__ME__
```

## Boot

Note: this example happens to use OpenAI, but you can swap-in HuggingFace, **[Anthropic](https://docs.axflow.dev/documentation/models/anthropic-completion.html)** or **[roll your own](https://docs.axflow.dev/guides/models/bring-your-own-models.html)**

Example Stream:

<img src="https://github.com/valgaze/speedybot-utils/blob/main/assets/various/llm_stream.gif?raw=true" />
