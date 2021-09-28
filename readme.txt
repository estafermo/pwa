https://medium.com/ngconf/angular-pwa-install-and-configure-858dd8e9fb07



"predeploy": "ng build --configuration production --base-href=/pwa/",
"deploy": "ng build --configuration production && npx gh-pages -d dist/angular-pwa"

PS C:\Users\ctw00437\Code\Orca\Remember\angular\pwa\angular-pwa> gh-pages -d .\dist\angular-pwa\