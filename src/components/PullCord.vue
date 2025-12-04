<template>
  <div
    class="top-28 sm:top-16 right-[-11%] xs:right-[-17%] sm:right-[-7%] md:right-[-5%] lg:right-0 z-50 select-none fixed"
    id="switchBg"
  >
    <input type="checkbox" id="switchInp" class="hidden absolute l-[-99999px]" />
    <label
      for="switchInp"
      class="inlinke-block text-end cursor-pointer filter-[drop-shadow(3px_2px_3px_rgba(0,0,0,0.5))]"
    >
      <canvas id="stringCanvas" class="border-0 outline-0" width="180" height="150"></canvas>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const BEAD_COUNT = 9
const BEAD_SIZE = 3
const BEAD_DIST = 120 / (BEAD_COUNT + 2)
const INITIAL_X_MOMENTUM = -6
const GRAVITY = 12
const X_FRICTION = 0.01

let running = true
let lit = false
let animationId: number
let grd = null

const isDarkMode = ref(false)

function pythag(x1: number, y1: number, x2: number, y2: number) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
}
function getAngle(x1: number, y1: number, x2: number, y2: number) {
  return Math.atan((y2 - y1) / (x2 - x1))
}

onMounted(() => {
  const canvas = document.getElementById('stringCanvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const switchInp = document.getElementById('switchInp') as HTMLInputElement

  lit = switchInp.checked

  class Bead {
    x: number
    y: number
    speedX: number
    speedY: number
    parent: {
      x: number
      y: number
    }

    constructor(initialX: number, initialY: number) {
      this.x = initialX
      this.y = initialY
      this.speedX = 0
      this.speedY = 0

      this.parent = {
        x: canvas.width / 2,
        y: 0,
      }
    }

    draw() {
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(this.x, this.y - BEAD_SIZE)
      ctx.arc(this.x, this.y, BEAD_SIZE, 0, Math.PI * 2, false)

      grd = ctx.createRadialGradient(
        this.x,
        this.y,
        BEAD_SIZE,
        this.x - BEAD_SIZE / 2,
        this.y - BEAD_SIZE / 4,
        BEAD_SIZE * 0.75,
      )

      if (lit) {
        grd.addColorStop(1, '#ffffff')
        grd.addColorStop(0, '#ffffff')
        ctx.fillStyle = grd
      } else {
        grd.addColorStop(1, '#000000')
        grd.addColorStop(0, '#000000')
        ctx.fillStyle = grd
      }
      ctx.fill()
      ctx.restore()
    }

    drawLine() {
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(this.parent.x, this.parent.y)
      ctx.lineTo(this.x, this.y)
      ctx.stroke()
      ctx.restore()
    }

    setParent(parentBead: Bead) {
      this.parent = parentBead
    }

    setSpeed(x: number, y: number) {
      this.speedX = x
      this.speedY = y
    }

    addMomentum(x: number, y: number) {
      this.speedX += x
      this.speedY += y
    }

    updateMomentum(deltaTime: number) {
      this.speedY += (GRAVITY * deltaTime) / 1000
      const currentSpeedX = this.speedX
      const currentSpeedXFriction = (X_FRICTION * deltaTime) / 1000

      if (Math.abs(currentSpeedX) <= currentSpeedXFriction) this.speedX = 0
      else
        this.speedX =
          this.speedX > 0
            ? this.speedX - (X_FRICTION * deltaTime) / 1000
            : this.speedX + (X_FRICTION * deltaTime) / 1000
    }

    move() {
      this.x += this.speedX
      this.y += this.speedY
    }

    positionBasedOnParent() {
      if (this.parent) {
        const d = pythag(this.x, this.y, this.parent.x, this.parent.y)
        if (d > BEAD_DIST) {
          const a = getAngle(this.x, this.y, this.parent.x, this.parent.y)
          let dx = Math.cos(a) * (d - BEAD_DIST)
          let dy = Math.sin(a) * (d - BEAD_DIST)
          if (this.x > this.parent.x) {
            dx *= -1
            dy *= -1
          }

          if (this.parent instanceof Bead) {
            this.x += dx / 2
            this.y += dy / 2
            this.speedX += dx / 2
            this.speedY += dy / 2

            this.parent.x -= dx / 2
            this.parent.y -= dy / 2
            this.parent.speedX -= dx / 2
            this.parent.speedY -= dy / 2
          } else {
            this.x += dx
            this.y += dy
            this.speedX += dx
            this.speedY += dy
          }
        }
      }
    }
  }

  const beads: Bead[] = []

  for (let i = 0; i < BEAD_COUNT; i++) {
    beads.push(new Bead(canvas.width / 2, i * BEAD_DIST + BEAD_SIZE))
    if (i > 0) beads[i]?.setParent(beads[i - 1] as Bead)
  }

  let lastTime = new Date().getTime()
  function loop() {
    const now = new Date().getTime()
    const deltaTime = now - lastTime
    if (running) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (beads[0]?.parent.y !== 0) {
        ctx.strokeStyle = lit ? '#ffffff' : '#000000'
        ctx.beginPath()
        ctx.moveTo(canvas.width / 2, 0)
        ctx.lineTo(canvas.width / 2, beads[0]?.parent.y || 0)
        ctx.stroke()
      }

      ctx.strokeStyle = lit ? '#ffffff' : '#000000'
      ctx.fillStyle = lit ? '#ffffff' : '#000000'

      beads.forEach(function (bead) {
        bead.updateMomentum(deltaTime)
        bead.move()
        bead.positionBasedOnParent()
      })
      for (let i = 0; i < 20; i++) {
        beads.forEach(function (bead) {
          bead.positionBasedOnParent()
        })
      }
      beads.forEach(function (bead) {
        bead.drawLine()
      })
      beads.forEach(function (bead) {
        bead.draw()
      })
    }

    lastTime = now
    animationId = requestAnimationFrame(loop)
  }

  animationId = requestAnimationFrame(loop)

  const handleMouseUp = () => {
    beads[BEAD_COUNT - 1]?.addMomentum(INITIAL_X_MOMENTUM, 0)
    if (beads[0]) beads[0].parent.y = 0
    running = true
  }

  const handleMouseDown = () => {
    if (beads[0]) beads[0].parent.y = BEAD_DIST
    running = true
  }

  const handleVisibilityChange = () => {
    lastTime = new Date().getTime()
    running = !document.hidden
  }

  const handleSwitchChange = function (this: HTMLInputElement) {
    lit = this.checked
    toggleDarkMode()
  }

  canvas.addEventListener('mouseup', handleMouseUp)
  canvas.addEventListener('mousedown', handleMouseDown)
  document.addEventListener('visibilitychange', handleVisibilityChange)
  switchInp.addEventListener('change', handleSwitchChange)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}

watch(
  isDarkMode,
  (newVal) => {
    document.documentElement.classList.toggle('dark', newVal)
    localStorage.setItem('theme', newVal ? 'dark' : 'light')
  },
  { immediate: true },
)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDarkMode.value = true
  }
})

defineExpose({
  isDarkMode,
  toggleDarkMode,
})
</script>
