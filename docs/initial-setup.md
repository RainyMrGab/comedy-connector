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
    --style=scss
    --routing=true
    --strict=true
  ng serve cc-frontend # verify
  ```

- [x] AWS Amplify init

  ```
  amplify init
  ? Enter a name for the project (comedyconnector)
  ? Initialize the project with the above configuration? No
  ? Initialize the project with the above configuration? No
  ? Enter a name for the environment dev
  ? Choose your default editor: IntelliJ IDEA
  ✔ Choose the type of app that you're building · javascript[schema.graphql](..%2F..%2F..%2F..%2FDesktop%2Fschema.graphql)
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
  
  - [x] Amplify setup

    - Install
      ```shell
      pnpm install aws-amplify
      ```
    - Follow [this guide](https://docs.amplify.aws/angular/start/getting-started/setup/#set-up-frontend)

- [x] Add GraphQL API

  - Generate API
  ```
  amplify add api
  ? Select from one of the below mentioned services: GraphQL
  ? Here is the GraphQL API that we will create. Select a setting to edit or continue Authorization modes: API key (default, expiration time: 7 days from now)
  ? Choose the default authorization type for the API API key
  ✔ Enter a description for the API key: · Public
  ✔ After how many days from now the API key should expire (1-365): · 7
  ? Configure additional auth types? Yes
  ? Choose the additional authorization types you want to configure for the API
  ? Here is the GraphQL API that we will create. Select a setting to edit or continue Name: comedyconnector
  ? Provide API name: comedyconnector
  ? Here is the GraphQL API that we will create. Select a setting to edit or continue Continue
  ? Choose a schema template: One-to-many relationship (e.g., “Blogs” with “Posts” and “Comments”)
  ✔ Do you want to edit the schema now? (Y/n) · no
  ```
  
  - Edit the file: [current schema](amplify/backend/api/comedyconnector/schema.graphql)
  - Deploy: `amplify push`
  ```
  ✔ Are you sure you want to continue? (Y/n) · yes
  ? Do you want to generate code for your newly created GraphQL API Yes
  ? Choose the code generation language target typescript <--
  ? Enter the file name pattern of graphql queries, mutations and subscriptions apps/frontend/cc-frontend/src/app/graphql/**/*.graphql
  ? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
  ? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
  ? Enter the file name for the generated code apps/frontend/cc-frontend/src/app/graphql/cc-graphql.service.ts
  ```
  - Test with local mocking
    - ```shell
      amplify mock api # test at http://10.0.0.9:20002/
      ```
    - Test using some of these [GraphQL Queries](graphql-queries.md)
    
  - Connect the frontend to the API
    - Generate the Team List component
  
      ```shell
      ng generate component --standalone teamList --project cc-frontend
      ```
      
    - Follow instructions to [connect frontend to the API](https://docs.amplify.aws/angular/start/getting-started/data-model/#connect-frontend-to-api)
    - 
  
---

- [ ] Create Angular lib for graphql services: I have notes on this below

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
