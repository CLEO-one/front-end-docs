# Folder structure

## Create React App
```
•
└── src
    ├── 🗂api
    ├── 🗂common(utils)
    ├── 🗂components
    ├── 🗂hoc    
    ├── 🗂i18n    
    ├── 🗂models
    ├── 🗂pages
    ├── 🗂router
    ├── index.js
    └── store.js
```

## Next.js
```
•
├── 🗂api
├── 🗂common(utils)
├── 🗂components
├── 🗂hoc
├── 🗂i18n   
├── 🗂models
├── 🗂pages
├── 🗂views
└── next.config.js
```


### api
Where API calls and settings are held / implementation of ajax/api calls and error handlings such as 404, 500

### common (utils)
All common functions, constants and configs goes here, you can also call it `utils`

### components
Where you can keep your dumb/presentational components
[Dan Abramov what's dumb/presentational component] (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

####hoc
Higher Order Components goes here

### i18n
Where you keep your Internationalization and localization files/logics

### models
Where you keep Rematch models

### pages
Where you keep your pages and specific files for the each page, these are also includes container/smart components. Mostly these components are connected to redux using `connect` or there are totally unique in the whole app and used only once.

### router
Where you keep routing setup files. This is __ONLY__ valid for Create React App as Next.js has its own routing. 

### views
This is same as pages but __ONLY__ for Next.js projects as Next.js as it's own paging and routing system it's better to create a file file and  do logic under `views` folder then import it to `pages` folder.

