import "@testing-library/jest-dom/vitest";

/**
 * jsdom does not implement HTMLDialogElement's showModal()/close(), and never
 * fires a native `cancel` event on Escape (github.com/jsdom/jsdom#3294).
 * This test-only polyfill restores just enough native <dialog> behavior for
 * component tests to exercise the real showModal()/close()/Escape flow that
 * runs in actual browsers. Production code (MobileNav.tsx) never hand-rolls
 * this logic itself — it only calls the standard <dialog> API.
 */
if (typeof window !== "undefined" && typeof window.HTMLDialogElement !== "undefined") {
  const proto = window.HTMLDialogElement.prototype;

  if (!proto.showModal) {
    proto.showModal = function (this: HTMLDialogElement) {
      this.setAttribute("open", "");
    };
  }

  if (!proto.close) {
    proto.close = function (this: HTMLDialogElement) {
      if (!this.hasAttribute("open")) return;
      this.removeAttribute("open");
      this.dispatchEvent(new Event("close"));
    };
  }

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openDialog = document.querySelector("dialog[open]");
    if (!openDialog) return;
    const notCancelled = openDialog.dispatchEvent(new Event("cancel", { cancelable: true }));
    if (notCancelled) {
      (openDialog as HTMLDialogElement).close();
    }
  });
}
