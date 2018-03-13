const createTestCafe = require('testcafe');
let runner           = null;

console.log('runner.js start :)');
createTestCafe('localhost', 1337, 1338)
    .then(testcafe => {
        runner = testcafe.createRunner();
        runner
            .src('tests/adfly.js')
            .browsers('firefox:headless')
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
                process.exit(error ? 1 : 0);
            });

        return testcafe.createBrowserConnection();
    })
    .then(remoteConnection => {
         /* ... */
        //console.log('return remoteConnection')
        //console.log(remoteConnection);
        //testcafe.close();
        //process.exit(0);
    });