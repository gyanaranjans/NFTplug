export default function Page2(props: Page2Props) {
  return (
    <div className="w-4 h-4 left-0 top-0 absolute">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 4.72 6.48 L 3.6 7.6 L 7.2 11.2 L 15.2 3.2 L 14.08 2.08 L 7.2 8.96 L 4.72 6.48 Z M 14.4 8 C 14.4 11.52 11.52 14.4 8 14.4 C 4.48 14.4 1.6 11.52 1.6 8 C 1.6 4.48 4.48 1.6 8 1.6 C 8.64 1.6 9.2 1.68 9.76 1.84 L 11.04 0.56 C 10.08 0.24 9.04 0 8 0 C 3.6 0 0 3.6 0 8 C 0 12.4 3.6 16 8 16 C 12.4 16 16 12.4 16 8 H 14.4 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

Page2.defaultProps = {};

interface Page2Props {}

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
