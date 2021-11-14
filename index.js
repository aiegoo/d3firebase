const canvas = d3.select('.canvas');
const svg = canvas.append('svg')
svg.attr('width', 1200).attr('height', 700);
const group = svg.append('g')
     .attr('transform', 'translate(-10, 90)');

group.append('rect')
     .attr('width', 200)
     .attr('height', 100)
     .attr('fill', '#f0f')
     .attr('x', 20)
     .attr('y', 20);
group.append('circle')
     .attr('r', 60)
     .attr('fill', 'blue')
     .attr('cx', 400)
     .attr('cy', 80);

group.append('line')
     .attr('x1', 570)
     .attr('x2', 600)
     .attr('y1', 20)
     .attr('y2', 120)
     .attr('stroke', 'red')
     .attr('stroke-width', 5);

svg.append('text')
     .attr('x', 20)
     .attr('y', 100)
     .attr('fill', 'grey')
     .text('hello world');

console.log(svg);