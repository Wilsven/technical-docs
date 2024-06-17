# Technical Documentation for Data Analytics & AI using MkDocs Material

## Publishing the Site

### GitHub Pages

Since the documentation is already hosted on GitHub, [GitHub Pages](https://pages.github.com/) is certainly the most convenient way to publish our documentation. It's free of charge and pretty easy to set up.

#### with GitHub Actions

Using [GitHub Actions](https://github.com/features/actions), we can automate the deployment of our documentation. At the root of the repository, create a new GitHub Actions workflow, e.g. [`.github/workflows/ci.yml`](.github/workflows/ci.yml), and copy and paste the following contents at this [link](https://squidfunk.github.io/mkdocs-material/publishing-your-site/#:~:text=name%3A%20ci,gh%2Ddeploy%20%2D%2Dforce). Or you can simply refer to the [`ci.yml`](.github/workflows/ci.yml) which has already been set up.

Now, when a new commit is pushed to either the `master` or `main` branches, the static site is automatically built and deployed. Push your changes to see the workflow in action.

If the GitHub Page doesn't show up after a few minutes, go to the settings of the repository and ensure that the [publishing source branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for the GitHub Page is set to `gh-pages`.

The documentation should shortly appear at [wilsven.github.io/technical-docs/](https://wilsven.github.io/technical-docs/).

