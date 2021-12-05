# VerificaCOVIDng

[![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/evidenceledger/VerificaCOVID/blob/main/LICENSE)

Extremely simple and privacy-preserving PWA (Progressive Web Application) for verifying the EU Digital COVID Certificates.

## Installation and building

Clone the repository to your machine:

    git clone git@github.com:evidenceledger/VerificaCOVIDng.git

Install dependencies:

    npm install

Test the application locally:

    npm run dev

Build the application

    npm run build

After building the application will be available in the `docs` subdirectory.

## Deploy to a web server or CDN

The app is fully static so it can be deployed to any web server or CDN.

## Customisation

### Customising the colors

Main display characteristics can be modified in `src/app.css`. For simple modification of colors you can modify the following CSS variables:

    --fore-color-primary:  white!important;
    --bg-color-primary:  #102a3a!important;
    --fore-color-secondary:  #04FF00!important;
    --bg-color-secondary:  #102a3a!important;

The `primary` colors are used mainly for the header bar and drop-down menu.

The `secondary` colors are used for the buttons.

### Customising the header title or adding a header icon

The header bar and associated drop-down menu is defined in `src/pages/headerbar.js`.

It is straightforward to modify the header title or any other property of the header, which is defined in the `HeaderBar()` function.

### Modifying the texts

All texts in the application are externalised in the `src/i18n/translations.js` file. Most simple modifications to the text literals in the application can be done in this file without touching the actual code for the different pages of the application.

The `translations.js` file is in reality in JSON format with an object for each text in the application. An example of this object is:

```json
"EU Digital COVID Credential Verifier": {
    "es": "Verificador de Credenciales COVID",
    "ca": "Verificador de Credencials COVID",
    "fr": "Outil de vérification numérique des justificatifs COVID de l'UE",
    "de": "Digitale COVID-Anmeldeinformationsüberprüfung in der EU",
    "it": "Strumento di verifica del certificato digitale COVID UE"
}
```

The key (in this case `"EU Digital COVID Credential Verifier"`) should correspond exactly with the literal used in the application. Inside this object there is a `key/value` pair for each translated language.

The application uses English as the primary language and so the keys are in this language.

However, there are some objects where the key starts with the letter `$` like in `"$intro01"`. This is done when the text in the key would be too long to be practical. In these cases, the objects include the English text in addition to the other languages. You can see an example in the very first object in `translations.js`.

### Adding a new language

Adding a new language involves two steps:

1. Adding translation objects in the file `translations`.
2. Adding a new option for that language in the file `src/i18n/i18.js`.

The `src/i18n/i18.js` file contains the code for switching languages, which is available as a page in the drop-down menu. Adding a new language is just a copy/paste and modification of the code for an existing language.

The icon refresenting the flag for the new language should be put in the `src/i18n/flags` directory. Optimum dimensions for the icon are 50x33 pixels.