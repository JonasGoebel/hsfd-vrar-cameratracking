import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';
import Search from 'reveal.js/plugin/search/search.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import {MathJax3} from 'reveal.js/plugin/math/mathjax3.js';

import updatePageTitle from './titleChanger.js'

let deck = new Reveal({
  hash: true,
  center: false,
  width: 1920,
  height: 1080,
  plugins: [
    Highlight,
    Markdown,
    MathJax3,
    Notes,
    Search,
    Zoom,
  ],
  slideNumber: 'c'
});
deck.initialize();

deck.on("slidechanged", (event) => {
	updatePageTitle(event.indexh)
});
