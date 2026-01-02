import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    plugins: ["react", "react-hooks"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/jsx-key": "warn",
      "react-hooks/exhaustive-deps": "warn",
    },
  }),
];

export default eslintConfig;


// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = dirname(__filename);

// // const compat = new FlatCompat({
// //   baseDirectory: __dirname,
// // });

// // const eslintConfig = [
// //   ...compat.extends("next/core-web-vitals", "next/typescript"),
// // ];

// // export default eslintConfig;
// // import { FlatCompat } from '@eslint/eslintrc'

// const compat = new FlatCompat({
//   // import.meta.dirname is available after Node.js v20.11.0
//   baseDirectory: import.meta.dirname,
// })

// const eslintConfig = [
//   ...compat.config({
//     extends: ("next/core-web-vitals", "next/typescript"),
//     rules: {
//       'react/no-unescaped-entities': 'off',
//       '@next/next/no-page-custom-font': 'off',
//       "react/no-unescaped-entities": "off",
//       "@typescript-eslint/no-unused-vars": "warn",
//       "react/jsx-key": "warn",
//       'react-hooks/exhaustive-deps': 'warn',
//     },
//   }),
// ]

// export default eslintConfig