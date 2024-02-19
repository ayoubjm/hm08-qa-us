# Sprint 8 project (hm08-qa-us)

--- Project description ---
In this project we gonna test multiple fonctionalities of the Urban Routes web App, covering the full process of ordering a taxi. 
The tests should cover :
1. Setting the address
2. Selecting Supportive plan
3. Filling in the phone number
4. Adding a credit card
5. Writing a message for the driver
6. Ordering a Blanket and handkerchiefs
7. Ordering 2 Ice creams
8. The car search modal appears
9. Waiting for the driver info to appear in the modal
To do these tests I had to write scripts using Javascript programing language, and run them using WebdriverIO testing framework, and then push them to the github server using git commands.
The IDE used is Visual studio code, and its own terminal to run commands or Gitbash terminal.

+ Setup
    Before renning the tests make sure you have the following softwares installed:
        - GitBash: Git Terminal to run commands.
        - Visual studio code: an IDE to better write code, and also run commands through its terminal.
        - Google chrome: to run tests.
        - Mozilla Firefox: to run tests.

+ Instructions to Clone the project repo to your computer and install dependencies:
    1. Open your preferred terminal emulator. If you’re on Windows, use GitBash.
    2. Create a directory to store all of your projects. For example:
        cd ~               
        mkdir projects     
        cd projects
    3.  Clone the repo. The command you use will depend on the authentication strategy that you’re using.
        # if you are using HTTPS
            git clone https://github.com/username/hm08-qa-us.git
        # if you are using SSH
            git clone git@github.com:username/hm08-qa-us.git
    4. Through the project folder run " npm Install " in GitBash or VS studio terminal

+ Configuration:
    1. Open The "wdio.conf.js" file in the root directory of the project.
    2. Change the value of "baseUrl" variable with the server url. example:(https://cnt-2c12c071-0060-4f8c-80f0-a8a237ca7600.containerhub.tripleten-services.com/)

+ Instructions to run tests:
    1. Open Gitbash or VScode Terminal inside the project folder "hm08-qa-us".
    2. Make sure every test case has its own script in the "createAnOrder.e2e.js" file.
    3. Run "npm run wdio" command to run the test scripts.

+ Instructions to commit and push project to Github:
    Run through the project folder the following commands (using GitBash or VS Code terminal).
    1. git add -A
    2. git commit -m "desired comment"
    3. git push

+ Test Cases:
    Success rate is 100%
    # Create an order:
        - TEST 1: should set the address. (PASSED)
        - TEST 2: should select supportive plan. (PASSED)
        - TEST 3: should open phone number modal. (PASSED)
        - TEST 4: should save the phone number. (PASSED)
        - TEST 5: should add a credit card. (PASSED)
        - TEST 6: should Write a message for the driver. (PASSED)
        - TEST 7: should check "Blanket and handkerchiefs" option. (PASSED)
        - TEST 8: should order 2 Ice creams. (PASSED)
        - TEST 9: should open the car search modal. (PASSED)
        - TEST 10: should wait for the driver info to appear in the modal. (PASSED)

+ Code Style:
    The following style conventions are followed in the code:
    - The user scenario of ordering the taxi is covered
    - Used at least 4 different types of locators
    - Tests interact with inputs
    - Tests interact with buttons
    - Wait functions are used correctly
    - The command to run tests has been added to package.json
    - baseUrl from wdio.config.js is used in tests
    - Using "let" to declare changed variables.
    - Using "const" to declare non changed variables.
    - camelCase format is used for function and variable names.
    - Only nouns are used as variable names.
    - Variable names clearly describe what is stored in them.
    - Function names are descriptive and reflect what they do
    - Function names start with a verb
    - Names must not include unsuitable/unclear abbreviations
    - Comments are used to more clarify the code.