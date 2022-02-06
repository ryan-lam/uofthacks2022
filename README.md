# SimpleHR - UofTHacks2022

[Video Demo (YouTube)](https://youtu.be/SJY14yCSI9s)

## Inspiration
We wanted to help small businesses bounce back from covid (and navigate "the great resignation") by helping them manage, maintain, and recruit employees. We also wanted to help restore economic activity by increasing employment as well as increasing economic productivity. We felt that an HR management software would be the best type of software to tackle these challenges.

## What it does
SimpleHR is an HR manager that allows small business owners to manage their HR using a simple and easy-to-use website. Businesses can manage the schedules of employees, calculate and streamline payrolls, schedule interviews with potential employees, and access business/employment records (like tax forms). SimpleHR also uses the Twilio API to send notifications (and scheduling requests) to employees if there's a change in their schedule or if the business needs them for an on-call shift.

## How we built it
- Backend: Express, Node
- Frontend: Vue
- Database: Firebase
- APIs: Twilio
- Languages: Javascript, HTML, CSS/SCSS

## Challenges we ran into
- Figuring out how to design the database (especially since it's a NoSQL database)
- Figuring out how to use the Twilio API
- Figuring out how middleware and JSON parsing works
- Figuring out how to work with JSON dynamically

## Accomplishments that we're proud of
- Passing data props to child components
- Resolving issues with CORS/JSON-parser
- Working with APIs, especially figuring out how the headers work
- Designing modern SPA

## What we learned
- Learning how to work with dynamic JSON
- Vue routing
- Designing a NoSQL database to work with our project
- Making API routes that utilize 3rd-party APIs
- Learning Twilio and how you shouldn't git push your API key (LOL)

## What's next for SimpleHR
- Make a mobile app
- Make an employee-side for the website (to track hours, etc.)

## Built With
css3, express.js, firebase, html5, javascript, node.js, scss, twilio, vue
