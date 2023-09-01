# Angular Coding Challenge

Create an Angular application for publishing job ads. The application should contain three pages:

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
   * When a job ad has a "draft" status, it can be switched to "published" or "archived".
   * When a job ad has a "published" status, it can be only switched to "archived".
   * When a job ad has an "archived" status, it cannot be updated.
   */
  status: JobAdStatus;
}

export type JobAdStatus = 'draft' | 'published' | 'archived';
```

- Create Job Ad Page
    - This page should contain a form for creating a job advertisement.
    - A job ad can be only created with "draft" or "published" status.
- Job Ad List Page
  - **List:**
    - On this page, you should display a list of job advertisements.
    - It is up to you whether you want to use a table or cards to visualize the data.
  - **List Item:**
    - Each item in the list should have "Edit" action available.
    - If a job ad is a draft, the "Publish" action should also be available.
    - If a job ad is published, the "Archive" action should also be available.
  - **Filters:**
    - Add a search bar that allows to search for job advertisements by title.
    - Add the ability to filter job ads by status.
    - Add pagination for job ads.
    - The search term, selected job ad status, and pagination parameters should be preserved
      in the URL, so that the same content will be displayed on hard refresh.

---

- It's up to you to choose the UI library.
- All pages should be responsive.
- Using a state management solution (preferably NgRx) will be considered a plus.
- It's not required to build the backend application.
  You can use the [`json-server`](https://www.npmjs.com/package/json-server) package for a fake REST API.
  Building a custom API (preferably using the NestJS) will be considered a plus.
