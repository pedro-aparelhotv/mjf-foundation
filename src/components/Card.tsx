import { useState } from 'react'

export default function Card() {
  const [active, handleActive] = useState(false)

  return (
    <div
      id="cardContainer"
      style={{
        height: active ? `300px` : `100px`,
        transition: '0.9s',
      }}
      onClick={() => {
        handleActive(!active)
      }}
    >
      <div id="firstDisplay">
        <h1>Primeira superficie frente</h1>
      </div>

      <div
        id="first"
        style={{
          transform: active
            ? `rotate3d(1, 0, 0, -180deg)`
            : `rotate3d(1, 0, 0, 0deg)`,
          transitionDelay: active ? '0s' : '0.3s',
        }}
      >
        <div id="firstTop">
          <h1>Secunda superficie - back</h1>
        </div>

        <div id="firstBehind">
          <div id="firstBehindDisplay">
            <h1>Secunda superficie - front</h1>
          </div>

          <div
            id="second"
            style={{
              transform: active
                ? `rotate3d(1, 0, 0, -180deg)`
                : `rotate3d(1, 0, 0, 0deg)`,
              transitionDelay: active ? '0.2s' : '0.2s',
            }}
          >
            <div id="secondTop">
              <h1>Terceira superficie - back</h1>
            </div>

            <div id="secondBehind">
              <div id="secondBehindDisplay">
                <h1>Terceira superficie - front</h1>
              </div>

              <div
                id="third"
                style={{
                  transform: active
                    ? `rotate3d(1, 0, 0, -180deg)`
                    : `rotate3d(1, 0, 0, 0deg)`,
                  transitionDelay: active ? '0.4s' : '0s',
                }}
              >
                <div id="thirdTop">
                  <h1>Quarta superficie - back</h1>
                </div>

                <div id="secondBehindBottom">
                  <h1>Quarta superficie - front</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
