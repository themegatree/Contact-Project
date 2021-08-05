# Bookmark Manager

You're going to build a bookmark manager.  A bookmark manager is a website to maintain a collection of bookmarks (URLs). You can use it to save a webpage you found useful. You can add tags to the webpages you saved to find them later. You can browse bookmarks other users have added. You can comment on the bookmarks.

### Specification
The website will have the following **specification**:

* Show a list of bookmarks
* Add new bookmarks
* Delete bookmarks
* Update bookmarks
* Comment on bookmarks
* Tag bookmarks into categories
* Filter bookmarks by tag
* Users have to sign up and log in to manage their own bookmarks

### Starting out

1. Create a user interaction diagram for the first requirement - showing a list of bookmarks. **Keep it simple** and then codify it in a feature test using `cypress`. The diagram should include:
  - the URL the user navigates to
  - The HTTP request and response
  - A route handler to handle the request
  - What the user sees on the page.

### Sequelize

### SetUp
npm install express --save-dev
npm install ejs
npm install jasmine --save-dev
npm install nodenon --save-dev
npm install sequelize --save-dev
npm init
npx cypress open -- to get your folders
npm install cypress --save-dev