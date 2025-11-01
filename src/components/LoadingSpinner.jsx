import React from 'react'

const LoadingSpinner = () => {
  return (
     <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 100 100"
    fill="#60A5FA"
  >
    <g transform="translate(50,50)">
      {[0, 51.4, 102.8, 154.2, 205.6, 257, 308.4].map((angle, i) => (
        <circle key={i} cx="0" cy="-25" r="5" transform={`rotate(${angle})`}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0;360"
            dur="1s"
            begin={`${i * 0.14}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </g>
  </svg>
  )
}

export default LoadingSpinner
