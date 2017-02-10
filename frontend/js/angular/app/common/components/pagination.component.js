class PaginationController {

    constructor() {
        this.pages = [];
    }

    $onChanges(changesObj) {
        if (changesObj.totalCount !== undefined || changesObj.itemsPerPage !== undefined) {
            this.pages = _.times(Math.ceil(this.totalCount / this.itemsPerPage), index => index + 1);
        }
    }

    selectPage(index) {
        this.currentPage = index;
    }

    get displayedFrom() {
        return this.itemsPerPage * this.currentPage + 1;
    }

    get displayedTo() {
        return Math.min(this.totalCount, this.itemsPerPage * (this.currentPage + 1));
    }

}

export default {
    bindings: {
        totalCount: '<',
        itemsPerPage: '<',
        currentPage: '='
    },
    controller: PaginationController,
    template: `<div class="btn-group" role="group">
                <button type="button"
                        ng-repeat="page in $ctrl.pages"
                        class="btn"
                        ng-class="{'btn-primary': $ctrl.currentPage === $index, 'btn-default': $ctrl.currentPage !== $index}"
                        ng-click="$ctrl.selectPage($index)">{{page}}</button>
            </div>
            <span class="label label-primary">{{$ctrl.displayedFrom}} to {{$ctrl.displayedTo}} from {{$ctrl.totalCount}}</span>`
};