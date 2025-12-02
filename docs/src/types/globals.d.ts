// allow raw .txt imports
declare module "*.txt?raw" {
    const content: string;
    export default content;
  }
  
  // allow CSS imports
  declare module "*.css";
  
  // for navigator.clipboard etc.
  interface Navigator {
    clipboard: {
      writeText: (text: string) => Promise<void>;
    };
  }
  
  // globals that appear in your Vue files
  declare const h: any;
  declare const interval: any;
  