interface SectionHeaderProps {
  lines: string[];
  id?: string;
}

const SectionHeader = ({ lines, id }: SectionHeaderProps) => (
  <div id={id} className="my-8">
    <hr className="my-4 border-t border-muted-foreground/30 w-1/2 mx-auto" />
    {lines.map((line, i) => (
      <p key={i} className="text-center font-bold text-lg">
        {line}
      </p>
    ))}
    <hr className="my-4 border-t border-muted-foreground/30 w-1/2 mx-auto" />
  </div>
);

export default SectionHeader;
