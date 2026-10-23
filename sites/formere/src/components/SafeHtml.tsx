import React from "react";

export const preprocessHtml = (htmlContent: string): string => {
  const base = import.meta.env.BASE_URL;
  let processed = htmlContent
    .replace(/(src|href)=["']?\.\.\/bulls\/([^"'>\s]+)["']?/gi, `$1="${base}bulls/$2"`)
    .replace(/(src|href)=["']?\.\.\/graph\/([^"'>\s]+)["']?/gi, `$1="${base}graph/$2"`)
    .replace(/(src|href)=["']?\.\.\/barks\/([^"'>\s]+)["']?/gi, `$1="${base}barks/$2"`)
    .replace(/(src|href)=["']?\/bulls\/([^"'>\s]+)["']?/gi, `$1="${base}bulls/$2"`)
    .replace(/(src|href)=["']?\/graph\/([^"'>\s]+)["']?/gi, `$1="${base}graph/$2"`)
    .replace(/(src|href)=["']?\/barks\/([^"'>\s]+)["']?/gi, `$1="${base}barks/$2"`)
    .replace(/(src|href)=["']?bulls\/([^"'>\s]+)["']?/gi, `$1="${base}bulls/$2"`)
    .replace(/(src|href)=["']?graph\/([^"'>\s]+)["']?/gi, `$1="${base}graph/$2"`)
    .replace(/(src|href)=["']?barks\/([^"'>\s]+)["']?/gi, `$1="${base}barks/$2"`)
    .replace(/href=["']?(?:index|fmission|fdlorg|fdlinits|fdlpaper|fdllinks|fdlalert)\.html["']/gi, (match) => {
      const page = match.slice(6, -6);
      return `href="${base}${page === 'index' ? '' : page}"`;
    });

  // Center all contact/address signature blocks dynamically at the bottom of the page
  processed = processed.replace(
    /(?:<center>)?\s*((?:<font[^>]*>)?\s*<a[^>]*mailto:[^>]*>[\s\S]*?Contact FDLAP[\s\S]*?Pagework by Nancho East[\s\S]*?)(?:<\/center>)?\s*$/gi,
    (match, signature) => {
      const centeredSignature = signature.replace(/align=["']?left["']?/gi, 'align="center"');
      return `<center>${centeredSignature}</center>`;
    }
  );

  return processed;
};

export const SafeHtml = ({ html, className }: { html: string; className?: string }) => {
  const processed = preprocessHtml(html);
  return <div dangerouslySetInnerHTML={{ __html: processed }} className={className} />;
};
