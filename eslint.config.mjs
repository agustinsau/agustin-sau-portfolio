import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import js from "@eslint/js";

const eslintConfig = defineConfig([
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "node_modules/**",
    "next-env.d.ts",
    ".env*",
    ".git/**",
    ".vscode/**",
  ]),
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Mejoras de calidad de código
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",

      // React
      "react/react-in-jsx-scope": "off", // No necesario en Next.js
      "react/display-name": "warn",
      "react/prop-types": "off", // Usamos TypeScript

      // TypeScript
      "@typescript-eslint/explicit-function-return-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],

      // Import
      "import/no-anonymous-default-export": "warn",
    },
  },
]);

export default eslintConfig;
