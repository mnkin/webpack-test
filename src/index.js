import x from "./x.js";
import png from "./assets/1.png";

const div = document.getElementById("app1");
div.innerHTML = `
    <img src="${png}">
`;

const btn = document.createElement("button");
btn.innerText = "懒加载";
btn.onclick = () => {
  const promise = import("./lazy");
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {}
  );
};
div.appendChild(btn);
