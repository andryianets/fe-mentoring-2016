describe('#pagination.component', () => {

    let $compile,
        $scope,
        $ctrl,
        paginationComponent;

    function compile(scopeData) {
        angular.extend($scope, scopeData);

        paginationComponent = $compile('<pagination total-count="totalCount" items-per-page="itemsPerPage" current-page="currentPage" on-change="onChange" />')($scope);
        $ctrl = paginationComponent.isolateScope().$ctrl;
    }

    beforeEach(angular.mock.module('todoApp'));

    beforeEach(inject((_$rootScope_, _$compile_) => {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();

        $scope.onChange = jasmine.createSpy('onChange');

        compile({
            totalCount: 10,
            itemsPerPage: 4,
            currentPage: 1
        });
    }));


    describe('#constructor', () => {
        it('should initialize component properties', () => {
            expect($ctrl.pages.length).toBe(3);
            expect($ctrl.displayedFrom).toBe(5);
            expect($ctrl.displayedTo).toBe(8);
        });
    });

    describe('#selectPage', () => {
        it('should change $scope.currentPage and helper getters', () => {
            $ctrl.selectPage(2);
            $scope.$apply();

            expect($scope.currentPage).toBe(2);
            expect($ctrl.displayedFrom).toBe(9);
            expect($ctrl.displayedTo).toBe(10);
        });

    });

});