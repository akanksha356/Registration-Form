"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <main className="registration-page">
      <div className="corner-accent corner-accent-top" aria-hidden="true" />
      <div className="corner-accent corner-accent-bottom" aria-hidden="true" />

      <section className="registration-shell" aria-labelledby="registration-title">
        <header className="brand-header">
          <div className="brand-mark" aria-hidden="true">
            <span>Z</span>
          </div>
          <div className="brand-name">ZEMINENT</div>
          <h1 id="registration-title">
            Student <span>Registration Form</span>
          </h1>
          <p className="brand-motto">
            <span>Learn</span>
            <b aria-hidden="true">|</b>
            <span>Build</span>
            <b aria-hidden="true">|</b>
            <span>Grow</span>
          </p>
        </header>

        <form className="registration-card" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="name">
              <UserRound aria-hidden="true" />
              <span>Name:</span>
            </label>
            <input id="name" name="name" type="text" placeholder="Enter your name" required />
          </div>

          <div className="field-group">
            <label htmlFor="email">
              <Mail aria-hidden="true" />
              <span>Email Id:</span>
            </label>
            <input id="email" name="email" type="email" placeholder="Enter your email address" required />
          </div>

          <div className="field-group">
            <label htmlFor="phone">
              <Phone aria-hidden="true" />
              <span>Phone No:</span>
            </label>
            <input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
          </div>

          <div className="field-group education-group">
            <label htmlFor="degree">
              <GraduationCap aria-hidden="true" />
              <span>Higher Education:</span>
            </label>
            <select id="degree" name="degree" defaultValue="" required>
              <option value="" disabled>Select your degree</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="diploma">Diploma</option>
              <option value="other">Other</option>
            </select>
            <input id="grade" name="grade" type="text" placeholder="Enter your grade" required />
          </div>

          <button className="register-button" type="submit">
            {submitted ? "Registered" : "Register"}
            {submitted ? <CheckCircle2 aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
          </button>
          <p className={`form-status${submitted ? " is-visible" : ""}`} role="status" aria-live="polite">
            Thanks for registering. We&apos;ll be in touch soon.
          </p>
        </form>
      </section>
    </main>
  );
}
