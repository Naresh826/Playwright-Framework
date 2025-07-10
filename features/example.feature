Feature: Load a page

  # @123
  # Scenario: Load example.com
  #   Given I open the page "https://example.com"
  #   Then the title should be "Example Domain"

  @234
  Scenario: Verify Launch Company Website
    Given I open the page "https://www.launchconsulting.com/"
    When User should be on Launch Comapny website
    Then the title should be "AI & Digital Transformation Consulting | Launch Consulting Group"
    And Verify Text in it