# COMP3133 - Lab Exercise 10

**Student ID:** 101533701

Multi-environment Angular application demonstrating TEST, UAT, and PROD build configurations using `ng generate environments` and file replacements in `angular.json`.

Reference: https://angular.dev/tools/cli/environments

## Environments

Four environment files live in `src/environments/`:

| File | envName | production | apiUrl |
|------|---------|-----------|--------|
| `environment.ts` (default) | PROD | true | https://api.prod.example.com |
| `environment.development.ts` | DEV | false | http://localhost:3000/api |
| `environment.test.ts` | TEST | false | https://api.test.example.com |
| `environment.uat.ts` | UAT | false | https://api.uat.example.com |

Each Angular build configuration uses `fileReplacements` in `angular.json` to swap `environment.ts` at build time.

## Run

```bash
npm install

# serve
npm run start:dev     # ng serve -c development  -> DEV
npm run start:test    # ng serve -c test         -> TEST
npm run start:uat     # ng serve -c uat          -> UAT
npm run start:prod    # ng serve -c production   -> PROD

# build
npm run build:dev
npm run build:test
npm run build:uat
npm run build:prod
```

The running app shows which environment was compiled in, along with the `apiUrl` and `featureFlag` values from that environment file.

## Project structure highlights

- `src/environments/` - four environment files
- `angular.json` - `test` and `uat` build/serve configurations added alongside the default `development` and `production`
- `src/app/app.component.ts` - imports `environment` and binds it to the template
- `src/app/app.component.html` - renders the active env as a color-coded card
