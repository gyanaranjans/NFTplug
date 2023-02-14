export default function Vector(props: VectorProps) {
  return (
    <div className="inset-0 absolute">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 9 18 C 13.971 18 18 13.971 18 9 C 18 4.029 13.971 0 9 0 C 4.029 0 0 4.029 0 9 C 0 13.971 4.029 18 9 18 Z"
          fill="#FFBF0B"
         />
      </svg>
    </div>
  );
}

Vector.defaultProps = {};

interface VectorProps {}

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
