import { useState } from "react";

// Paste your Web3Forms access key here.
const WEB3FORMS_KEY = "PASTE_YOUR_WEB3FORMS_KEY_HERE";

export default function ContactForm() {
  const [state, setState] = useState({ status: "idle", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    setState({ status: "loading", message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());
    payload.access_key = WEB3FORMS_KEY;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Submission failed.");

      form.reset();
      setState({
        status: "success",
        message: "Message sent. I’ll get back to you soon."
      });
    } catch (err) {
      setState({
        status: "error",
        message: err?.message || "Something went wrong. Please try again."
      });
    }
  }

  return (
    <form className="card form" onSubmit={onSubmit}>
      <div className="grid2">
        <label className="field">
          <span className="fieldLabel">Name</span>
          <input name="name" required placeholder="Your name" autoComplete="name" />
        </label>

        <label className="field">
          <span className="fieldLabel">Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="field">
        <span className="fieldLabel">Subject</span>
        <input name="subject" required placeholder="Internship / Project / Collaboration" />
      </label>

      <label className="field">
        <span className="fieldLabel">Message</span>
        <textarea name="message" required rows={5} placeholder="Write your message..." />
      </label>

      {/* Web3Forms recommended extras */}
      <input type="hidden" name="from_name" value="Portfolio Contact" />
      <input
        type="checkbox"
        name="botcheck"
        className="srOnly"
        tabIndex="-1"
        autoComplete="off"
      />

      <div className="rowBetween mt12">
        <button className="btn btnPrimary" disabled={state.status === "loading"}>
          {state.status === "loading" ? "Sending..." : "Send"}
        </button>

        {state.status !== "idle" ? (
          <p
            className={
              state.status === "success"
                ? "status statusSuccess"
                : state.status === "error"
                  ? "status statusError"
                  : "status"
            }
            role="status"
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

