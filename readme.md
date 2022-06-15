### test all
```shell
npx playwright test
```
### test with chromium browser
```shell
npx playwright test --project=chromium
```
### run specific tests from file
```shell
npx playwright test login.spec.js
```
### debug
```shell
npx playwright test --debug
```
### provide credentials
replace asterisks with real data
```shell
PLAYWRIGHT_USERNAME='*********' PLAYWRIGHT_PASSWORD="*********" npx playwright test base-ui.spec.js --debug
```