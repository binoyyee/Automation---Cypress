import { LoginPage } from "./pages/login"
  it('POM', () => {
    cy.visit('https://gor-pathology.web.app/')
    // const loginPage = new LoginPage()
    // loginPage.enterUsername()
    // loginPage.enterPassword()
    // loginPage.clickLogin()  
  })

  it('TODO view', function(){

    cy.visit('https://gor-pathology.web.app/')


  })

  it('TODO Add', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('.jss54 > a > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('#outlined-add-todo-input').click({force: true})
    cy.get('#outlined-add-todo-input').type('abcd1')
    cy.get('.MuiButton-label').click({force: true})
    cy.get('.MuiAlert-message')
    
       
  })

  it('TODO Update', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.contains('abcd1')
    cy.get(':nth-child(2) > .MuiListItemSecondaryAction-root > .MuiButtonBase-root > .MuiIconButton-label > .jss61').click({force: true},{timeout:5000})
    cy.get('.MuiAlert-message')
       
  })

  it('TC without discount', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('.MuiAutocomplete-popupIndicator').click({force: true})
    cy.contains('UR CREATININE').click({force: true})



  })

  it('TC with discount', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('.MuiAutocomplete-popupIndicator').click({force: true})
    cy.contains('UR CREATININE').click({force: true})
    cy.get('.MuiSelect-root').click({force: true})
    cy.get('[data-value="5"]').click({force: true})



  })

  it('Tests_Samples to send', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/tests"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()




  })

  it('Tests_Awaiting Reports', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/tests"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get(':nth-child(2) > .MuiTab-wrapper').click()



  })

  it('Tests_Reports to Give', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/tests"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get(':nth-child(3) > .MuiTab-wrapper').click()



  })

  it('Tests_Previous Tests', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/tests"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get(':nth-child(4) > .MuiTab-wrapper').click()



  })

  it('Tests_Manage Tests', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/tests"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[href="/tests/manage/"] > .MuiButtonBase-root > .MuiButton-label').click()



  })

  it('Tests_Manage Tests_Add Test', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/tests"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click({force:true})
    cy.get('[href="/tests/manage/"] > .MuiButtonBase-root > .MuiButton-label').click({force:true})
    cy.get('[style="display: flex; align-items: center;"] > a > .MuiButtonBase-root').click({force: true})
    //cy.get('.jss97 > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.jss97 > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.jss97 > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('Beans')
    cy.get('#mui-component-select-sample_type').click({force:true})
    cy.get('[data-value="SERUM"]').click({force:true})
    cy.get('#mui-component-select-sample_volume').click({force:true})
    cy.get('[data-value="1ml"]').click({force:true})
    cy.get('#mui-component-select-sample_mode').click({force:true})
    cy.get('[data-value="FASTING"]').click({force:true})
    cy.get('.jss103 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.jss103 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('250',{force:true})
    cy.get('.jss104 > .MuiButton-contained').click({force:true})

  })

  it('Inventory_Dashboard', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/inventory"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    



  })

  it('Inventory_Add Equipment', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/inventory"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[style="display: flex; align-items: center;"] > a > .MuiButtonBase-root > .MuiButton-label').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Beanjection')
    cy.get(':nth-child(2) > .MuiInputBase-root').click({force:true})
    cy.get(':nth-child(2) > .MuiInputBase-root').type('Inj-Bection')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('315')
    cy.get('.MuiButton-endIcon > img').click({force:true})

  })

  it('Patients', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/patients"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
  

  })

  it('Patients_Add', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/patients"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[style="display: flex; align-items: center;"] > a > .MuiButtonBase-root > .MuiButton-label').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Beans1')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Be@ns.com')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('0123456789')
    cy.get('.jss82').click({force:true})
    cy.get('.jss96 > :nth-child(2) > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.jss96 > :nth-child(2) > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('180')
    cy.get('.jss96 > :nth-child(2) > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.jss96 > :nth-child(2) > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('80')
    cy.get('#mui-component-select-gender').click({force:true})
    cy.get('[data-value="male"]').click({force:true})
    cy.get(':nth-child(3) > .MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(3) > .MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').type('24')
    cy.get('.MuiBox-root > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.MuiBox-root > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('120')
    cy.get('.MuiBox-root > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.MuiBox-root > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('90')
    cy.get('.jss82').click({force:true})
    cy.get('#patient-test').click({force:true})
    cy.contains('UR CREAT').click({force:true})
    cy.get('[style="width: 100%; margin-top: 18px;"] > .MuiInputBase-root > .MuiSelect-root').click({force:true})
    cy.get('[data-value="5"]').click({force:true})
    cy.get('#patient-tests-labs').click({force:true})
    cy.contains('HEALTHCARE').click({force:true})
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator').click({force:true})
    cy.contains('Dr.').click({force:true})
    cy.get('#mui-component-select-doctor_commission').click({force:true})
    cy.get('[data-value="10"]').click({force:true})
    cy.get('.MuiIconButton-label > .material-icons').click({multiple:true})
    cy.get('.MuiIconButton-label > .material-icons').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiSelect-root').click({force:true})
    cy.get('.MuiList-root > [tabindex="0"]').click({force:true})
    cy.get('[title="Save"] > .MuiIconButton-label > .material-icons').click({force:true})
    cy.get('.MuiButton-endIcon > img').click({force:true})

  })

  it('Labs', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/labs"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
  
  })

  it('Labs_Add', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/labs"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[style="display: flex; align-items: center;"] > a > .MuiButtonBase-root').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Beans')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Be@ns.cm')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('1234567890')
    cy.get('.jss80').click({force:true})
    cy.get('.jss94 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.jss94 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Bea.cm')
    cy.get('.jss94 > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.jss94 > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('abcdef')
    cy.get('.jss98 > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.jss98 > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('ks')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('ns')
    cy.get('.jss98 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.jss98 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('1010')
    cy.get('.jss80').click({force:true})

  })

  it('Doctors', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/doctors"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
  
  })

  it('Doctors_Add', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/doctors"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[style="display: flex; align-items: center;"] > a > .MuiButtonBase-root > .MuiButton-label > .MuiButton-endIcon > img').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Beans')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('DrB@ns.cm')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('1234567890')
    cy.get('.jss67').click({force:true})
    cy.get('.jss82 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.jss82 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('MS')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('SA')
    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('AB')
    cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').type('BC')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('110101')
    cy.get('.jss86 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get('.jss86 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('BS')
    cy.get('.jss67').click({force:true})
    //cy.get('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-paddingNone > .MuiButtonBase-root > .MuiIconButton-label > .jss132').click({force:true})
    cy.get('.jss67').click({force:true})    
  
   })

  it('Accounting', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/accounting"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
  
  })

  it('Accounting_Expense', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/accounting"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.MuiPaper-root > img').click({force:true})
    cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiPaper-root > .jss70').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('100')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Home')
    cy.get('.MuiGrid-justify-xs-flex-end > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click({force:true})
    
  })

  it('Accounting_Cash', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/accounting"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.MuiPaper-root > img').click({force:true})
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiPaper-root > .jss70').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('100')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Home')
    cy.get('.MuiGrid-justify-xs-flex-end > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click({force:true})
    
  })

  it('Accounting_Desposit', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/accounting"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.MuiPaper-root > img').click({force:true})
    cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiPaper-root > .jss70').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('100')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Home')
    cy.get('.MuiGrid-justify-xs-flex-end > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click({force:true})
    
  })

  it('Accounting_Modify_Expense', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/accounting"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.MuiPaper-root > img').click({force:true})
    cy.get('[style="display: flex; align-items: center;"] > a > .MuiButtonBase-root > .MuiButton-label').click({force:true})
    cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiPaper-root > .jss91').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('100')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Home')
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click({force:true})
    
  })
  it('Accounting_Modify_Cash', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/accounting"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.MuiPaper-root > img').click({force:true})
    cy.get('[style="display: flex; align-items: center;"] > a > .MuiButtonBase-root > .MuiButton-label').click({force:true})
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiPaper-root > .jss91').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('100')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Home')
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click({force:true})
    
  })

  it('Accounting_Modify_Deposit', function(){

    cy.visit('https://gor-pathology.web.app/')
    cy.get('[href="/accounting"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.MuiPaper-root > img').click({force:true})
    cy.get('[style="display: flex; align-items: center;"] > a > .MuiButtonBase-root > .MuiButton-label').click({force:true})
    cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiPaper-root > .jss91').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('100')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click({force:true})
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Home')
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click({force:true})
    
  })

