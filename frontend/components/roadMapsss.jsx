export default function ProductRoadmap() {
  return (
    <section className="my-5 px-6 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text)]">
        Product Roadmap
      </h2>

      <div className="max-w-5xl mx-auto space-y-12">

        {/* NOW */}
        <div className="flex gap-6 items-start">
          <div className="w-3 h-3 mt-2 rounded-full bg-[var(--color-accent)]"></div>
          <div className="bg-[var(--color-surface)] p-6 rounded-2xl shadow w-full">
            <h3 className="text-xl font-semibold text-[var(--color-text)]">
              NOW — Companion First
            </h3>
            <ul className="mt-4 space-y-2 text-[var(--color-muted)]">
              <li>• Voice-first mobile app</li>
              <li>• Memory-driven reminders</li>
              <li>• Family dashboard</li>
            </ul>
          </div>
        </div>

        {/* NEXT */}
        <div className="flex gap-6 items-start">
          <div className="w-3 h-3 mt-2 rounded-full bg-[var(--color-accent)]"></div>
          <div className="bg-[var(--color-surface)] p-6 rounded-2xl shadow w-full">
            <h3 className="text-xl font-semibold text-[var(--color-text)]">
              NEXT — Health & Safety
            </h3>
            <ul className="mt-4 space-y-2 text-[var(--color-muted)]">
              <li>• Wearables integration</li>
              <li>• Passive health signals</li>
              <li>• Calm escalation (no alarms)</li>
            </ul>
          </div>
        </div>

        {/* LATER */}
        <div className="flex gap-6 items-start">
          <div className="w-3 h-3 mt-2 rounded-full bg-[var(--color-accent)]"></div>
          <div className="bg-[var(--color-surface)] p-6 rounded-2xl shadow w-full">
            <h3 className="text-xl font-semibold text-[var(--color-text)]">
              LATER — Elder Care Ecosystem
            </h3>
            <ul className="mt-4 space-y-2 text-[var(--color-muted)]">
              <li>• Doctors & hospitals</li>
              <li>• Care services</li>
              <li>• Diagnostics & transport</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
