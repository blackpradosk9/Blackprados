@import url('https://fonts.googleapis.com/css2?family=Anton&family=Work+Sans:wght@400;500;600;700;800&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Work Sans", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Anton", sans-serif;

  --color-ink: #0e0f11;
  --color-ink-2: #191b1e;
  --color-bone: #ece6d8;
  --color-ember: #c89a56;
  --color-moss: #2c2f33;
  --color-steel: #8b8f94;
  --color-line: rgba(236, 230, 216, 0.13);
}

:root {
  --ink: #0e0f11;
  --ink-2: #191b1e;
  --bone: #ece6d8;
  --ember: #c89a56;
  --moss: #2c2f33;
  --steel: #8b8f94;
  --line: rgba(236, 230, 216, 0.13);
}

body {
  background: var(--ink);
  color: var(--bone);
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  overflow-x: hidden;
}

h1, h2, h3, .display-font {
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  line-height: 0.95;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Animations */
.leash-path {
  fill: none;
  stroke: var(--ember);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 900;
  stroke-dashoffset: 900;
  animation: draw 2.2s ease forwards 0.4s;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

.leash-tag {
  font-family: 'Anton', sans-serif;
  font-size: 13px;
  letter-spacing: 0.08em;
  fill: var(--bone);
  text-transform: uppercase;
}

/* Editable Hover Styles */
.editable-hover {
  outline: 2px dashed rgba(200, 154, 86, 0.3);
  outline-offset: 2px;
  transition: outline 0.15s;
  cursor: pointer;
  position: relative;
}

.editable-hover:hover {
  outline: 2px solid rgba(200, 154, 86, 0.8);
}

.editable-active {
  outline: 2px solid #c89a56 !important;
  background: rgba(200, 154, 86, 0.08);
}

