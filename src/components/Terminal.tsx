"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { TerminalSquare, X } from "lucide-react";
import { profile, skillGroups, experience, projects, education } from "@/lib/data";

type Line = { id: number; kind: "input" | "output" | "error"; text: string };

const PROMPT = "vishal@portfolio";

const HELP_LINES = [
  "Available commands:",
  "  help                 show this list",
  "  whoami               who am I?",
  "  about                short summary",
  "  skills               list technical skills",
  "  experience           work experience",
  "  projects             list projects",
  "  project <n>          show details for project n",
  "  education            academic background",
  "  contact              contact info",
  "  contact open         jump to the contact form",
  "  resume               download the resume",
  "  theme <dark|light>   switch site theme",
  "  ls                   list sections",
  "  date                 print the current date",
  "  echo <text>          print text back",
  "  clear                clear the screen",
  "  exit                 close the terminal",
];

const BANNER = ["Welcome to Vishal's terminal.", "Type 'help' to see available commands."];

const COMMANDS = [
  "help",
  "whoami",
  "about",
  "skills",
  "experience",
  "projects",
  "project",
  "education",
  "contact",
  "resume",
  "theme",
  "ls",
  "date",
  "echo",
  "clear",
  "exit",
];

function levenshtein(a: string, b: string): number {
  const dp: number[][] = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

function closestCommand(input: string): string | null {
  if (!input) return null;
  let best: string | null = null;
  let bestDistance = Infinity;
  for (const candidate of COMMANDS) {
    const distance = levenshtein(input, candidate);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = candidate;
    }
  }
  if (!best) return null;
  const threshold = Math.max(2, Math.ceil(Math.max(input.length, best.length) * 0.4));
  return bestDistance <= threshold ? best : null;
}

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [pastCommands, setPastCommands] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const idRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const { setTheme } = useTheme();

  function nextId() {
    idRef.current += 1;
    return idRef.current;
  }

  function print(text: string, kind: Line["kind"] = "output") {
    setHistory((h) => [...h, { id: nextId(), kind, text }]);
  }

  function openTerminal() {
    setOpen(true);
    if (history.length === 0) {
      setHistory(BANNER.map((text) => ({ id: nextId(), kind: "output", text })));
    }
  }

  function closeTerminal() {
    setOpen(false);
    launcherRef.current?.focus();
  }

  useEffect(() => {
    function onKeyDown(e: globalThis.KeyboardEvent) {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setOpen((o) => {
          if (!o && history.length === 0) {
            setHistory(BANNER.map((text) => ({ id: nextId(), kind: "output", text })));
          }
          return !o;
        });
        return;
      }
      if (e.key === "Escape" && open) {
        closeTerminal();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, history.length]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  function runCommand(raw: string) {
    const trimmed = raw.trim();
    print(`${PROMPT}:~$ ${trimmed}`, "input");

    if (!trimmed) return;

    const [cmd, ...args] = trimmed.split(/\s+/);
    const arg = args.join(" ").toLowerCase();

    switch (cmd.toLowerCase()) {
      case "help": {
        HELP_LINES.forEach((line) => print(line));
        break;
      }
      case "whoami": {
        print(profile.name);
        print(profile.title);
        print("");
        print(profile.tagline);
        break;
      }
      case "about": {
        print(profile.summary);
        break;
      }
      case "skills": {
        skillGroups.forEach((group) => print(`${group.title}: ${group.skills.join(", ")}`));
        break;
      }
      case "experience": {
        experience.forEach((job) => {
          print(`${job.role} @ ${job.company} (${job.period})`);
          job.points.forEach((point) => print(`  - ${point}`));
        });
        break;
      }
      case "projects": {
        print("Available projects:");
        projects.forEach((p, i) => print(`  ${i + 1}. ${p.name} — ${p.subtitle}`));
        print("Type 'project <number>' for details.");
        break;
      }
      case "project": {
        const n = Number(args[0]);
        const p = projects[n - 1];
        if (!p) {
          print(`No project #${args[0] ?? ""}. Try 'projects' to list them.`, "error");
          break;
        }
        print(`${p.name} — ${p.subtitle}`);
        print(p.description);
        print(`Tags: ${p.tags.join(", ")}`);
        break;
      }
      case "education": {
        education.forEach((edu) => {
          print(edu.degree);
          print(`  ${edu.school} (${edu.period}) — ${edu.grade}`);
        });
        break;
      }
      case "contact": {
        if (arg === "open") {
          print("Jumping to the contact form...");
          closeTerminal();
          window.setTimeout(() => {
            window.location.hash = "contact";
          }, 150);
          break;
        }
        print(`Email: ${profile.email}`);
        print(`Phone: ${profile.phone}`);
        print(`Location: ${profile.location}`);
        print("Type 'contact open' to jump to the contact form.");
        break;
      }
      case "resume": {
        print("Downloading resume...");
        const a = document.createElement("a");
        a.href = profile.resumeUrl;
        a.download = "";
        a.click();
        break;
      }
      case "theme": {
        if (arg === "dark" || arg === "light") {
          setTheme(arg);
          print(`Theme set to ${arg}.`);
        } else {
          print("Usage: theme <dark|light>", "error");
        }
        break;
      }
      case "ls": {
        print("about.md   contact.sh   education.md");
        print("experience/   projects/   skills.json   resume.pdf");
        break;
      }
      case "date": {
        print(new Date().toString());
        break;
      }
      case "echo": {
        print(args.join(" "));
        break;
      }
      case "sudo": {
        print(
          "Permission denied: 'vishal' is not in the sudoers file. This incident will be reported to nobody.",
          "error"
        );
        break;
      }
      case "rm": {
        print("Nice try. This isn't that kind of terminal.", "error");
        break;
      }
      case "clear":
      case "cls": {
        setHistory([]);
        break;
      }
      case "exit":
      case "close": {
        closeTerminal();
        break;
      }
      default: {
        const suggestion = closestCommand(cmd.toLowerCase());
        if (suggestion) {
          print(
            `command not found: ${cmd}. Did you mean '${suggestion}'? Type 'help' for a list of commands.`,
            "error"
          );
        } else {
          print(`command not found: ${cmd}. Type 'help' for a list of commands.`, "error");
        }
      }
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    runCommand(input);
    setPastCommands((p) => [...p, input]);
    setHistoryIndex(null);
    setInput("");
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (pastCommands.length === 0) return;
      const nextIndex = historyIndex === null ? pastCommands.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(pastCommands[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= pastCommands.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(pastCommands[nextIndex]);
      }
    }
  }

  return (
    <>
      <motion.button
        ref={launcherRef}
        type="button"
        onClick={openTerminal}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="glass fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full text-foreground"
        aria-label="Open terminal (Ctrl + `)"
        title="Open terminal (Ctrl + `)"
      >
        <TerminalSquare size={18} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={closeTerminal}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Interactive terminal"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(e) => e.stopPropagation()}
              className="glass flex h-[70vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-2 border-b border-surface-border px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
                <span className="ml-2 font-mono text-xs text-muted">vishal@portfolio: ~</span>
                <button
                  type="button"
                  onClick={closeTerminal}
                  aria-label="Close terminal"
                  className="ml-auto flex h-7 w-7 items-center justify-center rounded-full text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  <X size={14} />
                </button>
              </div>

              <div
                ref={scrollRef}
                onClick={() => inputRef.current?.focus()}
                className="flex-1 overflow-y-auto px-4 py-4 font-mono text-sm"
              >
                {history.map((line) => (
                  <div
                    key={line.id}
                    className={`whitespace-pre-wrap break-words leading-relaxed ${
                      line.kind === "input"
                        ? "text-accent-2"
                        : line.kind === "error"
                          ? "text-red-400"
                          : "text-muted"
                    }`}
                  >
                    {line.text}
                  </div>
                ))}

                <form onSubmit={onSubmit} className="mt-1 flex items-center gap-2">
                  <span className="shrink-0 text-accent-2">{PROMPT}:~$</span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    className="flex-1 bg-transparent text-foreground outline-none"
                    aria-label="Terminal command input"
                  />
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
