import { ref, onMounted, onBeforeUnmount } from "vue";

export function useHeadingsSidebar(selector = "section > h2") {
  const headings = ref([]);
  const activeHeading = ref(null);

  const collectHeadings = () => {
    headings.value = Array.from(document.querySelectorAll(selector)).map(h => ({
      id: h.id,
      text: h.innerText
    }));
  };

  const handleScroll = () => {
    for (const h of headings.value) {
      const el = document.getElementById(h.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        activeHeading.value = h.id;
      }
    }
  };

  onMounted(() => {
    collectHeadings();
    window.addEventListener("scroll", handleScroll);
  });

  onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));

  return { headings, activeHeading };
}
