# Scratch

## WIP

- [ ] Generate library project for backend services

  ```bash
  ng generate library cc-services \
    --project-root=libs/cc-services \
    --prefix=services --entry-file=index \
    --skip-install --skip-package-json
  ng lint test cc-services # verify
  
  # delete build target, it will be built as part of cc-frontend
  npx json -I -f angular.json -e "delete this.projects['cc-services'].architect.build"

  # delete unnecessary files
  npx rimraf libs/cc-services/*package.json
  npx rimraf libs/cc-services/tsconfig.lib.prod.json
  npx rimraf libs/cc-services/src/lib/*.*

  # Generate the feature module
  ng generate module cc-services --project=cc-services --flat --no-common-module
  echo "export * from './lib/cc-services.module';" > libs/cc-services/src/index.ts

  # Add module unit test

  # Add shell component
  ng generate component shell --project=cc-services --module=cc-services.module.ts --display-block
  "<router-outlet></router-outlet>" > libs/cc-services/feature-shell/src/lib/shell/shell.component.html

  ```

---

## Archive 

- [ ] Generate the AWS AppSync GraphQL backend API with DynamoDB
  - Navigate to the AWS AppSync Console
  - Select `Create API`
  - Choose `GraphQL APIs` and `Design from scratch`
  - API Details:
    - API name: `Comedy Connector AppSync API`
  - Create a GraphQL type
    - Choose `Create type backed by a DynamoDB table now`
    - Model information: TODO image
  - Drop schema.graphql in `apps/backend`
