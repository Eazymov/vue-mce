import Jasmine from 'jasmine';

const jasmine = new Jasmine();

jasmine.loadConfigFile('test/unit/jasmine.json');
jasmine.execute();
