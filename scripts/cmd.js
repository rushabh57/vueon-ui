// cmd.js
import registerAddCommand from "./commands/add.js";
import registerRemoveCommand from "./commands/remove.js";
import registerAddAllCommand from "./commands/addAll.js";
import registerRemoveAllCommand from "./commands/removeAll.js";
import registerUsageCommand from "./commands/usage.js";
import registerPickCommand from "./commands/pick.js";
import registerListCommand from "./commands/list.js";
import registerUpdateCommand from "./commands/update.js";
// import registerSyncCommand from "./commands/sync.js";
import registerResetCommand from "./commands/reset.js";
import registerVersionCommand from "./commands/version.js";

export function registerCommands(program) {
  registerAddCommand(program);
  registerRemoveCommand(program);
  registerAddAllCommand(program);
  registerRemoveAllCommand(program);
  registerUsageCommand(program);
  registerPickCommand(program);
  registerListCommand(program);
  registerUpdateCommand(program);
  // registerSyncCommand(program);
  registerResetCommand(program);
  registerVersionCommand(program);
}
