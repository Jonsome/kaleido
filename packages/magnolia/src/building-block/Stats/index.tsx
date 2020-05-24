import React from 'react';

import EyeIcon from 'react-icons/fa';
import ForkIcon from 'react-icons/go';
import LikeHeart from 'react-icons/go';
import Stat from './Stat';

import { Stats } from './elements';

type StatsComponentProps = {
  viewCount: number;
  likeCount: number;
  forkCount: number;
  vertical?: boolean;
  text?: boolean;
  style?: React.CSSProperties;
};

function StatsComponent({
  viewCount,
  likeCount,
  forkCount,
  vertical = false,
  text = false,
  style,
  ...props
}: StatsComponentProps) {
  return (
    <Stats vertical={vertical} {...props}>
      <Stat
        text={text ? 'views' : undefined}
        textOne={text ? 'view' : undefined}
        vertical={vertical}
        Icon={<EyeIcon />}
        count={viewCount}
      />
      <Stat
        text={text ? 'likes' : undefined}
        textOne={text ? 'like' : undefined}
        vertical={vertical}
        Icon={<LikeHeart />}
        count={likeCount}
      />
      <Stat
        text={text ? 'forks' : undefined}
        textOne={text ? 'fork' : undefined}
        vertical={vertical}
        Icon={<ForkIcon />}
        count={forkCount}
      />
    </Stats>
  );
}

export default StatsComponent;
