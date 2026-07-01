"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/data";

const contactInfo = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          index={6}
          label="Contact"
          title="Let's build something great"
          description="Have a role, project, or idea in mind? I'd love to hear from you."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="glass flex h-full flex-col gap-5 rounded-2xl p-6 sm:p-8">
              {contactInfo.map((info) => {
                const content = (
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <info.icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-muted">{info.label}</div>
                      <div className="text-sm font-medium">{info.value}</div>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={info.label} href={info.href} className="transition-opacity hover:opacity-80">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm text-muted" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-surface-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm text-muted" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-surface-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-muted" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-surface-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
              >
                {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
                {sent ? "Opening your email client..." : "Send Message"}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
