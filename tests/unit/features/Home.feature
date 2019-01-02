Feature: Home Page

Scenario: Opening the initial web page
  Given The page is open in a browser
  When I inspect the page
  Then I should see the Home landing page
  And the page should have a sidebar menu
  And the page should have a title bar
  And the title bar should contain the correct words

Scenario: List on the initial web page
  Given The page is open in a browser
  When I inspect the page elements
<<<<<<< HEAD
  Then I should see a list QListHeadertitle
  And the QListHeadertitle should contain the correct words
  And the page should contain a QList tag
  And the page should have at least 3 QListItems
=======
  Then I should see a list title
  And the title should contain the correct words
  And the page should contain a List tag
  And the page should have at least 3 list items
>>>>>>> bb9e69d53c8c780a44cf829fdfadcf894e67d9aa
