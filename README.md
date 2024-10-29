# Angular18PrimengApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.


### Generate components
```
ng generate component components/home
ng generate component components/login
ng generate component components/register
```
### Generate guard
```
ng generate guard guards/auth
```
### Generate service
```
ng generate service services/auth
```
### Generate interface
```
ng generate interface interfaces/auth
```
### Generate directive
```
ng generate directive shared/password-mismatch
```

## Install dependencies
- PrimeNg
```
npm install primeng primeicons primeflex
```
- Json-Server
```
npm i json-server@0.17.3
```
## Update angular.json style property
```
 "styles": [
              "node_modules/primeng/resources/themes/saga-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeflex/primeflex.css",
              "src/styles.css"
            ],
```
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
## Start the Json-Server

```bash
npm run json-server
```


## Resources
[Link](https://youtu.be/nTWZB8bWAJE?si=-qmsmovd0pxDfikD)
