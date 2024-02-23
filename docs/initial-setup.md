# Initial Setup

This document records the steps used to create this project initially as learning about and setting up this stack was part of my 
goal of this project.

## Steps used to create this project

- [x] Initialize workspace

  ```shell
  ng new comedy-connector --strict --create-application=false \                                                       ─╯
     --new-project-root=libs \
     --package-manager=pnpm
  pnpm install @schematics/angular@latest
  ng add @schematics/angular
  ng add @angular-eslint/schematics                        # add eslint schematics
  ```

- [x] Update Angular version to latest

  ```shell
  ng update @angular/cli @angular/core
  ```

- [x] Enable strict template type checking

  ```shell
  npm install --save-dev json
  npx json -I -f tsconfig.json -e "delete this.angularCompilerOptions.fullTemplateTypeCheck"
  npx json -I -f tsconfig.json -e "this.angularCompilerOptions.strictTemplates = true"
  ```

- [x] Generate the frontend application

  ```shell
  ng generate @angular-eslint/schematics:application cc-frontend --prefix=cc \
    --project-root=apps/frontend/cc-frontend \
    --style=scss --routing=true
  ng serve cc-frontend # verify
  ```

- [x] AWS Amplify init

  ```shell
  amplify init
  ? Enter a name for the project (comedyconnector)
  ? Initialize the project with the above configuration? No
  ? Initialize the project with the above configuration? No
  ? Enter a name for the environment dev
  ? Choose your default editor: IntelliJ IDEA
  ✔ Choose the type of app that you're building · javascript
  Please tell us about your project
  ? What javascript framework are you using angular
  ? Source Directory Path:  apps/frontend/cc-frontend/src
  ? Distribution Directory Path: dist/cc-frontend
  ? Build Command:  npm run build
  ? Start Command: npm run serve
  Using default provider  awscloudformation
  ? Select the authentication method you want to use: AWS profile
  ? Please choose the profile you want to use ComedyConnector
  ```
  
  - [ ] Amplify setup

    - Install
      ```shell
      pnpm install aws-amplify
      ```
    - Follow [this guide](https://docs.amplify.aws/angular/start/getting-started/setup/#set-up-frontend)
    - 


- [ ] Setup additional targets: lint and e2e testing

  ```shell
  ng lint cc-frontend
  ng e2e cc-frontend
  ```

---

- [x] Task

  ```shell
  code
  ```

---

- [x] Setup e2e tests with WebDriverIO

  ```shell
  ng e2e 
  ```

---

- [x] Setup Amplify CLI - [see docs](https://docs.amplify.aws/angular/start/getting-started/installation/#configure-the-amplify-cli)
- [x] Add polyfill - [see docs](https://docs.amplify.aws/angular/start/project-setup/create-application/)
- [x] Create libs
  - nx generate @nx/angular:library appsync  --unitTestRunner=jest --style=scss --tags=shared --directory=libs/appsync
- [ ] Create Amplify backend - steps adapted from this [nx angular amplify tutorial](https://dev.to/beavearony/getting-started-with-a-angularnx-workspace-backed-by-an-aws-amplify-graphql-api---part-1-24m0)
  - Generate the angular library: `nx generate @nx/angular:library appsync`
  -
  - NOTE: the [amplify docs to create an app](https://docs.amplify.aws/angular/start/project-setup/create-application/) do not work with the nx setup
- [x] Setup Amplify UI components - [see docs](https://ui.docs.amplify.aws/angular/getting-started/installation)
- Setup additional Angular features from [Amplify Dev Center](https://docs.amplify.aws/angular/)
  - [ ] Pre-built UI components
  - [ ] Auth
  - [ ] Serverless backend
  - [ ] Storage
  - [ ] GraphQL
- [ ] [Setup CI](https://nx.dev/recipes/ci)
