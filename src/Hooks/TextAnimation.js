// TextScrambleEffect.js
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export const initTextScrambleEffect = (selector = "p", containerSelector = "#text-block") => {
  const st = SplitText.create(selector, { type: "chars", charsClass: "char" });

  st.chars.forEach((char) => {
    gsap.set(char, { attr: { "data-content": char.innerHTML } });
  });

  const textBlock = document.querySelector(containerSelector);

  if (!textBlock) {
    console.warn(`No element found with selector: ${containerSelector}`);
    return;
  }

  textBlock.onpointermove = (e) => {
    st.chars.forEach((char) => {
      const rect = char.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {
        gsap.to(char, {
          overwrite: true,
          duration: 1.2 - dist / 40,
          scrambleText: {
            text: char.dataset.content,
            chars: ".:",
            speed: 0.5,
          },
          ease: "none",
        });
      }
    });
  };
};
