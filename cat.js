//cat.js  
$ ./ cat.js 

#!/ usr/ bin/ env node --harmony
require('fs'). createReadStream(process.argv[2]. pipe(process.stdout));Because the first line starts with #!, you can execute this program directly in Unix-like systems. It doesn’t need to be passed into the node program.

​

/* Use chmod to make it executable:

​

$ chmod + x cat.js

​

Then, to run it, send the name of the chosen file as an additional argument:

​

$ ./ cat.js < file_name >
