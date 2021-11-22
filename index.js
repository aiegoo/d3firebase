const data = [
     {width: 200, height: 400, fill:'pink'}
];

const svg = d3.select('svg');

const rect = svg.select('rect')
     .data(data)
     .attr('width', (d, i , n) => { 
          console.log(this)
          console.log(i)
          console.log(n)
          return d.width  
     })
     .attr('height', function(d){ 
          console.log(this)
          return d.height })
     .attr('fill', function(d){ return d.fill });
console.log(rect);