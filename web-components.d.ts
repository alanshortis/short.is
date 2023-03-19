/** What's this?
 *
 * TS gets upset with web components as it can't see these elements
 * in HTML and thinks we're making stuff up. Listing web components
 * here stops the complier from being quite so *dramatic*.
 */

type Wc = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
declare namespace JSX {
  interface IntrinsicElements {
    'scheme-toggle': Wc;
  }
}
