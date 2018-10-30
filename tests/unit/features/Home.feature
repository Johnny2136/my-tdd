Feature: Home Page

Scenario: Verify the application and its basic elements
  Given The page is open in a browser
  When I inspect the page
  Then I should see the Application name
  And sidebar menu should have a link to Home page
  And sidebar menu should have a link to About page

# Scenario: List on the home page
#   Given The page is open in a browser
#   When I inspect the page elements
#   Then I should see my list
#   And the title should contain the correct words
#   And the page should contain a UL tag
#   And the page should have at least 3 li items