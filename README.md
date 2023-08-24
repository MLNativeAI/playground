# AI Playground

A free collection of ML models, free for everyone to use, powered by MLnative. 

More info can be found [here](https://playground.mlnative.com/about)

### What's in this repo

It's a Next.js web app that utilizes serverless functions to authenticate API calls to ML models. You can find samples here on how to properly integrate different types of ML models into your web apps. The samples include:

- [x] Image classification (file upload)
- [x] LLM (text api's)
- [x] Image generation (streaming responses, response rendering)
- [x] Text-to-speech (streaming response, audio playback)

Because all the models are hosted on MLnative, they all require an API key to be used. You can get one for free [here](https://mlnative.com).

### Can I have the source for the actual models too?

[There you go](https://github.com/MLNativeAI/model_examples/). It's just a bunch of stuff wrapped in Dockerfiles. Even thought the API calls on the frontend here are aimed at the MLnative backend, if you just call the models directly it should still work.

### I found an error/something's not working as expected

Please open a GH issue or reach out to on our [Discord](https://discord.gg/nP5XQZP9)