const fs = require('fs');
fs.watch('target.txt', function(){
    console.log("File 'target.txt' just changed!");
});
console.log("Now watching target.txt for changes...");

/* teacher notes:
Navigate to a practice directory:

touch target.txt

First, notice the const keyword at the top. This JavaScriptism (part of ECMAScript Harmony) sets up a variable with a constant value.

The require() function pulls in a Node module and returns it.
In our case, we’re calling require(' fs') to incorporate Node’s built-in file-system module.
[ 8] In Node.js, a module is a self-contained bit of JavaScript that provides functionality to be used elsewhere.
The output of require() is usually a plain old JavaScript object. There’s nothing particularly special about it,
aside from the functionality provided by the module. Node’s module implementation is based on the CommonJS module specification.
[ 9]

Modules can depend on other modules, much like libraries in other programming environments, which import or #include other libraries.

Next we call the fs module’s watch() method, which polls the target file for changes and invokes the supplied callback
function whenever it does. In JavaScript, functions are first-class citizens. This means they can be assigned to variables
and passed as parameters to other functions. Our callback function is an anonymous function; it doesn’t have a name.
 The callback function calls console.log() to echo a message to standard output whenever the file changes.

Let’s try it out.

Return to the command line and launch the watcher program using node, like so:

$ node --harmony watcher.js

Now watching target.txt for changes...

The --harmony parameter tells Node to use the latest ECMAScript Harmony features available. ECMAScript Harmony is the code name for
the next version of ECMAScript, the standard behind the JavaScript language. Not all Harmony features are ready for prime time,
but the ones we’ll use in this book are OK (except where noted).

After the program starts, Node will patiently wait until the target file is changed. To trigger a change,
open another terminal to the same directory and touch the file again:

$ touch target.txt

The terminal running watcher.js will output the string File 'target.txt' just changed!,
 and then the program will go back to waiting.

Wilson, Jim R. (2013-11-25). Node.js the Right Way: Practical, Server-Side JavaScript That Scales (Kindle Locations 317-339).
Pragmatic Bookshelf. Kindle Edition.


