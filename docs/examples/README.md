## Examples

SpeedyBot provides several "batteries-included" samples that demonstrate how to deploy Speedybot on a variety of platforms/services and infrastructure. It doesn't matter if it's Serverless-less/Server-ful, Container-less-- it can probably run Speedybot.

There's no "best" infrastructure solution but rather choices/options depending on your setup and requirements. If you need to run behind a firewire for instance, Websockets could work very well

Grab an example and see the included README for instructions on how to quickly go from zero to an agent with which you can start collecting feedback from test users

| Platform                                                                                                                                       | Needs server? | Needs webhooks? |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------- |
| **[🔌 Local dev (websockets)](https://github.com/valgaze/speedybot-mini/blob/deploy/examples/speedybot-starter/README.md)**                    | ❌            | ❌              |
| **[💻 Deploy to Simple Express Server](https://github.com/valgaze/speedybot-mini/blob/deploy/examples/simple-server/README.md)**               | ✅            | ✅              |
| **[λ Deploy to AWS Lamda](https://github.com/valgaze/speedybot-mini/blob/deploy/examples/lambda/README.md)** using **[SST](https://sst.dev/)** | ❌            | ✅              |
| **[🔥 Deploy to Worker](https://github.com/valgaze/speedybot-mini/blob/deploy/examples/worker/README.md)**                                     | ❌            | ✅              |
