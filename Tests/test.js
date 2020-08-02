var coolPage = {}
// LINK TO TEST PLAN: https://docs.google.com/document/d/1X-V2NYXMK8MUhcIzc7ZDG2cB-sDXa7OHMaJpdyzoDwg/edit?usp=sharing

module.exports = {
    beforeEach: browser => {
        coolPage = browser.page.coolPage()
        coolPage.navigate()
    },
    after: browser=> {
        coolPage.end()
    },
    'User can sort odd and even numbers': browser => {
        coolPage
        .waitForElementVisible('@evenOddInput')
        .setValue('@evenOddInput', '1,2,3,4,5,6')
        .click('@evenOddButton')
        .verify.containsText('@evenResults','2,4,6')
        .verify.containsText('@oddResults','1,3,5')


    },
    'User can filter objects by their properties in the filter object field': browser => {
        coolPage
        .waitForElementVisible('@objectFilterObjects')
        .setValue('@objectFilterInput', 'hairColor')
        .click('@objectFilterButton')
        .verify.containsText('@objectFilterResults','brown')

    },
    'User can filter strings by their own partial string': browser => {
        coolPage
        .waitForElementVisible('@nameFilterInput')
        .setValue('@nameFilterInput', 'Ma')
        .click('@nameFilterButton')
        .verify.containsText('@nameFilterResults','Mark')
        .verify.containsText('@nameFilterResults','Maddy')

    },
    'User can enter text into the palindrome field and see if its a palindrome or not': browser => {
        coolPage
        .waitForElementVisible('@palindromeInput')
        .setValue('@palindromeInput', 'tacocat')
        .click('@palindromeButton')
        .verify.containsText('@palindromeResults','true')


    },
    'User can input two numbers into the sum field and it will add them together': browser => {
        coolPage
        .waitForElementVisible('@sumInput1')
        .setValue('@sumInput1', '2')
        .setValue('@sumInput2', '2')
        .click('@sumButton')
        .verify.containsText('@sumResults','4')



    },
}

