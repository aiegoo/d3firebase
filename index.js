const data = [
     {width: 200, height: 400, fill:'pink'},
     {width: 100, height: 60, fill:'yellow'},
     {width: 50, height: 30, fill:'red'}
];

const svg = d3.select('svg');

const rect = svg.select('rect')
     .data(data)
     .attr('width', (d, i , n) => { 
          console.log(n[i])
          console.log(i)
          console.log(n)
          return d.width  // if return is not in the same line
     })
     .attr('height', function(d){ 
          console.log(this)
          return d.height })
     .attr('fill', d => d.fill ); // when return value is in the same line like here, simpler coding is possible; the same goes to the parameter d.
console.log(rect);

// Enter selection, with virtual ele to match missling rect objects but to enter attr to the dome
const rects =svg.selectAll('rect')
          .data(data); //this will create data-binding

//to add attr to rects already in the dome
rects.attr('width', d => d.width)
.attr('height', d => d.height)
.attr('fill', d => d.fill)

console.log(rects)

// to append enter selection to dome
rects.enter() // in the dome, it will create an _enter array with empty nodes
          .append('rect')
          .attr("width", d => d.width)
          .attr('height', d => d.height)
          .attr('fill', d => d.fill)

