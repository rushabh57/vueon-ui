import { CheckIcon, LucideAlertTriangle, XIcon } from "lucide-vue-next";

export const stages = {
  error: {
    border: "border-red-500",
    text: "text-red-500",
    icon: XIcon,
    message: "Something went wrong",
  },
  warning: {
    border: "border-yellow-500",
    text: "text-yellow-600",
    icon: LucideAlertTriangle,
    message: "Warning!",
  },
  success: {
    border: "border-green-500",
    text: "text-green-600",
    icon: CheckIcon,
    message: "Success!",
  },
};
