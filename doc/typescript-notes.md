# Typescript notes

## Declaration files

- Declaration files let you make and share commonly used stuff which is nice
- Local declaration files can be specified in `tsconfig.json` with the "typeRoots" option
  - e.g for this project:
  ```json
  {
    "typeRoots": [
        "./node_modules/@types",
        "./src/@types"
      ],
  }
  ```
- For this project as we want to be able to call our custom types anywhere without imports, we add it as a namespace so that it can be accessed globally
- However, we also add it as a module export so you can manually import it into files
