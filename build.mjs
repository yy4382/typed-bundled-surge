import * as esbuild from "esbuild";
import fs from "fs";
import path from "path";
const packagesDir = path.join(
  new URL(".", import.meta.url).pathname,
  "packages"
);

const folderNames = fs
  .readdirSync(packagesDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

folderNames.forEach((folderName) => {
  let entryPoint = path.join(packagesDir, folderName, "src", "index.ts");
  const outputFile = path.join(packagesDir, folderName, folderName + ".js");

  if (!fs.existsSync(entryPoint)) {
    entryPoint = entryPoint.replace(".ts", ".js");
    if (!fs.existsSync(entryPoint)) {
      console.error(`Entry point ${entryPoint} does not exist.`);
    }
  }
  esbuild.build({
    entryPoints: [entryPoint],
    banner: {
      js: '/* Example banner from "Typed & Bundled Surge" project */',
    },
    outfile: outputFile,
    bundle: true,
    minify: true,
  });
});
