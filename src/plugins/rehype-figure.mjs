import { visit } from "unist-util-visit";

export function rehypeFigure() {
  return (tree) => {
    // Keep track of the number of figures in the article.
    let figureCount = 0;

    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "img" || !parent || typeof index !== "number")
        return;

      figureCount += 1;
      const label = `Figure ${figureCount}`;
      const title = node.properties.title;

      const captionChildren = [
        {
          type: "element",
          tagName: "strong",
          properties: { className: ["figure-label"] },
          children: [{ type: "text", value: label }],
        },
      ];
      if (title) {
        const titleSplit = title.split("|");
        const caption = titleSplit[0].trim();
        node.properties.title = caption;
        captionChildren.push({ type: "text", value: `: ${caption}` });

        if (titleSplit.length > 1) {
          const opts = titleSplit[1];
          const optsDict = Object.fromEntries(
            opts.split(",").map((pair) => pair.split("=").map((s) => s.trim())),
          );

          const style = Object.entries(optsDict)
            .map(([key, value]) => `${key}: ${value}`)
            .join("; ");
          node.properties.style = style;
        }
      }

      parent.children.splice(index, 1, {
        type: "element",
        tagName: "figure",
        properties: {},
        children: [
          node,
          {
            type: "element",
            tagName: "figcaption",
            properties: {},
            children: captionChildren,
          },
        ],
      });
    });
  };
}
