import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Spread existing configs
  ...compat.extends("next/core-web-vitals"),

  // Add custom rule overrides
  {
    rules: {
      // Disable specific rules
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-img-element": "off",
      "react/no-hydration-error": "off",
    },
  },

  // Ignore specific patterns if needed
  {
    ignores: [
      // Add any files or patterns you want to ignore
      "dist/",
      ".next/",
    ],
  },
];

export default eslintConfig;
