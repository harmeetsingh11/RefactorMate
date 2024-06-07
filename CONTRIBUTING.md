# RefactorMate Contributing Guidelines

Thank you for taking the time to contribute to our project. Please take a moment to read the following guidelines before contributing:

> ⚠️IMPORTANT **Note**
>
> **Pull Requests _having no issue associated_ with them _will not be accepted_. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**

## Prerequisites ⚠️

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.

- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them.

- Make sure you have [Node.js](https://nodejs.org/) installed.
- Make sure you have [PNPM]([https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://pnpm.io/installation)) installed.

---

## How to Contribute 🤔

To get started, look at the existing [**Issues**](https://github.com/harmeetsingh11/RefactorMate/issues) or [**create a new issue**](https://github.com/harmeetsingh11/RefactorMate/issues/new/choose)!

### Setup guidelines 🪜
Follow these steps to setup RefactorMate on your local machine

1. [Fork](https://github.com/harmeetsingh11/RefactorMate/fork) the project

   ![1](https://github.com/harmeetsingh11/RefactorMate/assets/130365071/7348d460-6fbc-471a-810f-4eddf8718fa9)

3. Clone the project to run on your local machine using the following command:

   ```sh
   git clone https://github.com/<your_github_username>/RefactorMate.git
   ```

4. Get into the root directory

   ```sh
   cd .\RefactorMate\
   ```

5. Install all dependencies by running

   ```sh
   pnpm install
   ```
6. Get OpenAI API Key [here](https://openai.com/product)

    Configure API key in `.env` file 

    ```ts
    VITE_OPENAI_API_KEY = <YOUR_OPENAI_API_KEY>
    ```

7. Create your branch

   ```sh
   git checkout -b <your_branch_name>
   ```

8. Run the Client (Frontend)
    Start the frontend application:

    ```bash
    pnpm run frontend
    ```
    The client will be accessible at http://localhost:5173 by default.


9. Run the Server (Backend)
    Start the backend:

    ```bash
    pnpm run backend
    ```
    The server will be running at `PORT:8000`

10. Make your changes before staging them.

11. Stage your changes

      ```bash
      git add <filename>
      ```
      or

      ```bash
      git add .
      ```

12. Commit your changes

      ```bash
      git commit -m "<your-commit-message>"
      ```

13. Push your changes to your branch

    ```bash
    git push origin "<your_branch_name>"
    ```

14. Create a [PULL REQUEST](https://github.com/harmeetsingh11/RefactorMate/compare) 💣

    > Click _compare across forks_ if you don't see your branch
    
> [!IMPORTANT]
> Ensure your PR title conforms to the required format. Use one of the specified prefixes, followed by a colon and a space. Here are the valid prefixes:
> - `build: `
> - `chore: `
> - `docs: `
> - `feat: `
> - `fix: `
> - `perf: `
> - `refactor: `
> - `revert: `
> - `style: `
> - `test: `
> 
> **Example:**
> ```
> feat: add new login feature
> ```
> Provide a clear description of the changes you made and submit your PR.

### Alternatively, you can also contribute using GitHub Desktop 💻

1. **Open GitHub Desktop 🖥️**
   🚀 Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. **Clone the Repository 🔄**
   - If you haven't cloned the `RefactorMate` repository yet, follow these steps:
     - Click on the `File`menu in GitHub Desktop.
     - Select `Clone Repository`.
     - Choose the `RefactorMate` repository from the list of repositories on GitHub and clone it to your local machine.

3. **Switch to the Correct Branch 🌿**
   - Ensure you are on the branch that you want to submit a pull request for.
   - To switch branches:
     - Click on the `Current Branch` dropdown menu in GitHub Desktop.
     - Select the desired branch.

4. **Make Changes ✏️**
   - Make your changes to the code or files in the repository using your preferred code editor.

6. **Commit Changes  📝**
   - In GitHub Desktop:
     - You'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
     - Enter a summary and description for your changes in the `Summary` and `Description` fields, respectively.
     - Click the `Commit to <branch-name>` button to commit your changes to the local branch.

7. **Push Changes to GitHub ⬆️**
   - After committing your changes, click the `Push origin` button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

8. **Create a Pull Request 📩**
   - Go to the GitHub website and navigate to your fork of the `RefactorMate` repository.
   - Click on the `Compare & pull request` button between your fork and the original repository.

9. **Review and Submit  ✅**
   - On the pull request page:
     - Review your changes.
     - Add any additional information, such as a title and description, that you want to include with your pull request.
     - Click the `Create pull request` button to submit your pull request.

10. **Wait for Review  ⏳**
   - Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the `RefactorMate` repository.


## Useful Links 🔗

- [GitHub Forking Guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [GitHub Pull Requests Guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [GitHub Issues Guide](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues)
- [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

