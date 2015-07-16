//watcher-argv.js
 fs = require('fs'), 
    filename = process.argv[2];
if(!filename){
    throw Error("A file to watch must be specified!");
}
fs.watch(filename, function(){
    console.log("File" + filename + "just changed!");
});
console.log("Now watching" + filename + "for changes...");

/* teacher notes:
$ node --harmony watcher-argv.js target.txt

This program uses process.argv to access the incoming command-line arguments.
argv stands for argument vector; it’s an array containing node and the full path to the watcher-argv.js as its first two elements.
The third element (that is, at index 2) is target.txt, the name of our target file.

Notice that if a target file name is not provided the program will throw an exception. Y
ou can try that by simply omitting the target.txt parameter:

Any unhandled exception thrown in Node will halt the process.
The exception output shows the offending file, and the line number and position of the exception. Processes are important in Node.
 It’s pretty common in Node development to spawn separate processes as a way of breaking up work, rather than putting everything into one big Node program. 
 In the next section, you’ll learn how to spawn a process in Node.

Wilson, Jim R. (2013-11-25). Node.js the Right Way: Practical, Server-Side JavaScript That Scales (Kindle Locations 378-381). Pragmatic Bookshelf. Kindle Edition. 




