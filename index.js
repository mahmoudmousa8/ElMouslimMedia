import { startProdServer } from "vinext/server/prod-server";

const port = process.env.PORT || 3000;
process.env.PORT = port.toString();

console.log(`[ElMouslim Hostinger] Launching production server on port ${port}...`);

startProdServer({ port: Number(port) });
