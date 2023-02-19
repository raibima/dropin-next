import {SSTConfig} from "sst";
import {NextjsSite} from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "dropin-next",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    app.stack(function Site(ctx) {
      const site = new NextjsSite(ctx.stack, "dropin-next-app", {
        path: ".",
        environment: {
          FOO: process.env.FOO || "WHAT",
        },
      });
      ctx.stack.addOutputs({
        SiteUrl: site.url || "http://localhost:3000",
      });
    });
  },
} satisfies SSTConfig;
