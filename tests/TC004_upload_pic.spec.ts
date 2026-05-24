

import { expect, test } from '../customFixtures/crmFixtures.ts';
import path from "path";
import { ContactLeadsPage } from '../pages/ContactLeadsPage.ts';
import { Settings } from '../pages/Settings.ts';


test('upload pic', async ({ page,homePage}) => {
    test.info().annotations.push(
        { type: 'Author', description: 'yashwanthara' },
        { type: 'TestCase', description: 'Upload pic and verify the name of picture is displayed' },
        { type: 'Test Description', description: "Verifying Upload pic and verify the name of picture is displayed" }
    );
   //  await page.goto("https://apps.theauto-mate.com/crm/login.php");
//     let loginPage = new LoginPage(page, context);
//     await loginPage.enterUsername("test.automate");
//     await loginPage.enterPassword("test@123");
//     let homePage = await loginPage.clickSignin();
let contactLeadsPage = await homePage.clickContacts();

    let Settings =await contactLeadsPage.clicksettings();

    await Settings.clickChooseFile(path.join(__dirname, '../resources/natureimage.jpg'));

    await expect(Settings.chooseFile).toHaveValue(/natureimage.jpg/);

    await page.pause();
});
