RedPhone
========

A command line learning environment for the web.

## Unix meets the web
The notion of the environment is to provide at least portions of a typical bash environment, but based on the web. There are projects like [JSLinux](http://bellard.org/jslinux/) which provide an actual Unix environment, but they bring with them many assumptions and constraints. Perhaps in the future we could develop a method of interacting with them more directly, but for now I am exploring what's possible from the web side.
Particularly, imagine POSIX or similar on a website. "Everything is a file" becomes "Everything is a DOM element". Javascript is the execution environment. A file system could simply be a hierarchy of divs, with manipulation in jQuery.
In this space we can give the learner an easy safe environment to explore and learn, set up scenarios, give hints and other help. This is an exploration of those ideas.

Notes:
* Example file hierarchy displays
    * http://jsfiddle.net/JEPtg/
    * http://jsfiddle.net/tjgRB/4/
* http://bellard.org/jslinux/
