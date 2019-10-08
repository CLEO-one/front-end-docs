import React from 'react'

const Trash = ({ color = 'currentColor', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    viewBox="0 0 24 24"
    height={size}
  >
    <defs>
      <clipPath id="a-trash">
        <path clipRule="evenodd" d="M-724-606H716v927H-724z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a-trash)">
      <path
        fill={color}
        d="M15 2v2h5v2h-1v13c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3V6H4V4h5V2h6zm1 18c.6 0 1-.4 1-1V6H7v13c0 .6.4 1 1 1h8z"
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="b-trash">
        <path clipRule="evenodd" d="M-724-606H716v927H-724z" />
      </clipPath>
    </defs>
    <g clipPath="url(#b-trash)">
      <path fill={color} d="M9 8h2v10H9V8z" />
    </g>
    <defs>
      <clipPath id="c-trash">
        <path clipRule="evenodd" d="M-724-606H716v927H-724z" />
      </clipPath>
    </defs>
    <g clipPath="url(#c-trash)">
      <path fill={color} d="M13 8h2v10h-2V8z" />
    </g>
  </svg>
)

export default Trash
