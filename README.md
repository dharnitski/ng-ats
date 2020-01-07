# NgAts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Actions

Load Reqs - someone needs current (based on filters and pagination) list of Requisitions
Reqs List Loaded - we received updated list of requisitions from backend
Update Req Filter - requisitions filter was changed
Req Selected - someone changed current requisition
ReqCommon Loaded
Load Candidates - by filter including req_id
Candidates Loaded
Cand Selected
CandidateCommon Loaded

## State

ReqFilter - Requisitions Filter values
ReqPagination
Requisitions - currently loaded list of requisitions (single page?) based on filters
RequisitionCommon - currently selected Requisition - common info

Candidates - currently loaded list of candidates (single page?) based on filters
CandidateCommon - currently selected Candidate - common info