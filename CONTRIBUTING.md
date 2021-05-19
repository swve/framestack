# Contributing to Framestack

> Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md).
> By participating in this project you agree to abide by its terms.

## Code Structure

Currently, the is split up into these categories:

- **components** : React UI elements blocks
- **data** : json files that contains the actual libraries/tools/tools their tags, images icons & link to their respective websites
- **pages** : Website pages written with React and NextJS (see Nextjs Docs)
- **public** : Website static images & data's images
- **services** : Functions that are used in the websites pages to retrieve data from the json files and various other miscellaneous functions to separate logic from UI
- **styles** : SCSS Styles

## Commands

### Work in Dev Environement

```sh
$ npm run dev
```

### Run Unit Tests

```sh
$ npm run test
```

## Submitting Contributions

This project follows [GitHub's standard forking model](https://guides.github.com/activities/forking/). Please fork the project to submit pull requests.

### Submitting New ressource (library, framework, tool) to the dataset

- Create Issue with tag `new ressource`
- Fork the repository
- Clone your fork locally
- Create a new branch and make your commits
- Push your commits to your forked repo
- Make a Pull request
- Request will be added after review

#### Conventions

- Prioritize square images (best format : 80x80 png images)
- Your ressource image should live in `public/boxes-img`
- Please add your ressource in one of the 3 files :
  - `data/frameworks.json`
  - `data/libraries.json`
  - `data/tools.json`
- Please be sure to follow ressources format

### Submitting New feature/bugfix to the project

- Create Issue with tag `enhancement` or `bug`
- Fork the repository
- Clone your fork locally
- Create a new branch and make your commits
- Push your commits to your forked repo
- Make a Pull request
- Request will be added after review
