const createTestCafe = require('testcafe');
let runner           = null;

createTestCafe('localhost', 1337, 1338)
    .then(testcafe => {
        runner = testcafe.createRunner();
        runner
            .src('tests/adfly.js')
            .browsers('chrome')
            .run()
            .then(failedCount => {
                /* ... */
                console.log(failedCount);
                testcafe.close();
                process.exit(failedCount ? 1 : 0);
            })
            .catch(error => {
                /* ... */
                console.log(error);
                testcafe.close();
                process.exit(failedCount ? 1 : 0);
            });
                    
        return testcafe.createBrowserConnection();
    })
    .then(remoteConnection => {
         /* ... */
        
    });