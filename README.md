# palworldui

This is a reactjs front-end project that interfaces with the Kotlin palapi and exposes useful information and tools around PalWorld.

This was a lot of countless hours reverse engineering the PalWorld DataTables and writing custom scripts to automagically apply the correct textures and maps to the models.

# Dependencies

Node 18:

- Recommended you install this via NVM (Node version manager) by doing:
  (This will automatically install and use the required node version)
  ```shell
   nvm use
  ```
- ReactJS
- Google's model-viewer web component library.
- PalWorld DataTables

# Getting Started (Development)

Once you've confirmed you're on the same node version as the project supplied in the .nvmrc file go ahead and
clone the project down, and then run the following commands:

```shell
yarn or npm install
```

Once the dependencies have finished installing, you will need to run the following commands to start the webpack-dev-server

```shell
yarn start or npm run start
```
