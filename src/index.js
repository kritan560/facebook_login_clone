const id_fb_logo = document.getElementById("id_fb_logo");
const id_body = document.getElementById("id_body");
const id_below_fb_logo = document.getElementById("id_below_fb_logo");
const id_input_buttons = document.getElementById("id_input_buttons");
const id_input_buttons_2 = document.getElementById("id_input_buttons_2");
const id_p = document.getElementById("id_p");
const id_p2 = document.getElementById("id_p2");
const id_span = document.getElementById("id_span");
const id_input_buttons_start = document.getElementById(
    "id_input_buttons_start"
);

id_fb_logo.addEventListener("click", () => {
    id_body.classList.toggle("bg-slate-800");
    id_below_fb_logo.classList.toggle("text-[#dadada]");
    id_input_buttons.classList.toggle("bg-slate-700");
    id_input_buttons_2.classList.toggle("bg-slate-700");
    id_input_buttons.classList.toggle("bg-white");
    id_input_buttons_2.classList.toggle("bg-white");
    id_p.classList.toggle("text-[#59a1ff]");
    id_p2.classList.toggle("text-white");
    id_span.classList.toggle("text-white");
    id_span.classList.toggle("text-zinc-800");
    id_input_buttons_start.classList.toggle("bg-gray-700");
    id_input_buttons_start.classList.toggle("bg-white");
});
