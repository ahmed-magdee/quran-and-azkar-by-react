import { useState } from "react";
import { classes } from "../../data/styles";
import emailjs from "@emailjs/browser";

// initialState
const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function Form() {
  // useState
  const [form, setForm] = useState(initialState);
  const [send, setSend] = useState(false);

  // handleChange
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // submitHandle
  const submitHandle = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.name !== "" && form.message !== "" && form.email !== "") {
      setSend(true);
      emailjs
        .send(
          "service_rescg0l",
          "template_r8enati",
          {
            from_name: form.name,
            to_name: "Ahmed",
            from_email: form.email,
            to_email: "am247249@gmail.com",
            message: form.message,
          },
          "W0zUy-XYg9x_ktpb3"
        )
        .then(
          function () {
            alert("تم إرسال رسالتك بشكل صحيح !");
            setSend(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          function () {
            alert("حدث مشكلة حاول في وقت لاحق");
            setSend(false);
          }
        );
    }
  };

  // Return
  return (
    <div className="w-full md:w-[calc(50%-20px)]">
      <form
        className="bg-white/50 p-3 rounded-xl backdrop-blur-md"
        onSubmit={submitHandle}
      >
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="name" className="text-green-header">
            الإسم:
          </label>
          <input
            className={classes.input}
            type="text"
            id="name"
            name="name"
            autoComplete="true"
            required
            placeholder="أكتب إسمك:"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email" className="text-green-header">
            إيميلك:
          </label>
          <input
            className={classes.input}
            type="email"
            id="email"
            name="email"
            autoComplete="true"
            required
            placeholder="أكتب إيميلك"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="message" className="text-green-header">
            رسالتك:
          </label>
          <textarea
            className={classes.textarea}
            name="message"
            id="message"
            required
            placeholder="أكتب رسالتك"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className={`${classes.submit} ${send && "pointer-events-none"}`}
          type="submit"
        >
          {send ? "يتم إرسال رسالتك" : "أرسل رسالتك"}
        </button>
      </form>
    </div>
  );
}
