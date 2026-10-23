﻿import PageLayout from "@/components/PageLayout";

const SatyaSam = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-primary mb-2">The Satya Sam Award</h1>
      <h2 className="text-base italic text-foreground/80 mb-6">
        An Independent Media Oscar for the Practice and Promotion of Fearless Truth-telling and
        Investigative Reporting
      </h2>

      <div className="bg-[hsl(var(--blockquote-bg))] border border-border rounded p-5 mb-6 text-center">
        <p className="text-base font-semibold text-foreground mb-1">Satya Sam</p>
        <p className="text-sm text-muted-foreground italic">
          Short for Satyagraha Samurai -- those who fight for peace, justice and the planet using
          only the force of the truth
        </p>
      </div>

      <p className="text-base leading-relaxed mb-5">
        The Santa Cruz Media Strategy Summit presented the 2008 Satya Sam Award to{" "}
        <strong>W. David Kubiak</strong>, lead organizer of the conference and a Project Censored
        Award winner. Kubiak was founding executive director of 911truth.org and has spent the
        last 20 years writing, organizing and campaigning to end the curse of corporate rule.
      </p>

      <blockquote className="bg-[hsl(var(--blockquote-bg))] border-l-4 border-[hsl(var(--blockquote-border))] p-4 text-sm italic leading-relaxed">
        <p>
          "Gandhi: 'Satyagraha's root meaning is holding on to truth, hence truth-force"......' thus
          Satyagraha Samurai are heroic non-violent warriors whose only weapon is the truth."
        </p>
      </blockquote>
    </PageLayout>
  );
};

export default SatyaSam;

