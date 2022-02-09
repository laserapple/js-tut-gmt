import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";

let banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.description} | Copyright ${new Date().getFullYear()} | ${pkg.license} license */`;

let minify = true;

let files = ["home.js", "place.js"];

export default files.map(function (file) {
  return {
    input: `src/${file}`,
    output: {
      file: file,
      format: "iife",
      name: `${file}`,
      banner: banner,
      plugins: minify ? [terser()] : null,
      sourcemap: minify,
    },
  };
});
