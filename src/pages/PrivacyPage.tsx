export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
        Privacy Policy
      </h1>
      <p className="mb-10 text-sm text-muted-foreground">
        Last updated: January 2026
      </p>

      <div className="space-y-10 text-[15px] leading-relaxed text-muted-foreground">
        <Section title="1. Overview">
          <p>
            LiftedSync is a browser extension that synchronizes video playback
            across streaming platforms so you can watch together with friends in
            real time. This policy explains what data is involved and how it is
            handled.
          </p>
        </Section>

        <Section title="2. Data We Collect">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong className="text-foreground">Username</strong> — a
              display name you choose, stored only in your browser's local
              storage.
            </li>
            <li>
              <strong className="text-foreground">Playback state</strong> —
              play/pause status, current timestamp, and playback rate of the
              video you are watching.
            </li>
            <li>
              <strong className="text-foreground">Room participation</strong> —
              which room code you have joined.
            </li>
          </ul>
        </Section>

        <Section title="3. How Data Is Transmitted">
          <p>
            Playback state and room information are transmitted over a secure
            WebSocket connection (<code className="text-foreground">wss://</code>
            ) to the LiftedSync relay server. Data is only sent while you are
            actively connected to a room.
          </p>
        </Section>

        <Section title="4. Data Storage">
          <p>
            The relay server does not persist any data to disk. Rooms exist only
            in memory (RAM) and are discarded as soon as the last participant
            leaves. There is no database, no stored logs of user activity, and no
            long-term storage of any kind.
          </p>
        </Section>

        <Section title="5. Analytics & Tracking">
          <p>
            LiftedSync does not use any analytics services, tracking pixels, or
            telemetry. No usage data is collected or sent to third parties.
          </p>
        </Section>

        <Section title="6. Cookies">
          <p>
            LiftedSync does not set any cookies. Your username preference is
            stored in your browser's local storage.
          </p>
        </Section>

        <Section title="7. Third-Party Sharing">
          <p>
            No data is shared with, sold to, or disclosed to any third party.
          </p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>
            If this policy is updated, the changes will be reflected on this
            page with an updated date. Continued use of LiftedSync after
            changes constitutes acceptance of the revised policy.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>
            Questions or concerns? Open an issue on{" "}
            <a
              href="https://github.com/orgs/LiftedSync/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}
