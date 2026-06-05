

export function ThemeScript() {
  const script = `
    (function () {
      try {
        var stored = localStorage.getItem("poetry-theme");
        var dark =
          stored === "dark" ||
          (!stored &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.documentElement.classList.toggle("dark", dark);
      } catch (e) {}
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}

