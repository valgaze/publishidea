## LLM-Stream

This was the major inspiration for SpeedyBot 2.0-- how to efficiently allocate the edits to "stream in" responses from an LLM.

- You can make up to 10 edits on a WebEx message which can approximate the "stream-in" effect on some LLM applications

- With unknown chunk-length & unknown number of chunks, need a reasonable way to "smoothly" stream in edits so the user isn't left hanging

- Streaming implemented using: https://github.com/axflow/axflow (from https://axflow.dev)

- This is a bare-bones example which can be easily extended-- To see a reference example (which requires a storage/state mechanism) which will manage conversational context + swap personas, handle file-uploads and inject into prompt, see here: https://github.com/valgaze/speedybot-gpt4

## Setup

- Create a `.env` file that looks like **[.env.example](./.env.example)**

```
OPEN_AI_KEY=__REPLACE__ME__
BOT_TOKEN=__REPLACE__ME__
```

## Boot

Note: this example happens to use OpenAI, but you can swap-in HuggingFace, **[Anthropic](https://docs.axflow.dev/documentation/models/anthropic-completion.html)** or **[roll your own](https://docs.axflow.dev/guides/models/bring-your-own-models.html)**

Example Stream:

<img src="https://github.com/valgaze/speedybot-utils/blob/main/assets/memes/demos/llm_stream.gif?raw=true" />
