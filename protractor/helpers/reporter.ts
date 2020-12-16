import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
const { AwesomeReport } = require('jasmine-awesome-report');

export let reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.PRETTY
    }
  }));

  const config = {
    fullPath: 'reports',
    fileName: 'report',
    merge: true
  };

  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};
