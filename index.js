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
     .attr('fill', d => d.fill ); // when return value is in the same line like here, simpler coding is possible; same goes to the parameter d.
console.log(rect);