import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Coldplay Concerts</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Concerts</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add new show</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;