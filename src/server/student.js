const yargs = require('yargs').argv;

const storage = require('node-persist');
storage.initSync();

 await storage.init({
    dir : ".path",
    ttl : false
});

storage.init().then(function(){
    // Gọi các hàm setItem, getItem
    storage.getItem('domain');
    storage.setItem('domain', 'freetuts');
    storage.removeItem('domain');
    storage.clear();
});
