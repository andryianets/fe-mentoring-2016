describe('#article.component', () => {

    let $compile,
        $scope,
        $ctrl,
        $q,
        articleComponent;

    function compile(data) {
        $scope.data = data;
        articleComponent = $compile('<article-form data="data"/>')($scope);
        $ctrl = articleComponent.isolateScope().$ctrl;
    }

    beforeEach(angular.mock.module('todoApp'));

    beforeEach(inject((_$rootScope_, _$compile_, _$q_) => {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        $q = _$q_;
    }));

    describe('$postLink', () => {
        it('should fill data property if data binding was set', () => {
            const data = {_id: 1, title: 'title'};
            compile(data);
            expect($ctrl.data).toBe(data);
        });

        it('should init data property if data binding was not set', () => {
            compile(null);
            expect($ctrl.data.source.name).toBe('usa-today');
        });
    });

    describe('#save', () => {
        it('should invoke $save() method if article is not new', () => {
            const data = {_id: 1, title: 'title', $save: jasmine.createSpy('$save')};
            data.$save.and.returnValue({});
            compile(data);
            
            $ctrl.save();
            expect(data.$save).toHaveBeenCalled();
        });

        it('should invoke $create() method if article is new', () => {
            compile(null);
            $ctrl.data.$create = jasmine.createSpy('$create');
            $ctrl.data.$create.and.returnValue({});

            $ctrl.save();
            expect($ctrl.data.$create).toHaveBeenCalled();
        });
    });

});