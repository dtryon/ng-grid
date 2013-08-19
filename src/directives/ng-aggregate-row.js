ngGridDirectives.directive('ngAggregateRow', ['$compile', '$templateCache', function ($compile, $templateCache) {
    var ngAggregateRow = {
        scope: false,
        compile: function () {
            return {
                pre: function ($scope, iElement) {
                    if (iElement.children().length === 0) {
                        iElement.append($compile($templateCache.get($scope.gridId + 'aggregateRowTemplate.html'))($scope));
                    }
                }
            };
        }
    };
    return ngAggregateRow;
}]);