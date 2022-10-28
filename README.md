# Angular Coding Challenge

Create an Angular application for publishing job ads. The application should contain four pages:

- Landing Page
    - This page should contain information about the job ads platform you are building.
      This is where we expect you to show off your CSS skills.
- Create Job Ad Page
    - This page should contain a form for creating a job advertisement.
- Edit Job Ad Page
    - This page should contain a form for editing a job advertisement.
      The job ad model looks like this:

```ts
export interface JobAd {
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
   * True if a job ad is published. False if a job ad is a draft.
   */
  isPublished: boolean;
}
```

- Job Ad List Page
    - On this page, you should display a list of job advertisements.
      It is up to you whether you want to use a table or cards to visualize the data.
    - Each item in the list should have edit and delete actions available.
      If the job ad is not published, the publish action should also be available.
    - Add a search bar that allows to search for job advertisements.
    - Add the ability to filter job ads by the `isPublished` property.

---

- It's up to you to choose the UI library.
- All pages should be responsive.
- Using a state management solution (preferably NgRx) will be considered a plus.
- It's not required to build the backend application.
  You can use the [`json-server`](https://www.npmjs.com/package/json-server) package for a fake REST API.
  Building a custom API (preferably using the NestJS) will be considered a plus.

