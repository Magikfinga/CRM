# d365-extension

This is a Dynamics 365 CRM extension project.

## Project Structure
- **src/** - Source code folder
- **dist/** - Built assets for production
- **config/** - Configuration files
- **scripts/** - Scripts for build and deployment

## Configuration Files
### .vscode/settings.json
```json
{ "editor.formatOnSave": true, "editor.codeActionsOnSave": { "source.organizeImports": true }}
```
### package.json
```json
{ "name": "d365-extension", "version": "1.0.0", "private": true, "scripts": { "build": "webpack --mode production", "dev": "webpack --mode development", "deploy": "node scripts/deploy.js" }, "dependencies": { "@microsoft/sp-core-library": "^1.2.0" }, "devDependencies": { "webpack": "^5.0.0", "webpack-cli": "^4.0.0" }}
```
### tsconfig.json
```json
{ "compilerOptions": { "target": "es5", "module": "commonjs", "outDir": "dist", "strict": true, "esModuleInterop": true }, "include": ["src/**/*"], "exclude": ["node_modules"] }
```
### .gitignore
```.vscode/
node_modules/
dist/
```