const os = require('node:os') //OS import

console.log('Information about the machine')
console.log('The architecture from the machine is', os.arch())
console.log('The CPUs from the machine is', os.cpus())
console.log('The system from the machine is', os.release())
