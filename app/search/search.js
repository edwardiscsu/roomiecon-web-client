
'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/search', {
        templateUrl: 'search/search.html',
        controller: 'SearchCtrl'
    });
}])

.controller('SearchCtrl',
    function($scope) {
        $(".button-collapse").sideNav();

        var width = 1000,
            height = 800;

        var color = d3.scale.category20();

        var force = d3.layout.force()
            .charge(-700)
            .linkDistance(150)
            .size([width, height]);

        function createGraph() {
            var svg = d3.select("#content").append("svg")
                .attr("width", "100%")
                .attr("height", "100%");

            d3.json("graphdata.json", function(error, graph) {
                if (error) throw error;

                force
                    .nodes(graph.nodes)
                    .links(graph.links)
                    .start();

                var link = svg.selectAll(".link")
                    .data(graph.links)
                    .enter().append("line")
                    .attr("class", "link")
                    .style("stroke-width", function(d) { return Math.sqrt(d.value); });

                var node = svg.selectAll(".node")
                    .data(graph.nodes)
                    .enter().append("circle")
                    .attr("class", "node")
                    .attr("r", 20)
                    .style("fill", function(d) { return color(d.group); })
                    .call(force.drag);

                node.append("title")
                    .text(function(d) { return d.name; });

                force.on("tick", function() {
                    link.attr("x1", function(d) { return d.source.x; })
                        .attr("y1", function(d) { return d.source.y; })
                        .attr("x2", function(d) { return d.target.x; })
                        .attr("y2", function(d) { return d.target.y; });

                    node.attr("cx", function(d) { return d.x; })
                        .attr("cy", function(d) { return d.y; });
                });
            });
        }
        if($('svg').length == 0) createGraph();
})
