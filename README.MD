# RaiseJS/DOM
Extend your RaiseJS core with these jQuery DOM fundamentals.<br/>

## For the average visitor :innocent:
### What is this? :boom:
This repo contains source code for RaiseJS/DOM, a JavaScript library to build lightweight frontend webapps.
Seeing the rapid growth in size of "modern" web applications, I decided to set this trend an end.
RaiseJS/DOM relies on RaiseJS/core, which offers a great codebase which is easily expandable and forms the foundation of the RaiseJS ecosystem, seamlessly
integrating any other RaiseJS libraries into your new or existing project.

### What is RaiseJS? :ok_hand:
RaiseJS is an ecosystem of libraries, all relying on RaiseJS/core as foundation for expansion.
Grow beyond competition and watch your page load times shrink - not skyrocket.
We recommend setting up new, RaiseJS-based projects with RaiseJS/cli, a commmand-line interface allowing everybody
to quickly jump into a full-fledged development environment with a innovative folder structure and clear, leading-edge guidelines.

### What features does RaiseJS/DOM add to your frontend? :satisfied:
RaiseJS/DOM brings many popular jQuery DOM features to our beloved ecosystem. This includes:

 * $(_selector_).css(key: _required_, value: _optional_)
 * $(_selector_).attr(key: _required_, value: _optional_)
 * $(_selector_).val(value: _required_)
 * $(_selector_).html(html: _required_)
 * $(_selector_).removeAttr(attribute: _required_)
 * $(_selector_).toggleClass(class: _required_)
 * $(_selector_).addClass(class: _required_)
 * $(_selector_).removeClass(class: _required_)
 * $(_selector_).on(event: _required_, handler: _required_)
 * $(_selector_).off(value: _required_, handler: _required_)
 * $(_selector_).trigger(event: _required_)

All Functions which don´t return a value (this includes `$().css` and `.attr` with two parameters) are chainable.
If a function expected more parameters, `false` is returned.

### How do we guarantee that this library won´t explode in size as jQuery did?
This library, @RaiseJS/DOM, has a minified size limit of **5** KB.
All commits/pulls which would result in a higher file size are rejected.
The minified size target for this library is **3** KB.
All contributors try to stick to this target by **only** adding features that specifically belong to the purpose of this library and are **necessary** for further use.

### How can I install this? :sunglasses:
It´s easy. Either setup your environment through our command-line interface @RaiseJS/cli, or go install this dependency via `yarn` or `npm`:<br/>
```
	npm install || yarn install
```
You can also build this repo from source by cloning the whole thing and running `npm run build` (or `yarn run build`).
Or, if you prefer the good old times or would like to test this tool first, dead-simply copy-paste your preferred variant from the `/js` folder of the root directory.<br/>
__At the time of writing, the package isn´t published to npm yet and therefore can´t be installed yet. Please copy the needed file from the `/js` directory on GitHub__

### What flavour do you prefer? :icecream:
In the `/js` folder of the repo root directory, you will find 4 files, all essentially containing the same essence.<br/>
While we do recommend using `min.poly.core.js` for production environments, here´s a description of all:
 * `core.js` This is the unminified, pure, yet uncommented source code. We do not recommend this for anybody!
 * `min.core.js` A minified `core.js` copy. This is useful for development environments. If you are using this in production, make sure to polyfill it manually!
 * `poly.core.js` Unminified, but polyfilled - Also not recommended
 * `min.poly.core.js` For production environments or professional projects: This is a minified, to *ES2017* compiled version of RaiseJS/core. We recommend this flavour.

## For the contributors :open_hands:
First of all, **thanks** for planning to contribute! :+1::+1::+1:<br/>
Open Source Projects do profit from new helpers, and there´s always something to fix or improve.<br/>
_Let´s get to work!_<br/>

### Cloning the repo
Okay, _really_? `git clone https://github.com/RaiseJS/DOM.git`

### Modifying the source
In the `/src` folder, you will find the one-and-only source of truth: `main.js`. :angel:<br/>
This code is then compiled into the `/js` to the library we all know and love :blush:<br/>
Make sure to comment all changes and, if necessary, change the [README.MD](README.MD) accordingly!<br/>

### Before pulling
Make sure you´ve tested the functionality of the source code by compiling it (`npm run build` / `yarn run build`)<br/>
and checking all tests in `/testing`. Additionally, if the Jest unit testing framework is already setup, run `npm run test`<br/>
and see if everything remains fine! Of course, you as a contributor should stick to the `minified size target value` of **3** KB for this project
and never exceed a size of **5** KB, which is the **minified size limit**. <br/>

## Thanks for sticking around! Now build something great :heart:
