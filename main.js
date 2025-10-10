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

  const text = (el.getAttribute('data-text') || '').trim();
  el.textContent = '';

  let i = 0; // global index for staggered delays across all letters
  const words = text.split(' ');

  words.forEach((word, wIdx) => {
    const w = document.createElement('span');
    w.className = 'w'; // no-wrap word container
    for (const ch of word) {
      const s = document.createElement('span');
      s.className = 'ch';
      s.textContent = ch;
      s.style.setProperty('--i', i++);
      w.appendChild(s);
    }
    el.appendChild(w);

    // Add a small pause before the next word starts dropping
    if (wIdx < words.length - 1) i += 6; // tune this gap for pacing
  });
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