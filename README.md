# Knip: dynamic-import namespace passed as an argument

```sh
pnpm install
pnpm knip
```

Expected: no issues. Each module's namespace is passed whole to `wrap()`, so
all of its exports are reachable (as with the static `import * as` case in
`src/static.ts`, which Knip handles correctly).

Actual (6.44.1 and later): `one` and `two` are reported as unused in
`src/then.ts` and `src/then-member.ts`. With 6.44.0
(`pnpm dlx knip@6.44.0`), only `src/await.ts` is reported.
