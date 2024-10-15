/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "mighty-dinosaur",
      removal: input?.stage === "main" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "eu-west-2",
        },
      },
    };
  },

  async run() {
    new sst.aws.StaticSite("mighty-dinosaur-astro", {
      build: {
        command: "bun run build",
        output: "dist",
      },

      domain:
        $app.stage === "main"
          ? {
              name: "mighty-dinosaur.dev",
              aliases: ["mighty-dinosaur.net"],
              dns: sst.aws.dns(),
            }
          : undefined,
    });
  },
});
