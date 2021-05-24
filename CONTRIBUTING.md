# Contributing to Framestack

Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.

## Code Structure

Currently, the is split up into these categories:

- **Components** : React UI Elements blocks
- **Data** : JSON files that contains the actual libraries/tools/tools, their tags, images icons & link to their respective websites
- **Pages** : Static pages written in Typescript with React and NextJS (see Nextjs Docs)
- **Public** : Website static images & Ressources images
- **Services** : Miscellaneous functions that pass data from the dataset to the visual side (Pages, React, HTML)
- **Styles** : SCSS Styles

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

### Submitting a ressource (library, framework, tool) to the dataset

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
  - `data/cloud.json`
- Please be sure to follow ressources json file format

### Submitting a feature/bugfix to the project

- Create Issue with tag `enhancement` or `bug`
- Fork the repository
- Clone your fork locally
- Create a new branch and make your commits
- Push your commits to your forked repo
- Make a Pull request
- Request will be added after review


