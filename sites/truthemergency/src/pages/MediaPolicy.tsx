import PageLayout from "@/components/PageLayout";

const MediaPolicy = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-primary mb-6">Media Policy</h1>

      <h2 className="font-bold text-base uppercase tracking-wide mb-4">MEDIA EMPOWERMENT POLICY</h2>

      <p className="text-base leading-relaxed mb-5">
        All registered media may tape the Friday, Saturday and Sunday briefing and strategy sessions, except those
        designated otherwise by the presenters or activists as not open for taping. The introductory presentations on
        Saturday morning will be recorded only by Conference Recording Services and copies will be available for
        purchase from them at the site Sunday afternoon. Other cameras and recording devices will be allowed during
        these and all sessions but we only have 3 audio feeds per room so make your claim early.
      </p>

      <p className="text-base leading-relaxed mb-5">
        Press/Media passes will be included in the price of registration. In order to receive these passes, participants
        will be required to register as such with the conference organizing committee (at the registration desk) and
        sign an agreement acknowledging acceptance of this Media Policy. Passes must be worn at all times during the
        conference.
      </p>

      <p className="text-base leading-relaxed mb-5">
        We strongly encourage anyone interested in being the media to record these sessions. Participate in making the
        message! To the extent possible, we will facilitate the distribution of video and audio at the event. We ask
        media pass holders to share their footage, and/or subsequent productions using footage from conference events
        with us, and we will select submissions for inclusion on the conference multimedia page.
      </p>

      <div className="bg-[hsl(var(--blockquote-bg))] border border-border rounded p-5 mb-5">
        <p className="font-bold text-sm mb-3">
          The conference sponsors retain the copyright to any audio and video recorded during the conference*, as
          licensed under the following conditions:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/90">
          <li>To copy, distribute, display, and perform the work</li>
          <li>To make derivative works</li>
          <li>To make commercial use of the work</li>
        </ul>
      </div>

      <h3 className="font-bold text-sm mb-2">Under the following conditions:</h3>
      <p className="text-sm leading-relaxed mb-3">
        <strong>Attribution.</strong> You must attribute the work in the manner specified by the author or licensor, as
        follows:
      </p>
      <div className="bg-[hsl(var(--blockquote-bg))] border-l-4 border-[hsl(var(--blockquote-border))] p-4 mb-4 text-sm">
        <p className="mb-2">
          <strong>Video opening screen must contain:</strong> Conference banner as provided by organizers, with the
          following wording: "Sponsored by Project Censored, 911truth.org and bethemedia.org"
        </p>
        <p>
          <strong>Audio introduction must contain:</strong> "Recorded at 'Publicizing Truth with Consequence' -- An
          Independent Media Strategy Summit sponsored by Project Censored, 911truth.org and bethemedia.org, held in
          Santa Cruz, CA, January 25~27, 2008"
        </p>
      </div>
      <p className="text-sm text-muted-foreground">
        For any reuse or distribution, you must make clear to others the license terms of this work. Any of these
        conditions can be waived if you get permission from the copyright holder.
      </p>
    </PageLayout>
  );
};

export default MediaPolicy;
