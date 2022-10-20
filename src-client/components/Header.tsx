import * as React from 'react';
import axios from 'axios';

interface HeaderProps { title: string }

export function Header(props: HeaderProps) {

  return (
    <h1>{props.title}</h1>
  );
}
