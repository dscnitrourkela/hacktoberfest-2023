[![Starware](https://img.shields.io/badge/Starware-⭐-black?labelColor=f9b00d)](https://github.com/zepfietje/starware)

<!-- [![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]  -->

<br />
<p align="center">
  <a href="https://github.com/dscnitrourkela/hacktoberfest-2022">
    
  </a>

  <h3 align="center">Hacktoberfest 2022</h3>

  <p align="center">
    Website for Hacktoberfest 2022
    <br />
    <br />
    <a href="https://community.dscnitrourkela.org/">View Live</a>
    ·
    <a href="https://github.com/dscnitrourkela/hacktoberfest-2022/issues">Report Bugs</a>
    .
    <a href="https://github.com/dscnitrourkela/hacktoberfest-2022/issues">Add Features</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
        <a href="#built-with">Built With</a>
        <li><a href="#hacktoberfest">Hacktoberfest</a></li>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#contribution-guidelines">Contribution guidelines</a></li>
        <li><a href="#local-repository-setup">Local Repository Setup</a></li>
        <li><a href="#running-the-project">Running the project</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#dsc-nit-rourkela">DSC NIT Rourkela</a></li>
    <li><a href="#starware">Starware</a></li>
  </ol>
</details>

## Built With

Following technologies and libraries are used for the development of this website

- [React](https://reactjs.org/)
- [Graphql](https://graphql.org/)

## Hacktoberfest

Hacktoberfest is a month-long celebration of open source software run by DigitalOcean in partnership with GitHub and Twilio. Hacktoberfest is open to everyone in our global community!

## Getting Started

To setup the project locally the steps below.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)

  ```sh
  # Homebrew
  brew install nodejs

  # Sudo apt
  sudo apt install nodejs

  # Packman
  pacman -S nodejs

  # Module Install
  dnf module install nodejs:<stream> # stream is the version

  # Windows (chocolaty)
  cinst nodejs.install

  ```

- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

```sh
  npm install --global yarn
```

- [Git](https://git-scm.com/downloads)

```sh
  # Homebrew
  brew install git

  # Sudo apt
  apt-get install git

  # Packman
  pacman -S git

  # Module Install (Fedora)
  dnf install git

```

### Contribution guidelines

---

Our Slack Community: [Slack Invite](http://bit.ly/NITRDevs) <br>

`Contributions are welcome 🎉🎉`

### Local Repository Setup

Please refer to the project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your local system
3.  **Commit** changes to your own separate branch
4.  **Push** your work back up to your fork
5.  Submit a **Pull request** so that we can review your changes

## Steps to add a Member Card
- Locate the `member.js in the `src file
- Add your details in the following format 
```sh
  Example ->
  {
    github: 'riteshsp2000',
    twitter: 'https://twitter.com/riteshsp2000',
    linkedin: 'https://linkedin.com/in/riteshsp2000',
    portfolio: 'https://riteshpatil.dev',
  },
```

### Running the project.

The project uses Yarn and not NPM. It is strictly advised to stick with Yarn so as to avoid dependency conflicts down the line.

```

## Install Dependencies
yarn install

## Run the Project
yarn develop

```

Following are the commands to remove/add new dependencies using yarn

```
## Add a new Package
yarn add package_name

## Remove an existing Package
yarn remove package_name

## Save Package as a Dev Dependency
yarn add -D package_name
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## DSC NIT Rourkela

Project developed and maintained by [DSC NIT Rourkela](https://dscnitrourkela.org/)
![DSC NIT Rourkela Cover Image](images/repoCover.png)

## Starware

dscnitrourkela/project-icecream is Starware.
This means you're free to use the project, as long as you star its GitHub repository.
Your appreciation makes us grow and glow up. ⭐
