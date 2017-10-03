# mandarine

*Basic jekyll theme built with [foundation framework](http://foundation.zurb.com/)*.

## Installation

Execute:

    $ bower install
    $ bundle install


## Contents At-A-Glance

Mandarine is a clone of the minima theme. It has all the necessary files and
directories to have a new Jekyll site up and running with zero-configuration.

### Layouts

Refers to files within the `_layouts` directory, that define the markup for your theme.

  - `default.html` &mdash; The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents into this file at the line that says ` {{ content }} ` and are linked to this file via [FrontMatter](https://jekyllrb.com/docs/frontmatter/) declaration `layout: default`.
  - `home.html` &mdash; The layout for your landing-page / home-page / index-page.
  - `page.html` &mdash; The layout for your documents that contain FrontMatter, but are not posts.
  - `post.html` &mdash; The layout for your posts.

### Includes

Refers to snippets of code within the `_includes` directory that can be inserted in multiple layouts (and another include-file as well) within the same theme-gem.

  - `disqus_comments.html` &mdash; Code to markup disqus comment box.
  - `footer.html` &mdash; Defines the site's footer section.
  - `google-analytics.html` &mdash; Inserts Google Analytics module (active only in production environment).
  - `head.html` &mdash; Code-block that defines the `<head></head>` in *default* layout.
  - `header.html` &mdash; Defines the site's main header section. By default, pages with a defined `title` attribute will have links displayed here.
  - `icon-* files` &mdash; Inserts github and twitter ids with respective icons.

### Assets

Refers to various asset files within the `_assets` directory.
Contains the `main.scss`. This `main.scss` is what gets processed into the theme's main stylesheet `main.css` called by `_layouts/default.html` via `_includes/head.html`.

### Plugins

Mandarine comes with [`jekyll-seo-tag`](https://github.com/jekyll/jekyll-seo-tag)
plugin preinstalled to make sure your website gets the most useful meta tags. See [usage](https://github.com/jekyll/jekyll-seo-tag#usage) to know how to set it up.

Mandarine comes with [`jekyll-assets`](https://github.com/jekyll/jekyll-assets)
plugin preinstalled to create an asset pipeline.

## Usage

### Customization

Edit the `_assets/css/_settings.scss` to modify the default styles of Foundation.
If there's something you can't customize with a variable, you can just write your
own CSS to add it in `_assets/css/main.scss`.

--

### Change default date format

You can change the default date format by specifying `site.mandarine.date_format`
in `_config.yml`.

```
# Mandarine date format
# refer to http://shopify.github.io/liquid/filters/date/ if you want to customize this:
  date_format: "%b %-d, %Y"
```

--

### Enabling comments (via Disqus)

Optionally, if you have a Disqus account, you can tell Jekyll to use it to show a comments section below each post.

To enable it, add the following lines to your Jekyll site:

```yaml
  disqus:
    shortname: my_disqus_shortname
```

You can find out more about Disqus' shortnames [here](https://help.disqus.com/customer/portal/articles/466208).

Comments are enabled by default and will only appear in production, i.e., `JEKYLL_ENV=production`

If you don't want to display comments for a particular post you can disable them by adding `comments: false` to that post's YAML Front Matter.

--

### Enabling Google Analytics

To enable Google Anaytics, add the following lines to your Jekyll site:

```yaml
  google_analytics: UA-NNNNNNNN-N
```

Google Analytics will only appear in production, i.e., `JEKYLL_ENV=production`

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
