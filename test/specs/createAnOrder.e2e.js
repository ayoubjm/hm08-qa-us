const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should set the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await expect(supportivePlanButton).toBeExisting();
    })
    it('should select supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const supportivePlanButtonActive = await $(page.supportivePlanButtonActive);
        const supportivePlanButtonParentDiv = await supportivePlanButtonActive.parentElement()
        await expect(supportivePlanButtonParentDiv).toHaveAttributeContaining('class', 'active');
    })
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await expect(phoneNumberModal).toBeExisting();
    })

    it('should save the phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
    it('should add a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        await page.fillCardInfo(1234567887654321, 33);
        const newFirstCard = await $(page.newFirstCard);
        await expect(newFirstCard).toBeChecked();
    })
    it('should Write a message for the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageForDriver = await $(page.messageForDriver);
        await messageForDriver.waitForDisplayed();
        await messageForDriver.setValue('Sample message body for the driver');
        await expect(messageForDriver).toHaveValue('Sample message body for the driver');
    })
    it('should check "Blanket and handkerchiefs" option', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const blanketCheckbox = await $(page.blanketCheckbox);
        await blanketCheckbox.waitForDisplayed();
        await blanketCheckbox.click();
        const blanketCheckboxState = await $(page.blanketCheckboxState)
        await expect(blanketCheckboxState).toBeChecked();
        // await browser.pause(20000);
    })
    it('should order 2 Ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const iceCreamCounterPlusButton = await $(page.iceCreamCounterPlusButton);
        await iceCreamCounterPlusButton.waitForDisplayed();
        await iceCreamCounterPlusButton.doubleClick();
        const iceCreamCounterValue = await $(page.iceCreamCounterValue)
        await expect(iceCreamCounterValue).toHaveText("2");
    })
    it('should open the car search modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();

        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);

        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        await page.fillCardInfo(1234567887654321, 33);
        const paymentMethodModalcloseButton = await $(page.paymentMethodModalcloseButton);
        await paymentMethodModalcloseButton.waitForDisplayed();
        await paymentMethodModalcloseButton.click();

        const messageForDriver = await $(page.messageForDriver);
        await messageForDriver.waitForDisplayed();
        await messageForDriver.setValue('Sample message body for the driver');

        const blanketCheckbox = await $(page.blanketCheckbox);
        await blanketCheckbox.waitForDisplayed();
        await blanketCheckbox.click();

        const iceCreamCounterPlusButton = await $(page.iceCreamCounterPlusButton);
        await iceCreamCounterPlusButton.waitForDisplayed();
        await iceCreamCounterPlusButton.doubleClick();

        const confirmOrderButton = await $(page.confirmOrderButton);
        await confirmOrderButton.waitForDisplayed();
        await confirmOrderButton.click();

        const carSearchModal = await $(page.carSearchModal);
        await expect(carSearchModal).toBeExisting();

    })
    it('should wait for the driver info to appear in the modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();

        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);

        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        await page.fillCardInfo(1234567887654321, 33);
        const paymentMethodModalcloseButton = await $(page.paymentMethodModalcloseButton);
        await paymentMethodModalcloseButton.waitForDisplayed();
        await paymentMethodModalcloseButton.click();

        const messageForDriver = await $(page.messageForDriver);
        await messageForDriver.waitForDisplayed();
        await messageForDriver.setValue('Sample message body for the driver');

        const blanketCheckbox = await $(page.blanketCheckbox);
        await blanketCheckbox.waitForDisplayed();
        await blanketCheckbox.click();

        const iceCreamCounterPlusButton = await $(page.iceCreamCounterPlusButton);
        await iceCreamCounterPlusButton.waitForDisplayed();
        await iceCreamCounterPlusButton.doubleClick();

        const confirmOrderButton = await $(page.confirmOrderButton);
        await confirmOrderButton.waitForDisplayed();
        await confirmOrderButton.click();


        const carSearchProgress = await $(page.carSearchProgress);
        await carSearchProgress.waitForExist({ timeout: 50000, reverse: true });
        const driveInfo = await $(page.driveInfo);
        await expect(driveInfo).toBeExisting();

    })


})

