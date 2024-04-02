import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";
import dotEnv from "dotenv";
import postcssImport from "postcss-import";
import clear from "rollup-plugin-clear";
import htmlTemplate from "rollup-plugin-generate-html-template";
import liveReload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import serve from "rollup-plugin-serve";
import tailwindcss from "tailwindcss";
import typescriptEngine from "typescript";

const runtime = process.env.NODE_ENV || "development";
const environment = {
  development: "local",
  production: "prod"
};

const dotEnvConfigs = dotEnv.config({
  path: `./.env.${environment[runtime]}`
});

const enabledServer = Boolean(dotEnvConfigs.parsed?.ENABLED_SERVER);

console.debug("🐛🐛🐛 ----------------------------------🐛🐛🐛");
console.debug("🐛🐛🐛 ::: runtime :::", runtime);
console.debug("🐛🐛🐛 ::: dotEnvConfigs:::", dotEnvConfigs);
console.debug("🐛🐛🐛 ::: enabledServer:::", enabledServer);
console.debug("🐛🐛🐛 ----------------------------------🐛🐛🐛");

export default {
  input: ["./src/index.tsx"],
  output: {
    dir: "dist",
    format: "umd",
    sourcemap: runtime === "development",
    entryFileNames: "bundle.js",
    assetFileNames: "bundle.[extname]",
    globals: {
      react: "React",
      "react-dom": "ReactDOM"
    }
  },
  plugins: [
    clear({
      targets: ["dist"]
    }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    babel({
      babelrc: false,
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-typescript",
        [
          "@babel/preset-react",
          {
            runtime: "automatic"
          }
        ]
      ],
      extensions: [".ts", ".tsx", ".json", ".js", ".jsx"],
      exclude: "node_modules/**"
    }),
    typescript({
      exclude: "node_modules/**",
      include: ["src/**/*.ts+(|x)", "src/**/*.d.ts"],
      sourceMap: runtime === "development",
      typescript: typescriptEngine,
      inlineSources: runtime === "development"
    }),
    resolve({
      browser: true
    }),
    commonjs({
      include: ["node_modules/**", "node_modules/**/*"]
    }),

    postcss({
      extensions: [".css"],
      extract: true,
      plugins: [postcssImport(), tailwindcss(), autoprefixer()],
      inject: {
        insertAt: "top"
      },
      minimize: true
    }),
    htmlTemplate({
      template: "public/index.html",
      target: "dist/index.html"
    })
    // terser()
  ].concat(
    enabledServer
      ? [
          serve({
            open: true,
            openPage: "index.html",
            contentBase: "dist",
            host: "0.0.0.0",
            port: 3001
          }),
          liveReload("dist")
        ]
      : []
  ),
  external: ["react", "react-dom"]
};
