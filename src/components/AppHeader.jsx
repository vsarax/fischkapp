import React, { useState } from 'react';
import Logo from './Logo';
import Counter from './Counter';
import CTAButton from './CTAButton';

import styles from "./AppHeader.module.css";

export const AppHeader = () => {
  const [cardCount, setCardCount] = useState(0);

  const handleIncrementCardCount = () => {
    setCardCount(prevState => prevState + 1);
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Counter text="Cards:" count={cardCount} />
      </div>
      <CTAButton onIncrement={handleIncrementCardCount} />
    </header>
  );
};
