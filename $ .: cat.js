//cat.js 
$ ./ cat.js

#!/usr/bin/ env node --harmony
require('fs'). createReadStream(process.argv[2]. pipe(process.stdout));Because the first line starts with #!, you can execute this program directly in Unix-like systems. It doesn’t need to be passed into the node program.

​

/* Use chmod to make it executable:


$ chmod + x cat.js

​
Then, to run it, send the name of the chosen file as an additional argument:


$ ./ cat.js < file_name >


teacher notes:
Because the first line starts with #!, you can execute this program directly in Unix-like systems.
It doesn’t need to be passed into the node program.

Use chmod to make it executable:

$ chmod + x cat.js

Then, to run it, send the name of the chosen file as an additional argument:

$ ./ cat.js < file_name >

The code in cat.js does not bother assigning the fs module to a variable.
The require() function returns a module object, so we can call methods on it directly.

You can also listen for data events from the file stream instead of calling pipe().
The following program called read-stream.js does this:(next slide)


