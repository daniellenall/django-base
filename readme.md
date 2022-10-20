# Example Django config

Work in process project to build a good basis for future Django projects.

## Docker Commands

Build:
```sh
docker compose up --build
``` 

Stop:
```sh
docker compose down
```

## Tailwind 

To build changes to the tailwind config:
```sh
cd src/
npm run start:css
```
This command will build a tailwind css file, containing only classes that are used in the app templates. 

This will pick up all files with this app/templates/*.html/js structure, but this pathing can be edited in the content block of tailwind.config.js

Tailwind files can be found in the src/static/styles/tailwind/ folder. 
src contains the base css file, and dist contains the output of the build. 

Build does not need to be run during production or when no styling changes are being made, only if a new class is used in the templates, or the css settings are changed.