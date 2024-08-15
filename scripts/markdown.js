import fs from 'fs';
import indentString from 'indent-string';
import '@jswork/next-replace-in-file';

nx.declare({
  statics: {
    init: function() {
      const instance = new this();
      instance.reset();
      instance.replace();
    },
  },
  methods: {
    reset: function() {
      fs.copyFileSync('./scripts/TEMPLATE.md', './README.md');
    },
    replace: function() {
      const docApp = fs.readFileSync('./packages/example/src/App.tsx').toString();

      nx.replaceInFile('README.md', [
        ['__GENERATE_DAPP__', indentString(docApp, 2).trimEnd()],
        ['@jswork/react-ring-progress/src', '@jswork/react-ring-progress'],
        ['src/style.scss', 'dist/style.scss'],
      ]);
    },
  },
});
