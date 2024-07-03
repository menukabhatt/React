import React from 'react'
import { DiAngularSimple, DiBootstrap, DiCss3, DiHtml5, DiJava, DiJavascript, DiReact, DiTravis } from "react-icons/di";

function Tech() {
  return (
    <div className=' space-y-14 my-9'>
      <h1 className='text-3xl font-semiboldbold text-center'>Technologies I Use</h1>
      <div className="tech-icons grid grid-cols-4 justify-items-center gap-y-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ">
       <DiHtml5 size={200} className='animate-bounce'/>
       <DiCss3 size={200}/>
       <DiReact size={200} className='animate-bounce hover:text-red-600'/>
       <DiBootstrap size={200}/>
       <DiJava size={200}/>
       <DiAngularSimple size={200} className='hover:scale-125 hover:text-pink-600 transition-all delay-1000'/>
       <DiJavascript size={200} />
       <DiTravis size={200} className='animate-bounce'/>
      

      </div>

    </div>
  )
}

export default Tech
