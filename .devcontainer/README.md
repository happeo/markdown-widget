# Dev Container Configuration

This directory contains the development container configuration for the Markdown Widget project.

## What's Included

### Environment
- **Node.js 16**: Compatible with the project's Webpack 4.x requirements
- **Yarn**: Package manager (preferred over npm for this project)
- **Git**: Version control with basic configuration

### VS Code Extensions
- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **React**: React development support
- **TypeScript**: TypeScript language support
- **Markdown**: Enhanced markdown editing
- **Auto Rename Tag**: Automatically rename paired HTML/JSX tags
- **Path Intellisense**: Autocomplete for file paths

### Environment Variables
- `NODE_OPTIONS=--openssl-legacy-provider`: Required for Webpack 4.x compatibility with newer Node.js versions

### Port Forwarding
- **8080**: Main development server (yarn start/dev)
- **3000**: Alternative development server

## Usage

1. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) in VS Code
2. Open the project in VS Code
3. When prompted, click "Reopen in Container" or use Command Palette: `Dev Containers: Reopen in Container`
4. Wait for the container to build and dependencies to install
5. Start developing!

## Available Commands

Once the container is running, you can use these commands in the VS Code terminal:

```bash
# Start development server (mocked environment)
yarn dev

# Start development server (real environment)
yarn start

# Build for production
yarn build

# Run linting
yarn lint

# Fix linting issues automatically
yarn lint --fix
```

## Customization

- **Git Configuration**: Edit `.devcontainer/gitconfig` to set your Git username and email
- **VS Code Settings**: Modify the `customizations.vscode.settings` section in `devcontainer.json`
- **Extensions**: Add or remove extensions in the `customizations.vscode.extensions` array

## Troubleshooting

### Container Won't Start
- Ensure Docker is running
- Try rebuilding the container: Command Palette → `Dev Containers: Rebuild Container`

### Permission Issues
- The container runs as the `node` user by default
- File permissions should be handled automatically

### Build Failures
- The `NODE_OPTIONS=--openssl-legacy-provider` environment variable is automatically set to handle Webpack 4.x compatibility
- If you still encounter build issues, check the Node.js version matches the requirements