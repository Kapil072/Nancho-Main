import PageLayout from "@/components/PageLayout";

const rows = [
  {
    year: "1945",
    event: "Pearl Harbor attack",
    status: "FDR et al's foreknowledge still covered up; no investigations planned",
    ignorant: "90%",
    policyImplication: 'Perceived "surprise" attacks prep anti-war public for war',
    lesson: "Inquiries can be thwarted; corporate media won't challenge; risk level low",
    outrage: "Nil",
  },
  {
    year: "1963",
    event: "JFK murder",
    status: "Congressional conspiracy findings still ignored; no further investigations planned",
    ignorant: "20%",
    policyImplication: "No one working at odds with mili-corps expansion is safe",
    lesson: "Inquiries can be thwarted; corporate media won't challenge; risk level low",
    outrage: "Faint to Nil",
  },
  {
    year: "1967",
    event: "USS Liberty attacks",
    status: "Israel's mass homicide and US lies still covered up; no further investigations planned",
    ignorant: "95%",
    policyImplication: "Likud militarists granted immunity and a free hand",
    lesson: "Inquiries can be thwarted; corporate media won't challenge; risk level low",
    outrage: "Faint to Nil",
  },
  {
    year: "1968",
    event: "MLK murder",
    status: "FBI and state official role still covered up; no further investigations planned",
    ignorant: "90%",
    policyImplication: "No one working at odds with mili-corps expansion is safe",
    lesson: "Inquiries can be thwarted; corporate media won't challenge; risk level low",
    outrage: "Nil",
  },
  {
    year: "1991--3",
    event: "DU deaths escalate",
    status: "Existence/direness of threat still covered up; no further investigations planned",
    ignorant: "90%",
    policyImplication: "Hard science and troop suffering can be silenced/ignored",
    lesson: "Inquiries can be thwarted; corporate media won't challenge; risk level low",
    outrage: "Faint",
  },
  {
    year: "1993",
    event: "Waco inferno",
    status: "Proof of FBI ignition still covered up; no further investigations planned",
    ignorant: "80%",
    policyImplication: "Public will accept state murders if deftly spun/covered",
    lesson: "Inquiries can be thwarted; corporate media won't challenge; risk level low",
    outrage: "Faint to Nil",
  },
  {
    year: "1995",
    event: "OK City bombing",
    status: "Proof of other bombs/actors still covered up; no further investigations planned",
    ignorant: "80%",
    policyImplication: '"Terrorists" bounce police/military budgets & powers',
    lesson: "Inquiries can be thwarted; corporate media won't challenge; risk level low",
    outrage: "Faint to Nil",
  },
  {
    year: "2000",
    event: "Vote fraud -- FL",
    status: "Details of crimes still covered up; no further investigations planned",
    ignorant: "60%",
    policyImplication: "Techy tampering w/ votes, voter lists, etc. getting good",
    lesson: "Inquiries can be thwarted; corporate media won't challenge; risk level low",
    outrage: "Faint to Nil",
  },
  {
    year: "2001",
    event: "9/11 attacks",
    status: "Evidence of US lies, crimes, complicity still covered up; no further investigations planned",
    ignorant: "70%",
    policyImplication: 'Perceived "surprise" attacks prep anti-war public for war',
    lesson: "Inquiries can be thwarted; corporate media won't challenge; risk level low",
    outrage: "Faint",
  },
  {
    year: "2004",
    event: "Vote fraud in OH, FL, NM, etc.",
    status: "Scope of crimes still covered up; no further investigations planned",
    ignorant: "70%",
    policyImplication: "Techy tampering w/ votes, voter lists, etc. nearly perfect",
    lesson: "Inquiries can be thwarted; corporate media won't challenge; risk level low",
    outrage: "Faint",
  },
];

const TreacheryWithoutConsequence = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-primary mb-2">Treachery Without Consequence</h1>
      <h2 className="text-base font-semibold italic text-foreground/80 mb-2">A Scorecard for Our Time</h2>
      <p className="text-sm text-muted-foreground mb-6">(a.k.a. Why Bad Things Keep Getting Worse)</p>

      {/* Mobile: card layout */}
      <div className="block sm:hidden space-y-6">
        {rows.map((row, idx) => (
          <div key={idx} className="border border-border rounded p-4 text-sm space-y-1">
            <div className="font-bold text-primary text-base">
              {row.year} -- {row.event}
            </div>
            <div>
              <span className="font-semibold">Status:</span> {row.status}
            </div>
            <div>
              <span className="font-semibold">% Ignorant:</span> {row.ignorant}
            </div>
            <div>
              <span className="font-semibold">Policy Implications:</span> {row.policyImplication}
            </div>
            <div>
              <span className="font-semibold">Lessons for Leaders:</span> {row.lesson}
            </div>
            <div>
              <span className="font-semibold">Public Outrage / Accountability:</span> {row.outrage}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: full table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-xs border-collapse border border-border">
          <thead>
            <tr className="bg-[hsl(var(--nav-bg))] text-[hsl(var(--nav-text))]">
              <th className="border border-border px-2 py-2 text-left font-bold">Year</th>
              <th className="border border-border px-2 py-2 text-left font-bold">Event</th>
              <th className="border border-border px-2 py-2 text-left font-bold">Current Justice Quotient</th>
              <th className="border border-border px-2 py-2 text-left font-bold">% Ignorant</th>
              <th className="border border-border px-2 py-2 text-left font-bold">Policy Implications</th>
              <th className="border border-border px-2 py-2 text-left font-bold">Lessons for Leaders</th>
              <th className="border border-border px-2 py-2 text-left font-bold">Public Outrage / Accountability</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[hsl(var(--blockquote-bg))]"}>
                <td className="border border-border px-2 py-2 font-semibold whitespace-nowrap">{row.year}</td>
                <td className="border border-border px-2 py-2 font-semibold">{row.event}</td>
                <td className="border border-border px-2 py-2">{row.status}</td>
                <td className="border border-border px-2 py-2 text-center font-semibold">{row.ignorant}</td>
                <td className="border border-border px-2 py-2">{row.policyImplication}</td>
                <td className="border border-border px-2 py-2 text-muted-foreground">{row.lesson}</td>
                <td className="border border-border px-2 py-2 font-semibold text-center">{row.outrage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
};

export default TreacheryWithoutConsequence;
