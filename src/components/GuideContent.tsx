import Link from "next/link";

/** Renders guide content with support for **bold** and [text](/path) links, plus optional author/updated info. */
export function GuideContent(
  props: Readonly<{
    content: string;
    authorName?: string;
    publishedAt?: string;
    updatedAt?: string;
  }>,
) {
  const { content, authorName, publishedAt, updatedAt } = props;
  const paragraphs = content.split(/\n\n+/).filter(Boolean);
  return (
    <div className="prose prose-slate max-w-none">
      {(authorName || publishedAt || updatedAt) && (
        <div className="mb-4 text-sm text-slate-600">
          {authorName && (
            <span className="mr-4">
              By <span className="font-medium text-teal-700">{authorName}</span>
            </span>
          )}
          {publishedAt && (
            <span className="mr-4">
              Published {new Date(publishedAt).toLocaleDateString()}
            </span>
          )}
          {updatedAt && (
            <span>Updated {new Date(updatedAt).toLocaleDateString()}</span>
          )}
        </div>
      )}
      {paragraphs.map((para, i) => {
        const parts: React.ReactNode[] = [];
        let rest = para;
        let key = 0;
        const linkRe = /\[([^\]]+)\]\(([^)]+)\)/;
        const boldRe = /\*\*([^*]+)\*\*/;
        while (rest.length > 0) {
          const linkMatch = linkRe.exec(rest);
          const boldMatch = boldRe.exec(rest);
          let match: RegExpExecArray | null = null;
          let type: "link" | "bold" = "link";
          let index = rest.length;
          if (linkMatch?.index !== undefined) {
            if (
              boldMatch?.index !== undefined &&
              boldMatch.index < linkMatch.index
            ) {
              match = boldMatch;
              type = "bold";
              index = boldMatch.index;
            } else {
              match = linkMatch;
              index = linkMatch.index;
            }
          } else if (boldMatch?.index !== undefined) {
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
                <Link
                  key={key++}
                  href={match[2]}
                  className="font-medium text-teal-700 hover:underline"
                >
                  {match[1]}
                </Link>,
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
