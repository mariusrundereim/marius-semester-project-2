export default class DisplayMessage {
  #toastElement;

  constructor(options) {
    const toastElement = document.createElement("div");
    toastElement.classList.add(
      "mb-4",
      "min-w-min",
      "border",
      "border-green-600",
      "border-1",
      "p-4",
      "rounded-md",
      "bg-white",
      "shadow-lg"
    );
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  //   set position(value) {
  //     const selector = `.${value}`;
  //     const container document.querySelector(selector);
  //     container.append(this.#toastElement);
  //   }

  set text(value) {
    this.#toastElement.textContent = value;
  }

  //   show() {
  //     toastElement.classList.add(
  //       "mb-4",
  //       "min-w-min",
  //       "border",
  //       "border-green-600",
  //       "border-1",
  //       "p-4",
  //       "rounded-md",
  //       "bg-white",
  //       "shadow-lg"
  //     );
  //     console.log("Show the toast message");
  //   }
}
