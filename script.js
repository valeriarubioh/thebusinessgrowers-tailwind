function saveActiveToggle(toggleText) {
  localStorage.setItem("activeToggle", toggleText);
}

const toggleDescriptions = document.querySelectorAll(".toggle-description");
const descriptions = document.querySelectorAll(".description");
const descriptionsData = {
  "BRANDING FOR MSPs": {
    title: "BRANDING FOR MSPs",
    description:
      "Create a stunning brand that stands out visually in the market.",
  },
  "BRAND MESSAGING FOR MSPs": {
    title: "BRAND MESSAGING FOR MSPs",
    description:
      "Develop authentic brand messaging that resonates with your ideal clients.",
  },
  "WEBSITES FOR MSPs": {
    title: "MSP WEBSITES",
    description:
      "Build a professional, user-friendly website that reflects your brand.",
  },
  "SEO FOR MSPs": {
    title: "SEO FOR MSPs",
    description:
      "Move up in Google search results and gain more search engine visibility.",
  },
  "DIGITAL ADS FOR MSPs": {
    title: "DIGITAL ADS FOR MSPs",
    description:
      "Drive ready-to-buy or curious clients to high-converting landing pages.",
  },
  "SOCIAL MEDIA FOR MSPs": {
    title: "SOCIAL MEDIA FOR MSPs",
    description:
      "Generate real social media engagement and speak directly to clients.",
  },
};

const [title, description] = descriptions;
const activeToggle = document.querySelector(".toggle-description[data-active]");
const initialData = descriptionsData[activeToggle.textContent];
title.textContent = initialData.title;
description.textContent = initialData.description;
title.classList.remove("-translate-y-full", "opacity-0");
description.classList.remove("-translate-y-full", "opacity-0");
activeToggle.classList.add("active");

toggleDescriptions.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const key = toggle.textContent;
    const data = descriptionsData[key];

    toggleDescriptions.forEach((toggle) => toggle.classList.remove("active"));
    toggle.classList.add("active");

    title.classList.add("-translate-y-full", "opacity-0");
    description.classList.add("-translate-y-full", "opacity-0");

    title.textContent = data.title;
    description.textContent = data.description;

    setTimeout(() => {
      title.classList.remove("-translate-y-full", "opacity-0");
      description.classList.remove("-translate-y-full", "opacity-0");
    }, 10);

    saveActiveToggle(key);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const savedActiveToggle = localStorage.getItem("activeToggle");

  if (savedActiveToggle) {
    const data = descriptionsData[savedActiveToggle];
    const [title, description] = descriptions;
    title.textContent = data.title;
    description.textContent = data.description;
    title.classList.remove("-translate-y-full", "opacity-0");
    description.classList.remove("-translate-y-full", "opacity-0");

    const activeToggleElement = document.querySelector(
      `.toggle-description[data-active]`
    );
    activeToggleElement.classList.remove("active");

    const savedToggleElement = document.querySelector(
      `.toggle-description:contains("${savedActiveToggle}")`
    );
    savedToggleElement.classList.add("active");
  } else {
    const activeToggle = document.querySelector(
      ".toggle-description[data-active]"
    );
    const initialData = descriptionsData[activeToggle.textContent];
    const [title, description] = descriptions;
    title.textContent = initialData.title;
    description.textContent = initialData.description;
    title.classList.remove("-translate-y-full", "opacity-0");
    description.classList.remove("-translate-y-full", "opacity-0");
    activeToggle.classList.add("active");
  }
});
