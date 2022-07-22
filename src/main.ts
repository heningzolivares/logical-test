import { fibonacci } from "./fibonacci";
import { repeatWordsInString } from "./repeatWordsInString";
import { substitution } from "./substitution";

document
  .querySelector<HTMLInputElement>("#fiboInput")
  ?.addEventListener("input", ({ target }: { target: any }) => {
    const inputValue = target?.value;
    const fiboOutNode = document.querySelector<HTMLDivElement>("#fiboOutput");
    if (fiboOutNode) {
      fiboOutNode.innerHTML = fibonacci(inputValue).toString();
    }
  });

const repeatNodeOutput =
  document.querySelector<HTMLInputElement>("#repeatOutput");

if (repeatNodeOutput) {
  const repeatNodeInput =
    document.querySelector<HTMLInputElement>("#repeatInput");
  repeatNodeOutput.innerHTML = repeatWordsInString(repeatNodeInput?.value || '').toString();
}

const substitutionNode =
  document.querySelector<HTMLDivElement>("#substitutionOutput");
if(substitutionNode) {
  substitutionNode.innerHTML = substitution()
}
