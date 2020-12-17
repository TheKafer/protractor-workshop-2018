import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderResumePage,
  AddressStepPage
} from '../src/page';

describe('Open the Page', () => {
  beforeAll(async () => {
    // Open the page
    await browser.get('http://automationpractice.com/');
  });

  describe('Buying the T shirt', () => {
    beforeAll(async () => {
      // Class declaration
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      // Go to T Shirts menu
      await menuContentPage.goToTShirtMenu();

      // Select the product
      await productListPage.selectProduct('Faded Short Sleeve T-shirts');

      // Add to the car
      await productAddedModalPage.proceedToCheckout();

      // Clic in the checkOut button
      await summaryStepPage.proceedToCheckout();
    });

    describe('Login', () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.login('prueba@yopmail.com', 'WorkshopProtractor');
      });

      describe('Select default address', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          await addressStepPage.proceedToCheckout();
        });

        describe('Pay to the bank', () => {
          beforeAll(async () => {
            // Class declaration
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

            // Accept the terms and select the pay
            await shippingStepPage.acceptAndContinue();
            await paymentStepPage.payByBankWire();
            // Confirm the order
            await bankPaymentPage.confirmOrder();
          });

          it('then the order should be completed', async () => {
            const orderResumePage: OrderResumePage = new OrderResumePage();

            await expect(orderResumePage.getOrderTitle())
              .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
