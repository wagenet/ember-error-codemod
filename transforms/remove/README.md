# remove


## Usage

```
npx ember-error-codemod remove path/of/files/ or/some**/*glob.js

# or

yarn global add ember-error-codemod
ember-error-codemod remove path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js remove path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/remove/__testfixtures__/basic.input.js)</small>):
```js
import EmberError from '@ember/error';

throw new EmberError("My Error");

```

**Output** (<small>[basic.output.js](transforms/remove/__testfixtures__/basic.output.js)</small>):
```js
throw new Error("My Error");

```
<!--FIXTURES_CONTENT_END-->