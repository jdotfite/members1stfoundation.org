import Link from 'next/link';

export default function MainMenuLink({ url, label, active, callbackOnClick, className }) {
  return (
    <li className="nav-item" onClick={callbackOnClick}>
      <Link href={`/${url}`} legacyBehavior>
        <a className={`${className} page-scroll ${active ? 'active' : ''}`}>{label}</a>
      </Link>
    </li>
  );
}
