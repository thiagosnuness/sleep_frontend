
# SleepCheck - Frontend

This is the frontend of the **SleepCheck** application, developed as part of the **Software Engineering** course at **PUC Rio**. The application allows users to enter their health and lifestyle information to receive predictions about potential sleep disorders.

## Table of Contents

- [Overview](#overview)
- [Architecture Overview](#architecture-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

SleepCheck enables users to:
- Enter health and lifestyle information such as age, heart rate, stress level, physical activity, and sleep duration.
- Receive a prediction indicating the likelihood of a sleep disorder.
- View all past predictions in a table.
- Delete individual predictions from the system.

The frontend communicates with the SleepCheck backend API to send data, retrieve predictions, and perform deletions.

## Architecture Overview

The SleepCheck application follows a simple client-server architecture:

- **Frontend**: Pure HTML, CSS, and JavaScript interface for user interaction.
- **Backend**: Flask API for model inference and data persistence using SQLite.
- **Docker Compose**: Manages both services for easy deployment.

## Features

- **Health Data Form**: Submit new information for prediction.
- **Prediction Table**: Displays all predictions stored in the database.
- **Delete Option**: Easily remove records using the remove button.
- **Live Integration**: Automatically fetches updated predictions after any action.

## Technologies

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Docker**
- **Docker Compose**

## Installation

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- A modern web browser (Chrome, Firefox, etc.)

### Steps

1. **Clone the repositories**:

   ```bash
   git clone https://github.com/thiagosnuness/sleepcheck_frontend.git
   git clone https://github.com/thiagosnuness/sleepcheck_backend.git
   ```

2. **Navigate to the frontend folder** (which contains the `docker-compose.yml` file):

   ```bash
   cd sleepcheck_frontend
   ```

3. **Run the application (frontend + backend)**:

   ```bash
   docker-compose up --build
   ```

4. **Access the application**:

   - Frontend UI: [http://localhost](http://localhost)
   - Backend Swagger Docs: [http://localhost:5000/openapi](http://localhost:5000/openapi)

## Usage

1. Fill in your health information in the form fields.
2. Click **Evaluate** to submit the data.
3. Your prediction will appear in the table below.
4. Use the **Remove** button to delete any record.

## Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add feature'`).
4. Push the branch (`git push origin feature-branch`).
5. Create a Pull Request.

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more information.

## Contact

For questions or suggestions:

- **Thiago Nunes** - [GitHub Profile](https://github.com/thiagosnuness)
- **SleepCheck Frontend**: [https://github.com/thiagosnuness/sleepcheck_frontend](https://github.com/thiagosnuness/sleepcheck_frontend)
- **SleepCheck Backend**: [https://github.com/thiagosnuness/sleepcheck_backend](https://github.com/thiagosnuness/sleepcheck_backend)
