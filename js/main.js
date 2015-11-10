import angular from 'angular';

import SearchController from './controllers/searchController';


//register a module

angular
  .module('app', [])
  .controller('SearchController', SearchController);






