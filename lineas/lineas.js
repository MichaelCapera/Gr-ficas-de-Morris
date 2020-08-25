var morrisData = new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 20, value2:10 },
    { year: '2009', value: 10, value2:10},
    { year: '2010', value: 5, value2:10},
    { year: '2011', value: 5, value2:10},
    { year: '2012', value: 20, value2:10}
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value', 'value2'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Ice fox', 'fire fox'],
  resize: true,
  lineColors: ['#42e3f5','#b70ee6'],
  lineWidth:3
});

// Use Morris.Area instead of Morris.Line
var area1 = Morris.Area({
  element: 'graph',
  behaveLikeLine: true,
  data: [
    {x: '2011 Q1', y: 3, z: 3},
    {x: '2011 Q2', y: 2, z: 1},
    {x: '2011 Q3', y: 2, z: 4},
    {x: '2011 Q4', y: 3, z: 3}
  ],
  xkey: 'x',
  ykeys: ['y', 'z'],
  labels: ['Y', 'Z'],
  resize: true,
  lineColors: ['#42e3f5','#b70ee6'],
  lineWidth:3
});


$("#boton").on("click", function(){

//console.log("morris");

var newDatos =  [
    { year: '2011', value: 20, value2:15 },
    { year: '2013', value: 10, value2:18},
    { year: '2014', value: 8, value2:11},
    { year: '2015', value: 9, value2:30},
    { year: '2018', value: 30, value2:100}
  ];

  morrisData.setData(newDatos);

var newArea1 = [
    {x: '2011 Q1', y: 6, z: 22},
    {x: '2011 Q2', y: 5, z: 30},
    {x: '2011 Q3', y: 10, z: 50},
    {x: '2011 Q4', y: 14, z: 100}
  ];

  area1.setData(newArea1);
 

});

