import reporter from 'cucumber-html-reporter';
import open from 'open';

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: false
});

await open('reports/cucumber-report.html');
