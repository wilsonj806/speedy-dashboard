# Features

## Description

This project needs to be scoped out at some point, so having a physical document listing out features and such is pretty normal. It's a requirement for planning out projects and for preventing scope creep.

## Purpose of the app

The purpose of this app is to give users a configurable dashboard. Expanding on the configurability of the dashboard, users should be able to add their own cards, remove cards, and move cards around in the main screen.

## A more granular breakdown

1. The app should have the below:
  - a pop up modal for adding new cards in
  - a dashboard that presents cards in a grid
  - cards that present different information depending on what card is selected
  - cards that can be drag and dropped into different positions

2. The user should be able to present the following:
  - Bare minimum:
    - TODO list
    - cat facts
    - cat pictures
    - local weather
    - lorem generator
  - Requires slightly more complex API calls:
    - Meetup list
    - Google calendar
    - emails
    - spotify player
    - WeTransfer
  - **Extra credit**
    - card/ card extension for adding events to calendar:
    - NYC transit

## Order to implement the above in

Order is going to be done by difficulty, as certain things require some form of authentication.

- Easy:
  - "Add card" card
  - To do list
  - cat facts
  - cat pictures
  - local weather
  - WeTransfer(probably)
- Medium(requires authentication):
  - email
- Hard(authentication but more involved?)
  - Spotify player
  - Google calendar
  - Meetup