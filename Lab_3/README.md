# Lab3

# User Registration and Display Application

This Angular application allows users to register their name and age through the `RegisterComponent` and displays the registered users' data using the `UsersComponent`.

## Usage

1. Include the `RegisterComponent` and `UsersComponent` in the desired template (`app.component.html` in this case).
2. Use the `(dataEvent)` output event of `RegisterComponent` to capture user data in the parent component (`AppComponent`).
3. Pass the collected user data to the `UsersComponent` to display all registered users.


*Figure 1: Screenshot of the main page displaying the vaild regesteration with user's data.*

![Details Page](./assets/images/valid.png)


*Figure 1: Screenshot of the main page displaying the Invaild regesteration with user's data.*

![Details Page](./assets/images/not-valid.png)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
