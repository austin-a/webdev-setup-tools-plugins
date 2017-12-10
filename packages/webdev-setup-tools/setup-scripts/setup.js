/**
 * Created by CDejarl1 on 9/11/2017.
 */
const setup = require('webdev-setup-tools');
const ruby = require('webdev-setup-tools-ruby');
const npm = require('webdev-setup-tools-npm-globals');
const maven = require('webdev-setup-tools-maven');
const aem = require('webdev-setup-tools-aem');
const gems = require('webdev-setup-tools-gems');
const java = require('webdev-setup-tools-java');
const os = require('os');
const seconds = 1000;
let fullInstall = () => {
    ruby.installRuby()
        .then(() => gems.installGems())
        .then(() => npm.installNpmPackages())
        .then(() => java.installJava())
        .then(() => maven.installMaven())
        .then(() => aem.installAem())
        .then(() => setup.endProcessWithMessage('For angular development, run command "grunt host".\nFor AEM development, start the crx-quickstart server.', 5 * seconds, 0));
};
fullInstall();