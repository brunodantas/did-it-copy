// The page guide is built from the h2 headings, so renaming a section never leaves a stale entry behind.

const article = document.querySelector(".article");
const headings = [...article.querySelectorAll(".article-section > h2, .footnotes > h2")];
const wide = matchMedia("(min-width: 1200px)");

const toc = document.createElement("details");
toc.className = "toc";
toc.open = wide.matches;
toc.innerHTML = `<summary class="eyebrow">On this page</summary><nav aria-label="On this page"><ol></ol></nav>`;
const list = toc.querySelector("ol");

const links = headings.map((heading) => {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = `#${heading.id}`;
  link.textContent = heading.textContent;
  item.append(link);
  list.append(item);
  return link;
});

article.querySelector("h1 + p").after(toc);
article.classList.add("has-toc");

// On a wide screen the guide is a rail that is always open; on a phone it starts folded so the text comes first.
wide.addEventListener("change", (event) => { toc.open = event.matches; });

function markCurrent() {
  const line = innerHeight * 0.25;
  let current = -1;
  headings.forEach((heading, index) => {
    if (heading.getBoundingClientRect().top <= line) current = index;
  });
  links.forEach((link, index) => {
    if (index === current) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

let queued = false;
addEventListener("scroll", () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => { queued = false; markCurrent(); });
}, { passive: true });
markCurrent();
