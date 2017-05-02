import Base from './Base';
import CredentialType from './CredentialType';

function config ($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}

config.$inject = ['$resourceProvider'];

angular
    .module('at.models', [])
    .config(config)
    .factory('Base', Base)
    .factory('CredentialType', CredentialType);

