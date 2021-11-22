// select the svg conatiner first
const svg = d3.select('svg');

const data = d3.json('planets.json').then(data => {
// join the data to circs
const circs = svg.selectAll('circle')
.data(data);

circs.attr('cy', 200)
.attr('cx', d => d.distance)
.attr('r', d => d.radius)
.attr('fill', d => d.fill);

// append the enter selection to the dome
circs.enter()
.append('circle')
.attr('cy', 200)
.attr('cx', d => d.distance)
.attr('r', d => d.radius)
.attr('fill', d => d.fill);
console.log(circs)
});
