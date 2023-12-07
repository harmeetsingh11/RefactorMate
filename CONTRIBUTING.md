# RefactorMate Contributing Guidelines

Thank you for taking the time to contribute to our project. Please take a moment to read the following guidelines before contributing:

> ⚠️IMPORTANT **Note**
>
> **Pull Requests _having no issue associated_ with them _will not be accepted_. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**

## Prerequisites ⚠️

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.

- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them.

- Make sure you have [Node.js](https://nodejs.org/) installed.
- Make sure you have [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.

---

## How to Contribute 🤔

To get started, look at the existing [**Issues**](https://github.com/harmeetsingh11/RefactorMate/issues) or [**create a new issue**](https://github.com/harmeetsingh11/RefactorMate/issues/new/choose)!

### Setup guidelines 🪜
Follow these steps to setup RefactorMate on your local machine

1. [Fork](https://github.com/harmeetsingh11/RefactorMate/fork) the project
   ![1](https://github.com/harmeetsingh11/RefactorMate/assets/130365071/7348d460-6fbc-471a-810f-4eddf8718fa9)

2. Clone the project to run on your local machine using the following command:

   ```sh
   git clone https://github.com/<your_github_username>/RefactorMate.git
   ```

3. Get into the root directory

   ```sh
   cd .\RefactorMate\
   ```

4. Install all dependencies by running

   ```sh
   npm install
   ```
5. Get OpenAI API Key [here](https://openai.com/product)

    Configure API key in `.env` file 

    ```ts
    VITE_OPENAI_API_KEY = <YOUR_OPENAI_API_KEY>
    ```

6. Create your branch

   ```sh
   git checkout -b <your_branch_name>
   ```

7. Run the Client (Frontend)
    Start the frontend application:

    ```bash
    npm run frontend
    ```
    The client will be accessible at http://localhost:5173 by default.


8. Run the Server (Backend)
    Start the backend:

    ```bash
    npm run backend
    ```
    The server will be running at `PORT:8000`

9. Make your changes before staging them.

10. Stage your changes

      ```bash
      git add <filename>
      ```
      or

      ```bash
      git add .
      ```

11. Commit your changes

      ```bash
      git commit -m "<your-commit-message>"
      ```

12. Push your changes to your branch

    ```bash
    git push origin "<your_branch_name>"
    ```

13. Create a [PULL REQUEST](https://github.com/harmeetsingh11/RefactorMate/compare) 💣

    > Click _compare across forks_ if you don't see your branch


## Useful Links 🔗

- [GitHub Forking Guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [GitHub Pull Requests Guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [GitHub Issues Guide](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
- [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

