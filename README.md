# Final-Project-INST377
Justin Herskowitz & Marco Lapcevic 

Project Title
NBA Stats Hub: Team and Player Statistics and Information

Project Description
The website created is a “hub” of national basketball association (NBA) information. Loaded with the application programming interfaces (API’s) from https://www.balldontlie.io/ and rapidapi.com, we created functionalities such as buttons with team names on them to find crucial information like city, conference, and division. The user can also search for a current player and output their respective team, position, jersey number and more. Stored data in Supabase, we created a ranking system where users can rank their favorite players. And lastly, the user can return the top five teams (based on wins) from years 2019-2024 displayed in a table. For the libraries, we used “annyang” and the slider. Annyang helped us with voice commands saying hello, navigating to different pages, and changing the background color alongside the slider filled with images related to the NBA. 

Targeted browsers information
The website application will target specific browsers of which will be both Windows and MacOS systems as well as all smartphone devices, such as iPhone operating system (iOS), Android, Samsung Galaxy, and the list continues on.

Developer Manual Link 
https://docs.google.com/document/d/1Qxxa0x-SXizzpPRXDjTghqaZQhR6nzEEyG5wDa1Iq08/edit?usp=sharing




Developer Manual

How to install your application and all dependencies
First and foremost, developers must have specific technologies and devices available to them before installing the softwares to program the “NBA Stats Hub” website application. Developers must have access to a terminal, or command prompt (depending on the computer systems being used), because they will need to use either to install “Node.js” and node package manager (npm). “Node.js” is an open-source, cross-platform JavaScript (JS) runtime environment that enables users to run JS code outside of website browsers. On the other hand, “npm” is a tool and online repository that is utilized with “Node.js” to install packages, manage dependencies of projects, run scripts, and publish as well as share packages. Once “Node.js” and “npm” in particular are installed, you will enable the necessary capabilities and toolkit for JS development outside website browsers. With this in the picture, GitHub (or Git) and Supabase will also need to be installed and set up. Git is a version control tool programmers run locally on their own machines to access different versions of codes committed to the repositories. To add on, this tool will be convenient for developers as it would provide different versions of html, css, JS codes to access, view, and implement into their programming environments, such as visual studio code (VSCode), in order to run the application. Supabase is a tool that stores data for our website. 

How to run your application on a server

To run the NBA site on a server, start the backend by running `node index.js` so it runs on local host- `http://localhost:3000`. This handles saving and showing player rankings on the ‘rankings’ page. For the frontend, just push the code to GitHub and connect it to Vercel. Set your Supabase info as environment variables, and Vercel will host your site online.


How to run any tests you have written for your software

To run any tests written for the software, first ensure all development dependencies are installed using npm install. No tests have been implemented yet, so adding unit tests for API endpoints and front-end components is recommended for future development. However, codes may be tested using VScode if absolutely necessary to ensure the working capabilities of the “NBA Stats Hub” website application is in good working order.


The API for your server application - all GET, POST, PATCH, etc endpoints, and what they each do

The server application exposes two main API endpoints using Express and Supabase. The `POST /rankings` endpoint allows users to submit a ranking for an NBA player by sending a JSON with the `player_name` and `rating`. This data is then inserted into the `rankings` table in Supabase. The `GET /rankings` endpoint retrieves all player rankings from the same table, ordered by rating in descending order. 

A clear set of expectations around known bugs and a road-map for future development.

Some developers may experience bugs with the API. Both API’s used, balldontlie.io and rapidapi.com, require API keys which may need to be refreshed. Additionally, they may run out of calls/tokens and may need to be renewed. The roadmap for future development includes implementing a player comparison page, expanding filtering and sorting options for team and player data and integrating automated tests.