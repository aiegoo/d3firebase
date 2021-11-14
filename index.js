const canvas = d3.select('.canvas');
const svg = canvas.append('svg')
svg.attr('width', 1200).attr('height', 700);
svg.append('rect')
     .attr('width', 600)
     .attr('height', 200)
     .attr('background-color', '#f0f');
svg.append('circle')
     .attr('radius', 200)
     .attr('fill', 'blue');

svg.append('line')
     .attr();

console.log(svg);