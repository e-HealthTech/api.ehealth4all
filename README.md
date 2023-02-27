# Backend for ehealth4all
Welcome to the backend for HealthTech. This project provides the server-side logic and APIs for the HealthTech platform. The backend is built with Node.js, Express, and MongoDB.

## Getting Started
To get started with the backend, follow these steps:

Clone this repository to your local machine.\
Install Node.js and npm if they are not already installed.\
Install the project dependencies by running the command npm install.\
Set up the environment variables by creating a .env file at the root of the project. You can use the .env.example file as a template.\
Start the server by running the command npm start

## Project Structure
The project structure is organized as follows:

**src**: This directory contains the source code for the backend.\
**controllers**: This directory contains the controller functions for the API endpoints.\
**models**: This directory contains the data models for the MongoDB collections.\
**routes**: This directory contains the Express routers for the API endpoints.\
**utils**: This directory contains utility functions and modules used throughout the project.\
**test**: This directory contains the unit tests for the backend. 

## API Endpoints
The backend provides the following API endpoints:

POST /api/auth/register: Register a new user.\
POST /api/auth/login: Log in an existing user.\
GET /api/users/:id: Get a user by ID.\
PUT /api/users/:id: Update a user by ID.\
DELETE /api/users/:id: Delete a user by ID.\
GET /api/consultations: Get a list of consultations.\
POST /api/consultations: Create a new consultation.\
GET /api/consultations/:id: Get a consultation by ID.\
PUT /api/consultations/:id: Update a consultation by ID.\
DELETE /api/consultations/:id: Delete a consultation by ID.

## Contributing
Contributions are welcome! To contribute to the backend, follow these steps:

Fork/clone this repository.\
Create a new branch for your feature or bug fix.\
`git checkout -b your-branch-name`\
Make your changes and commit them with descriptive commit messages.\
`git commit -m "your-commit-message-here"`\
Push your changes to your fork.\
`git push -u origin dev`\
Check that your branch isn't behind commits in the `dev` branch:\
`git pull origin dev`\
If there are conflicts between your branch the the `dev` branch, rebase and commit your changes.\
Submit a pull request to this repository by:\
`Logging to your github and opening the repository to make a PR`\
Once you make a PR, reference the issue and request a `Reviewer` to review your code.\
Please ensure that your code follows the existing style and conventions, and that you have added unit tests for any new functionality.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
If you have any questions or comments, please feel free to contact us a mailto:iortsor@gmail.com.

## Code of Conduct
The Code of Conduct for this projuct can be found [HERE](https://github.com/e-HealthTech/ehealth4all/blob/master/CODE_OFCONDUCT.md)
