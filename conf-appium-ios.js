// Step 3 protractor tutorial http://www.protractortest.org/#/tutorial#step-3-changing-the-configuration
exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // relevant cucumber command line options
    cucumberOpts: {
        require: ['features/step_definitions/*.step.js', 'features/support/*.js'],
        format: "pretty",
        tags:  "@critical"
    },

    seleniumAddress: 'http://localhost:4725/wd/hub',
    specs: ['features/*.feature'],
    capabilities: {
        browserName: 'safari',
        bundleId:'SafariLauncher',
        'appium-version': '1.6.0',
        platformName: 'iOS',
        //platformVersion: '10.1',
        //deviceName: 'iPhone 7',
        platformVersion: '9.3',
        deviceName: 'iPhone 6s',
        automationName: 'XCUITest'
        //'udid': 'XXX'
    }
};


