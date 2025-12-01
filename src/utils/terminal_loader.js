import { cyan, green, red, reset } from "../../scripts/tokens/colors.js";

// Simple terminal loader utility
let loaderInterval = null;

export function startLoader(text) {
  const frames = ["⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  let i = 0;

  process.stdout.write("\n");
  loaderInterval = setInterval(() => {
    process.stdout.write(`\r${cyan}${frames[i = ++i % frames.length]} ${text}${reset}`);
  }, 80);
}

export function stopLoader(success = true, message = "") {
  clearInterval(loaderInterval);
  const symbol = success ? `${green}✔${reset}` : `${red}✘${reset}`;
  process.stdout.write(`\r${symbol} ${message}\n`);
}
