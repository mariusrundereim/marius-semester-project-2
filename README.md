# Semester Project 2

![image](https://raw.githubusercontent.com/mariusrundereim/marius-semester-project-2/main/src/assets/images/cover-image.png)

## Badges

[![Automated E2E Testing](https://github.com/mariusrundereim/marius-semester-project-2/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/mariusrundereim/marius-semester-project-2/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/mariusrundereim/marius-semester-project-2/actions/workflows/unit-test.yml/badge.svg)](https://github.com/mariusrundereim/marius-semester-project-2/actions/workflows/unit-test.yml)

[![Deploy static Bidify Website](https://github.com/mariusrundereim/marius-semester-project-2/actions/workflows/deploy-website.yml/badge.svg)](https://github.com/mariusrundereim/marius-semester-project-2/actions/workflows/deploy-website.yml)

## Brief

An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.

When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.

## Stack

- HTML
- TailwindCSS
- JavaScript
- Jest
- Cypress
- Figma
- Trello
- Github Pages

## User stories

The client has specified the following requirements in the form of User Stories:

1. A user with a **stud.noroff.no** email may register
2. A registered user may login
3. A registered user may logout
4. A registered user may update their avatar
5. A registered user may view their total credit
6. A registered user may create a **Listing** with a title, deadline date, media gallery and description
7. A registered user may add a **Bid** to another user’s **Listing**
8. A registered user may view **Bid's** made on a **Listing**
9. An unregistered user may search through **Listing's**

## Install Dependencies

1. Install npm

```
npm i
```

2. Build

```
npm run build
```

3. Run watch

```
npm run watch
```

## Testing

1. Cypress

```
npm run test-e2e
```

2. Jest

```
npm run test-unit
```

## Application

Link to production website [Bidify](https://mariusrundereim.github.io/marius-semester-project-2/)
