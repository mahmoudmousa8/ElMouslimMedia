const port = process.env.PORT || 3000;
process.env.PORT = port.toString();

console.log(`[ElMouslim Launcher] Starting production server on port ${port}...`);

try {
  const { start } = await import("vinext/start");
  if (typeof start === "function") {
    start();
  }
} catch (e) {
  try {
    await import("./dist/server/index.mjs");
  } catch (err) {
    console.error("Failed to launch ElMouslim server:", err);
  }
}
