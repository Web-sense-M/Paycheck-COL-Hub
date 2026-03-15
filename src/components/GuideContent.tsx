import Link from "next/link";

/** Renders guide content with support for **bold** and [text](/path) links. */
export function GuideContent({ content }: { content: string }) {
  const paragraphs = content.split(/\n\n+/).filter(Boolean);
  return (
    <div className="prose prose-slate max-w-none">
      {paragraphs.map((para, i) => {
        const parts: React.ReactNode[] = [];
        let rest = para;
        let key = 0;
        while (rest.length > 0) {
          const linkMatch = rest.match(/\[([^\]]+)\]\(([^)]+)\)/);
          const boldMatch = rest.match(/\*\*([^*]+)\*\*/);
          let match: RegExpMatchArray | null = null;
          let type: "link" | "bold" = "link";
          let index = rest.length;
          if (linkMatch && linkMatch.index !== undefined) {
            if (boldMatch && boldMatch.index !== undefined && boldMatch.index < linkMatch.index) {
              match = boldMatch;
              type = "bold";
              index = boldMatch.index;
            } else {
              match = linkMatch;
              index = linkMatch.index;
            }
          } else if (boldMatch && boldMatch.index !== undefined) {
            match = boldMatch;
            type = "bold";
            index = boldMatch.index;
          }
          if (match && index < rest.length) {
            if (index > 0) {
              parts.push(<span key={key++}>{rest.slice(0, index)}</span>);
            }
            if (type === "link") {
              parts.push(
                <Link key={key++} href={match[2]} className="font-medium text-teal-700 hover:underline">
                  {match[1]}
                </Link>
              );
              rest = rest.slice(index + match[0].length);
            } else {
              parts.push(<strong key={key++}>{match[1]}</strong>);
              rest = rest.slice(index + match[0].length);
            }
          } else {
            parts.push(<span key={key++}>{rest}</span>);
            break;
          }
        }
        return (
          <p key={i} className="text-slate-600">
            {parts}
          </p>
        );
      })}
    </div>
  );
}
