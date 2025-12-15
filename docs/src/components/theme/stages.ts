import { CheckIcon, LucideAlertTriangle, XIcon } from "lucide-vue-next";

export const stages = {
  error: {
    border: "border-destructive",
    text: "text-destructive",
    icon: XIcon,
    message: "Something went wrong",
  },
  warning: {
    border: "border-caution",
    text: "text-caution",
    icon: LucideAlertTriangle,
    message: "Warning!",
  },
  success: {
    border: "border-positive",
    text: "text-positive",
    icon: CheckIcon,
    message: "Success!",
  },
};
