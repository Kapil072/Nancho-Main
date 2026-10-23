import PageLayout from "@/components/PageLayout";

const banners = [
  {
    size: "150 pixels",
    width: 150,
    height: 64,
    src: "/images/logos/scmediaconbanner150.jpg",
    code: `<a href="http://www.truthemergency.us/" target="_blank"><img src="http://truthemergency.us/images/logos/scmediaconbanner150.jpg" alt="SC truthemergency.us link" hspace="1" height="64" width="150" /></a>`,
  },
  {
    size: "180 pixels",
    width: 180,
    height: 48,
    src: "/images/logos/scmediaconbanner180.gif",
    code: `<a href="http://www.truthemergency.us/" target="_blank"><img src="http://truthemergency.us/images/logos/scmediaconbanner180.gif" alt="SC truthemergency.us link" hspace="1" height="48" width="180" /></a>`,
  },
  {
    size: "200 pixels",
    width: 200,
    height: 54,
    src: "/images/logos/scmediaconbanner200.gif",
    code: `<a href="http://www.truthemergency.us/" target="_blank"><img src="http://truthemergency.us/images/logos/scmediaconbanner200.gif" alt="SC truthemergency.us link" hspace="1" height="54" width="200" /></a>`,
  },
  {
    size: "300 pixels",
    width: 300,
    height: 81,
    src: "/images/logos/scmediaconbanner300.gif",
    code: `<a href="http://www.truthemergency.us/" target="_blank"><img src="http://truthemergency.us/images/logos/scmediaconbanner300.gif" alt="SC truthemergency.us link" hspace="1" height="81" width="300" /></a>`,
  },
];

const LinkBanners = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-primary mb-4">Link Banners</h1>
      <p className="text-base text-foreground/90 mb-8">
        If your website services a media-oriented community, please link to us to help spread the encouraging word.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-border text-sm">
          <thead>
            <tr className="bg-[hsl(var(--nav-bg))] text-[hsl(var(--nav-text))]">
              <th className="border border-border px-4 py-2 text-left font-bold">Banner Graphic</th>
              <th className="border border-border px-4 py-2 text-left font-bold">Size</th>
              <th className="border border-border px-4 py-2 text-left font-bold">
                Link Code Snippet -- just copy and paste for desired banner size
              </th>
            </tr>
          </thead>
          <tbody>
            {banners.map((b, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[hsl(var(--blockquote-bg))]"}>
                <td className="border border-border px-4 py-3">
                  <img
                    src={b.src}
                    alt={`Truth Emergency banner ${b.size}`}
                    width={b.width}
                    height={b.height}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </td>
                <td className="border border-border px-4 py-3 whitespace-nowrap font-semibold">{b.size}</td>
                <td className="border border-border px-4 py-3">
                  <code className="block bg-gray-100 border border-gray-200 rounded p-2 text-xs font-mono break-all select-all">
                    {b.code}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
};

export default LinkBanners;
