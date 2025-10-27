// cmd.js
import registerAddCommand from "./commands/add.js";
import registerRemoveCommand from "./commands/remove.js";
import registerAddAllCommand from "./commands/addAll.js";
import registerRemoveAllCommand from "./commands/removeAll.js";
import registerUsageCommand from "./commands/usage.js";
import registerPickCommand from "./commands/pick.js";
import registerListCommand from "./commands/list.js";

export function registerCommands(program) {
  registerAddCommand(program);
  registerRemoveCommand(program);
  registerAddAllCommand(program);
  registerRemoveAllCommand(program);
  registerUsageCommand(program);
  registerPickCommand(program);
  registerListCommand(program);
}
