//watcher-spawn.js
//Java script 5 
"use strict";
const
    fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[ 2];
if (!filename) {
    throw Error(" A file to watch must be specified!");
}
fs.watch( filename, function() {
    let ls = spawn('ls', ['-lh', filename]);
    ls.stdout.pipe( process.stdout);
});

console.log(" Now watching " + filename + " for changes...");



/*  - ls - option on the command (include all flags) says include all info.
user name, group, date etc...
touch target.txt  - also willl show the same behaviors -
ls represents a child process... std in and out "standard" - streams... read a file and wait for it to return or create a stream, 
like a picture and scanning it as you move through it. 
/*ls or a child thread...Node  enviroment fire. standard output. stream of info.
pipe is like a direction - connect to a stream of data. liquid
pass in process  - current process of our thread. like our contxt. or a parallel to our global.
our current thread that we are running.
image file  music file, cant just pass it, have to create a read stream to send the data.
take the data and pipe it to other places
creating another process...Spanwing another child process - will slow down the time otherwise.
2nd thread.
process, thread, core are used in similar meaning.
Core module of Node - Spawning a child.

teacher notes:
/* $ node --harmony watcher-spawn.js target.txt

If you go to a different console and touch the target file, your Node program will produce something like this:
 -rw-r--r--   1 jimbo     staff         0B Dec 19 22: 45 target.txt

The username, group, and other aspects of the file will be different from the preceding output, but the format should be the same.

The program we just made begins with the string "use strict" at the top.
Strict mode was introduced in ECMAScript version 5— it disables certain problematic JavaScript language features and makes
others throw exceptions. Generally speaking, it’s a good idea to use strict mode.

Strict mode is also required to use certain ECMAScript Harmony features in Node, such as the let keyword. Like const,
let declares a variable, but a variable declared with let can be assigned a value more than once.

Keep in mind that by using Harmony features (like let),
your code will require the --harmony flag until these features become enabled by default. For example,
 const is already available without the --harmony flag, but not so for let.

Next, notice that we added a new require() at the beginning of the program.
Calling require(' child_process') returns the child process module. We’re only interested in the spawn() method,
 so we save that to a constant with the same name and ignore the rest of the module.

spawn = require(' child_process'). spawn,

Remember, functions are first-class citizens in JavaScript,
so we’re free to assign them directly to variables like we did here. Next,
take a look at the callback function we passed to fs.watch().

function() {
let ls = spawn(' ls', ['-lh', filename]);
ls.stdout.pipe( process.stdout);
}

The first parameter to spawn() is the name of the program we wish to execute;
 in our case it’s ls. The second parameter is an array of command-line arguments.
  It contains the flags and the target file name.

The object returned by spawn() is a ChildProcess.[ 10] Its stdin, stdout,
and stderr properties are Streams that can be used to read or write data.
We want to send the standard output from the child process directly to our own standard output stream.

This is what the pipe() method does. Sometimes you’ll want to capture data from a stream,
rather than just piping it forward. Let’s see how to do that.



