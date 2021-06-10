import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);

layoutEngine.activate();
start();

// "recast": "https://cdn.jsdelivr.net/npm/recast@0.20.4/main.min.js",
// "tslib": "https://cdn.jsdelivr.net/npm/tslib@2.2.0/tslib.min.js",
// "ts-invariant": "https://cdn.jsdelivr.net/npm/ts-invariant@0.7.3/lib/invariant.min.js",
// "graphql": "https://cdn.jsdelivr.net/npm/graphql@15.5.0/graphql.d.ts",
// "fast-json-stable-stringify": "https://cdn.jsdelivr.net/npm/fast-json-stable-stringify@2.1.0/index.min.js",
// "zen-observable": "https://cdn.jsdelivr.net/npm/zen-observable@0.8.15/index.js",
// "symbol-observable": "https://cdn.jsdelivr.net/npm/symbol-observable@4.0.0/lib/index.min.js",
// "@wry/equality": "https://cdn.jsdelivr.net/npm/@wry/equality@0.5.1/lib/equality.min.js",
// "optimism": "https://cdn.jsdelivr.net/npm/optimism@0.16.1/lib/bundle.cjs.min.js",
// "@wry/context": "https://cdn.jsdelivr.net/npm/@wry/context@0.6.0/lib/context.min.js",
// "graphql-tag": "https://cdn.jsdelivr.net/npm/graphql-tag@2.12.4/main.min.js",
// "typescript": "https://cdn.jsdelivr.net/npm/typescript@4.3.2/lib/typescript.min.js",
// "@apollo/client": "https://unpkg.com/@apollo/client@3.3.20/apollo-client.cjs.min.js"
