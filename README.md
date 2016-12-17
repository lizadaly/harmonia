# Windrift Starter app

This repository is designed to help you get started writing a [Windrift](https://github.com/lizadaly/windrift) story. Windrift is a framework for creating interactive stories using React and Redux.

Windrift is not suitable for authors who are new to JavaScript development. You’ll be much happier using any of the fine, mature environments for interactive fiction, including [Twine](https://twinery.org/), [inklewriter](http://www.inklestudios.com/inklewriter/), [ChoiceScript](https://www.choiceofgames.com/make-your-own-games/choicescript-intro/), or [Texture](https://texturewriter.com/), to name just a few! Please see the main [Windrift](https://github.com/lizadaly/windrift) repository for more reasons not to use Windrift.

## Installation

Windrift itself is written in ES6+, and this starter package includes the necessary Babel dependencies to author stories in ES6. Of course, you’re free to use ES5 syntax if you prefer.


### Prerequisites

* npm

Everything else you need to build a Windrift story is in this package.  

### Getting started

In the windrift-starter directory:

```
npm install
```

You should be able to run the built-in development server right away:

```
npm start
```

At the end of a lot of build statements, you should see:

```
[458] ./~/sockjs-client/lib/info-ajax.js 1.04 kB {0} [built]
[459] ./~/sockjs-client/lib/iframe-bootstrap.js 2.91 kB {0} [built]
[460] ./~/sockjs-client/lib/facade.js 724 bytes {0} [built]
webpack: bundle is now VALID.
```

Your application will be running at http://localhost:8080

The dev server is set up to hot-reload changes: whenever you modify the source, the browser will auto-refresh.

## Your first story

### Config file setup

Windrift expects a `story.json` file to contain details about your story. It will pass these through to the generated HTML and give
you nice metadata in the final product, which Google will appreciate.

#### story.json

```javascript
{
  "title": "Windrift Starter",
  "author": "Liza Daly",
  "identifier": "windrift-starter-make-this-random",
  "keywords": "starter windrift javascript react interactive-fiction",
  "description": "A starter application used for working with the Windrift story framework",
  "license": "CC BY 4.0",
  "version": "1.0.0",
  "pagination": "scrolling",
  "enableUndo": true
}
```

You should define a unique `identifier`—it's never
exposed to readers, but there could be unexpected issues with
other Windrift games if they are hosted on the same website
(like ifcomp.org).

### Start writing!

Windrift-starter will look in your `chapters/` directory for
JavaScript files and load them _in alphabetical order_.
That becomes the canonical chapter order.

If you need to modify this loading process, look in `index.js`:

```javascript
function start() {
  var chaptersList = require.context('./chapters', true, /\.js$/)
```


### The sample chapters

This package comes with two sample chapters that make use of the primary components in Windrift: Lists and Maps. Feel free to use them as a reference or delete them entirely.

## Styling

### HTML template

The HTML for your story is in this project as `template.hbs`, an HTML file that uses Handlebars templates. You can safely ignore Handlebars itself; this is only used by the webpack bundler to put your `story.json` variables into the `<head>` and do other setup.

### CSS Frameworks
Windrift outputs HTML that is designed to be compatible with the [Foundation for Sites](http://foundation.zurb.com/sites.html) CSS framework. Foundation isn’t bundled with Windrift, but this starter package references it in the head of `template.hbs`. Feel free to swap out Foundation for Bootstrap, or a custom framework of your choice.

### Windrift-specific CSS

Windrift will emit a few CSS classes that you may want to hook into:

```css
/* Applied to the most-recent chapter */
.current-chapter

/* Applied to the most-recent section */
.current-section

/* The special link that switches chapters */
.next-chapter-link
```

### Animations

In addition, there are special styles that get applied during transitions between states:

```css
/* Applied while displaying new sections */
.section-enter, .section-appear

/* Applied when removing new sections */
.section-leave
```

This is provided straight out of the [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) add-on to React itself.

This is the CSS that was used in [Stone Harbor](https://stoneharborgame.com/), as a reference:


```css
.section-enter, .section-appear {
  opacity: 0.01;
}

.section-enter.section-enter-active, .section-appear.section-appear-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.section-leave {
  opacity: 1;
}

.section-leave.section-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
```

### UI configuration

Windrift comes with a few options for customizing the user experience that you can set
via `story.json`:

#### Pagination

```javascript
"pagination": "scrolling"
```

By default, Windrift presents stories in a scrolling fashion: each successive chapter or
section appears beneath the previous one. This is most consistent with how the web works.
(If you are familiar with Twine, this is also how the "Jonah" story format works.)

```javascript
"pagination": "by-chapter"
```

For some kinds of stories it may be desirable to "paginate" by chapter, such that when
the reader goes to a new chapter, the previous one is wiped away. (This is how
most Twine games work.)

```javascript
"pagination": "by-section"
```

Like `by-chapter`, but with a smaller granularity. This might be best for interactive
poems or other pieces where continuous narrative is less important.

Note that for both `by-chapter` and `by-section` you may want some custom CSS to prevent
the first unit of text from flashing by when the user refreshes the browser.

#### Undo/browser-back

```javascript
"enableUndo": true
```

By default, Windrift pushes user events to the browser's history such that the back/forward
buttons will work as readers expect them to. If you want to remove this feature,
set this value to `false` in `story.json`.

You may want to disable it for purely artistic reasons, but there are practical
considerations too: if your story allows readers to update previous choices
more than once, earlier passages may cease to make sense. You may also make use
of the various callbacks allowed in Map and List which could mutate the user
experience in a way that Windrift can't undo. See <a href="https://lizadaly.github.io/windrift/examples/advanced/">Advanced usage</a> for some examples.

Disabling undo _does not_ disable the ability for Windrift to resume where a user left
off after a browser refresh, just forward/back.

### Building and deploying

When you’re ready to publish and deploy, run the following:

```
NODE_ENV=production webpack
```

This will build an optimized, minified, ready-for-production
set of files in `dist/`, and will copy over the `images` and
`css` using <a href="https://github.com/kevlened/copy-webpack-plugin">copy-webpack-plugin</a>.

To modify or extend this process, edit webpack.config.js:

```JavaScript
// Copy all static assets during a built to the dist/ directory.
// If you add other directory names, they'll go in here.
new CopyWebpackPlugin([
  { from: 'css', to: 'css' },
  { from: 'images', to: 'images' },
  { from: 'config.json'}
])
```

To "go live", just copy the entire `dist/` tree to a web-accessible location.
