import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";

let minify = true;

let files = ["home.js", "place.js"];

export default files.map(function (file) {
  return {
    input: `src/${file}`,
    output: {
      file: file,
      format: "iife",
      name: `${file}`,
      //   banner: banner,
      plugins: minify ? [terser()] : null,
      sourcemap: minify,
    },
  };
});
