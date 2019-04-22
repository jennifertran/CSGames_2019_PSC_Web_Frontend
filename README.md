# CSGames 2019 PSC Web Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

# PSC - Web
**Participants:** 2 People

**Skills:** Use the technology of your choice as long as the application is available online and compatible with the latest version of Chrome or Firefox. Bring your own laptop!

**Duration:** 3 hours

**Weight:** 7 %

The multiverses are converging, and we’re hiring!
In an effort to hire the best and the brightest talent not only in this universe-ities but in others, the Public Service Commission is looking at implementing a new recruitment solution that will allow talented job-seekers to apply to government jobs no matter where they are. The challenge is substantial: we need to hire people across multiple Canadas, keep track of the special skills needed to provide government services in parallel universes, and make sure anyone can apply, no matter the quality of their internet connection in their own reality. Time is running out – we needed this yesterday, and we haven’t perfected time-travel yet.

You are tasked to create a web application that will implement the features in the table below

Technological Stack
Use the technology of your choice as long as the application is available online and compatible with the latest version of Chrome or Firefox. The web application will be used to validate the implementation of each feature. Source code also needs to be available online (ex. Github)

You need to provide a diagram that outlines the technologies that you have decided to use to build your applications (Language, Database, Scripting, etc..)

In order to help you start the PSC has provided a JSON data structure

## Functionality list, with associated points
| Rated Functionalities expected to be included in your application                                                           | Points |
|-----------------------------------------------------------------------------------------------------------------------------|--------|
| 5 min. MANDATORY application recap video                                                                                    | 5      |
| Display, add, remove and update job-seeker profile (see JSON)                                                               | 13     |
| Display, add, remove and update job description (see JSON)                                                                  | 13     |
| Display available jobs on a map according to their addresses                                                                | 8      |
| Display job-seekers on a map according to their addresses                                                                   | 8      |
| Identify the job closest to a given job-seeker                                                                              | 5      |
| Job-seeker account management (Sign up, add and modify) - job-seeker information - job-seeker skills                        | 8      |
| Allow job-seekers to upload a résumé to their profile                                                                       | 5      |
| Search feature - Job-seeker - Profiles - Job description                                                                    | 8      |
| Browse - Jobs, résumé, job-seekers                                                                                          |        |
| Job listing should allow sorting and filtering (Date posted, Salary, etc..)                                                 | 5      |
| Accessibility: Application need to be compatible with WCAG 2.0 level A                                                      | 8      |
| Job Matching - Identify potential matching job-seekers for each job offering - Identify Job opportunity for each job-seeker | 13     |
| Ability to share Job description on Social Media                                                                            | 5      |
| Authentication for system users (job-seekers and hiring manager): Username and Password                                     | 8      |
| Log-in to include Captcha like feature                                                                                      | 5      |
| Self-serve password recovery feature                                                                                        | 5      |
| UI must be available in both official languages (French / English)                                                          | 8      |
| Development stack diagram                                                                                                   | 8      |
| Code quality: up to 8 point based on inline comments, documentation, variable names, ease of reading                        | 8      |

## Data structure
The following structures are proposed, you can change them if you need to.

### Candidate
```
[
   {
      "id": Interger,  // Unique ID
      "first_name": "String", // First name of candidate
      "last_name": "String", // Last name of candidate
      "universe_permits": Array of Integer, // Array listing all Universe’s this candidate can apply
      "willing_to_do_overtime": Bool, // Willing to do overtime
      "willing_to_relocate_to_other_universe": Bool, // Willing to relocate to another univers
      "home_address": "String", // Address in String unformatted
      "education_level ":Integer, // ID education level
      "skills": "Array of Strings" // All skills tied to this candidate
   }
]
```

### Job Posting
```
[
   {
      "id": Integer,  // Unique ID
      "description_en": "String", // English description
      "description_fr": "String", // French description
      "salary": Interger, // Job postings salary
      "work_location": "String", // Address in String unformatted
      "work_universe": Integer, //Universe ID
      "required_skill": "Array of String", // All skills required for this Job Posting  
      "date_posted": "Date", // Date
      "education_level": Integer} // ID minimum education level required
   }
]
```
### Universe
```
[
   {
      "id": Integer, // Unique ID
      "Universe": "String" // Name of Universe
   }
]
```
### Education
```
[
   {
      "id": Integer, // Unique ID
      "Education_Level": "String" // Name of Education level
   }
]
```
## Expected deliverables
- Application source code
- Dev Stack Diagram
- List of completed feature from the functionality list
- 5 minutes application recap video

# How to Run:

Install the package either `yarn` or `npm install`

Start the frontend by doing `yarn start` or `npm start`

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
