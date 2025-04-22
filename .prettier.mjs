export default {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  printWidth: 100,

  // Add explicit values for these options
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "avoid",
  endOfLine: "lf",

  // Provide an ordered list of plugins
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],

  // Expanded overrides
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.ts",
      options: {
        parser: "typescript",
      },
    },
    {
      // Handle JSON files
      files: ["*.json", "*.jsonc"],
      options: {
        parser: "json",
        trailingComma: "none", // Avoid syntax errors in JSON files
      },
    },
    {
      // Handle markdown files
      files: ["*.md", "*.mdx"],
      options: {
        proseWrap: "always",
      },
    },
  ],
};
