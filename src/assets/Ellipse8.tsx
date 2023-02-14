export default function Ellipse8(props: Ellipse8Props) {
  return (
    <div className="w-3.5 h-3">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="7.16668"
          cy="6"
          rx="6.23333"
          ry="6"
          fill="#FF1F00"
         />
      </svg>
    </div>
  );
}

Ellipse8.defaultProps = {};

interface Ellipse8Props {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
