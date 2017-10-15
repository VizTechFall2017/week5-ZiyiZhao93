var svg = d3.select('svg').append('g').attr('transform','translate(100,100)');

var clicked = true;


var scaleX = d3.scalePoint().domain(["0","read a book", "listen to music", "play game", "social media",
    "chat", "wondering","take a rest"]).range([0, 600]);
var scaleY = d3.scaleLinear().domain([0,100]).range([400, 0]);

var dataIn = [];

svg.append("g")
    .attr('transform','translate(0,400)')  //move the x axis from the top of the y axis to the bottom
    .call(d3.axisBottom(scaleX));

svg.append("g")
    .call(d3.axisLeft(scaleY));

d3.csv('./Subway-Activity-Services.csv', function(dataIn) {

    dataFemale = dataIn.filter(function(d){
        d.female;
    });

    dataMale = dataIn.filter(function(d){
        d.male;
    });


  console.log(dataIn);

    svg.append('text')
        .text('What Do you Normally Do on the Subway?')
        .attr('transform','translate(300, -50)')
        .style('text-anchor','middle')
        .attr('font-size',30);

    svg.append('text')
        .text('Percent')
        .attr('transform', 'translate(-40,250)rotate(270)');

    svg.append('text')
        .text('Total')
        .attr('transform','translate(682, 135)');

    svg.append('text')
        .text('Female')
        .attr('transform','translate(675, 235)');

    svg.append('text')
        .text('Male')
        .attr('transform','translate(682, 335)');

    svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('class','total')
        .attr('r', 5)
        .attr('fill', "mediumslateblue");

    svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('class','female')
        .attr('r', 5)
        .attr('fill', "pink");

    svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append('circle')
        .attr('class','male')
        .attr('r', 5)
        .attr('fill', "lightskyblue");

    drawPoints(dataIn);

    $('#testCircle').tooltip();

});





function drawPoints(pointData) {

    svg.selectAll('.total')
        .data(pointData)

        .attr('cx', function (d) {
            return scaleX(d.things);
        })
        .attr('cy', function (d) {
            return scaleY(d.total);
        })
        .attr('data-toggle', 'tooltip')

        .attr('title', function (d) {
            return d.total
        });

    svg.selectAll('.female')
        .data(pointData)

        .attr('cx', function (d) {
            return scaleX(d.things);
        })
        .attr('cy', function (d) {
            return scaleY(d.female);
        })
        .attr('data-toggle', 'tooltip')

        .attr('title', function(d) {
            return d.femal
        });

    svg.selectAll('.male')
        .data(pointData)

        .attr('cx', function (d) {
            return scaleX(d.things);
        })
        .attr('cy', function (d) {
            return scaleY(d.male);
        })
        .attr('data-toggle', 'tooltip')

        .attr('title', function(d) {
            return d.mal
        });
}

svg.append('circle')
    .attr('cx',700)
    .attr('cy',100)
    .attr('r',20)
    .attr('fill','mediumslateblue');

svg.append('circle')
    .attr('cx',700)
    .attr('cy',200)
    .attr('r',20)
    .attr('fill','pink');

svg.append('circle')
    .attr('cx',700)
    .attr('cy',300)
    .attr('r',20)
    .attr('fill','lightskyblue');


function buttonClicked(){
    console.log('here');

    if(clicked == true){

        svg.selectAll('.female')
            .attr('cy', function (d) {
                return scaleY(d.female);
            })
            .attr('title', function(d) {
                return d.femal
            });
        clicked = false;
    }
    else{

        svg.selectAll('.total')
            .attr('cy', function (d) {
                return scaleY(d.total);
            })
            .attr('title', function(d) {
                return d.total
            });
        clicked = true;
    }

}










