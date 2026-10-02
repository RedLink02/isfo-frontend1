import { useState } from "react"
export function greetings(nom){return nom}

function StudentCard(props) {
  return (
        <div className={`rounded-xl p-5 shadow ${ props.note >= 10 ? "bg-white" : "bg-red-600"}`}>
          <h3 className="text-lg font-bold">
            {props.name}
          </h3>

          <p className="mt-2 text-slate-500">
            Note : {props.note} / 20
          </p>
          <button onClick={()=>greet(props.name)} className="bg-blue-500 text-white rounded-xl p-4 shadow">Greet !</button>
        </div>
  )
}

export default StudentCard