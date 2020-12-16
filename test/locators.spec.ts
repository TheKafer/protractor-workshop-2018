import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Practice automation', () => {
  beforeAll(async () => {
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });

  describe('Fill form', () => {
    const personalInformationPage = new PersonalInformationPage();

    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        file: './resources/photo.png',
        downloadFile: true,
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });
    });

    it('the form should be filled', async () => {
      expect(await personalInformationPage.getPageTitle()).toBe('Selenium - Automation Practice Form');
    });

    it('then filename should be loaded', async () => {
      expect(await personalInformationPage.getFilename()).toBe('photo.png');
    });

  });
});
