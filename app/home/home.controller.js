(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var vm = this;

        vm.posts = [];

        vm.addPost = addPost;

        

        ////////////////////////

        vm.sort = 'priority';

            function addPost() {
                vm.posts.push({
                    text: vm.newPost,
                    priority: vm.priority
                });






            };


    }

})();
