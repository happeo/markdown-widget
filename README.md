# markdown-widget

Render markdown on Happeo pages 


## Getting Started

### Option 1: Development with Dev Container (Recommended)

The easiest way to get started is using the provided dev container configuration. This ensures a consistent development environment across all machines.

#### Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

#### Setup
1. Clone the repository
2. Open the project in VS Code
3. When prompted, click "Reopen in Container" or use Command Palette: `Dev Containers: Reopen in Container`
4. The dev container will automatically:
   - Set up Node.js 16
   - Install all dependencies with `yarn install`
   - Configure VS Code with recommended extensions
   - Set up linting and formatting

The development server will be available at `http://localhost:8080` when running `yarn start` or `yarn dev`.

### Option 2: Local Development

#### Prerequisites

Happeo Admin access rights

Tools

- npm
  ```
  npm install npm@latest -g
  ```
- node version >16
  ```
  node -v
  ```

### Development

#### Prerequisite

You have created a Custom app in Happeo admin and slug is copied to clipboard.

#### In development mode

1. Clone the repo
2. Replace slug in index.js with the clipboard version
3. Install NPM packages
   ```
   npm install
   ```
4. Start widget. This will start the webserver and serve the index.html file from localhost:8080.
   ```
   npm run start
   ```
5. Open Happeo
6. Goto pages and edit or create page
7. Add the Markdown widget

Note to start widget in development mock mode. This will start the webserver and serve the index.html file from localhost:8080. Widget-sdk services are mocked.
```
 npm run dev
```


#### In testing or Published mode

1. Clone the repo
2. Replace slug in index.js with the clipboard version
3. Install NPM packages
   ```
   npm install
   ```
4. Build widget
   ```
   npm run build
   ```
5. Open Happeo admin and upload bundle to your app.

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
