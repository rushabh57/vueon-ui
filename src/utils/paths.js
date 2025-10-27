// scripts/utils/paths.js
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This matches your working path logic exactly:
const templatesDir = path.join(__dirname, "../../", "src", "components");

export { __filename, __dirname, templatesDir };
