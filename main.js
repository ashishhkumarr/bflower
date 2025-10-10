/*
      ----- ASHISH CHOUDHARY ----- main.js

      Designed by Ashish Kumar
      Senior Computer Science student at ASU
      Full-Stack Developer

*/


onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

function buildBirthdayChars() {
  const el = document.getElementById('bd-text');
  if (!el) return;

  const text = el.getAttribute('data-text') || '';
  el.textContent = ''; // clear existing

  let i = 0; // cumulative index for delays

  for (const ch of text) {
    if (ch === ' ') {
      const gap = document.createElement('span');
      gap.className = 'ch space';
      gap.innerHTML = '&nbsp;';
      // add a small pause before next word: skip a few delay slots
      gap.style.setProperty('--i', i);
      el.appendChild(gap);
      i += 6; // word gap; increase/decrease to slow/speed word-to-word timing
      continue;
    }
    const span = document.createElement('span');
    span.className = 'ch';
    span.textContent = ch;
    span.style.setProperty('--i', i++);
    el.appendChild(span);
  }
}

/* Trigger AFTER your flower animation finishes */
setTimeout(() => {
  buildBirthdayChars();                         // create the spans
  const textEl = document.getElementById('bd-text');
  if (textEl) {
    textEl.classList.remove('not-visible');     // reveal the heading
    textEl.classList.add('show');               // start per-letter drops
  }
}, 6000);  // ← keep this equal to your flower build duration