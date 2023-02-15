import Link from 'next/link';
import styles from './custom-link.module.css';

/* eslint-disable-next-line */
export interface CustomLinkProps {
  as: string;
  href: string;
}

export function CustomLink({ as, href, ...otherProps }: CustomLinkProps) {
  return (
    <Link legacyBehavior as={as} href={href} >
      <a className="bg-yellow-100" {...otherProps} />
    </Link>
  );
}

export default CustomLink;
