describe('#articles.component', () => {

    let $compile,
        $scope,
        $ctrl,
        $q,
        queryDeferred,
        ArticleResource,
        articlesComponent;

    beforeEach(angular.mock.module('todoApp'));

    beforeEach(angular.mock.module($provide => {
        ArticleResource = jasmine.createSpyObj('ArticleResource', ['query']);
        $provide.value('Article', ArticleResource);
    }));

    beforeEach(inject((_$rootScope_, _$compile_, _$q_) => {
        $compile = _$compile_;
        $scope = _$rootScope_.$new();
        $q = _$q_;

        // promises
        queryDeferred = $q.defer();
        ArticleResource.query.and.returnValue({$promise: queryDeferred.promise});

        // compilation
        articlesComponent = $compile('<articles-list />')($scope);
        $ctrl = articlesComponent.isolateScope().$ctrl;
    }));


    describe('#constructor', () => {
        it('should initialize component properties', () => {
            expect($ctrl.articles.length).toBe(0);
            expect($ctrl.currentPage).toBe(0);
        });
    });

    describe('#loadList', () => {
        it('should invoked during $init()', () => {
            expect(ArticleResource.query).toHaveBeenCalled();
        });

        it('should fill $ctrl.articles', () => {
            const items = [{id: 1}, {id: 2}];
            queryDeferred.resolve(items);
            $scope.$apply();
            
            expect($ctrl.articles).toBe(items);
        });
    });

});