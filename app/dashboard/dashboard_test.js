/**
 * Created by Edward on 10/5/2015.
 */

'use strict';

describe('myApp.dashboard module', function() {

    beforeEach(module('myApp.login'));

    describe('dashboard controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var dashboardCtrl = $controller('DashboardCtrl');
            expect(dashboardCtrl).toBeDefined();
        }));

    });
});