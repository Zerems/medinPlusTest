import homePage from "../support/pages/homePage.js";
import header from "../support/pages/header.js";
import signUpPage from "../support/pages/signUpPage.js";
import userData from "../support/data/userData.js";
import infoUserPage from "../support/pages/infoUserPage.js";
import createdAccountPage from "../support/pages/createdAccountPage.js";
import deletedAccountPage from "../support/pages/deletedAccountPage.js";

describe('Automation exercise test case 1', () => {
    it('Should create and delete an account successfully', () => {
        const user = userData.getData();
      // 01/02.Launch browser and navigate to url
      homePage.visitHomePage();
  
      // 03.Verify home page is visible successfully
      homePage.getCaroussel().should('be.visible');
  
      // 04.Click on 'Signup / Login' button
      header.clickSignLogButton();
  
      // 05.Verify 'New User Signup!' is visible
      signUpPage.getTittleSignUp().should('be.visible');
  
      // 06.Enter name and email address
      signUpPage.getName(user.username);
      signUpPage.getEmail(user.email);
  
      // 07.Click 'Signup' button
      signUpPage.clickSignupButton();
  
      // 08.Verify 'ENTER ACCOUNT INFORMATION' is visible
      infoUserPage.getTittlePage().should('be.visible')
  
      // 09.Fill details
      infoUserPage.selectMaleGender();
      infoUserPage.getPassword(user.password);
      infoUserPage.getBirthdate();
  
      // 10/11.Select checkboxes
      infoUserPage.subscribNewsLetter();
      infoUserPage.subscribOffersPartner();
  
      // 12.Fill more details
      infoUserPage.getFirstName(user.first_name);
      infoUserPage.getLastName(user.last_name);
      infoUserPage.getCompany(user.company);
      infoUserPage.getAdress(user.adress);
      infoUserPage.getAdress2(user.adress2);
      infoUserPage.selectCountry();
      infoUserPage.getState(user.state);
      infoUserPage.getCity(user.city);
      infoUserPage.getZipCode(user.zip_code);
      infoUserPage.getMobile(user.mobile);
  
      // 13.Click 'Create Account' button
      infoUserPage.clickButtonCreate();
  
      // 14.Verify 'ACCOUNT CREATED!' is visible
      createdAccountPage.getConfirmationMessage();
  
      // 15.Click 'Continue' button
      createdAccountPage.clickContinueButton();
  
      // 16.Verify 'Logged in as username' is visible
      header.getUserLoged().should('be.visible')
  
      // 17.Click 'Delete Account' button
      header.clickDeletAccountButton();
  
      // 18.Verify 'ACCOUNT DELETED!' is visible
      deletedAccountPage.getConfirmationMessage().should('be.visible');
  
      // 19.Click 'Continue' button
      deletedAccountPage.clickContinueButton();
    })
  })
  