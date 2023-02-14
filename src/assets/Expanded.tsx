export default function Expanded(props: ExpandedProps) {
  return (
    <div className="w-6 h-6 left-0 top-0 absolute">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 24 24 H 5.5 V 23 H 23 V 5.5 H 24 V 24 Z"
          fill="#DAAEA8"
         />
        <path
          d="M 22 22 H 2.5 V 21 H 21 V 2.5 H 22 V 22 Z"
          fill="#DAAEA8"
         />
        <path
          d="M 19 1 V 19 H 1 V 1 H 19 Z M 20 0 H 0 V 20 H 20 V 0 Z"
          fill="#DAAEA8"
         />
        <path
          d="M 4.929 15.758 L 4.071 15.243 L 7.071 10.243 C 7.155 10.105 7.3 10.014 7.461 10.002 C 7.625 9.988 7.781 10.056 7.884 10.181 L 9.955 12.666 L 13.584 7.223 C 13.688 7.067 13.871 6.983 14.057 7.004 C 14.243 7.025 14.402 7.149 14.468 7.325 L 17.468 15.325 L 16.531 15.676 L 13.874 8.59 L 10.416 13.778 C 10.328 13.909 10.184 13.991 10.026 14 C 9.869 14.006 9.716 13.942 9.616 13.821 L 7.566 11.362 L 4.929 15.758 Z"
          fill="#DAAEA8"
         />
        <path
          d="M 6 7 C 4.897 7 4 6.103 4 5 C 4 3.897 4.897 3 6 3 C 7.103 3 8 3.897 8 5 C 8 6.103 7.103 7 6 7 Z M 6 4 C 5.449 4 5 4.449 5 5 C 5 5.552 5.449 6 6 6 C 6.552 6 7 5.552 7 5 C 7 4.449 6.552 4 6 4 Z"
          fill="#DAAEA8"
         />
        <path d="M 20 15 H 0 V 16 H 20 V 15 Z" fill="#DAAEA8" />
      </svg>
    </div>
  );
}

Expanded.defaultProps = {};

interface ExpandedProps {}

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
