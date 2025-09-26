import React from 'react'
import Tilt from "react-parallax-tilt";


const projects = [
{title:'Project A',desc:'Short description',github:'#',demo:'#'},
{title:'Project B',desc:'Short description',github:'#',demo:'#'},
{title:'Project C',desc:'Short description',github:'#',demo:'#'},
]


export default function Projects(){
return (
<section className="section bg-transparent">
<div className="container">
<h2 className="text-3xl font-semibold">Projects</h2>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
{projects.map(p=> (
<Tilt key={p.title} className="bg-card/60 p-6 rounded-xl shadow-lg hover:scale-105 transition">
<h3 className="text-xl font-bold">{p.title}</h3>
<p className="mt-2 text-gray-300">{p.desc}</p>
<div className="mt-4 flex gap-3">
<a href={p.github} className="text-sm px-3 py-2 border rounded">GitHub</a>
<a href={p.demo} className="text-sm px-3 py-2 bg-primary/90 rounded text-black">Demo</a>
</div>
</Tilt>
))}
</div>
</div>
</section>
)
}