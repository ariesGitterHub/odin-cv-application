# Project: CV Application

https://www.theodinproject.com/lessons/node-path-react-new-cv-application

All icons are created by me, The Mad Muffin Man, and copyrighted as such. 

# Note to Self
The was an issue on mobile devices where screen scrolls and moves weirdly when pinched, it felt “loose” and would all shift and hug the left margin when zoomed out all the way.

It tunrs out that this was a viewport and touch behavior issue, not a flexbox problem. 

Solution, in index.html, change to this: 
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

Also added this to index.css: 
html, body {
  overflow-x: hidden;
  overscroll-behavior: none;
  touch-action: manipulation;
}
