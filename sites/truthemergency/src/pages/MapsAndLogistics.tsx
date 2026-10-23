import PageLayout from "@/components/PageLayout";

const MapsAndLogistics = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-primary mb-6">Maps &amp; Logistics</h1>

      <section className="mb-8">
        <h2 className="font-bold text-base uppercase tracking-wide border-b border-border pb-2 mb-4">
          Ride / Room Sharing
        </h2>
        <p className="text-base leading-relaxed mb-3">
          For those wanting to share rides to and/or rooms in Santa Cruz, we've set up a self-organizing forum at Google
          Groups:{" "}
          <a
            href="http://groups.google.com/group/mediasummit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--link-color))] hover:underline"
          >
            http://groups.google.com/group/mediasummit
          </a>
          . Please post your needs there and try to find partners.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-base uppercase tracking-wide border-b border-border pb-2 mb-4">
          Conference Venue
        </h2>
        <div className="text-base leading-relaxed space-y-1">
          <p className="font-semibold">University Inn &amp; Conference Center</p>
          <p>611 Ocean Street, Santa Cruz, CA 95060</p>
          <p>Phone: 831-426-7100</p>
          <p>Toll Free: 1-866-827-2466</p>
          <p>Fax: 831-429-1044</p>
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          For room reservations, contact the University Inn directly and mention the "Publicizing Truths with
          Consequence" conference.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-base uppercase tracking-wide border-b border-border pb-2 mb-4">
          Other Recommended Hotels
        </h2>
        <div className="space-y-4 text-sm leading-relaxed">
          <div>
            <p className="font-semibold">Travel Lodge Santa Cruz Riviera</p>
            <p>619 Riverside Avenue, Broadway &amp; Riverside, Santa Cruz, CA 95060</p>
            <p>Phone: 831-423-9515 &nbsp;|&nbsp; Fax: 831-423-1159</p>
          </div>
          <div>
            <p className="font-semibold">Continental Inn</p>
            <p>414 Ocean Street, Santa Cruz, California 95060</p>
            <p>Hotel: 831-429-1221 &nbsp;|&nbsp; Fax: 831-426-8561</p>
            <p>Reservations: 800-343-6941</p>
          </div>
          <div>
            <p className="font-semibold">Santa Cruz Hostel: Carmalita Cottages</p>
            <p>321 Main St., Santa Cruz, CA 95060</p>
            <p>Phone: 1-831-423-8304 / 1-888-GO-HI-USA</p>
            <p>Group Reservations: 1-831-429-8541</p>
            <p>
              Email:{" "}
              <a href="mailto:info@hi-santacruz.org" className="text-[hsl(var(--link-color))] hover:underline">
                info@hi-santacruz.org
              </a>
            </p>
          </div>
          <div>
            <p className="font-semibold">Ocean Pacific Lodge</p>
            <p>301 Pacific Ave, Santa Cruz, CA 95060</p>
            <p>Phone: (831) 457-1234</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-base uppercase tracking-wide border-b border-border pb-2 mb-4">Transportation</h2>
        <p className="text-sm text-muted-foreground mb-4">
          San Jose Airport a†" UCSC University Inn &amp; Conference Center
        </p>
        <div className="space-y-4 text-sm leading-relaxed">
          <div>
            <p className="font-semibold">Earlybird Airport Shuttle</p>
            <p>Charges by trip, not per person -- $73 for up to 3 passengers, $10 per extra passenger</p>
            <p>Phone: (831) 462-3933 &nbsp;|&nbsp; Fax: (831) 462-6946</p>
            <p>
              <a href="mailto:Earlybirdshuttle@aol.com" className="text-[hsl(var(--link-color))] hover:underline">
                Earlybirdshuttle@aol.com
              </a>
            </p>
          </div>
          <div>
            <p className="font-semibold">Santa Cruz Airporter</p>
            <p>9-passenger van, every 90 min from 9:00 AM to 9:00 PM -- $40/person</p>
            <p>Phone: (831) 475-0234</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-bold text-base uppercase tracking-wide border-b border-border pb-2 mb-4">General Info</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="bg-[hsl(var(--blockquote-bg))] rounded p-4 space-y-1">
            <p>
              <span className="font-semibold">Dates:</span> January 25--27, 2008
            </p>
            <p>
              <span className="font-semibold">Location:</span> UCSC Inn &amp; Conference Center
            </p>
            <p>
              <span className="font-semibold">Registration:</span> $50 / Students $30
            </p>
            <p>
              <span className="font-semibold">Single room:</span> $90/night
            </p>
            <p>
              <span className="font-semibold">Double:</span> $45/night
            </p>
            <p>
              <span className="font-semibold">Triple:</span> $30/night (+ 10% tax)
            </p>
          </div>
          <div className="bg-[hsl(var(--blockquote-bg))] rounded p-4 space-y-1">
            <p>
              <span className="font-semibold">Website:</span>{" "}
              <a
                href="https://truthemergency.us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--link-color))] hover:underline"
              >
                www.truthemergency.us
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:janice@911truth.org" className="text-[hsl(var(--link-color))] hover:underline">
                janice@911truth.org
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> 785-597-5729
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-base uppercase tracking-wide border-b border-border pb-2 mb-4">
          About Santa Cruz
        </h2>
        <p className="text-sm leading-relaxed text-foreground/90">
          Santa Cruz is located on California's Monterey Bay -- 75 miles south of San Francisco, 45 miles north of
          Monterey and Carmel, and just over the coastal mountains from Silicon Valley and the San Jose International
          Airport.
        </p>
      </section>
    </PageLayout>
  );
};

export default MapsAndLogistics;
