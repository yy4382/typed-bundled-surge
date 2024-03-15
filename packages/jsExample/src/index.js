import importExample from "./importExample";
// npm modules can be imported as well, which will be bundled by esbuild

const header = $request.headers;
header["X-Example-Header"] = "Hello from importExample.ts!";
$done({ headers: header, body: importExample() });
