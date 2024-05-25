"use client"
import { useState } from "react"

export const CounterButton = () => {
  const [counter, setCounter] = useState(0)

  const onCount = (name: string) => {
    setCounter((prev) => (name === "plus" ? prev + 1 : prev - 1))
  }

  return (
    <div className="flex gap-x-3 mt-4">
      <button
        onClick={(e) => onCount(e.currentTarget.name)}
        className="bg-blue-400 px-3 py-0.5 rounded-sm text-white"
        name={"minus"}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        name={"plus"}
        onClick={(e) => onCount(e.currentTarget.name)}
        className="bg-blue-400 px-3 py-0.5 rounded-sm text-white"
      >
        +
      </button>
    </div>
  )
}
