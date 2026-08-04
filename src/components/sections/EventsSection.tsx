import { useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Menu, MapPin, Clock } from "lucide-react";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";
import { useEventsStore, isUpcoming, compareByDate, type LabEvent, type EventType } from "@/lib/events";

const TYPE_STYLES: Record<EventType, string> = {
  bootcamp: "bg-orange-50 text-orange-700 border-orange-200",
  meetup: "bg-emerald-50 text-emerald-700 border-emerald-200",
  workshop: "bg-blue-50 text-blue-700 border-blue-200",
  hackathon: "bg-purple-50 text-purple-700 border-purple-200",
};

const TYPE_LABELS: Record<EventType, string> = {
  bootcamp: "Bootcamp",
  meetup: "Meetup",
  workshop: "Workshop",
  hackathon: "Hackathon",
};

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${dateStr}T12:00:00`));
}

function EventCard({ event }: { event: LabEvent }) {
  return (
    <article className="group flex flex-col rounded-3xl border border-soft-border/70 bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:flex-row sm:items-center sm:gap-6">
      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl border border-soft-border bg-background">
        <span className="text-xl font-bold leading-none text-foreground">
          {new Date(`${event.date}T12:00:00`).getDate()}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {new Intl.DateTimeFormat("en", { month: "short" }).format(new Date(`${event.date}T12:00:00`))}
        </span>
      </div>

      <div className="mt-4 flex-1 sm:mt-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${TYPE_STYLES[event.type]}`}>
            {TYPE_LABELS[event.type]}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" /> {event.time}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" /> {event.location}
          </span>
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-foreground">{event.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{event.summary}</p>
      </div>

      <div className="mt-4 shrink-0 sm:mt-0">
        <Link
          to={event.link || "/contact"}
          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary"
        >
          Register <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}

export function EventsSection() {
  const events = useEventsStore((s) => s.events);
  const hydrate = useEventsStore((s) => s.hydrate);
  const [view, setView] = useState<"list" | "month">("list");
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(() => new Date());

  hydrate();

  const today = useMemo(() => new Date(), []);

  const upcoming = useMemo(
    () => events.filter((e) => isUpcoming(e, today)).sort(compareByDate),
    [events, today],
  );

  const dayEvents = useMemo(() => {
    if (!selectedDay) return [];
    const key = `${selectedDay.getFullYear()}-${String(selectedDay.getMonth() + 1).padStart(2, "0")}-${String(
      selectedDay.getDate(),
    ).padStart(2, "0")}`;
    return events.filter((e) => e.date === key).sort(compareByDate);
  }, [events, selectedDay]);

  return (
    <Section id="events" className="bg-surface-elevated/40">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Events & Bootcamps"
          title={
            <>
              Upcoming <span className="text-primary">Classes & Meetups</span>.
            </>
          }
          description="Join IshConnect Academy bootcamps, workshops, meetups, and hackathons in Kigali and online."
        />
        <div className="flex gap-1 rounded-full border border-soft-border/60 bg-surface p-1">
          <button
            onClick={() => setView("list")}
            aria-pressed={view === "list"}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium transition-colors ${
              view === "list" ? "bg-foreground text-background" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            <Menu className="h-3.5 w-3.5" /> List view
          </button>
          <button
            onClick={() => setView("month")}
            aria-pressed={view === "month"}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium transition-colors ${
              view === "month" ? "bg-foreground text-background" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            <Calendar className="h-3.5 w-3.5" /> Month view
          </button>
        </div>
      </div>

      <div className="mt-12">
        {view === "list" ? (
          <div className="space-y-4">
            <Reveal variant="fade-up" duration={550}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Upcoming events
              </h3>
            </Reveal>
            {upcoming.length === 0 ? (
              <Reveal variant="fade-up" duration={550}>
                <p className="rounded-2xl border border-soft-border/60 bg-surface px-5 py-6 text-sm text-muted-foreground">
                  No events scheduled.
                </p>
              </Reveal>
            ) : (
              upcoming.map((event, i) => (
                <Reveal key={event.id} variant="fade-up" delay={i * 60} duration={550}>
                  <EventCard event={event} />
                </Reveal>
              ))
            )}
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal variant="fade-up" duration={550}>
              <div className="rounded-3xl border border-soft-border/70 bg-surface p-5 shadow-soft [&_.rdp]:mx-auto [&_.rdp-button]:rounded-full [&_.rdp-day_selected]:!bg-primary [&_.rdp-day_selected]:!text-primary-foreground [&_.rdp-day_today]:!font-bold">
                <DayPicker
                  mode="single"
                  selected={selectedDay}
                  onSelect={setSelectedDay}
                  defaultMonth={today}
                />
              </div>
            </Reveal>
            <Reveal variant="fade-up" delay={80} duration={550}>
              <div className="flex h-full flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {selectedDay ? formatDate(selectedDay.toISOString().slice(0, 10)) : ""}
                </h3>
                {dayEvents.length === 0 ? (
                  <p className="rounded-2xl border border-soft-border/60 bg-surface px-5 py-6 text-sm text-muted-foreground">
                    No events on this day.
                  </p>
                ) : (
                  dayEvents.map((event) => (
                    <div key={event.id} className="flex items-start gap-3 rounded-2xl border border-soft-border/70 bg-surface p-4">
                      <span className={`mt-0.5 inline-flex shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${TYPE_STYLES[event.type]}`}>
                        {TYPE_LABELS[event.type]}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">{event.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {event.time} · {event.location}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </Section>
  );
}
