// select the svg conatiner first
const svg = d3.select('svg');

d3.json('menu.json').then(data => {
     console.log(data)
     const y = d3.scaleLinear()
          .domain([0, 1000])
          .range([0, 500]);
console.log(y(400))
console.log(y(1))
console.log(y(950))
const rects = svg.selectAll('rect')
     .data(data)
rects.attr('width', 50)
     .attr('height', d => y(d.orders))
     .attr('fill', 'orange')
     .attr('x', (d, i) => i * 70)

console.log(rects)

rects.enter()
     .append('rect')
          .attr('width', 50)
          .attr('height', d => y(d.orders))
          .attr('fill', 'hotPink')
          .attr('x', (d, i) => i * 70)
})

