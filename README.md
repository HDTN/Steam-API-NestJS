# Steam Login App with NestJS

This project is a NestJS application that allows users to authenticate using their Steam account and retrieve their profile and inventory data.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/HDTN/steam-login-app.git
    cd steam-login-app
    ```

2. **Install dependencies**:
    ```bash
    pnpm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add your Steam API key and session secret:
    ```env
    STEAM_API_KEY=your_steam_api_key_here
    SESSION_SECRET=your_session_secret
    ```

## Usage

1. **Start the application**:
    ```bash
    pnpm start
    ```

2. **Navigate to** `http://localhost:3000/auth/steam` to initiate the Steam login process.

3. **Check the profile and inventory endpoints**:
    ```bash
    curl http://localhost:3000/auth/profile/{steamId}
    curl http://localhost:3000/steam/inventory/{steamId}
    ```

## Project Structure

src/
├── auth/
│ ├── auth.controller.ts
│ ├── auth.module.ts
│ ├── auth.service.ts
│ └── steam.strategy.ts
├── steam/
│ ├── steam.controller.ts
│ ├── steam.service.ts
│ └── steam.module.ts
├── main.ts
└── app.module.ts


- **auth.controller.ts**: Handles the authentication routes.
- **auth.module.ts**: Authentication module.
- **auth.service.ts**: Contains business logic for validating and fetching user data from Steam.
- **steam.strategy.ts**: Passport strategy for Steam OpenID authentication.
- **steam.controller.ts**: Handles the inventory routes.
- **steam.service.ts**: Contains business logic for fetching user inventory from Steam.
- **main.ts**: Entry point of the application.
- **app.module.ts**: Root module of the application.

## Endpoints

- `GET /auth/steam`: Initiates Steam login.
- `GET /auth/steam/return`: Callback endpoint for Steam login.
- `GET /auth/success`: Endpoint to confirm successful login.
- `GET /auth/profile/:steamId`: Fetches the user's Steam profile.
- `GET /steam/inventory/:steamId`: Fetches the user's CS2 inventory.

## Environment Variables

- `STEAM_API_KEY`: Your Steam API key. You can get it from [Steam Web API Key](https://steamcommunity.com/dev/apikey).
- `SESSION_SECRET`: A secret key for session encryption.

## Contributing

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature-name
    ```
3. **Make your changes**.
4. **Commit your changes**:
    ```bash
    git commit -m 'Add feature name'
    ```
5. **Push to the branch**:
    ```bash
    git push origin feature-name
    ```
6. **Create a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README according to your project's requirements.
