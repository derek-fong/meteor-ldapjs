Package.describe({
  name: 'derek-fong:ldapjs',
  version: '0.7.1',
  summary: 'Meteor package wrapper for the ldapjs Npm module https://www.npmjs.com/package/ldapjs',
  git: 'https://github.com/derek-fong/meteor-ldapjs',
  documentation: 'README.md'
});

Npm.depends({
  ldapjs: "0.7.1", 
});

Package.onUse(function (api) {

  api.add_files([
    'lib/ldapjs.js',
  ], ['server']);
  
  api.export([
    'MeteorWrapperLdapjs'
  ]);
});
