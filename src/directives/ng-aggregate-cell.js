ngGridDirectives.directive('ngAggregateCell', ['$compile', '$domUtilityService', function ($compile, domUtilityService) {
    var ngAggregateCell = {
        scope: false,
        compile: function() {
            return {
                pre: function($scope, iElement) {

                    var html = $scope.col.aggregateCellTemplate.replace(COL_FIELD, 'row.entity.' + $scope.col.field);
                    var cellElement = $compile(html)($scope);
                    iElement.append(cellElement);
                },
                post: function($scope, iElement) {
                    if ($scope.enableCellSelection) {
                        $scope.domAccessProvider.selectionHandlers($scope, iElement);
                    }

                    $scope.$on('ngGridEventDigestCell', function() {
                        domUtilityService.digest($scope);
                    });
                }
            };
        }
    };
    
    return ngAggregateCell;
}]);