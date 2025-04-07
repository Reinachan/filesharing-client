# Fileshare Client

The modern client for [Fileshare](https://github.com/Reinachan/filesharing), a filesharing server intended for simple filesharing on the web. Upload a file and get a shareable link that can be used anywhere. The server administrator can create accounts with detailed permissions so that your server doesn't get overloaded by unknown people uploading files to it.

## Current State

> [!WARNING]
> This project is currently far from ready and is in its current state not a usable alternative to the existing frontend.

## Goals

This is supposed to partially replace the basic frontend rendered by the filesharing backend. The purpose of the original frontend was to be as simple as possible and working without JS. This new frontend does not intend to be as compatible as possible and instead is allowed to rely on modern browser features that are baseline or that are only progressively enhanced in specific browsers.

- Simple UI that is easy to use for anyone who've never used it before
- Good accessibility
- Modern CSS
- Simple to deploy alongside the server

## Deployment

> [!NOTE]
> As of right now, we don't have a proper guide on how to deploy this. This setup assumes that you're working on this in development only. We'll improve this section in the future when we've got that sorted out.

## Contributing

We love contributions and would like it to be as simple to contribute as possible! However, to do so, we need to ensure that our code is clean and easy to read so that the next contributor can easily get up and running. Please try to keep the codebase readable and documented :)

### Requirements

- The server running on your local system
- A `.env.local` file with a uri pointing at the server
- NodeJS with a version manager. We're using Volta.

#### Server

First we'll need to setup the server. More details on how to set that up will be available on its repo, but in short, download the release files from [Fileshare](https://github.com/Reinachan/filesharing/releases) and run it either with Docker or by running the executable file directly after setting up a `.env` file based on the `.env.example`. Running it directly is sufficient for development purposes.

#### .env

Now that you have the server running, you'll need to create a `.env.local` file in the root directory. This file can be based off of the `.env.example` file and should have a variable that points at the server's localhost uri.

#### Node

We're using a version manager called [Volta](https://volta.sh) to handle the node and npm versioning. You don't have to use Volta yourself, but it simplifies switching between node versions as it handles that automatically. You can also use NVM or any other version manager, but we currently don't actively support those. You can find the node version number in the `package.json` under the `volta` key.

### Getting Started

To run the project run

```sh
npm start
```

To build and test the built project, you can run

```sh
npm run build
npm run preview
```

### Linting and formatting

We use eslint, stylelint, and prettier to handle linting and formatting. You'll likely encounter a lot of errors in css files and when adding imports. This is to be expected. You can run the formatter to auto-fix many of these issues.

For VSCode users, you'll get a popup with some suggested plugins and there's additionally a settings file that ensures your editor adhers to the project standards. If you use another editor that isn't based on VSCode, you may have to manually ensure that your contribution is up to par unless your editor automatically runs eslint, stylelint, and prettier on save.

If you have to manually check, you can run

```sh
npm run lint
npm run stylelint
npm run prettier
```

You can append `-- --fix` to each of those to automatically fix any auto-fixable issues. This isn't necessary in VSCode as long as you have all the suggested plugins installed as it will automatically fix them on save
