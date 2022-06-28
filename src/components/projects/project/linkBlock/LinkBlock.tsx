import React from 'react';
import s from './LinkBlock.module.scss'

type LinkBlockType = {
  gitHubUrl: string | undefined
  projectLinkUrl: string | undefined
}

export const LinkBlock: React.FC<LinkBlockType> = ({gitHubUrl, projectLinkUrl}) => {
  return (
    <div className={s.linkBlock}>
      <a href={gitHubUrl} target="_blank">
        <img src='/CV/img/github_2.png' alt='github'/>
      </a>
      <a href={projectLinkUrl} target="_blank">
        <img src='/CV/img/link_2.png' alt='link'/>
      </a>
    </div>
  );
};
