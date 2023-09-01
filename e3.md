# Angular Coding Challenge

This challenge is designed to test your skills in Angular, NgRx, RxJS, Observables and resources.

## Challenge

Build an Angular application that allows users to create, edit, and delete job ads. The application should use the following technologies:

-   Angular
-   NgRx
-   RxJS
-   Observables
-   Resources
-   ViewModels (bonus)
-   NgRx Component Store (bonus)

The application should have the following features:

-   **Create new job ads:**  The user should be able to create new job ads by providing the following information: title, description, skills, and status.

-   **Edit existing job ads:**  The user should be able to edit existing job ads by changing any of the information that was provided when the job ad was created.

-   **Delete job ads:**  The user should be able to delete existing job ads.

-   **Change the status of a job ad:**  The user should be able to change the status of a job ad from `draft` to `published` or from `published` to `archived`.

- **List invoices:** The user should be able to list the invoices.

-  When a job ad is published, an invoice should be created.

- The application should be fully responsive.

Here are some additional details :

-   The `title`, `description`, and `skills` of a job ad are required fields.

-   The status of a job ad can be one of three values: `draft`, `published`, or `archived`.

-   When a job ad is deleted, all of its related data, such as the invoice, should also be deleted.

-   The due date of an invoice is calculated based on the date the job ad was published and the current month. For example, if a job ad is published on February 15, 2023, the due date of the invoice will be April 30, 2023.

-  Amount of the invoice is up to you.

## Bonus features

-   The ability to receive notifications when a job ad is created, edited, or deleted.

-   The ability to filter job ads by free text.

## Instructions

To complete this challenge, you will need to:

1.  Create a new Angular project using the Angular CLI.
2.  Install the NgRx, RxJS, Observables, Resources, Invoices, ViewModels, and NgRx Component Store packages.
3.  Create a store for the job ads data.
4.  Create a resource for fetching and updating the job ads data.
5.  Create a view model for the job ads data.
6.  Create a component for creating and editing job ads.
7.  Create effects for triggering invoices.
8.  Test the application.

## Interfaces

```
interface JobAd {
  id: number;
  /**
   * Title of a job ad. Required property.
   * It's not allowed to have two job ads with the same title.
   */
  title: string;
  /**
   * Description of a job ad. Required property.
   * Its length should not be less than 10 characters.
   */
  description: string;
  /**
   * List of skills required for a job ad.
   */
  skills: string[];
  /**
   * When a job ad has a "draft" status, it can be switched to "published" or "archived".
   * When a job ad has a "published" status, it can be only switched to "archived".
   * When a job ad has an "archived" status, it cannot be updated.
   */
  status: JobAdStatus;
}

export type JobAdStatus = 'draft' | 'published' | 'archived';

interface Invoice {
  id: number;
  jobAdId: number;
  amount: unknown; // up to you
  dueDate: Date;
}

interface JobAdDto extends JobAd {
  // DTO properties that are not part of the model
  createdAt: Date;
  updatedAt: Date;
  _embedded: unknown;
}

interface InvoiceDto extends Invoice {
  // DTO properties that are not part of the model
  createdAt: Date;
  updatedAt: Date;
  _embedded: unknown;
}

```

The `JobAd` interface defines the properties of a job ad. The `title` and `description` properties are required. The `skills` property is an array of strings. The `status` property can be one of three values: `draft`, `published`, or `archived`.

The `Invoice` interface defines the properties of an invoice. The `jobAdId` property is the ID of the job ad that the invoice is for. The `amount` property is the amount of money due. The `dueDate` property is the date by which the invoice is due.

The `JobAdDto` and `InvoiceDto` interfaces extend the `JobAd` and `Invoice` interfaces, respectively, and add properties that are not part of the model. These properties are used to store additional information about the job ad or invoice, such as the creation and update dates.

I hope this is helpful! Let me know if you have any other questions.

## Tips

-   Use the NgRx documentation to learn how to use the state management library.
-   Use the RxJS documentation to learn how to use the reactive programming library.
-   Use the Angular best practices to write clean and maintainable code.
-   Use the NgRx Component Store to store data that is specific to a component.
-   Make sure the application is fully responsive.

The data does not need to be persistent, so you can use a fake REST API like `json-server` to mock the backend. This will allow you to focus on developing the Angular application without having to worry about the backend.

Other Angular related development is welcome, such as using Angular Material or Angular Flex Layout. Other technologies and languages, such as Docker and Node, will not be taken into consideration.

## Submission

To submit your solution, please create a GitHub repository and share the link with us.

## Evaluation criteria

The application will be evaluated on the following criteria:

-   The use of Angular best practices.
-   The use of NgRx to manage the state of the application.
-   The use of RxJS and Observables to handle asynchronous operations.
-   The quality of the code.
-   The completeness of the features.
-   The responsiveness of the application.
-   The ability to trigger an invoice for each job ad publication.
-   The use of a view model in the component. (bonus)
-   The use of a ngrx component store. (bonus)

We hope you enjoy this challenge!
